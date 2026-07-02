<?php

/**
 * Page asset profiles for getStarted (lighter bundles on the homepage).
 *
 * Set $hw_vendor_profile = 'landing' before including vendor_header / vendor_footer.
 * Default is 'full' for all other pages.
 */
if (!function_exists('hw_vendor_profile')) {
    function hw_vendor_profile()
    {
        global $hw_vendor_profile;
        if (isset($hw_vendor_profile) && is_string($hw_vendor_profile) && $hw_vendor_profile !== '') {
            return $hw_vendor_profile;
        }
        $script = basename($_SERVER['SCRIPT_NAME'] ?? '');
        return $script === 'index.php' ? 'landing' : 'full';
    }
}

if (!function_exists('hw_is_landing_page')) {
    function hw_is_landing_page()
    {
        return hw_vendor_profile() === 'landing';
    }
}
