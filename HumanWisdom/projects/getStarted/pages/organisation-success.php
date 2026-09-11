<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'You’re all set | HappierMe';
$bodyClass = 'org-page org-flow';
$showCopyright = false;
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card org-success-card text-center">
    <?php if (!empty($assets['success_check'])) : ?>
      <img class="org-success-art" src="<?= hw_org_h($assets['success_check']) ?>" alt="" width="120" height="120">
    <?php else : ?>
      <div class="org-success-mark" aria-hidden="true"></div>
    <?php endif; ?>

    <h1 class="org-flow-title">You’re all set!</h1>
    <p class="org-lead mt-2">Your account has been created successfully</p>

    <div class="org-trial">
      <div class="org-trial-top">
        <?php if (!empty($assets['calendar'])) : ?>
          <img src="<?= hw_org_h($assets['calendar']) ?>" alt="" width="45" height="45">
        <?php else : ?>
          <span class="org-trial-icon-slot" aria-hidden="true"></span>
        <?php endif; ?>
        <p class="org-trial-copy">You have <strong><?= (int) $org['freeDays'] ?> days</strong> of free access</p>
      </div>
      <p>Trial ends on <?= hw_org_h($org['trialEnds']) ?></p>
    </div>

    <a class="org-btn org-btn-block" href="<?= hw_org_h(hw_org_page('organisation-continue')) ?>">Continue</a>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
