<a href="#" class="scroll-top center_flex"><i class="bi bi-arrow-up-short"></i></a>

<div id="preloader"></div>

<!-- Vendor JS Files -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../assets/vendor/aos/aos.js"></script>
<script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="../assets/vendor/purecounter/purecounter_vanilla.js"></script>
<script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="../assets/vendor/php-email-form/validate.js"></script>

<!-- Template Main JS File -->
<script src="../assets/js/main.js"></script>
<script src="../scripts/index.js"></script>

<!-- <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script> -->
<script type="text/javascript" src="https:///code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="https:///code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

<script src="https://kit.fontawesome.com/e7db147a51.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></script>

<script>
    $('.owl_container .owl-carousel').owlCarousel({
        stagePadding: 50,
        loop: false,
        margin: 40,
        nav: true,
        autoWidth: true,
        dots: false,
        navText: [
            '<img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/../assets/svgs/v1_3/web_angle_left.svg" class="">',
            '<img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/../assets/svgs/v1_3/web_angle_right.svg" class="">'
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
            '<img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/../assets/svgs/v1_3/web_angle_left.svg" class="">',
            '<img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/../assets/svgs/v1_3/web_angle_right.svg" class="">'
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
        '<img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/../assets/svgs/v1_3/web_angle_left.svg" class="">',
        '<img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/../assets/svgs/v1_3/web_angle_right.svg" class="">'
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
        $('.btn_tff').attr('href','https://onelink.to/qsptex');
        } else {
        $('.btn_tff').attr('href','https://happierme.app/adults/intro/intro-carousel');
        }
    });
    $( window ).resize();
</script>