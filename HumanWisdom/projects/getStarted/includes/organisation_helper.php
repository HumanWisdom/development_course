<?php
/**
 * Organisation campaign pages — shared helpers.
 * Images reuse the same CDN files as index, education, healthcare, mind, and signup.
 */
require_once __DIR__ . '/security_config.php';
require_once __DIR__ . '/api_config.php';
require_once __DIR__ . '/media_config.php';
require_once __DIR__ . '/cache_buster.php';

if (!function_exists('hw_org_base')) {
    function hw_org_base()
    {
        if (!empty($GLOBALS['HW_ORG_BASE'])) {
            return rtrim((string) $GLOBALS['HW_ORG_BASE'], '/');
        }
        $script = str_replace('\\', '/', $_SERVER['SCRIPT_NAME'] ?? '');
        return preg_match('#/pages/#', $script) ? '..' : '.';
    }
}

if (!function_exists('hw_org_sanitize_id')) {
    function hw_org_sanitize_id($id)
    {
        return preg_replace('/[^a-zA-Z0-9_-]/', '', trim((string) $id));
    }
}

if (!function_exists('hw_org_query_id')) {
    /** OrganizationId from ?id= only (empty when the query param is absent). */
    function hw_org_query_id()
    {
        if (!isset($_GET['id'])) {
            return '';
        }
        return hw_org_sanitize_id($_GET['id']);
    }
}

if (!function_exists('hw_org_id')) {
    /**
     * Resolved OrganizationId for the flow:
     * query param → session (from a prior Adv/landing visit) → default.
     */
    function hw_org_id()
    {
        $id = hw_org_query_id();
        if ($id === '' && !empty($_SESSION['hw_org_id'])) {
            $id = hw_org_sanitize_id($_SESSION['hw_org_id']);
        }
        if ($id === '') {
            $id = 'org-humanwisdom';
        }
        $_SESSION['hw_org_id'] = $id;
        return $id;
    }
}

if (!function_exists('hw_org_defaults')) {
    function hw_org_defaults($id = 'org-humanwisdom')
    {
        $end = new DateTime('today');
        $end->modify('+7 days');
        return [
            'id' => $id,
            'name' => 'HappierMe',
            'logo' => hw_org_cdn_assets()['logo_default'],
            'freeDays' => 7,
            'isActive' => 1,
            'trialEnds' => $end->format('j M Y'),
        ];
    }
}

if (!function_exists('hw_org_qs')) {
    /**
     * Build a query string. Pass $withId=true only for Adv / organisation landing
     * (other flow pages keep OrganizationId in session, not the URL).
     */
    function hw_org_qs($extra = [], $withId = false)
    {
        $params = $extra;
        if ($withId) {
            $params = array_merge(['id' => hw_org_id()], $params);
        }
        if (empty($params)) {
            return '';
        }
        return '?' . http_build_query($params);
    }
}

if (!function_exists('hw_org_page')) {
    /**
     * @param bool $withId Include ?id=… — true for organisation-Adv / organisation only
     */
    function hw_org_page($name, $extra = [], $withId = false)
    {
        $base = hw_org_base();
        $file = $name . '.php' . hw_org_qs($extra, $withId);
        if ($base === '..') {
            return $file;
        }
        return $file;
    }
}

if (!function_exists('hw_org_cdn_assets')) {
    function hw_org_cdn_assets()
    {
        $cdn = HW_CDN_ORIGIN;
        $s3 = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com';
        return [
            'logo_default' => $cdn . '/website/Logo_Only.svg',
            'hero_desktop' => hw_org_base() . '/assets/images/lcp/banneraug.webp',
            'hero_desktop_2x' => hw_org_base() . '/assets/images/lcp/banneraug@2x.webp',
            'hero_mobile' => hw_org_base() . '/assets/images/lcp/banner_mobile.webp',
            'hero_mobile_2x' => hw_org_base() . '/assets/images/lcp/banner_mobile@2x.webp',
            'orcha' => $cdn . '/website/svgs/orcha_certifie.svg',
            'mind' => $cdn . '/website/working_with_mind.svg',
            'star' => $cdn . '/website/star_vector.svg',
            'brenda' => $cdn . '/assets/webp/Brenda+McChesney.webp',
            'dan' => $cdn . '/assets/webp/testimonial_dan_reidenberg.webp',
            'quote' => $cdn . '/assets/webp/quatation_new.svg',
            'feel' => $s3 . '/website/svgs/heart_feel.svg',
            'relationships' => $s3 . '/website/svgs/build_better.svg',
            'life' => $s3 . '/website/svgs/handle_better.svg',
            'icon_heart' => $s3 . '/website/svgs/heart_feel.svg',
            'icon_hearts' => $s3 . '/website/svgs/build_better.svg',
            'icon_target' => $s3 . '/website/svgs/handle_better.svg',
            'user' => $s3 . '/website/svgs/web_form_user.svg',
            'mail' => $s3 . '/website/svgs/web_form_mail.svg',
            'eye' => $s3 . '/assets/svgs/v1_3/password_hide.svg',
            'eye_show' => $s3 . '/assets/svgs/v1_3/password_show.svg',
            'tick' => $s3 . '/assets/svgs/v1_3/tick_white.svg',
            'success_check' => '',
            'calendar' => $s3 . '/website/svgs/calender.svg',
            'appstore' => hw_org_base() . '/assets/svgs/org_appstore_black.svg',
            'playstore' => hw_org_base() . '/assets/svgs/org_playstore_black.svg',
            'qr' => $s3 . '/website/webp/scan.webp',
            'devices' => $s3 . '/website/webp/Isolation_Mode.webp',
            'devices_m' => $s3 . '/website/svgs/Isolation_Mobile.svg',
            'terms' => 'https://happierme.app/pages/terms_conditions.php',
            'privacy' => 'https://happierme.app/pages/privacy_policy.php',
            'appstore_url' => 'https://apps.apple.com/in/app/humanwisdom/id1588535567',
            'playstore_url' => 'https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US',
            'onelink' => 'https://onelink.to/hsnt8b',
            'web_app' => '/',
            'login' => hw_org_base() === '..' ? 'splash_options.php' : 'pages/splash_options.php',
        ];
    }
}

