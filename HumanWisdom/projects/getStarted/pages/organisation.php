<?php
/**
 * Organisation campaign — all steps in one file (in-page navigation, URL stays put).
 * Entry wrappers set $orgStep (adv|landing|signup|otp|success|continue|download).
 */
require_once __DIR__ . '/../includes/organisation_helper.php';
hw_org_ensure_route_id();

if (!isset($orgStep) || $orgStep === '') {
    $orgStep = 'landing';
}

$allowedSteps = ['adv', 'landing', 'splash', 'signup', 'otp', 'success', 'continue', 'download'];
if (!in_array($orgStep, $allowedSteps, true)) {
    $orgStep = 'landing';
}

$org = hw_org_fetch();
$assets = hw_org_cdn_assets();
$social = hw_social_config();
$copy = hw_org_copy($org);
$freeDays = (int) $org['freeDays'];
$email = isset($email) ? $email : '';
$chooseUrl = (hw_org_base() === '' ? '' : hw_org_base()) . '/organisation-choose.php/' . rawurlencode($org['id']);

$stepMeta = [
    'adv' => [
        'title' => 'Exclusive offer | HappierMe',
        'body' => 'org-page org-page-adv',
        'copyright' => true,
        'partner' => true,
    ],
    'landing' => [
        'title' => 'Welcome to HappierMe',
        'body' => 'org-page org-page-landing',
        'copyright' => true,
        'partner' => true,
    ],
    'splash' => [
        'title' => 'Welcome to HappierMe',
        'body' => 'org-page org-flow org-flow-continue',
        'copyright' => false,
        'partner' => false,
    ],
    'signup' => [
        'title' => 'Create your account | HappierMe',
        'body' => 'org-page org-flow org-flow-signup',
        'copyright' => false,
        'partner' => false,
    ],
    'otp' => [
        'title' => 'Verify your email | HappierMe',
        'body' => 'org-page org-flow org-flow-otp',
        'copyright' => false,
        'partner' => false,
    ],
    'success' => [
        'title' => 'You’re all set | HappierMe',
        'body' => 'org-page org-flow org-flow-success',
        'copyright' => false,
        'partner' => false,
    ],
    'continue' => [
        'title' => 'Continue on web or download the app | HappierMe',
        'body' => 'org-page org-flow org-flow-continue',
        'copyright' => false,
        'partner' => false,
    ],
    'download' => [
        'title' => 'Download the HappierMe app',
        'body' => 'org-page org-flow org-flow-download',
        'copyright' => false,
        'partner' => false,
    ],
];

$meta = $stepMeta[$orgStep];
$pageTitle = $meta['title'];
$bodyClass = $meta['body'];
$showCopyright = $meta['copyright'];
$partnerLogoSlot = true; // always in DOM; visibility toggled per step in JS
$forceHidePartner = empty($meta['partner']);
$benefits = [
    ['icon' => $assets['icon_heart'], 'n' => 1],
    ['icon' => $assets['icon_hearts'], 'n' => 2],
    ['icon' => $assets['icon_target'], 'n' => 3],
];

include __DIR__ . '/../includes/organisation_head.php';
include __DIR__ . '/../includes/organisation_header.php';
?>
<main class="org-main" data-org-step="adv"<?= $orgStep === 'adv' ? '' : ' hidden' ?>>
  <section class="org-hero-offer">
    <div class="org-hero-offer-inner">
      <p class="org-kicker" data-org-copy="bannerText"><?= hw_org_h($copy['bannerText']) ?></p>
      <div class="org-hero-offer-copy">
        <h1>Free <span data-org-free-days><?= $freeDays ?></span>-day access to the HappierMe app</h1>
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
    <a class="org-btn org-btn-cta" href="#" data-org-go="landing"><span class="org-btn-cta-label">Start your free <span data-org-free-days><?= $freeDays ?></span> days</span></a>
  </div>
</main>

