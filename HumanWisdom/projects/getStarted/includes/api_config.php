<?php

/**
 * HumanWisdom API base URLs for getStarted front-end (window.__HW_API__).
 *
 * Override:
 *   HW_API_BASE_URL — full base including /api, e.g. https://www.humanwisdom.info/api
 *   HW_API_ENV — staging | production (only used when HW_API_BASE_URL is unset)
 *   HW_IP_LOOKUP_URL — geo lookup for pricing (default https://ipapi.co/json)
 */
if (!function_exists('hw_api_config')) {
    function hw_api_config()
    {
        static $cfg = null;
        if ($cfg !== null) {
            return $cfg;
        }

        $baseOverride = getenv('HW_API_BASE_URL');
        if (is_string($baseOverride) && $baseOverride !== '') {
            $apiBase = rtrim($baseOverride, '/');
        } else {
            $host = isset($_SERVER['HTTP_HOST']) ? strtolower($_SERVER['HTTP_HOST']) : '';
            $envFlag = getenv('HW_API_ENV');
            $useStaging = ($envFlag === 'staging')
                || (strpos($host, 'staging.') !== false)
                || ($host === 'localhost')
                || (strpos($host, '127.0.0.1') === 0);

            $apiBase = $useStaging
                ? 'https://staging.humanwisdom.info/api'
                : 'https://www.humanwisdom.info/api';
        }

        $ipLookup = getenv('HW_IP_LOOKUP_URL');
        if (!is_string($ipLookup) || $ipLookup === '') {
            $ipLookup = 'https://ipapi.co/json';
        }

        $cfg = [
            'apiBase' => $apiBase,
            'ipLookup' => $ipLookup,
        ];
        return $cfg;
    }
}
