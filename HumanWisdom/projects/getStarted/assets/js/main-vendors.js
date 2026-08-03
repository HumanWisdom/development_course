/**
 * Optional UI libraries — only loaded when the page profile enables main_vendors.
 */
!(function () {
    "use strict";

    if (typeof GLightbox === "function" && document.querySelector(".glightbox")) {
        GLightbox({ selector: ".glightbox" });
    }

    if (typeof PureCounter === "function" && document.querySelector(".purecounter")) {
        new PureCounter();
    }

    if (typeof Swiper === "function") {
        if (document.querySelector(".slides-1")) {
            new Swiper(".slides-1", {
                speed: 600,
                loop: true,
                autoplay: { delay: 5000, disableOnInteraction: false },
                slidesPerView: "auto",
                pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            });
        }
        if (document.querySelector(".slides-3")) {
            new Swiper(".slides-3", {
                speed: 600,
                loop: true,
                autoplay: { delay: 5000, disableOnInteraction: false },
                slidesPerView: "auto",
                pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                breakpoints: { 320: { slidesPerView: 1, spaceBetween: 40 }, 1200: { slidesPerView: 3 } },
            });
        }
        if (document.querySelector(".gallery-slider")) {
            new Swiper(".gallery-slider", {
                speed: 400,
                loop: true,
                centeredSlides: true,
                autoplay: { delay: 5000, disableOnInteraction: false },
                slidesPerView: "auto",
                pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
                breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    992: { slidesPerView: 5, spaceBetween: 20 },
                },
            });
        }
    }

    if (typeof AOS !== "undefined") {
        window.addEventListener("load", () => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true, mirror: false });
        });
        document.dispatchEvent(new Event("hw:aos-ready"));
    }

    if (typeof imagesLoaded === "function" && typeof Isotope !== "undefined") {
        document.querySelectorAll(".isotope-layout").forEach(function (layout) {
            const layoutMode = layout.getAttribute("data-layout") ?? "masonry";
            const defaultFilter = layout.getAttribute("data-default-filter") ?? "*";
            const sortBy = layout.getAttribute("data-sort") ?? "original-order";
            const container = layout.querySelector(".isotope-container");
            if (!container) return;

            let iso;
            imagesLoaded(container, function () {
                iso = new Isotope(container, {
                    itemSelector: ".isotope-item",
                    layoutMode: layoutMode,
                    filter: defaultFilter,
                    sortBy: sortBy,
                });
            });
            layout.querySelectorAll(".isotope-filters li").forEach(function (filterEl) {
                filterEl.addEventListener(
                    "click",
                    function () {
                        const active = layout.querySelector(".isotope-filters .filter-active");
                        if (active) active.classList.remove("filter-active");
                        this.classList.add("filter-active");
                        if (iso) iso.arrange({ filter: this.getAttribute("data-filter") });
                    },
                    false
                );
            });
        });
    }
})();
