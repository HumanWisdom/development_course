<?php
/**
 * Fetches GetWebsiteTitle JSON. Prefers cURL (works when allow_url_fopen is Off).
 *
 * @return array{title: ?string, subtitle: ?string}
 */
if (function_exists('fetch_get_website_title_from_api')) {
    return;
}

function fetch_get_website_title_from_api(
    string $url = 'https://staging.humanwisdom.info/api/GetWebsiteTitle',
    int $timeoutSeconds = 30
): array {
    $empty = ['title' => null, 'subtitle' => null];
    $body = false;

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        if ($ch === false) {
            return $empty;
        }
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_CONNECTTIMEOUT => $timeoutSeconds,
            CURLOPT_TIMEOUT => $timeoutSeconds,
            CURLOPT_HTTPHEADER => ['Accept: application/json'],
        ]);
        $body = curl_exec($ch);
        $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($body === false || $code < 200 || $code >= 300) {
            return $empty;
        }
    } else {
        $ctx = stream_context_create([
            'http' => [
                'method' => 'GET',
                'timeout' => $timeoutSeconds,
                'header' => "Accept: application/json\r\n",
                'ignore_errors' => true,
            ],
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true,
            ],
        ]);
        $body = @file_get_contents($url, false, $ctx);
        if ($body === false) {
            return $empty;
        }
    }

    $data = json_decode($body, true);
    if (!is_array($data) || !isset($data[0]) || !is_array($data[0])) {
        return $empty;
    }
    $row = $data[0];
    $title = (!empty($row['title']) && is_string($row['title']))
        ? html_entity_decode($row['title'], ENT_QUOTES | ENT_HTML5, 'UTF-8')
        : null;
    $subtitle = (!empty($row['subtitle']) && is_string($row['subtitle']))
        ? html_entity_decode($row['subtitle'], ENT_QUOTES | ENT_HTML5, 'UTF-8')
        : null;

    return ['title' => $title, 'subtitle' => $subtitle];
}
