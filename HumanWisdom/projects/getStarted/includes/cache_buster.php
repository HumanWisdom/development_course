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
