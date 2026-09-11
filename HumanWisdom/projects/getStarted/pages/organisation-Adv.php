<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Exclusive offer | HappierMe';
$bodyClass = 'org-page org-page-adv';
$useOrgLogo = true;
$showCopyright = true;
$signupUrl = hw_org_page('organisation-signup');
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <section class="org-hero-offer">
    <p class="org-kicker">Exclusive offer</p>
    <h1>Free <?= (int) $org['freeDays'] ?>-day access to the HappierMe app</h1>
    <p class="org-hero-note">(No credit card needed)</p>
  </section>

  <section class="org-benefits">
    <div class="org-benefits-list">
      <article class="org-benefit">
        <div class="org-benefit-icon">
          <img src="<?= hw_org_h(hw_asset_url($assets['icon_heart'])) ?>" alt="" width="30" height="30">
        </div>
        <div class="org-benefit-copy">
          <h2>Feel<br> better</h2>
          <p>Manage and improve wellbeing</p>
        </div>
      </article>
      <article class="org-benefit">
        <div class="org-benefit-icon">
          <img src="<?= hw_org_h(hw_asset_url($assets['icon_hearts'])) ?>" alt="" width="30" height="30">
        </div>
        <div class="org-benefit-copy">
          <h2>Build happier<br> relationships</h2>
          <p>Understand yourself and others better</p>
        </div>
      </article>
      <article class="org-benefit">
        <div class="org-benefit-icon">
          <img src="<?= hw_org_h(hw_asset_url($assets['icon_target'])) ?>" alt="" width="30" height="30">
        </div>
        <div class="org-benefit-copy">
          <h2>Handle life<br> better</h2>
          <p>Navigate challenges with greater confidence</p>
        </div>
      </article>
    </div>
  </section>

  <div class="org-cta-row">
    <a class="org-btn org-btn-cta" href="<?= hw_org_h($signupUrl) ?>">Start your free <?= (int) $org['freeDays'] ?> days</a>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
