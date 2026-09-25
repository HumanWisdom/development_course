<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'You’re all set | HappierMe';
$bodyClass = 'org-page org-flow org-flow-success';
$showCopyright = false;
$freeDays = (int) $org['freeDays'];
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card org-success-card">
    <img class="org-success-art" src="<?= hw_org_h($assets['success_check']) ?>" alt="" width="171" height="100">

    <div class="org-success-heading">
      <h1 class="org-flow-title">You’re all set!</h1>
      <p class="org-lead">Your account has been created successfully</p>
    </div>

    <div class="org-trial">
      <div class="org-trial-top">
        <img src="<?= hw_org_h($assets['calendar']) ?>" alt="" width="80" height="80">
        <p class="org-trial-copy">
          <span>You have</span>
          <strong><?= $freeDays ?> days of</strong>
          <span>free access</span>
        </p>
      </div>
      <p class="org-trial-ends">Trial ends on <?= hw_org_h($org['trialEnds']) ?></p>
    </div>

    <a class="org-btn org-btn-block" href="<?= hw_org_h(hw_org_page('organisation-continue')) ?>">Continue</a>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
