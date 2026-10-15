<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$social = hw_social_config();
$hasSocial = $social['googleClientId'] !== '' || $social['facebookAppId'] !== '' || $social['appleClientId'] !== '';
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

      <?php if ($hasSocial) : ?>
      <div class="org-social" id="org-social">
        <div class="org-flow-rule"><span>Or continue with</span></div>
        <div class="org-social-buttons">
          <?php if ($social['googleClientId'] !== '') : ?>
          <div class="org-social-google">
            <div id="org-google-btn"></div>
          </div>
          <?php endif; ?>
          <?php if ($social['facebookAppId'] !== '') : ?>
          <button type="button" class="org-social-btn" id="org-facebook-btn" aria-label="Continue with Facebook">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#1877F2" d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
          </button>
          <?php endif; ?>
          <?php if ($social['appleClientId'] !== '') : ?>
          <button type="button" class="org-social-btn" id="org-apple-btn" aria-label="Continue with Apple">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#000" d="M16.37 12.75c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.12zM13.79 5.12c.72-.87 1.2-2.07 1.07-3.27-1.03.04-2.28.69-3.02 1.55-.66.77-1.24 2-1.09 3.18 1.15.09 2.32-.58 3.04-1.46z"/></svg>
          </button>
          <?php endif; ?>
        </div>
      </div>
      <?php endif; ?>
      <p class="org-signup-login">Already have an account? <a href="<?= hw_org_h($assets['login']) ?>">Login</a></p>
    </div>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
