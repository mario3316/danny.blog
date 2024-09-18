"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function Comments() {
    const ref = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    const theme = resolvedTheme === "dark" ? "dark_dimmed" : "light";

    useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return;

        const scriptElem = document.createElement("script");
        scriptElem.src = "https://giscus.app/client.js";
        scriptElem.async = true;
        scriptElem.crossOrigin = "anonymous";

        scriptElem.setAttribute("data-repo", "mario3316/danny.blog");
        scriptElem.setAttribute("data-repo-id", "R_kgDOMzVipQ");
        scriptElem.setAttribute("data-category", "Comment");
        scriptElem.setAttribute("data-category-id", "DIC_kwDOMzVipc4Cikhw");
        scriptElem.setAttribute("data-mapping", "pathname");
        scriptElem.setAttribute("data-strict", "0");
        scriptElem.setAttribute("data-reactions-enabled", "1");
        scriptElem.setAttribute("data-emit-metadata", "0");
        scriptElem.setAttribute("data-input-position", "bottom");
        scriptElem.setAttribute("data-theme", theme);
        scriptElem.setAttribute("data-lang", "ko");

        ref.current.appendChild(scriptElem);
    }, [theme]);

    useEffect(() => {
        const iframe = document.querySelector<HTMLIFrameElement>(
            "iframe.giscus-frame",
        );
        iframe?.contentWindow?.postMessage(
            { giscus: { setConfig: { theme } } },
            "https://giscus.app",
        );
    }, [theme]);

    return <section ref={ref} />;
}
