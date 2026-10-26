<?php
/**
 * Legacy entry — redirects to /free.php/{id} (or /free.php).
 */
require_once __DIR__ . '/includes/organisation_helper.php';

$id = hw_org_query_id();
if ($id === '') {
    $id = hw_org_default_id();
}
$target = hw_org_base() === '' ? '/free.php' : (hw_org_base() . '/free.php');
$target .= '/' . rawurlencode($id);

$query = $_GET;
unset($query['id']);
if (!empty($query)) {
    $target .= '?' . http_build_query($query);
}

header('Location: ' . $target, true, 301);
exit;
