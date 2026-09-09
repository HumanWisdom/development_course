/**
 * Loads non-critical scripts/styles after first paint (requestIdleCallback).
 */
(function () {
    "use strict";

    var cfg = window.__HW_PAGE_ASSETS__;
    if (!cfg || !cfg.js) return;

    var jsFlags = cfg.js;
    var cssFlags = cfg.css || {};
    var urls = cfg.urls || {};
    var styleUrls = cfg.styleUrls || {};
    var siteStylesPromise = null;

    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            if (!src) {
                resolve();
                return;
            }
            var existing = document.querySelector('script[src="' + src + '"]');
            if (existing) {
                resolve();
                return;
            }
            var s = document.createElement("script");
            s.src = src;
            s.async = false;
            s.onload = function () {
                resolve();
            };
            s.onerror = reject;
            document.body.appendChild(s);
        });
    }

    function loadStylesheet(href) {
        return new Promise(function (resolve) {
            if (!href) {
                resolve();
                return;
            }
            if (document.querySelector('link[href="' + href + '"]')) {
                resolve();
                return;
            }
            var l = document.createElement("link");
            l.rel = "stylesheet";
            l.href = href;
            l.onload = function () {
                resolve();
            };
            document.head.appendChild(l);
        });
    }

    function loadSiteStyles() {
        if (!cssFlags.site_css_deferred) {
            return Promise.resolve();
        }
        if (siteStylesPromise) {
            return siteStylesPromise;
        }

        var chain = Promise.resolve();
        if (styleUrls.bootstrap_css) {
            chain = chain.then(function () {
                return loadStylesheet(styleUrls.bootstrap_css);
            });
        }
        if (styleUrls.bootstrap_icons) {
            chain = chain.then(function () {
                return loadStylesheet(styleUrls.bootstrap_icons);
            });
        }
        if (Array.isArray(styleUrls.site_styles)) {
            styleUrls.site_styles.forEach(function (href) {
                chain = chain.then(function () {
                    return loadStylesheet(href);
                });
            });
        }

        siteStylesPromise = chain.catch(function (err) {
            siteStylesPromise = null;
            if (typeof console !== "undefined" && console.warn) {
                console.warn("hw-deferred-load site styles:", err);
            }
        });
        return siteStylesPromise;
    }

    function whenIdle(fn) {
        if (cfg.schedule === "immediate") {
            fn();
            return;
        }
        if (cfg.schedule === "domcontentloaded") {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", fn, { once: true });
            } else {
                fn();
            }
            return;
        }
        if ("requestIdleCallback" in window) {
            requestIdleCallback(fn, { timeout: 3000 });
        } else {
            setTimeout(fn, 200);
        }
    }

    function loadDeferredAssets() {
        var chain = loadSiteStyles();

        if (cssFlags.modal_tabs_defer && styleUrls.modal_tabs_defer) {
            chain = chain.then(function () {
                return loadStylesheet(styleUrls.modal_tabs_defer);
            });
        }
        if (jsFlags.google_fonts_deferred && urls.google_fonts_deferred) {
            chain = chain.then(function () {
                return loadStylesheet(urls.google_fonts_deferred);
            });
        }

        if (cssFlags.glightbox && styleUrls.glightbox) {
            chain = chain.then(function () {
                return loadStylesheet(styleUrls.glightbox);
            });
        }
        if (cssFlags.swiper && styleUrls.swiper) {
            chain = chain.then(function () {
                return loadStylesheet(styleUrls.swiper);
            });
        }
        if (cssFlags.owl && styleUrls.owl) {
            chain = chain.then(function () {
                return loadStylesheet(styleUrls.owl);
            });
            chain = chain.then(function () {
                return loadStylesheet(styleUrls.owl_theme);
            });
        }

        if (jsFlags.glightbox && urls.glightbox) {
            chain = chain.then(function () {
                return loadScript(urls.glightbox);
            });
        }
        if (jsFlags.swiper && urls.swiper) {
            chain = chain.then(function () {
                return loadScript(urls.swiper);
            });
        }
        if (jsFlags.purecounter && urls.purecounter) {
            chain = chain.then(function () {
                return loadScript(urls.purecounter);
            });
        }
        if (jsFlags.imagesloaded && urls.imagesloaded) {
            chain = chain.then(function () {
                return loadScript(urls.imagesloaded);
            });
        }
        if (jsFlags.isotope && urls.isotope) {
            chain = chain.then(function () {
                return loadScript(urls.isotope);
            });
        }
        if (jsFlags.aos && urls.aos) {
            chain = chain.then(function () {
                return loadScript(urls.aos);
            }).then(function () {
                document.dispatchEvent(new Event("hw:aos-ready"));
            });
        }
        if (jsFlags.main_vendors && urls.main_vendors) {
            chain = chain.then(function () {
                return loadScript(urls.main_vendors);
            });
        }
        if (jsFlags.validate && urls.validate) {
            chain = chain.then(function () {
                return loadScript(urls.validate);
            });
        }
        if (jsFlags.owl && urls.owl) {
            chain = chain.then(function () {
                return loadScript(urls.owl);
            }).then(function () {
                document.dispatchEvent(new Event("hw:owl-ready"));
            });
        }
        if (jsFlags.render && urls.render) {
            chain = chain.then(function () {
                return loadScript(urls.render);
            });
        }
        if (jsFlags.fontawesome_kit && urls.fontawesome_kit) {
            chain = chain.then(function () {
                return loadScript(urls.fontawesome_kit);
            });
        }

        chain.catch(function (err) {
            if (typeof console !== "undefined" && console.warn) {
                console.warn("hw-deferred-load:", err);
            }
        });
    }

    document.addEventListener("hw:chunk-loaded", function () {
        loadSiteStyles();
    });
    document.addEventListener(
        "pointerdown",
        function () {
            loadSiteStyles();
        },
        { once: true, capture: true }
    );

    if (document.readyState === "complete") {
        whenIdle(loadDeferredAssets);
    } else if (cfg.schedule === "domcontentloaded") {
        whenIdle(loadDeferredAssets);
    } else {
        window.addEventListener(
            "load",
            function () {
                whenIdle(loadDeferredAssets);
            },
            { once: true }
        );
    }
})();
