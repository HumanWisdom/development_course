//const url = "https://happierme.app";
//const url ="https://staging.happierme.app"
function gtag() {
    dataLayer.push(arguments);
}
function logevent(e, t) {
    gtag("event", e, { screen_name: t });
}

$(".owl_container .owl-carousel").owlCarousel({
    stagePadding: 50,
    loop: !1,
    margin: 40,
    nav: !0,
    autoWidth: !0,
    dots: !1,
    navText: ['<span class="glyphicon glyphicon glyphicon-menu-left"></span>', 
        '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'],
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
        navText: ['<span class="glyphicon glyphicon glyphicon-menu-left"></span>', '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'],
        navContainer: ".owl_coach .owl-nav",
        responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 3 } },
    }),
    $(".owl_blog .owl-carousel").owlCarousel({
        stagePadding: 50,
        loop: !1,
        margin: 40,
        nav: !0,
        autoWidth: !0,
        dots: !1,
        navText: ['<span class="glyphicon glyphicon glyphicon-menu-left"></span>', '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'],
        navContainer: ".owl_blog .owl-nav",
        responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 3 } },
    }),
    $(window).resize(function () {
        window.matchMedia("(max-width: 768px)").matches, $(".btn_tff").attr("href", "../pages/splash_options.php");
    }),
    $(window).resize(),
    $(window).resize(function () {
        window.matchMedia("(max-width: 768px)").matches ?  (logevent("click_free_trial_menu_web", "index.php") , $(".btn_tff_tn").attr("href", "https://onelink.to/qsptex"))   :   (logevent("click_free_trial_menu_web", "index.php") ,$(".btn_tff_tn").attr("href", "../pages/splash_options.php"));
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