if (!function_exists('hw_org_logo_url')) {
    function hw_org_logo_url($logoUrl)
    {
        $assets = hw_org_cdn_assets();
        $logoUrl = trim((string) $logoUrl);
        if ($logoUrl === '') {
            return $assets['logo_default'];
        }
        if (preg_match('#^https?://#i', $logoUrl)) {
            return $logoUrl;
        }
        return HW_CDN_ORIGIN . '/' . ltrim($logoUrl, '/');
    }
}

if (!function_exists('hw_org_http_get')) {
    /** GET JSON from API — prefers cURL (file_get_contents often blocked / fails SSL). */
    function hw_org_http_get($url)
    {
        if (function_exists('curl_init')) {
            $ch = curl_init($url);
            curl_setopt_array($ch, [
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_CONNECTTIMEOUT => 5,
                CURLOPT_TIMEOUT => 8,
                CURLOPT_HTTPHEADER => [
                    'Accept: application/json',
                    'User-Agent: HappierMe-Website/1.0',
                ],
            ]);
            $raw = curl_exec($ch);
            $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            if ($raw !== false && $code >= 200 && $code < 300) {
                return $raw;
            }
            return '';
        }

        $ctx = stream_context_create([
            'http' => [
                'timeout' => 8,
                'ignore_errors' => true,
                'header' => "Accept: application/json\r\nUser-Agent: HappierMe-Website/1.0\r\n",
            ],
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true,
            ],
        ]);
        $raw = @file_get_contents($url, false, $ctx);
        return is_string($raw) ? $raw : '';
    }
}

if (!function_exists('hw_org_fetch')) {
    /**
     * Loads org branding for the campaign pages.
     * Calls GET /api/GetOrganization/{OrganizationId} ONLY when ?id= is present;
     * otherwise reuses session cache / defaults (no API call).
     */
    function hw_org_fetch($id = null)
    {
        $queryId = hw_org_query_id();
        $forceApi = ($id !== null && $id !== '');

        // No query param and no explicit id → do not hit the API
        if (!$forceApi && $queryId === '') {
            if (!empty($_SESSION['hw_org_data']) && is_array($_SESSION['hw_org_data'])) {
                return $_SESSION['hw_org_data'];
            }
            return hw_org_defaults(hw_org_id());
        }

        $id = hw_org_sanitize_id($forceApi ? $id : $queryId);
        if ($id === '') {
            return hw_org_defaults(hw_org_id());
        }

        $_SESSION['hw_org_id'] = $id;

        $api = rtrim(hw_api_config()['apiBase'], '/');
        $url = $api . '/GetOrganization/' . rawurlencode($id);
        $raw = hw_org_http_get($url);
        $row = [];
        if ($raw !== '') {
            $decoded = json_decode($raw, true);
            if (is_array($decoded)) {
                $row = isset($decoded[0]) && is_array($decoded[0]) ? $decoded[0] : $decoded;
            }
        }

        $freeDays = isset($row['FreeDays_Count']) ? (int) $row['FreeDays_Count'] : 0;
        if ($freeDays <= 0) {
            $freeDays = 7;
        }

        $end = new DateTime('today');
        $end->modify('+' . $freeDays . ' days');

        $org = [
            'id' => $id,
            'name' => !empty($row['OrganizationName']) ? (string) $row['OrganizationName'] : 'HappierMe',
            'logo' => hw_org_logo_url($row['LogoUrl'] ?? ''),
            'freeDays' => $freeDays,
            'isActive' => isset($row['IsActive']) ? (int) $row['IsActive'] : 1,
            'trialEnds' => $end->format('j M Y'),
        ];

        $_SESSION['hw_org_data'] = $org;
        return $org;
    }
}

if (!function_exists('hw_org_h')) {
    function hw_org_h($value)
    {
        return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
    }
}
