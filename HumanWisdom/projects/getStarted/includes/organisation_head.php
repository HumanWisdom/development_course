<?php
if (!isset($org)) {
    $org = hw_org_fetch();
}
$assets = hw_org_cdn_assets();
$base = hw_org_base();
$pageTitle = isset($pageTitle) ? $pageTitle : 'HappierMe';
$bodyClass = isset($bodyClass) ? $bodyClass : 'org-page';
$cssPath = hw_asset_url($base . '/assets/css/organisation.css');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= hw_org_h($pageTitle) ?></title>
  <meta name="description" content="Create your HappierMe account and start your free access.">
  <link rel="icon" href="https://d1tenzemoxuh75.cloudfront.net/../assets/images/logo/logo_favicon_transparent.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="<?= hw_org_h($cssPath) ?>">
</head>
<body class="<?= hw_org_h($bodyClass) ?>">