<main class="org-main" data-org-step="landing"<?= $orgStep === 'landing' ? '' : ' hidden' ?>>
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
            <img class="org-hero-star" src="<?= hw_org_h(hw_asset_url(hw_org_base() . '/assets/svgs/hero-rating-star.svg')) ?>" width="16" height="16" alt="">
            <img class="org-hero-star" src="<?= hw_org_h(hw_asset_url(hw_org_base() . '/assets/svgs/hero-rating-star.svg')) ?>" width="16" height="16" alt="">
            <img class="org-hero-star" src="<?= hw_org_h(hw_asset_url(hw_org_base() . '/assets/svgs/hero-rating-star.svg')) ?>" width="16" height="16" alt="">
            <img class="org-hero-star" src="<?= hw_org_h(hw_asset_url(hw_org_base() . '/assets/svgs/hero-rating-star.svg')) ?>" width="16" height="16" alt="">
            <img class="org-hero-star" src="<?= hw_org_h(hw_asset_url(hw_org_base() . '/assets/svgs/hero-rating-star.svg')) ?>" width="16" height="16" alt="">
          </span>
          <span class="org-app-icon" aria-hidden="true">
            <img src="<?= hw_org_h(hw_asset_url(hw_org_base() . '/assets/svgs/hero-rating-apple.svg')) ?>" width="17" height="20" alt="">
          </span>
          <span class="org-rating-copy"><strong>4.8</strong> App store rating</span>
        </div>
        <h1>Welcome to<br> HappierMe!</h1>
        <p class="org-hero-sub">Create your account to get started</p>
        <a class="org-btn org-btn-sm org-btn-welcome" href="<?= hw_org_h($chooseUrl) ?>">Create account</a>
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
        <img src="<?= hw_org_h(hw_asset_url(hw_org_base() . '/assets/svgs/org-quote.svg')) ?>" alt="" width="48" height="32">
      </div>
      <div class="org-quotes-grid">
        <article class="org-card">
          <div class="org-card-head">
            <img src="<?= hw_org_h($assets['martha']) ?>" alt="Martha Van Dam" width="80" height="80">
            <div>
              <h3>Martha Van Dam, </h3>
              <p>Psychotherapist</p>
            </div>
          </div>
          <blockquote>“HappierMe provides excellent, easy-to-use resources to help people understand and manage their emotional challenges. I use it myself and recommend it to my clients.”</blockquote>
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
    <a class="org-btn org-btn-welcome" href="<?= hw_org_h($chooseUrl) ?>">Create account</a>
  </div>
</main>

<main class="org-main" data-org-step="splash"<?= $orgStep === 'splash' ? '' : ' hidden' ?>>
  <div class="org-flow-card text-center">
    <h1 class="org-flow-title">Welcome to HappierMe!</h1>
    <p class="org-lead">Pick a section to get started</p>
    <div class="org-continue-actions">
      <a class="org-btn org-btn-block org-btn-outline" href="#" data-org-program="teenagers" data-org-go="signup">HappierMe for Teenagers</a>
      <a class="org-btn org-btn-block" href="#" data-org-program="adults" data-org-go="signup">HappierMe for Adults</a>
    </div>
  </div>
</main>

<main class="org-main" data-org-step="signup"<?= $orgStep === 'signup' ? '' : ' hidden' ?>>
  <div class="org-flow-card org-signup-card" id="org-signup-form">
    <div class="org-signup-head">
      <h1 class="org-flow-title">Welcome to HappierMe!</h1>
      <p class="org-signup-sub">Create your account and get started</p>
    </div>

    <div class="org-signup-connect">
      <div class="org-flow-rule"><span>Connect with</span></div>
      <div class="org-social-row" id="org-social">
        <div class="org-social-buttons">
          <button type="button" class="org-social-btn org-social-google" id="org-google-custom" aria-label="Continue with Google">
            <img src="<?= hw_org_h($assets['google']) ?>" alt="" width="24" height="24">
            <div id="org-google-btn" style="position:absolute;inset:0;width:100%;height:100%;opacity:0;overflow:hidden;"></div>
          </button>
          <button type="button" class="org-social-btn" id="org-facebook-btn" aria-label="Continue with Facebook">
            <img src="<?= hw_org_h($assets['facebook']) ?>" alt="" width="24" height="24">
          </button>
          <button type="button" class="org-social-btn" id="org-apple-btn" aria-label="Continue with Apple">
            <img src="<?= hw_org_h($assets['apple']) ?>" alt="" width="24" height="24">
          </button>
        </div>
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

