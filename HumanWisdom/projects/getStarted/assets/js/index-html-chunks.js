/**
 * Fetches below-the-fold HTML when placeholders enter the viewport.
 * Numbered chunks load one at a time so the main thread is not flooded at startup.
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
            "pointerover",
            function (e) {
                var t = e.target;
                if (!t || !t.closest) return;
                if (t.closest('[data-bs-toggle="modal"]')) ensureModalsHost();
            },
            true
        );
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
        var hosts = Array.prototype.filter.call(document.querySelectorAll("[data-hw-chunk]"), function (host) {
            return host.getAttribute("data-hw-chunk") !== "modals";
        });
        if (!hosts.length) return;

        var i = 0;

        function watchNext() {
            if (i >= hosts.length) return;
            var host = hosts[i];
            if (!host || !host.isConnected) {
                i += 1;
                watchNext();
                return;
            }
            var id = host.getAttribute("data-hw-chunk");
            if (!id) {
                i += 1;
                watchNext();
                return;
            }

            if (!("IntersectionObserver" in window)) {
                loadChunk(id, host).then(function () {
                    i += 1;
                    watchNext();
                });
                return;
            }

            var io = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (ent) {
                        if (!ent.isIntersecting) return;
                        io.disconnect();
                        loadChunk(id, host).then(function () {
                            i += 1;
                            watchNext();
                        });
                    });
                },
                { rootMargin: "120px 0px", threshold: 0.01 }
            );
            io.observe(host);
        }

        watchNext();
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
        bindModalPrefetch();
    });
})();
