#!/usr/bin/env python3
"""Local server for this template's clone. Serves ./public with the correct
JavaScript MIME type for .mjs modules so the site's runtime (and every image and
animation it renders) loads in the browser. Double-click "Open Site" instead of
opening index.html directly.

Extras over a plain static server:
  - URLs with a query string map to the file saved as  name__<sha1(query)[:8]>.ext
  - extensionless files get their recorded Content-Type from public/_types.json
  - unknown extensionless paths fall back to /index.html (client-side routers)

Usage: python3 _serve.py [--port N] [--no-browser]"""
import os, re, sys, socket, threading, webbrowser, functools, http.server, hashlib, json
from urllib.parse import urlsplit, unquote

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "public")
if not os.path.isfile(os.path.join(ROOT, "index.html")):
    ROOT = os.path.join(HERE, "site")
if not os.path.isfile(os.path.join(ROOT, "index.html")):
    print("No clone found (expected a public/ or site/ folder next to this file).")
    input("Press Return to close.")
    sys.exit(1)

try:
    TYPES = json.load(open(os.path.join(ROOT, "_types.json"), encoding="utf-8"))
except Exception:
    TYPES = {}


def clean(seg):
    """Same rule as lib/mirror.mjs clean(): unsafe characters -> _, long segments shortened + hashed."""
    c = re.sub(r'[<>:"|?*\\\x00-\x1f]', "_", seg)
    c = "_" if re.fullmatch(r"\.+", c) else c
    return c[:40] + "__" + hashlib.sha1(c.encode("utf-8")).hexdigest()[:8] if len(c.encode("utf-8")) > 180 else c


def query_variant(path, query):
    """Same naming rule the scraper uses: stem__hash8.ext"""
    h = hashlib.sha1(query.encode("utf-8")).hexdigest()[:8]
    head, tail = os.path.split(path)
    stem, ext = os.path.splitext(tail)
    return os.path.join(head, "%s__%s%s" % (stem, h, ext))


class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def resolve(self, path):
        """The saved file for a request path (with query), or None."""
        parts = urlsplit(path)
        raw = [x for x in unquote(parts.path).split("/") if x and not re.fullmatch(r"\.+", x)]
        # page folders are saved under the route as-is; assets under clean()ed names
        page = os.path.join(ROOT, *raw, "index.html")
        if raw and os.path.isfile(page):
            return page
        segs = [clean(x) for x in unquote(parts.path).split("/") if x]
        base = os.path.join(ROOT, *segs)
        if parts.path.endswith("/") and parts.path != "/":
            base_idx = os.path.join(base, "__index")      # a non-page resource saved for "/dir/"
        else:
            base_idx = None
        if parts.query:
            for b in filter(None, (base_idx, base)):
                v = query_variant(b, unquote(parts.query))
                if os.path.isfile(v):
                    return v
        if base_idx and os.path.isfile(base_idx):
            return base_idx
        if os.path.isdir(base) and os.path.isfile(os.path.join(base, "index.html")):
            # serve /about from about/index.html directly: no 301 to /about/, which would change the page's base URL
            return os.path.join(base, "index.html")
        if os.path.exists(base):
            return base
        return None

    def translate_path(self, path):
        hit = self.resolve(path)
        if hit:
            return hit
        parts = urlsplit(path)
        # a saved third-party document (e.g. /_ext/www.youtube.com/embed/x) asks for its own root-relative files (/s/player/...):
        # look for them under that document's host
        ref = urlsplit(self.headers.get("Referer", "") or "").path
        m = re.match(r"^/_ext/([^/]+)/", ref)
        if m and not parts.path.startswith("/_ext/"):
            hit = self.resolve("/_ext/%s%s%s" % (m.group(1), parts.path, "?" + parts.query if parts.query else ""))
            if hit:
                return hit
        # SPA fallback: an extensionless page route that was never captured. Never for a script / style / image request
        # or a third-party path: answering those with index.html makes the browser parse HTML as JavaScript.
        dest = self.headers.get("Sec-Fetch-Dest", "document")
        if not os.path.splitext(parts.path)[1] and not parts.path.startswith("/_ext/") and dest in ("document", "iframe", "frame", "empty"):
            return os.path.join(ROOT, "index.html")
        return os.path.join(ROOT, *[clean(x) for x in unquote(parts.path).split("/") if x])

    def guess_type(self, path):
        rel = os.path.relpath(str(path), ROOT).replace(os.sep, "/")
        if rel in TYPES:
            return TYPES[rel]
        p = str(path).lower()
        if p.endswith(".mjs") or p.endswith(".js"):
            return "text/javascript"
        if p.endswith(".json"):
            return "application/json"
        if p.endswith(".css"):
            return "text/css"
        if p.endswith(".svg"):
            return "image/svg+xml"
        if p.endswith(".wasm"):
            return "application/wasm"
        return super().guess_type(path)

    def log_message(self, *a):
        pass


port = 0
if "--port" in sys.argv:
    port = int(sys.argv[sys.argv.index("--port") + 1])
if not port:
    s = socket.socket(); s.bind(("127.0.0.1", 0)); port = s.getsockname()[1]; s.close()
class Server(http.server.ThreadingHTTPServer):
    request_queue_size = 256  # default 5 drops connections when the runtime fires dozens of module imports at once
    daemon_threads = True


httpd = Server(("127.0.0.1", port), functools.partial(H, directory=ROOT))
url = "http://localhost:%d" % port
print("Serving this clone at  %s" % url, flush=True)
print("(keep this window open; press Ctrl+C to stop)", flush=True)
if "--no-browser" not in sys.argv:
    threading.Timer(1.0, lambda: webbrowser.open(url)).start()
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nStopped.")