<main class="org-main" data-org-step="otp"<?= $orgStep === 'otp' ? '' : ' hidden' ?>>
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

      <a class="org-otp-link org-otp-back" href="#" id="org-otp-back" data-org-go="signup">Back</a>
    </div>
  </div>
</main>

<main class="org-main" data-org-step="success"<?= $orgStep === 'success' ? '' : ' hidden' ?>>
  <div class="org-flow-card org-success-card">
    <img class="org-success-art" src="<?= hw_org_h($assets['success_check']) ?>" alt="" width="171" height="100">

    <div class="org-success-heading">
      <h1 class="org-flow-title">You’re all set!</h1>
      <p class="org-lead">Your account has been created successfully</p>
    </div>

    <div class="org-trial">
      <div class="org-trial-top">
        <img class="org-trial-icon" src="<?= hw_org_h($assets['calendar']) ?>" alt="" width="60" height="60">
        <p class="org-trial-copy">
          <span>You have</span>
          <span><strong><span data-org-free-days><?= $freeDays ?></span> days</strong> of</span>
          <span>free access</span>
        </p>
      </div>
      <p class="org-trial-ends">Trial ends on <span data-org-trial-ends><?= hw_org_h($org['trialEnds']) ?></span></p>
    </div>

    <a class="org-btn org-btn-block" href="#" data-org-go="continue">Continue</a>
  </div>
</main>

<main class="org-main" data-org-step="continue"<?= $orgStep === 'continue' ? '' : ' hidden' ?>>
  <div class="org-flow-card text-center">
    <h1 class="org-flow-title">Continue on web<br>or download the app</h1>
    <picture>
      <source media="(max-width: 767px)" srcset="<?= hw_org_h($assets['devices_m']) ?>">
      <img class="org-devices" src="<?= hw_org_h($assets['devices']) ?>" alt="Use HappierMe on web or the app">
    </picture>
    <div class="org-continue-actions">
      <a class="org-btn org-btn-block org-btn-outline" href="#" id="org-continue-to-app">Continue to App</a>
      <a class="org-btn org-btn-block" href="#" data-org-go="download">Download the App</a>
    </div>
    <p class="org-continue-note">Use the same sign-in to access the app</p>
  </div>
</main>

<main class="org-main" data-org-step="download"<?= $orgStep === 'download' ? '' : ' hidden' ?>>
  <div class="org-flow-card org-download-card text-center">
    <h1 class="org-flow-title org-download-heading">Scan to download<br>the app</h1>
    <img class="org-qr org-download-qr" src="<?= hw_org_h($assets['qr']) ?>" alt="Scan QR code to download the HappierMe app" width="200" height="200">
    <div class="org-flow-rule org-download-or"><span>OR</span></div>
    <div class="org-download-badges">
      <a href="<?= hw_org_h($assets['appstore_url']) ?>" target="_blank" rel="noopener">
        <img src="<?= hw_org_h(hw_asset_url($assets['appstore'])) ?>" alt="Download on the App Store" width="179" height="53">
      </a>
      <a href="<?= hw_org_h($assets['playstore_url']) ?>" target="_blank" rel="noopener">
        <img src="<?= hw_org_h(hw_asset_url($assets['playstore'])) ?>" alt="Get it on Google Play" width="179" height="53">
      </a>
    </div>
  </div>
</main>
<?php include __DIR__ . '/../includes/organisation_foot.php'; ?>
