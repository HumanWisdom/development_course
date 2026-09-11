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

if (!function_exists('hw_org_id')) {
    function hw_org_id()
    {
        $id = isset($_GET['id']) ? trim((string) $_GET['id']) : '';
        if ($id === '' && !empty($_SESSION['hw_org_id'])) {
            $id = (string) $_SESSION['hw_org_id'];
        }
        if ($id === '') {
            $id = 'org-humanwisdom';
        }
        $id = preg_replace('/[^a-zA-Z0-9_-]/', '', $id);
        if ($id !== '') {
            $_SESSION['hw_org_id'] = $id;
        }
        return $id !== '' ? $id : 'org-humanwisdom';
    }
}

if (!function_exists('hw_org_qs')) {
    function hw_org_qs($extra = [])
    {
        $params = array_merge(['id' => hw_org_id()], $extra);
        return '?' . http_build_query($params);
    }
}

if (!function_exists('hw_org_page')) {
    function hw_org_page($name, $extra = [])
    {
        $base = hw_org_base();
        $file = $name . '.php' . hw_org_qs($extra);
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
            'feel' => $cdn . '/website/feelBetter.svg',
            'relationships' => $s3 . '/website/svgs/inspire_relationships.svg',
            'life' => $cdn . '/website/svgs/life.svg',
            'icon_heart' => hw_org_base() . '/assets/svgs/org-icon-heart.svg',
            'icon_hearts' => hw_org_base() . '/assets/svgs/org-icon-hearts.svg',
            'icon_target' => hw_org_base() . '/assets/svgs/org-icon-target.svg',
            'user' => $s3 . '/website/svgs/web_form_user.svg',
            'mail' => $s3 . '/website/svgs/web_form_mail.svg',
            'eye' => $s3 . '/assets/svgs/v1_3/password_hide.svg',
            'eye_show' => $s3 . '/assets/svgs/v1_3/password_show.svg',
            'tick' => $s3 . '/assets/svgs/v1_3/tick_white.svg',
            'success_check' => '',
            'calendar' => '',
            'appstore' => $cdn . '/assets/svgs/v1_3/web_appstore.svg',
            'playstore' => $cdn . '/assets/svgs/v1_3/web_playstore.svg',
            'qr' => $s3 . '/website/webp/scan.webp',
            'devices' => $s3 . '/website/webp/Isolation_Mode.webp',
            'devices_m' => $s3 . '/website/svgs/Isolation_Mobile.svg',
            'terms' => 'https://happierme.app/pages/terms_conditions.php',
            'privacy' => 'https://happierme.app/pages/privacy_policy.php',
            'appstore_url' => 'https://apps.apple.com/in/app/humanwisdom/id1588535567',
            'playstore_url' => 'https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US',
            'onelink' => 'https://onelink.to/hsnt8b',
            'web_app' => '/adults/',
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

if (!function_exists('hw_org_fetch')) {
    function hw_org_fetch($id = null)
    {
        $id = $id ?: hw_org_id();
        $api = rtrim(hw_api_config()['apiBase'], '/');
        $url = $api . '/GetOrganization/' . rawurlencode($id);
        $ctx = stream_context_create([
            'http' => [
                'timeout' => 6,
                'ignore_errors' => true,
                'header' => "Accept: application/json\r\nUser-Agent: HappierMe-Website/1.0\r\n",
            ],
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true,
            ],
        ]);
        $raw = @file_get_contents($url, false, $ctx);
        $row = [];
        if (is_string($raw) && $raw !== '') {
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

        return [
            'id' => $id,
            'name' => !empty($row['OrganizationName']) ? (string) $row['OrganizationName'] : 'HappierMe',
            'logo' => hw_org_logo_url($row['LogoUrl'] ?? ''),
            'freeDays' => $freeDays,
            'isActive' => isset($row['IsActive']) ? (int) $row['IsActive'] : 1,
            'trialEnds' => $end->format('j M Y'),
        ];
    }
}

if (!function_exists('hw_org_h')) {
    function hw_org_h($value)
    {
        return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
    }
}
