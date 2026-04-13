<?php
/**
 * Security Configuration File
 * This file contains all security-related headers and configurations
 */

// Configure secure session cookie parameters before starting session
function configureSecureSession() {
    // Set secure session cookie parameters
    $cookie_params = session_get_cookie_params();
    session_set_cookie_params([
        'lifetime' => $cookie_params['lifetime'],
        'path' => $cookie_params['path'],
        'domain' => $cookie_params['domain'],
        'secure' => true,  // Only send cookie over HTTPS
        'httponly' => true,  // Prevent JavaScript access to session cookie
        'samesite' => 'Strict'  // Prevent CSRF attacks
    ]);
}

// Configure secure session before starting
configureSecureSession();

// Start session immediately to avoid "headers already sent" error
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

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
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://cdnjs.cloudflare.com https://www.youtube.com https://s.ytimg.com https://code.jquery.com https://kit.fontawesome.com; " .
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://www.youtube.com; " .
            "font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://ka-f.fontawesome.com; " .
            "img-src 'self' data: https: http: https://www.youtube.com https://i.ytimg.com https://s.ytimg.com; " .
            "media-src 'self' https://d1tenzemoxuh75.cloudfront.net; " .
            "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.youtube.com https://ipapi.co https://analytics.google.com https://www.humanwisdom.info https://staging.humanwisdom.info https://ka-f.fontawesome.com; " .
            "frame-src 'self' https://www.googletagmanager.com https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://www.youtube-nocookie.com; " .
            "child-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com; " .
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
    header("Cache-Control: public, max-age=2592000");
    // header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    // header("Pragma: no-cache");
    // header("Expires: 0");
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

/**
 * Set secure cookie with proper flags
 * @param string $name Cookie name
 * @param string $value Cookie value
 * @param int $expire Expiration time (0 for session cookie)
 * @param string $path Cookie path
 * @param string $domain Cookie domain
 * @param bool $secure Whether cookie should only be sent over HTTPS
 * @param bool $httponly Whether cookie should be HTTP only
 * @param string $samesite SameSite attribute ('Strict', 'Lax', or 'None')
 * @return bool True on success, false on failure
 */
function setSecureCookie($name, $value, $expire = 0, $path = '/', $domain = '', $secure = true, $httponly = true, $samesite = 'Strict') {
    // Build the cookie string with secure parameters
    $cookie_string = $name . '=' . urlencode($value);
    
    if ($expire > 0) {
        $cookie_string .= '; expires=' . gmdate('D, d M Y H:i:s T', $expire);
    }
    
    if ($path) {
        $cookie_string .= '; path=' . $path;
    }
    
    if ($domain) {
        $cookie_string .= '; domain=' . $domain;
    }
    
    if ($secure) {
        $cookie_string .= '; secure';
    }
    
    if ($httponly) {
        $cookie_string .= '; httponly';
    }
    
    if ($samesite) {
        $cookie_string .= '; samesite=' . $samesite;
    }
    
    // Set the cookie using header()
    return header('Set-Cookie: ' . $cookie_string, false);
}

/**
 * Delete a secure cookie
 * @param string $name Cookie name
 * @param string $path Cookie path
 * @param string $domain Cookie domain
 * @return bool True on success, false on failure
 */
function deleteSecureCookie($name, $path = '/', $domain = '') {
    return setSecureCookie($name, '', time() - 3600, $path, $domain, true, true, 'Strict');
}

// Initialize security settings
if (!headers_sent()) {
    setSecurityHeaders();
    disableDebugMethods();
}
?> 