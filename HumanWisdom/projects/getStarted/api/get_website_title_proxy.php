<?php
/**
 * Same-origin JSON proxy for GetWebsiteTitle (avoids browser CORS to staging).
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=300');

$upstream = 'https://staging.humanwisdom.info/api/GetWebsiteTitle';
$timeout = 30;

if (!function_exists('curl_init')) {
    http_response_code(503);
    echo '[]';
    exit;
}

$ch = curl_init($upstream);
if ($ch === false) {
    http_response_code(503);
    echo '[]';
    exit;
}

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_CONNECTTIMEOUT => $timeout,
    CURLOPT_TIMEOUT => $timeout,
    CURLOPT_HTTPHEADER => ['Accept: application/json'],
]);

$body = curl_exec($ch);
$code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($body === false || $code < 200 || $code >= 300) {
    http_response_code(502);
    echo '[]';
    exit;
}

echo $body;
