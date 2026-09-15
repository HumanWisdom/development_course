<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Create your account | HappierMe';
$bodyClass = 'org-page org-flow';
$showCopyright = false;
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card" id="org-signup-form">
    <h1 class="org-flow-title">Create your account</h1>
    <div class="org-flow-rule"><span>Let’s get started</span></div>

    <div class="org-input">
      <input type="text" id="org-name" name="name" autocomplete="name" placeholder="Your name">
      <img src="<?= hw_org_h($assets['user']) ?>" alt="">
    </div>
    <div class="org-input">
      <input type="email" id="org-email" name="email" autocomplete="email" placeholder="Your email">
      <img src="<?= hw_org_h($assets['mail']) ?>" alt="">
    </div>
    <div class="org-input">
      <input type="password" id="org-password" name="password" autocomplete="new-password" placeholder="Password">
      <button type="button" id="org-password-toggle" aria-label="Show password">
        <img src="<?= hw_org_h($assets['eye']) ?>" alt="">
      </button>
    </div>
    <div class="org-input">
      <input type="password" id="org-repeat" name="repeat" autocomplete="new-password" placeholder="Repeat Password">
      <button type="button" id="org-repeat-toggle" aria-label="Show password">
        <img src="<?= hw_org_h($assets['eye']) ?>" alt="">
      </button>
    </div>

    <label class="org-check" for="org-terms">
      <input id="org-terms" type="checkbox">
      <i></i>
      <span>I agree to the <a href="<?= hw_org_h($assets['terms']) ?>" target="_blank" rel="noopener">Terms of use</a></span>
    </label>
    <label class="org-check" for="org-privacy">
      <input id="org-privacy" type="checkbox">
      <i></i>
      <span>I agree to the <a href="<?= hw_org_h($assets['privacy']) ?>" target="_blank" rel="noopener">Privacy policy</a></span>
    </label>

    <p class="org-error" id="org-signup-error"></p>
    <button type="button" class="org-btn org-btn-block" id="org-continue-btn" disabled>Continue</button>
    <p class="org-login-link">Already have an account? <a href="<?= hw_org_h($assets['login']) ?>">Login</a></p>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
