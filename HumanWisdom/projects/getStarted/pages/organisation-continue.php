<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Continue on web or download the app | HappierMe';
$bodyClass = 'org-page org-flow';
$showCopyright = false;
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card text-center">
    <h1 class="org-flow-title">Continue on web<br>or download the app</h1>
    <picture>
      <source media="(max-width: 767px)" srcset="<?= hw_org_h($assets['devices_m']) ?>">
      <img class="org-devices" src="<?= hw_org_h($assets['devices']) ?>" alt="Use HappierMe on web or the app">
    </picture>
    <a class="org-btn org-btn-block org-btn-outline mb-3" href="<?= hw_org_h($assets['web_app']) ?>">Continue to Web App</a>
    <a class="org-btn org-btn-block" href="<?= hw_org_h(hw_org_page('organisation-download')) ?>">Download the App</a>
    <p class="org-continue-note">Use the same sign-in to access the app</p>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
