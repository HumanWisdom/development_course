<?php
require_once __DIR__ . '/includes/organisation_helper.php';
hw_org_ensure_route_id();

$orgId = hw_org_path_id();
if ($orgId === '') {
    $orgId = hw_org_default_id();
}
$signupUrl = hw_org_base() . '/organisation-signup.php/' . rawurlencode($orgId);
$homeUrl = (hw_org_base() === '' ? '' : hw_org_base()) . '/index.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Your HappierMe journey starts here</title>
  <meta name="description" content="Choose the experience that's right for you. You can always change it later.">
  <link rel="icon" href="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/logo/logo_favicon_transparent.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <link href="<?= hw_org_h(hw_org_base() . '/assets/vendor/bootstrap-icons/bootstrap-icons.css') ?>" rel="stylesheet">
  <link href="<?= hw_org_h(hw_org_base() . '/assets/css/program-choice.css') ?>" rel="stylesheet">
</head>
<body class="program-choice">
  <header class="program-choice__header">
    <a class="program-choice__logo" href="<?= hw_org_h($homeUrl) ?>">
      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/logo_new.svg" width="190" height="44" alt="HappierMe">
    </a>
  </header>

  <main class="program-choice__main">
    <div class="program-choice__inner">
      <div class="program-choice__intro">
        <h1 class="program-choice__title">Your HappierMe journey starts here</h1>
        <p class="program-choice__subtitle">Choose the experience that's right for you. You can always change it later.</p>
      </div>

      <div class="program-choice__cards">
        <a class="program-card" href="<?= hw_org_h($signupUrl) ?>" data-program="teenagers">
          <img class="program-card__photo" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/webteen.svg" alt="Teenagers smiling together">
          <span class="program-card__copy">
            <span class="program-card__name">Teenagers (13+ yrs)</span>
            <span class="program-card__text">Understand your feelings, build confidence and navigate relationships.</span>
            <span class="program-card__cta">Get started <i class="bi bi-chevron-right" aria-hidden="true"></i></span>
          </span>
        </a>

        <a class="program-card" href="<?= hw_org_h($signupUrl) ?>" data-program="adults">
          <img class="program-card__photo" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/webad.svg" alt="HappierMe for Adults">
          <span class="program-card__copy">
            <span class="program-card__name">Adults (18+ yrs)</span>
            <span class="program-card__text">Understand yourself, manage emotions and build happier relationships.</span>
            <span class="program-card__cta">Get started <i class="bi bi-chevron-right" aria-hidden="true"></i></span>
          </span>
        </a>
      </div>
    </div>
  </main>

  <script>
    document.querySelectorAll("[data-program]").forEach(function (card) {
      card.addEventListener("click", function () {
        try {
          localStorage.setItem("hw_org_program", card.getAttribute("data-program"));
        } catch (e) {}
      });
    });
  </script>
</body>
</html>
