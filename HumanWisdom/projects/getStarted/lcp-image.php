<?php
/**
 * Legacy redirect — LCP images are served as static WebP (faster than PHP readfile).
 */
require_once __DIR__ . '/includes/media_config.php';

$key = isset($_GET['k']) ? (string) $_GET['k'] : '';
$density = isset($_GET['d']) ? (string) $_GET['d'] : '1x';

if ($density !== '1x' && $density !== '2x') {
    http_response_code(400);
    exit;
}

$url = hw_lcp_image_url($key, $density);
if ($url === '') {
    http_response_code(404);
    exit;
}

header('Cache-Control: public, max-age=31536000, immutable');
header('Location: ' . hw_lcp_absolute_url($url), true, 301);
exit;
