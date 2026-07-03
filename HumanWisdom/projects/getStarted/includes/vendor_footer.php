<a href="#" id="scrollTopArrow" class="scroll-top center_flex"><i class="bi bi-arrow-up-short"></i></a>
<?php
require_once __DIR__ . '/cache_buster.php';
require_once __DIR__ . '/api_config.php';
$hw_api_client = hw_api_config();
?>
<script>
window.__HW_API__=<?php echo json_encode($hw_api_client, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS); ?>;
</script>

<div id="preloader"></div>

<!-- Vendor JS Files -->
<!-- Use a single jQuery version to avoid conflicts
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4= sha384-vtXRMe3mGCbOeY7l30aIg8H9p3GdeSe4IFlP6G8JMa7o7lXvnz3GFKzPxzJdPfGK sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>

<!-- Bootstrap 5.3 JS
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> -->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha256-qlPVgvl+tZTCpcxYJFdHB/m6mDe84wRr+l81VoYPTgQ= sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz sha512-VK2zcvntEufaimc+efOYi622VN5ZacdnufnmX7zIhCPmjhKnOi9ZDMtg1/ug5l183f19gG1/cBstPO4D8N/Img==" crossorigin="anonymous"></script>

<!-- Additional vendor scripts -->
<script defer src="<?= hw_asset_url('../assets/vendor/aos/aos.js'); ?>"></script>
<script src="<?= hw_asset_url('../assets/vendor/glightbox/js/glightbox.min.js'); ?>"></script>
<script src="<?= hw_asset_url('../assets/vendor/purecounter/purecounter_vanilla.js'); ?>"></script>
<script src="<?= hw_asset_url('../assets/vendor/swiper/swiper-bundle.min.js'); ?>"></script>
<script defer  src="<?= hw_asset_url('../assets/vendor/php-email-form/validate.js'); ?>"></script>
<script defer src="<?= hw_asset_url('../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js'); ?>"></script>
<script defer src="<?= hw_asset_url('../assets/vendor/isotope-layout/isotope.pkgd.min.js'); ?>"></script>

<!-- Template Main JS File (window.__HW_API__ must load before index.js) -->
<script src="<?= hw_asset_url('../assets/js/main.js'); ?>"></script>
<script src="<?= hw_asset_url('../scripts/index.js'); ?>"></script>

<!-- Font Awesome -->
<script defer src="https://kit.fontawesome.com/e7db147a51.js" crossorigin="anonymous"></script>

<!-- Owl Carousel -->
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></script>

<script defer src="<?= hw_asset_url('../assets/js/render.js'); ?>"></script>

<!-- Additional vendor scripts -->
<script src="<?= hw_asset_url('../assets/vendor/glightbox/js/glightbox.min.js'); ?>"></script>
<script src="<?= hw_asset_url('../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js'); ?>"></script>
<script src="<?= hw_asset_url('../assets/vendor/isotope-layout/isotope.pkgd.min.js'); ?>"></script>
<script src="<?= hw_asset_url('../assets/vendor/purecounter/purecounter_vanilla.js'); ?>"></script>
<!-- <script src="../assets/vendor/waypoints/noframework.waypoints.js"></script> -->
<script src="<?= hw_asset_url('../assets/vendor/swiper/swiper-bundle.min.js'); ?>"></script>
