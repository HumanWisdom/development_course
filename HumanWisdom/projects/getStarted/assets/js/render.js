$('.owl_container .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 40,
    nav: true,
    autoWidth: true,
    dots: false,
    navText: [
        '<span class="glyphicon glyphicon glyphicon-menu-left"></span>',
        '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'
    ],
    navContainer: '.owl_container .owl-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});

$('.owl_coach .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 40,
    nav: true,
    autoWidth: true,
    dots: false,
    navText: [
        '<span class="glyphicon glyphicon glyphicon-menu-left"></span>',
        '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'
    ],
    navContainer: '.owl_coach .owl-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});

$('.owl_blog .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 40,
    nav: true,
    autoWidth: true,
    dots: false,
    navText: [
        '<span class="glyphicon glyphicon glyphicon-menu-left"></span>',
        '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'
    ],
    navContainer: '.owl_blog .owl-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});

$( window ).resize( function() {
    if (window.matchMedia('(max-width: 768px)').matches)
    {
        //$('.btn_tff').attr('href','https://onelink.to/qsptex');
        // $('.btn_tff').attr('href','#div_subscription');
        $('.btn_tff').attr('href','https://happierme.app/splash_options.html');
    } 
    else 
    {
        // $('.btn_tff').attr('href','#div_subscription');
        $('.btn_tff').attr('href','https://happierme.app/splash_options.html');
    } 
});

$( window ).resize();

$( window ).resize( function() {
    if (window.matchMedia('(max-width: 768px)').matches)
    {
        $('.btn_tff_tn').attr('href','https://onelink.to/qsptex');
    } 
    else 
    {
        $('.btn_tff_tn').attr('href','https://happierme.app/splash_options.html');
    }
});

$( window ).resize();

/*$('.search-button').click(function () {
    $('.search-button').css({'position':'absolute', 'right':'0'});
});*/

$('.search-button').click(function () 
{
    $('.search-button').toggleClass('cp_absolute');
    $('.fc_web_search').focus();
});

jQuery(function($) 
{
    var path = window.location.href;
    $('li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active_nav');
            //$('.badge_new').addClass('bg_badge');
        }

    });
    //$('.badge_new').removeClass('bg_badge');
});

$( document ).ready(function() {   
    $('.blog_links a').click(function () {
        $('.blog_main a').css({'color':'black'});
        //alert('hi');
        // $(".blog_links").click(function (e) { 
        // $(".navbar ul li a .blog_main").addClass('active_nav');
    });  
});

/*
$( document ).ready(function() {  
    $('.teens').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();
        $('.badge_new').css({'background':'#834B66'});
        $('.teens').css({'text-decoration':'none','color':'#834B66'});
    });
});
*/

const btnColor = document.querySelector(".teens");

if(btnColor){
  btnColor.addEventListener('click', changeBtnColor);
}

const badge_new = document.querySelector(".badge_new");

if(badge_new){
    const changeBtnColor = (e) => {
        //alert('hi');
        //e.preventDefault(); 
        if(badge_new.classList.contains("bg_badge"))
        {
            badge_new.classList.remove("bg_badge");
        }
        else
        {
            e.preventDefault(); 
            badge_new.classList.add("bg_badge");
        }
    
        // or use:
        // btnColor.classList.toggle("red");
    };
}