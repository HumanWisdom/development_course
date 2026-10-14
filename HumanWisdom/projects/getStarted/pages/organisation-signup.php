<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Create your account | HappierMe';
$bodyClass = 'org-page org-flow org-flow-signup';
$showCopyright = false;
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card org-signup-card" id="org-signup-form">
    <div class="org-signup-head">
      <h1 class="org-flow-title">Welcome to HappierMe!</h1>
      <p class="org-signup-sub">Create your account and get started</p>
    </div>

    <div class="org-signup-connect">
      <div class="org-flow-rule"><span>Connect with</span></div>
      <div class="org-social-row">
        <button type="button" class="org-social-btn" aria-label="Continue with Google">
          <img src="<?= hw_org_h($assets['google']) ?>" alt="" width="24" height="24">
        </button>
        <button type="button" class="org-social-btn" aria-label="Continue with Facebook">
          <img src="<?= hw_org_h($assets['facebook']) ?>" alt="" width="24" height="24">
        </button>
        <button type="button" class="org-social-btn" aria-label="Continue with Apple">
          <img src="<?= hw_org_h($assets['apple']) ?>" alt="" width="24" height="24">
        </button>
      </div>
    </div>

    <div class="org-signup-fields">
      <div class="org-input">
        <input type="text" id="org-name" name="name" autocomplete="name" placeholder="Your name">
        <img class="org-icon-user" src="<?= hw_org_h($assets['user']) ?>" alt="" width="24" height="24">
      </div>
      <div class="org-input">
        <input type="email" id="org-email" name="email" autocomplete="email" placeholder="Your email">
        <img class="org-icon-mail" src="<?= hw_org_h($assets['mail']) ?>" alt="" width="20" height="17">
      </div>
      <div class="org-input">
        <input type="password" id="org-password" name="password" autocomplete="new-password" placeholder="Password">
        <button type="button" id="org-password-toggle" aria-label="Show password">
          <img class="org-icon-eye" src="<?= hw_org_h($assets['eye']) ?>" alt="" width="22" height="18">
        </button>
      </div>
      <div class="org-input">
        <input type="password" id="org-repeat" name="repeat" autocomplete="new-password" placeholder="Repeat Password">
        <button type="button" id="org-repeat-toggle" aria-label="Show password">
          <img class="org-icon-eye" src="<?= hw_org_h($assets['eye']) ?>" alt="" width="22" height="18">
        </button>
      </div>
    </div>

    <div class="org-signup-foot">
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
      <p class="org-signup-login">Already have an account? <a href="<?= hw_org_h($assets['login']) ?>">Login</a></p>
    </div>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
