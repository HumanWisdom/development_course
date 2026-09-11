<?php
require_once __DIR__ . '/../includes/organisation_helper.php';
$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$pageTitle = 'Verify your email | HappierMe';
$bodyClass = 'org-page org-flow';
$showCopyright = false;
$email = isset($_GET['email']) ? trim((string) $_GET['email']) : '';
include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main">
  <div class="org-flow-card">
    <h1 class="org-flow-title">Verify your email</h1>
    <p class="org-lead mt-3">We’ve sent a 6-digit code to <span id="org-otp-email"><?= hw_org_h($email) ?></span></p>

    <div class="org-otp" id="org-otp">
      <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 1" autocomplete="one-time-code">
      <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2">
      <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3">
      <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 4">
      <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 5">
      <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 6">
    </div>

    <p class="org-muted">Didn’t receive a code?</p>
    <a class="org-text-link" href="#" id="org-resend">Resend code</a>
    <p class="org-muted" id="org-otp-timer">(00:30)</p>
    <p class="org-error" id="org-otp-error"></p>
    <a class="org-text-link" href="<?= hw_org_h(hw_org_page('organisation-signup')) ?>" id="org-otp-back">Back</a>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
