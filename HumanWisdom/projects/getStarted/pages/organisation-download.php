<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Download the HappierMe app';
$bodyClass = 'org-page org-flow';
$showCopyright = false;
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card text-center">
    <div class="org-download-badges">
      <a href="<?= hw_org_h($assets['appstore_url']) ?>" target="_blank" rel="noopener">
        <img src="<?= hw_org_h($assets['appstore']) ?>" alt="Download on the App Store">
      </a>
      <a href="<?= hw_org_h($assets['playstore_url']) ?>" target="_blank" rel="noopener">
        <img src="<?= hw_org_h($assets['playstore']) ?>" alt="Get it on Google Play">
      </a>
    </div>
    <div class="org-flow-rule"><span>OR</span></div>
    <h1 class="org-flow-title">Scan to download<br>the app</h1>
    <img class="org-qr" src="<?= hw_org_h($assets['qr']) ?>" alt="Scan QR code to download the HappierMe app">
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
