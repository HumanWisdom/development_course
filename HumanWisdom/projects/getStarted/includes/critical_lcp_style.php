<?php
/**
 * Inline minimal hero/LCP CSS so full stylesheets can load without blocking render.
 */
if (!function_exists('hw_page_assets_flag')) {
    require_once __DIR__ . '/page_assets.php';
}
if (!function_exists('hw_inline_critical_css')) {
    require_once __DIR__ . '/cache_buster.php';
}

if (hw_page_assets_flag('css', 'critical_lcp') && function_exists('hw_inline_critical_css')) {
    hw_inline_critical_css('assets/css/critical-lcp.css');
    if (hw_page_assets_flag('css', 'header_in_critical')) {
        hw_inline_critical_css('assets/css/critical-header.css');
    }
}
