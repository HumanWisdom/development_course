<?php
/**
 * Inline minimal hero/LCP CSS so full stylesheets can load without blocking render.
 */
if (function_exists('hw_inline_critical_css')) {
    hw_inline_critical_css('assets/css/critical-lcp.css');
}
