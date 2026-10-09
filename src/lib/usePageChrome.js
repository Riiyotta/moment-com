import { useEffect } from "react";
import { syncBannerHeight, reflowKpLines, marketClock, mobileMenu, contactDialog, lineRevealIndex } from "./siteRuntime.js";

// Per-route <title>, <html> and <body> attributes as they were on the original page after its scripts ran,
// plus the runtime behaviour in src/lib/siteRuntime.js.
export default function usePageChrome({ title, html = {}, body = {} }) {
  useEffect(() => {
    document.title = title;
    const apply = (el, attrs) => { for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v); };
    apply(document.documentElement, html);
    apply(document.body, body);
    const runtime = [syncBannerHeight(), reflowKpLines(), marketClock(), mobileMenu(), contactDialog(), lineRevealIndex()];
    return () => runtime.forEach((off) => off());
  }, [title]);
}
