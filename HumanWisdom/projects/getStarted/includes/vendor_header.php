<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<?php
require_once __DIR__ . '/cache_buster.php';
require_once __DIR__ . '/page_profile.php';
$hwProfile = hw_vendor_profile();
?>

<!-- Favicons -->
<link href="https://d1tenzemoxuh75.cloudfront.net/../assets/images/logo/logo_favicon_transparent.png" rel="icon">
<link href="https://d1tenzemoxuh75.cloudfront.net/../assets/images/logo/logo_favicon_transparent.png" rel="apple-touch-icon">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" >
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin >
<!-- <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" >
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" > -->

<!-- Consolidated font request (all weights in one call) -->
<!-- <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"> -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"></noscript>



<!-- Bootstrap 5.3 CSS 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">-->

<link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"></noscript>

<link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></noscript>

    <!-- Vendor CSS Files -->
<?php if ($hwProfile !== 'landing') : ?>
<link rel="preload" href="<?= hw_asset_url('../assets/vendor/glightbox/css/glightbox.min.css'); ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="<?= hw_asset_url('../assets/vendor/glightbox/css/glightbox.min.css'); ?>"></noscript>

<link rel="preload" href="<?= hw_asset_url('../assets/vendor/swiper/swiper-bundle.min.css'); ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="<?= hw_asset_url('../assets/vendor/swiper/swiper-bundle.min.css'); ?>"></noscript>
<?php endif; ?>

<!-- LCP-critical CSS inlined; full stylesheets load async (non-render-blocking) -->
<?php include __DIR__ . '/critical_lcp_style.php'; ?>
<?php
hw_defer_stylesheet('../assets/css/landing.css');
hw_defer_stylesheet('../assets/css/main.css');
if ($hwProfile !== 'landing') {
    hw_defer_stylesheet('../assets/css/home.css');
    hw_defer_stylesheet('../assets/css/index.css');
}
hw_defer_stylesheet('../assets/css/responsive.css');
hw_defer_stylesheet('../assets/font/font_colour.css');
hw_defer_stylesheet('../assets/font/font_size.css');
hw_defer_stylesheet('../assets/font/font_weight.css');
hw_defer_stylesheet('../assets/font/line_height.css');
hw_defer_stylesheet('../assets/css/style_hb.css');
hw_defer_stylesheet('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
hw_defer_stylesheet('../assets/css/vendor-ui.css');
if ($hwProfile !== 'landing') {
    hw_defer_stylesheet('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
    hw_defer_stylesheet('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css');
}
?> 

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1WBHRGL7VH"></script>
