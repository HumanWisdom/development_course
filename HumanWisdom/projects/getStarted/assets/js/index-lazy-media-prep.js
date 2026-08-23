(function () {
    "use strict";
    var PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

    function prep(section) {
        if (!section || !section.classList || !section.classList.contains("index-lazy-section")) return;
        if (section.dataset.lazyPrepared === "1") return;
        section.dataset.lazyPrepared = "1";
        section.querySelectorAll("img[src]:not([data-src])").forEach(function (img) {
            var url = img.getAttribute("src");
            if (!url || url.indexOf("data:") === 0) return;
            img.setAttribute("data-src", url);
            img.setAttribute("src", PLACEHOLDER);
        });
        section.querySelectorAll("picture source[srcset]:not([data-srcset])").forEach(function (source) {
            var srcset = source.getAttribute("srcset");
            if (!srcset) return;
            source.setAttribute("data-srcset", srcset);
            source.removeAttribute("srcset");
        });
        section.querySelectorAll("video source[src]:not([data-src])").forEach(function (source) {
            var url = source.getAttribute("src");
            if (!url) return;
            source.setAttribute("data-src", url);
            source.removeAttribute("src");
        });
    }

    if (!("MutationObserver" in window)) return;

    var mo = new MutationObserver(function (list) {
        list.forEach(function (m) {
            m.addedNodes.forEach(function (node) {
                if (node.nodeType !== 1) return;
                if (node.classList && node.classList.contains("index-lazy-section")) prep(node);
                if (node.querySelectorAll) node.querySelectorAll(".index-lazy-section").forEach(prep);
            });
        });
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", function () {
        mo.disconnect();
    });
})();
