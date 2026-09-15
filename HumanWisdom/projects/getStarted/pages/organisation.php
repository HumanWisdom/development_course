<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Welcome to HappierMe';
$bodyClass = 'org-page org-page-landing';
$useOrgLogo = true;
$signupUrl = hw_org_page('organisation-signup');
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-welcome-top">
  <section class="org-hero-welcome">
    <div class="org-hero-welcome-inner">
      <div class="org-phone">
        <picture>
          <source media="(max-width: 820px)" type="image/webp"
            srcset="<?= hw_org_h(hw_asset_url($assets['hero_mobile'])) ?> 211w, <?= hw_org_h(hw_asset_url($assets['hero_mobile_2x'])) ?> 422w">
          <source media="(min-width: 821px)" type="image/webp"
            srcset="<?= hw_org_h(hw_asset_url($assets['hero_desktop'])) ?> 331w, <?= hw_org_h(hw_asset_url($assets['hero_desktop_2x'])) ?> 662w">
          <img src="<?= hw_org_h(hw_asset_url($assets['hero_desktop'])) ?>" alt="HappierMe app" width="331" height="480">
        </picture>
        <p class="org-phone-caption">for Adults &amp; Teenagers</p>
      </div>
      <div class="org-hero-copy">
        <div class="org-rating" role="group" aria-label="4.8 App store rating">
          <span class="org-rating-stars" aria-hidden="true">
            <span class="org-hero-star">★</span><span class="org-hero-star">★</span><span class="org-hero-star">★</span><span class="org-hero-star">★</span><span class="org-hero-star">★</span>
          </span>
          <span class="org-app-icon" aria-hidden="true"></span>
          <span class="org-rating-copy"><strong>4.8</strong> App store rating</span>
        </div>
        <h1>Welcome to<br> HappierMe!</h1>
        <p class="org-hero-sub">Create your account to get started</p>
        <a class="org-btn org-btn-sm org-btn-welcome" href="<?= hw_org_h($signupUrl) ?>">Create account</a>
      </div>
    </div>
  </section>

  <section class="org-trust">
    <div class="org-trust-inner">
      <div class="org-trust-item">
        <img src="<?= hw_org_h($assets['orcha']) ?>" alt="ORCHA Certified" width="60" height="45">
        <span>ORCHA approved for use in healthcare</span>
      </div>
      <div class="org-trust-item">
        <img src="<?= hw_org_h($assets['mind']) ?>" alt="Working with Mind" width="104" height="45">
        <span>Featured in Mind’s app library</span>
      </div>
    </div>
  </section>
  </div>

  <section class="org-quotes">
    <div class="org-quotes-inner">
      <div class="org-quote-mark d-lg-none">
        <img src="<?= hw_org_h($assets['quote']) ?>" alt="">
      </div>
      <div class="org-quotes-grid">
        <article class="org-card">
          <div class="org-card-head">
            <img src="<?= hw_org_h($assets['brenda']) ?>" alt="Brenda McChesney" width="80" height="80">
            <div>
              <h3>Brenda McChesney</h3>
              <p>Director, National Family Support Network, USA</p>
            </div>
          </div>
          <blockquote>“HappierMe is the best app I have found to assist entire families, and the root cause of their struggles, rather than just the symptoms.”</blockquote>
        </article>
        <article class="org-card">
          <div class="org-card-head">
            <img src="<?= hw_org_h($assets['dan']) ?>" alt="Dr Dan Reidenberg" width="80" height="80">
            <div>
              <h3>Dr Dan Reidenberg</h3>
              <p>Director, Mental Health Coalition, USA</p>
            </div>
          </div>
          <blockquote>HappierMe is a well designed, intuitive app that provides many useful tools and resources for anyone wanting to improve their life, resilience and wellbeing.</blockquote>
        </article>
      </div>
    </div>
  </section>

  <div class="org-bottom-cta d-lg-none">
    <a class="org-btn org-btn-welcome" href="<?= hw_org_h($signupUrl) ?>">Create account</a>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
