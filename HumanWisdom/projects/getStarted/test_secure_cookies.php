<?php
/**
 * Test script to verify secure cookie configuration
 * This script tests that cookies are being set with proper security flags including Secure flag
 */

// Include the security configuration
require_once 'includes/security_config.php';

// Start output buffering to capture headers
ob_start();

// Start session to test session cookie security
session_start();

// Set a test cookie using the secure function
setSecureCookie('test_secure_cookie', 'test_value', time() + 3600);

// Get the output buffer to check headers
$output = ob_get_clean();

// Get all headers that were sent
$headers = headers_list();

echo "<h1>Secure Cookie Test Results</h1>";

// Check for Set-Cookie headers
$cookie_headers = array_filter($headers, function($header) {
    return stripos($header, 'Set-Cookie:') === 0;
});

echo "<h2>Cookie Headers Found:</h2>";
if (empty($cookie_headers)) {
    echo "<p style='color: red;'>❌ No Set-Cookie headers found!</p>";
} else {
    echo "<p style='color: green;'>✅ Found " . count($cookie_headers) . " Set-Cookie header(s)</p>";
    
    foreach ($cookie_headers as $header) {
        echo "<h3>Cookie Header:</h3>";
        echo "<pre>" . htmlspecialchars($header) . "</pre>";
        
        // Check for security flags
        $has_httponly = stripos($header, 'httponly') !== false;
        $has_secure = stripos($header, 'secure') !== false;
        $has_samesite = stripos($header, 'samesite') !== false;
        
        echo "<h4>Security Flags:</h4>";
        echo "<ul>";
        echo "<li>HttpOnly: " . ($has_httponly ? "✅ Present" : "❌ Missing") . "</li>";
        echo "<li>Secure: " . ($has_secure ? "✅ Present" : "❌ Missing") . "</li>";
        echo "<li>SameSite: " . ($has_samesite ? "✅ Present" : "❌ Missing") . "</li>";
        echo "</ul>";
        
        // Overall security assessment
        if ($has_httponly && $has_secure && $has_samesite) {
            echo "<p style='color: green; font-weight: bold;'>✅ Cookie is properly secured with all flags!</p>";
        } else {
            echo "<p style='color: red; font-weight: bold;'>❌ Cookie security is incomplete!</p>";
            if (!$has_httponly) echo "<p style='color: red;'>❌ Missing HttpOnly flag</p>";
            if (!$has_secure) echo "<p style='color: red;'>❌ Missing Secure flag</p>";
            if (!$has_samesite) echo "<p style='color: red;'>❌ Missing SameSite flag</p>";
        }
    }
}

// Test session cookie specifically
echo "<h2>Session Cookie Test:</h2>";
if (isset($_COOKIE[session_name()])) {
    echo "<p style='color: green;'>✅ Session cookie is set</p>";
    echo "<p>Session name: " . session_name() . "</p>";
    echo "<p>Session ID: " . session_id() . "</p>";
} else {
    echo "<p style='color: orange;'>⚠️ Session cookie not found in \$_COOKIE (this is normal if HttpOnly is set)</p>";
}

// Display current session information
echo "<h2>Session Information:</h2>";
echo "<p>Session status: " . session_status() . "</p>";
echo "<p>Session save path: " . session_save_path() . "</p>";
echo "<p>Session name: " . session_name() . "</p>";

// Display cookie parameters
echo "<h2>Session Cookie Parameters:</h2>";
$params = session_get_cookie_params();
echo "<ul>";
echo "<li>Lifetime: " . $params['lifetime'] . "</li>";
echo "<li>Path: " . $params['path'] . "</li>";
echo "<li>Domain: " . $params['domain'] . "</li>";
echo "<li>Secure: " . ($params['secure'] ? 'Yes' : 'No') . "</li>";
echo "<li>HttpOnly: " . ($params['httponly'] ? 'Yes' : 'No') . "</li>";
echo "<li>SameSite: " . $params['samesite'] . "</li>";
echo "</ul>";

echo "<h2>Security Recommendations:</h2>";
echo "<ul>";
if ($params['httponly']) {
    echo "<li style='color: green;'>✅ HttpOnly flag is properly set</li>";
} else {
    echo "<li style='color: red;'>❌ HttpOnly flag should be set</li>";
}
if ($params['secure']) {
    echo "<li style='color: green;'>✅ Secure flag is properly set</li>";
} else {
    echo "<li style='color: red;'>❌ Secure flag should be set</li>";
}
if ($params['samesite'] === 'Strict') {
    echo "<li style='color: green;'>✅ SameSite is set to Strict</li>";
} else {
    echo "<li style='color: orange;'>⚠️ SameSite should be set to Strict</li>";
}
echo "</ul>";

// Test HTTPS detection
echo "<h2>HTTPS Detection:</h2>";
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
    echo "<p style='color: green;'>✅ HTTPS is enabled</p>";
} else {
    echo "<p style='color: orange;'>⚠️ Not using HTTPS (Secure flag will still work but cookies won't be sent)</p>";
}

echo "<h2>Test Complete</h2>";
echo "<p>This test verifies that cookies are being set with proper security flags including the Secure flag to prevent XSS attacks and ensure cookies are only sent over HTTPS.</p>";
?>
