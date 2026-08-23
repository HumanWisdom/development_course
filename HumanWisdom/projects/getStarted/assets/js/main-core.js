/**
 * Header, nav, scroll — no heavy vendor libraries (loaded separately when needed).
 */
!(function () {
    "use strict";

    const preloader = document.querySelector("#preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.remove();
        });
    }

    const header = document.querySelector("#header");
    if (header) {
        document.addEventListener("scroll", () => {
            window.scrollY > 100 ? header.classList.add("sticked") : header.classList.remove("sticked");
        });
    }

    if (typeof window.jQuery !== "undefined") {
        jQuery(document).ready(function ($) {
            $("#toggle").click(function () {
                var $btn = $("#toggle");
                var $label = $btn.find(".toggle-label");
                if ($label.length) {
                    var expanding = $label.text().trim() === "View More";
                    $label.text(expanding ? "View Less" : "View More");
                    expanding ? $("#text").slideDown() : $("#text").slideUp();
                    return;
                }
                $btn.text() === "View More"
                    ? ($btn.text("View Less"), $("#text").slideDown())
                    : ($btn.text("View More"), $("#text").slideUp());
            });
        });
    }

    const navLinks = document.querySelectorAll("#navbar a");

    function setActiveNav() {
        navLinks.forEach((link) => {
            if (!link.hash) return;
            const section = document.querySelector(link.hash);
            if (!section) return;
            const y = window.scrollY + 200;
            y >= section.offsetTop && y <= section.offsetTop + section.offsetHeight
                ? link.classList.add("active")
                : link.classList.remove("active");
        });
    }

    window.addEventListener("load", setActiveNav);
    document.addEventListener("scroll", setActiveNav);

    const mobileShow = document.querySelector(".mobile-nav-show");
    const mobileHide = document.querySelector(".mobile-nav-hide");

    function toggleMobileNav() {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        mobileShow.classList.toggle("d-none");
        mobileHide.classList.toggle("d-none");
    }

    if (mobileShow && mobileHide) {
        document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                toggleMobileNav();
            });
        });
        document.querySelectorAll("#navbar a").forEach((link) => {
            if (!link.hash) return;
            if (document.querySelector(link.hash)) {
                link.addEventListener("click", () => {
                    if (document.querySelector(".mobile-nav-active")) toggleMobileNav();
                });
            }
        });
        document.querySelectorAll(".navbar .dropdown > a").forEach((link) => {
            link.addEventListener("click", function (e) {
                if (document.querySelector(".mobile-nav-active")) {
                    e.preventDefault();
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("dropdown-active");
                    const indicator = this.querySelector(".dropdown-indicator");
                    if (indicator) {
                        indicator.classList.toggle("bi-chevron-up");
                        indicator.classList.toggle("bi-chevron-down");
                    }
                }
            });
        });
    }

    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
        const updateScrollTop = function () {
            window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
        };
        window.addEventListener("load", updateScrollTop);
        document.addEventListener("scroll", updateScrollTop);
        scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
})();
