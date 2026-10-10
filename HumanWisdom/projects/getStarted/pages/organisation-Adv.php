<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$copy = hw_org_copy($org);
$pageTitle = 'Exclusive offer | HappierMe';
$bodyClass = 'org-page org-page-adv';
$showCopyright = true;
$landingUrl = hw_org_page('organisation');
$partnerLogoSlot = true;
$benefits = [
    ['icon' => $assets['icon_heart'], 'n' => 1],
    ['icon' => $assets['icon_hearts'], 'n' => 2],
    ['icon' => $assets['icon_target'], 'n' => 3],
];
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <section class="org-hero-offer">
    <div class="org-hero-offer-inner">
      <p class="org-kicker" data-org-copy="bannerText"><?= hw_org_h($copy['bannerText']) ?></p>
      <div class="org-hero-offer-copy">
        <h1>Free <span data-org-free-days><?= (int) $org['freeDays'] ?></span>-day access to the HappierMe app</h1>
        <p class="org-hero-note">(No credit card needed)</p>
      </div>
    </div>
  </section>

  <section class="org-benefits">
    <div class="org-benefits-list">
      <?php foreach ($benefits as $benefit) : ?>
        <article class="org-benefit">
          <div class="org-benefit-icon">
            <img src="<?= hw_org_h($benefit['icon']) ?>" alt="" width="120" height="120">
          </div>
          <div class="org-benefit-copy">
            <?php
            $iconTitle = $copy['iconTitle' . $benefit['n']];
            $iconTitleHtml = trim($iconTitle) === 'Feel better' ? 'Feel <br>better' : hw_org_h($iconTitle);
            ?>
            <h2 data-org-copy="iconTitle<?= $benefit['n'] ?>"><?= $iconTitleHtml ?></h2>
            <p data-org-copy="iconSubtitle<?= $benefit['n'] ?>"><?= hw_org_h($copy['iconSubtitle' . $benefit['n']]) ?></p>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </section>

  <div class="org-cta-row">
    <a class="org-btn org-btn-cta" href="<?= hw_org_h($landingUrl) ?>"><span class="org-btn-cta-label">Start your free <span data-org-free-days><?= (int) $org['freeDays'] ?></span> days</span></a>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
