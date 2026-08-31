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

if (!function_exists('hw_lcp_image_path')) {
    /**
     * @param 'banner_desktop'|'banner_mobile' $key
     * @param '1x'|'2x' $density
     */
    function hw_lcp_image_path($key, $density = '1x')
    {
        $map = hw_lcp_image_map();
        if (!isset($map[$key][$density])) {
            return null;
        }

        $relativePath = $map[$key][$density];
        $fullPath = realpath(__DIR__ . '/../' . ltrim($relativePath, '/'));

        return ($fullPath !== false && is_file($fullPath)) ? $fullPath : null;
    }
}

if (!function_exists('hw_lcp_image_version')) {
    function hw_lcp_image_version($key, $density = '1x')
    {
        $fullPath = hw_lcp_image_path($key, $density);
        return $fullPath ? (int) filemtime($fullPath) : 0;
    }
}

if (!function_exists('hw_lcp_image_url')) {
    /**
     * Versioned static WebP (served directly by the web server — faster than PHP proxy).
     *
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

if (!function_exists('hw_lcp_absolute_url')) {
    function hw_lcp_absolute_url($url)
    {
        if ($url === '' || preg_match('#^https?://#i', $url)) {
            return $url;
        }

        $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        $host = $_SERVER['HTTP_HOST'] ?? 'happierme.app';
        $base = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/'));
        $base = ($base === '/' || $base === '.') ? '' : rtrim($base, '/');

        if ($url[0] === '/') {
            return $scheme . '://' . $host . $url;
        }

        return $scheme . '://' . $host . $base . '/' . ltrim($url, '/');
    }
}

if (!function_exists('hw_lcp_send_preload_headers')) {
    /**
     * HTTP Link preload hints — earliest possible LCP discovery (before HTML body).
     */
    function hw_lcp_send_preload_headers()
    {
        if (headers_sent()) {
            return;
        }

        $desktop = hw_lcp_image_url('banner_desktop', '1x');
        $mobile = hw_lcp_image_url('banner_mobile', '1x');

        if ($desktop !== '') {
            header(
                'Link: <' . hw_lcp_absolute_url($desktop) . '>; rel=preload; as=image; type=image/webp; media="(min-width: 821px)"; fetchpriority=high',
                false
            );
        }
        if ($mobile !== '') {
            header(
                'Link: <' . hw_lcp_absolute_url($mobile) . '>; rel=preload; as=image; type=image/webp; media="(max-width: 820px)"; fetchpriority=high',
                false
            );
        }
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
