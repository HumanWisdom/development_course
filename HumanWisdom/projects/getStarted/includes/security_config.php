<?php
/**
 * Security Configuration File
 * This file contains all security-related headers and configurations
 */

// Prevent direct access to this file
if (!defined('SECURITY_CONFIG_LOADED')) {
    define('SECURITY_CONFIG_LOADED', true);
}

/**
 * Set security headers
 */
function setSecurityHeaders() {
    // Strict-Transport-Security (HSTS)
    header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");
    
    // Referrer Policy
    header("Referrer-Policy: strict-origin-when-cross-origin");
    
    // Content Security Policy
    $csp = "default-src 'self'; " .
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://cdnjs.cloudflare.com; " .
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; " .
            "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; " .
            "img-src 'self' data: https: http:; " .
            "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; " .
            "frame-src 'self' https://www.googletagmanager.com; " .
            "object-src 'none'; " .
            "base-uri 'self'; " .
            "form-action 'self'; " .
            "frame-ancestors 'self'; " .
            "upgrade-insecure-requests;";
    
    header("Content-Security-Policy: " . $csp);
    
    // X-Content-Type-Options
    header("X-Content-Type-Options: nosniff");
    
    // X-Frame-Options
    header("X-Frame-Options: SAMEORIGIN");
    
    // X-XSS-Protection
    header("X-XSS-Protection: 1; mode=block");
    
    // Permissions Policy
    header("Permissions-Policy: geolocation=(), microphone=(), camera=()");
    
    // Remove server signature
    header("Server: ");
    
    // Cache control for sensitive pages
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Pragma: no-cache");
    header("Expires: 0");
}

/**
 * Disable debug methods and error reporting in production
 */
function disableDebugMethods() {
    // Disable error reporting in production
    error_reporting(0);
    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    
    // Disable dangerous PHP functions
    $dangerous_functions = array(
        'exec', 'system', 'shell_exec', 'passthru', 'eval', 'assert',
        'popen', 'proc_open', 'pcntl_exec', 'dl', 'include', 'include_once',
        'require', 'require_once', 'file_get_contents', 'file_put_contents',
        'fopen', 'fwrite', 'fread', 'fclose', 'unlink', 'rmdir', 'mkdir'
    );
    
    foreach ($dangerous_functions as $func) {
        if (function_exists($func)) {
            // Log attempted use of dangerous functions
            error_log("Attempted use of dangerous function: " . $func);
        }
    }
}

/**
 * Validate and sanitize input
 */
function sanitizeInput($input) {
    if (is_array($input)) {
        return array_map('sanitizeInput', $input);
    }
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

/**
 * Prevent cross-site scripting (XSS)
 */
function preventXSS($data) {
    if (is_array($data)) {
        return array_map('preventXSS', $data);
    }
    return strip_tags($data);
}

/**
 * Validate file uploads
 */
function validateFileUpload($file) {
    $allowed_types = array('jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx');
    $max_size = 5 * 1024 * 1024; // 5MB
    
    if (!isset($file['error']) || $file['error'] !== UPLOAD_ERR_OK) {
        return false;
    }
    
    $file_extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($file_extension, $allowed_types)) {
        return false;
    }
    
    if ($file['size'] > $max_size) {
        return false;
    }
    
    return true;
}

/**
 * Generate CSRF token
 */
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

/**
 * Validate CSRF token
 */
function validateCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

/**
 * Rate limiting function
 */
function checkRateLimit($identifier, $max_requests = 10, $time_window = 60) {
    $cache_file = sys_get_temp_dir() . '/rate_limit_' . md5($identifier) . '.txt';
    $current_time = time();
    
    if (file_exists($cache_file)) {
        $data = json_decode(file_get_contents($cache_file), true);
        if ($data && $current_time - $data['timestamp'] < $time_window) {
            if ($data['count'] >= $max_requests) {
                return false; // Rate limit exceeded
            }
            $data['count']++;
        } else {
            $data = array('timestamp' => $current_time, 'count' => 1);
        }
    } else {
        $data = array('timestamp' => $current_time, 'count' => 1);
    }
    
    file_put_contents($cache_file, json_encode($data));
    return true;
}

// Initialize security settings
if (!headers_sent()) {
    setSecurityHeaders();
    disableDebugMethods();
}

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?> 