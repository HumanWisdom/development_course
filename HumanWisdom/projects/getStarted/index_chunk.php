<?php
/**
 * Returns HTML fragments for scroll / idle loading on the landing page.
 */
require_once __DIR__ . '/includes/security_config.php';

$id = isset($_GET['id']) ? (string) $_GET['id'] : '';
$manifest = require __DIR__ . '/includes/index/chunk_manifest.php';

if ($id === '' || !isset($manifest[$id])) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Not found';
    exit;
}

$path = $manifest[$id];
if (!is_file($path)) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Not found';
    exit;
}

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: public, max-age=86400');
header('X-Content-Type-Options: nosniff');

include $path;
