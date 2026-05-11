//const url = "https://happierme.app";
//const url ="https://staging.happierme.app"

$(".owl_container .owl-carousel").owlCarousel({
    stagePadding: 50,
    loop: !1,
    margin: 40,
    nav: !0,
    autoWidth: !0,
    dots: !1,
    navText: ['<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    navContainer: ".owl_container .owl-nav",
    responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 3 } },
}),
    $(".owl_coach .owl-carousel").owlCarousel({
        stagePadding: 50,
        loop: !1,
        margin: 40,
        nav: !0,
        autoWidth: !0,
        dots: !1,
        navText: ['<span class="bi bi-chevron-left"></span>', '<span class="bi bi-chevron-right"></span>'],
        navContainer: ".owl_coach .owl-nav",
        responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 3 } },
    }),
    (function ($) {
        var landingBlogCarouselSelector =
            "body.page-education .owl_blog .owl-carousel, body.page-teenagers .owl_blog .owl-carousel, body.page-work .owl_blog .owl-carousel";
        var $landingBlogCarousels = $(landingBlogCarouselSelector);
        var $otherBlogCarousel = $(".owl_blog .owl-carousel").not($landingBlogCarousels);

        $("body.page-education .owl_blog, body.page-teenagers .owl_blog, body.page-work .owl_blog").each(function () {
            var $wrap = $(this);
            var $carousel = $wrap.find(".owl-carousel");
            if (!$carousel.length) return;
            $carousel.owlCarousel({
                stagePadding: 50,
                loop: false,
                margin: 40,
                nav: true,
                autoWidth: true,
                dots: false,
                navText: [
                    '<span class="bi bi-chevron-left"></span>',
                    '<span class="bi bi-chevron-right"></span>',
                ],
                navContainer: $wrap.find(".owl-nav").get(0),
                responsive: {
                    0: { items: 1 },
                    600: { items: 3 },
                    1000: { items: 3 },
                    1600: {
                        items: 3,
                        nav: false,
                        autoWidth: false,
                        stagePadding: 0,
                        margin: 0,
                    },
                },
            });
        });

        $otherBlogCarousel.length &&
            $otherBlogCarousel.owlCarousel({
                stagePadding: 50,
                loop: !1,
                margin: 40,
                nav: !0,
                autoWidth: !0,
                dots: !1,
                navText: [
                    '<span class="bi bi-chevron-left"></span>',
                    '<span class="bi bi-chevron-right"></span>',
                ],
                navContainer: ".owl_blog .owl-nav",
                responsive: {
                    0: { items: 1 },
                    600: { items: 3 },
                    1e3: { items: 3 },
                },
            });
    })(jQuery),
    $(window).resize(function () {
        window.matchMedia("(max-width: 768px)").matches, $(".btn_tff").attr("href", "../pages/splash_options.php");
    }),
    $(window).resize(),
    $(window).resize(function () {
        window.matchMedia("(max-width: 768px)").matches ? 
       //  (logevent("click_free_trial_menu_web", "index.php") 
          $(".btn_tff_tn").attr("href", "https://onelink.to/qsptex")   :  
          // (logevent("click_free_trial_menu_web", "index.php") 
           $(".btn_tff_tn").attr("href", "../pages/splash_options.php");
    }),
    $(window).resize(),
    $(".search-button").click(function () {
        $(".search-button").toggleClass("cp_absolute"), $(".fc_web_search").focus();
    }),
    jQuery(function (n) {
        var o = window.location.href;
        n("li a").each(function () {
            this.href === o && n(this).addClass("active_nav");
        });
    }),
    $(document).ready(function () {
        $(".blog_links a").click(function () {
            $(".blog_main a").css({ color: "black" });
        });
    });
const btnColor = document.querySelector(".teens");
btnColor && btnColor.addEventListener("click", changeBtnColor);
const badge_new = document.querySelector(".badge_new");
if (badge_new) {
}
