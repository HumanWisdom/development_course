/**
 * Fetches below-the-fold HTML when placeholders enter the viewport.
 */
(function () {
    "use strict";

    var CHUNK_URL = "index_chunk.php";
    var loading = Object.create(null);
    var loaded = Object.create(null);

    function chunkUrl(id) {
        var base = CHUNK_URL + "?id=" + encodeURIComponent(id);
        if (window.__HW_INDEX_CHUNK_V__) {
            return base + "&v=" + encodeURIComponent(window.__HW_INDEX_CHUNK_V__);
        }
        return base;
    }

    function dispatchChunkLoaded(id, root) {
        document.dispatchEvent(
            new CustomEvent("hw:chunk-loaded", {
                detail: { id: id, root: root || null },
            })
        );
    }

    function insertChunkHtml(host, html) {
        var parent = host.parentNode;
        if (!parent) return null;
        var tpl = document.createElement("template");
        tpl.innerHTML = html.trim();
        var inserted = [];
        while (tpl.content.firstChild) {
            var node = tpl.content.firstChild;
            parent.insertBefore(node, host);
            inserted.push(node);
        }
        host.remove();
        return inserted;
    }

    function afterChunkHtml(id, host, html) {
        var inserted = insertChunkHtml(host, html);
        if (!inserted || !inserted.length) return;

        if (typeof prepareIndexLazySection === "function") {
            inserted.forEach(function (node) {
                if (node.nodeType !== 1) return;
                if (node.classList && node.classList.contains("index-lazy-section")) {
                    prepareIndexLazySection(node);
                }
                if (node.querySelectorAll) {
                    node.querySelectorAll(".index-lazy-section").forEach(prepareIndexLazySection);
                }
            });
        }
        if (typeof initIndexLazySections === "function") {
            initIndexLazySections();
        }
        if (id === "modals" && typeof modalManager !== "undefined" && modalManager.initializeModalTriggers) {
            modalManager.initializeModalTriggers('[data-bs-toggle="modal"]');
        }
        dispatchChunkLoaded(id, inserted[0]);
    }

    function loadChunk(id, host) {
        if (loaded[id] || loading[id]) return loading[id];
        loading[id] = fetch(chunkUrl(id), {
            credentials: "same-origin",
            headers: { Accept: "text/html" },
        })
            .then(function (res) {
                if (!res.ok) throw new Error("chunk " + id + " HTTP " + res.status);
                return res.text();
            })
            .then(function (html) {
                loaded[id] = true;
                afterChunkHtml(id, host, html);
            })
            .catch(function (err) {
                delete loading[id];
                if (typeof console !== "undefined" && console.warn) {
                    console.warn("index-html-chunks:", err);
                }
            });
        return loading[id];
    }

    function ensureModalsHost() {
        var host = document.getElementById("hw-chunk-modals");
        if (!host || loaded.modals) return;
        loadChunk("modals", host);
    }

    function bindModalPrefetch() {
        document.addEventListener(
            "click",
            function (e) {
                var t = e.target;
                if (!t || !t.closest) return;
                if (t.closest('[data-bs-toggle="modal"]')) ensureModalsHost();
            },
            true
        );
    }

    function initScrollChunks() {
        var hosts = document.querySelectorAll("[data-hw-chunk]");
        if (!hosts.length) return;

        if (!("IntersectionObserver" in window)) {
            hosts.forEach(function (host) {
                var id = host.getAttribute("data-hw-chunk");
                if (id) loadChunk(id, host);
            });
            return;
        }

        var io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (ent) {
                    if (!ent.isIntersecting) return;
                    var host = ent.target;
                    var id = host.getAttribute("data-hw-chunk");
                    if (!id) return;
                    io.unobserve(host);
                    loadChunk(id, host);
                });
            },
            { rootMargin: "400px 0px 400px 0px", threshold: 0.01 }
        );

        hosts.forEach(function (host) {
            io.observe(host);
        });
    }

    function whenReady(fn) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", fn, { once: true });
        } else {
            fn();
        }
    }

    whenReady(function () {
        initScrollChunks();
        var firstChunk = document.querySelector('[data-hw-chunk="1"]');
        if (firstChunk) {
            loadChunk("1", firstChunk);
        }
        bindModalPrefetch();
        if ("requestIdleCallback" in window) {
            requestIdleCallback(function () {
                ensureModalsHost();
            }, { timeout: 8000 });
        } else {
            setTimeout(ensureModalsHost, 4000);
        }
    });
})();
