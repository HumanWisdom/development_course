<a href="#" id="scrollTopArrow" class="scroll-top center_flex"><i class="bi bi-arrow-up-short"></i></a>
<?php
require_once __DIR__ . '/cache_buster.php';
require_once __DIR__ . '/api_config.php';
require_once __DIR__ . '/page_assets.php';
$hw_api_client = hw_api_config();
$hw_assets = hw_page_assets_get();
$hw_asset_payload = [
    'js' => $hw_assets['js'],
    'css' => $hw_assets['css'],
    'schedule' => $hw_assets['schedule'] ?? 'idle',
    'urls' => hw_page_assets_script_urls(),
    'styleUrls' => hw_page_assets_style_urls(),
];
?>
<script>
window.__HW_API__=<?php echo json_encode($hw_api_client, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS); ?>;
window.__HW_PAGE_ASSETS__=<?php echo json_encode($hw_asset_payload, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS); ?>;
</script>

<div id="preloader"></div>

<!-- Critical path: jQuery + Bootstrap (modals/nav), then app scripts; vendors load via hw-deferred-load.js -->
<script defer src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4= sha384-vtXRMe3mGCbOeY7l30aIg8H9p3GdeSe4IFlP6G8JMa7o7lXvnz3GFKzPxzJdPfGK sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha256-qlPVgvl+tZTCpcxYJFdHB/m6mDe84wRr+l81VoYPTgQ= sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz sha512-VK2zcvntEufaimc+efOYi622VN5ZacdnufnmX7zIhCPmjhKnOi9ZDMtg1/ug5l183f19gG1/cBstPO4D8N/Img==" crossorigin="anonymous"></script>
<script defer src="<?= hw_asset_url('../assets/js/main-core.js'); ?>"></script>
<script defer src="<?= hw_asset_url('../scripts/index.js'); ?>"></script>
<script defer src="<?= hw_asset_url('../assets/js/hw-deferred-load.js'); ?>"></script>
