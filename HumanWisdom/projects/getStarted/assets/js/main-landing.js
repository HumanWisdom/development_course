!(function () {
    "use strict";
    var preloader = document.querySelector("#preloader");
    if (preloader) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", function () {
                preloader.remove();
            }, { once: true });
        } else {
            preloader.remove();
        }
    }

    var header = document.querySelector("#header");
    if (header) {
        var onScrollHeader = function () {
            if (window.scrollY > 100) {
                header.classList.add("sticked");
            } else {
                header.classList.remove("sticked");
            }
        };
        document.addEventListener("scroll", onScrollHeader, { passive: true });
    }
    var mobileNavShow = document.querySelector(".mobile-nav-show");
    var mobileNavHide = document.querySelector(".mobile-nav-hide");
    function toggleMobileNav() {
        document.body.classList.toggle("mobile-nav-active");
        if (mobileNavShow) mobileNavShow.classList.toggle("d-none");
        if (mobileNavHide) mobileNavHide.classList.toggle("d-none");
    }
    document.querySelectorAll(".mobile-nav-toggle").forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            toggleMobileNav();
        });
    });

    var scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
        var onScrollTop = function () {
            if (window.scrollY > 100) {
                scrollTop.classList.add("active");
            } else {
                scrollTop.classList.remove("active");
            }
        };
        document.addEventListener("scroll", onScrollTop, { passive: true });
        scrollTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
})();
