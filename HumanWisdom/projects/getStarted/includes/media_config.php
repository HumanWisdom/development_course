<?php
/**
 * CDN + LCP image URLs. Optimized WebP files live under assets/images/lcp/.
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

if (!function_exists('hw_lcp_image_map')) {
    function hw_lcp_image_map()
    {
        return [
            'banner_desktop' => [
                '1x' => 'assets/images/lcp/banneraug.webp',
                '2x' => 'assets/images/lcp/banneraug@2x.webp',
                'width' => 331,
                'height' => 480,
            ],
            'banner_mobile' => [
                '1x' => 'assets/images/lcp/banner_mobile.webp',
                '2x' => 'assets/images/lcp/banner_mobile@2x.webp',
                'width' => 211,
                'height' => 306,
            ],
        ];
    }
}

if (!function_exists('hw_lcp_image_url')) {
    /**
     * @param 'banner_desktop'|'banner_mobile' $key
     * @param '1x'|'2x' $density
     */
    function hw_lcp_image_url($key, $density = '1x')
    {
        $map = hw_lcp_image_map();
        if (!isset($map[$key][$density])) {
            return '';
        }

        if (!function_exists('hw_asset_url')) {
            require_once __DIR__ . '/cache_buster.php';
        }

        return hw_asset_url($map[$key][$density]);
    }
}

if (!function_exists('hw_lcp_image_srcset')) {
    /**
     * Width-descriptor srcset (1x + 2x) for responsive LCP images.
     *
     * @param 'banner_desktop'|'banner_mobile' $key
     */
    function hw_lcp_image_srcset($key)
    {
        $map = hw_lcp_image_map();
        if (!isset($map[$key])) {
            return '';
        }

        $entry = $map[$key];
        $w1 = (int) $entry['width'];
        $w2 = $w1 * 2;

        return htmlspecialchars(
            hw_lcp_image_url($key, '1x') . ' ' . $w1 . 'w, ' .
            hw_lcp_image_url($key, '2x') . ' ' . $w2 . 'w',
            ENT_QUOTES,
            'UTF-8'
        );
    }
}

if (!function_exists('hw_lcp_image_sizes')) {
    /**
     * @param 'banner_desktop'|'banner_mobile' $key
     */
    function hw_lcp_image_sizes($key)
    {
        $map = hw_lcp_image_map();
        if (!isset($map[$key])) {
            return '';
        }

        return (int) $map[$key]['width'] . 'px';
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
