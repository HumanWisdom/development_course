<?php
/**
 * Serve LCP WebP images with long-lived cache headers (works on Apache, nginx, PHP built-in server).
 * Whitelist-only; no direct filesystem paths in the query string.
 */
require_once __DIR__ . '/includes/media_config.php';

const HW_LCP_CACHE_MAX_AGE = 31536000; // 1 year

$key = isset($_GET['k']) ? (string) $_GET['k'] : '';
$density = isset($_GET['d']) ? (string) $_GET['d'] : '1x';

if ($density !== '1x' && $density !== '2x') {
    http_response_code(400);
    exit;
}

$map = hw_lcp_image_map();
if (!isset($map[$key][$density])) {
    http_response_code(404);
    exit;
}

$relativePath = $map[$key][$density];
$baseDir = realpath(__DIR__);
$fullPath = realpath(__DIR__ . '/' . ltrim($relativePath, '/'));

if (
    $baseDir === false
    || $fullPath === false
    || !is_file($fullPath)
    || strpos($fullPath, $baseDir . DIRECTORY_SEPARATOR) !== 0
) {
    http_response_code(404);
    exit;
}

$mtime = filemtime($fullPath);
$size = filesize($fullPath);
$etag = '"' . md5($fullPath . '|' . $mtime . '|' . $size) . '"';

header('Content-Type: image/webp');
header('Cache-Control: public, max-age=' . HW_LCP_CACHE_MAX_AGE . ', immutable');
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + HW_LCP_CACHE_MAX_AGE) . ' GMT');
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $mtime) . ' GMT');
header('ETag: ' . $etag);
header('X-Content-Type-Options: nosniff');

if (
    (isset($_SERVER['HTTP_IF_NONE_MATCH']) && trim($_SERVER['HTTP_IF_NONE_MATCH']) === $etag)
    || (isset($_SERVER['HTTP_IF_MODIFIED_SINCE'])
        && strtotime((string) $_SERVER['HTTP_IF_MODIFIED_SINCE']) >= $mtime)
) {
    http_response_code(304);
    exit;
}

header('Content-Length: ' . $size);
readfile($fullPath);
