<?php

require_once __DIR__ . '/api_config.php';

/**
 * Social sign-in config for getStarted front-end (window.__HW_SOCIAL__).
 *
 * Environment variables:
 *   HW_GOOGLE_CLIENT_ID    — Google Identity Services OAuth client id
 *   HW_FACEBOOK_APP_ID     — Facebook app id
 *   HW_FACEBOOK_API_VERSION — Graph API version (default v18.0)
 *   HW_APPLE_CLIENT_ID     — Apple Services ID, e.g. humanwisdom.web.service
 *   HW_APPLE_REDIRECT_URI  — Apple form_post endpoint (default {apiBase}/verifyAppleToken_htmlAdults)
 *   HW_ADULTS_APP_URL      — Adults web app origin, e.g. https://happierme.app (default current origin)
 *
 * Each key is read from the process environment, then Apache SetEnv ($_SERVER),
 * then an INI file outside the webroot (HW_ENV_FILE, default /etc/humanwisdom/getstarted.env).
 * A provider whose key is unset is hidden on the page.
 */
if (!function_exists('hw_social_env_file')) {
    function hw_social_env_file()
    {
        static $values = null;
        if ($values !== null) {
            return $values;
        }
        $values = [];
        $path = getenv('HW_ENV_FILE');
        if (!is_string($path) || $path === '') {
            $path = '/etc/humanwisdom/getstarted.env';
        }
        if (@is_readable($path)) {
            $parsed = @parse_ini_file($path, false, INI_SCANNER_RAW);
            if (is_array($parsed)) {
                $values = $parsed;
            }
        }
        return $values;
    }
}

if (!function_exists('hw_social_env')) {
    function hw_social_env($name, $default = '')
    {
        $candidates = [getenv($name), $_SERVER[$name] ?? null, hw_social_env_file()[$name] ?? null];
        foreach ($candidates as $value) {
            if (is_string($value) && trim($value) !== '') {
                return trim($value, " \t\n\r\0\x0B\"'");
            }
        }
        return $default;
    }
}

if (!function_exists('hw_social_current_origin')) {
    function hw_social_current_origin()
    {
        $host = $_SERVER['HTTP_HOST'] ?? '';
        if ($host === '') {
            return '';
        }
        $proto = $_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '';
        if ($proto === '') {
            $proto = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        }
        return $proto . '://' . $host;
    }
}

if (!function_exists('hw_social_config')) {
    function hw_social_config()
    {
        static $cfg = null;
        if ($cfg !== null) {
            return $cfg;
        }

        $apiBase = rtrim(hw_api_config()['apiBase'], '/');

        $cfg = [
            'googleClientId' => hw_social_env('HW_GOOGLE_CLIENT_ID'),
            'facebookAppId' => hw_social_env('HW_FACEBOOK_APP_ID'),
            'facebookApiVersion' => hw_social_env('HW_FACEBOOK_API_VERSION', 'v18.0'),
            'appleClientId' => hw_social_env('HW_APPLE_CLIENT_ID'),
            'appleRedirectUri' => hw_social_env('HW_APPLE_REDIRECT_URI', $apiBase . '/verifyAppleToken_htmlAdults'),
            'adultsAppUrl' => rtrim(hw_social_env('HW_ADULTS_APP_URL', hw_social_current_origin()), '/'),
        ];
        return $cfg;
    }
}
