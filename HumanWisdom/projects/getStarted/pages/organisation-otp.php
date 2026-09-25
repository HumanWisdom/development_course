<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Verify your email | HappierMe';
$bodyClass = 'org-page org-flow org-flow-otp';
$showCopyright = false;
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card org-otp-card">
    <div class="org-otp-card-inner">
      <div class="org-otp-top">
        <div class="org-otp-heading">
          <h1 class="org-flow-title">Verify your email</h1>
          <p class="org-lead">We’ve sent a 6-digit code to <span id="org-otp-email"><?= hw_org_h($email) ?></span></p>
        </div>

        <div class="org-otp" id="org-otp">
          <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 1" autocomplete="one-time-code">
          <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2">
          <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3">
          <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 4">
          <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 5">
          <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 6">
        </div>
      </div>

      <div class="org-otp-help">
        <p class="org-otp-help-copy">
          Didn’t receive the code?<br>
          Remember to check your spam folder too
        </p>
        <div class="org-otp-resend">
          <a class="org-otp-link" href="#" id="org-resend">Resend code</a>
          <p class="org-otp-timer" id="org-otp-timer">(00:30)</p>
        </div>
        <p class="org-error" id="org-otp-error"></p>
      </div>

      <a class="org-otp-link org-otp-back" href="<?= hw_org_h(hw_org_page('organisation-signup')) ?>" id="org-otp-back">Back</a>
    </div>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
