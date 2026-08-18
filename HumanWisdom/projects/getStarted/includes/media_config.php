<?php
/**
 * CDN + LCP image URLs. Place optimized files under assets/images/lcp/ to serve same-origin.
 */

if (!defined('HW_CDN_ORIGIN')) {
    define('HW_CDN_ORIGIN', 'https://d1tenzemoxuh75.cloudfront.net');
}

if (!function_exists('hw_cdn_url')) {
    function hw_cdn_url($path)
    {
        $path = ltrim((string) $path, '/');
        return HW_CDN_ORIGIN . '/' . $path;
    }
}

if (!function_exists('hw_lcp_image_url')) {
    /**
     * @param 'banner_desktop'|'banner_mobile' $key
     */
    function hw_lcp_image_url($key)
    {
        static $map = null;
        if ($map === null) {
            $map = [
                'banner_desktop' => [
                    'local' => 'assets/images/lcp/banneraug.svg',
                    'cdn' => 'website/svgs/banneraug.svg',
                ],
                'banner_mobile' => [
                    'local' => 'assets/images/lcp/banner_mobile.svg',
                    'cdn' => 'website/svgs/banner_mobile.svg',
                ],
            ];
        }

        if (!isset($map[$key])) {
            return '';
        }

        $entry = $map[$key];
        $localPath = __DIR__ . '/../' . $entry['local'];
        if (is_file($localPath)) {
            if (!function_exists('hw_asset_url')) {
                require_once __DIR__ . '/cache_buster.php';
            }
            return hw_asset_url($entry['local']);
        }

        return hw_cdn_url($entry['cdn']);
    }
}

if (!function_exists('hw_cdn_preconnect_tags')) {
    function hw_cdn_preconnect_tags()
    {
        $origin = HW_CDN_ORIGIN;
        echo '<link rel="dns-prefetch" href="' . htmlspecialchars($origin, ENT_QUOTES, 'UTF-8') . '">' . "\n";
        echo '<link rel="preconnect" href="' . htmlspecialchars($origin, ENT_QUOTES, 'UTF-8') . '" crossorigin>' . "\n";
    }
}
