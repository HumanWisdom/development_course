<?php

if (!function_exists('hw_asset_url')) {
    /**
     * Append filemtime as a cache-busting query param for local assets.
     */
    function hw_asset_url($assetPath)
    {
        if (!is_string($assetPath) || $assetPath === '') {
            return $assetPath;
        }

        if (preg_match('#^(https?:)?//#i', $assetPath)) {
            return $assetPath;
        }

        $basePath = explode('?', $assetPath, 2)[0];
        $normalizedPath = preg_replace('#^(\./|\.\./)+#', '', ltrim($basePath, '/'));
        $fullPath = realpath(__DIR__ . '/../' . $normalizedPath);

        if ($fullPath === false || !is_file($fullPath)) {
            return $assetPath;
        }

        $version = filemtime($fullPath);
        $separator = strpos($assetPath, '?') !== false ? '&' : '?';

        return $assetPath . $separator . 'v=' . $version;
    }
}

if (!function_exists('hw_defer_stylesheet')) {
    /**
     * Load a stylesheet without blocking first paint (preload + onload swap).
     */
    function hw_defer_stylesheet($assetPath)
    {
        $href = function_exists('hw_asset_url') ? hw_asset_url($assetPath) : $assetPath;
        $safeHref = htmlspecialchars($href, ENT_QUOTES, 'UTF-8');
        echo '<link rel="preload" href="' . $safeHref . '" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">' . "\n";
        echo '<noscript><link rel="stylesheet" href="' . $safeHref . '"></noscript>' . "\n";
    }
}

if (!function_exists('hw_inline_critical_css')) {
    /**
     * Inline a local CSS file for above-the-fold / LCP (non-blocking).
     */
    function hw_inline_critical_css($assetPath)
    {
        $normalizedPath = preg_replace('#^(\./|\.\./)+#', '', ltrim($assetPath, '/'));
        $fullPath = realpath(__DIR__ . '/../' . $normalizedPath);

        if ($fullPath === false || !is_file($fullPath)) {
            return;
        }

        $css = file_get_contents($fullPath);
        if ($css === false || $css === '') {
            return;
        }

        echo '<style>' . $css . '</style>' . "\n";
    }
}
