<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Download the HappierMe app';
$bodyClass = 'org-page org-flow org-flow-download';
$showCopyright = false;
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card org-download-card text-center">
    <h1 class="org-flow-title">Scan to download<br>the app</h1>
    <img class="org-qr" src="<?= hw_org_h($assets['qr']) ?>" alt="Scan QR code to download the HappierMe app" width="200" height="200">
    <div class="org-flow-rule"><span>OR</span></div>
    <div class="org-download-badges">
      <a href="<?= hw_org_h($assets['appstore_url']) ?>" target="_blank" rel="noopener">
        <img src="<?= hw_org_h(hw_asset_url($assets['appstore'])) ?>" alt="Download on the App Store" width="154" height="46">
      </a>
      <a href="<?= hw_org_h($assets['playstore_url']) ?>" target="_blank" rel="noopener">
        <img src="<?= hw_org_h(hw_asset_url($assets['playstore'])) ?>" alt="Get it on Google Play" width="154" height="46">
      </a>
    </div>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
