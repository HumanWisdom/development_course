<?php
/**
 * Fixed App Store / Google Play download banner (mobile + desktop).
 * Include once per page; set $hw_omit_sticky_banner = true to skip (e.g. index chunk footer).
 */
if (!empty($hw_omit_sticky_banner)) {
  return;
}
if (!empty($GLOBALS['hw_sticky_store_banner_rendered'])) {
  return;
}
$GLOBALS['hw_sticky_store_banner_rendered'] = true;
?>
<!-- sticky rating banner - DESKTOP VERSION -->
<div id="closeableElementDesktop" class="sticky_rating_banner display_df_none display_m_none">
  <div class="sticky_banner_inner">

    <div class="banner_close">
      <a class="" href="javascript:void(0);" onclick="closeElement();">
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/webpage_close_grey.svg" class="img-responsive" alt="close">
      </a>
    </div>

    <div class="banner_logo">
      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/webpage_footer_hwp.svg" class="img-responsive" alt="banner">
    </div>

    <div class="banner_ratings">
      <div class="rating_row">
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_appstore.svg" class="rating_icon" alt="app">
        <span class="rating_text">App store</span>
        <span class="rating_score">4.8</span>
        <span class="rating_star"><i class="fa fa-star"></i></span>
      </div>
      <div class="rating_row">
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg" class="rating_icon" alt="playstore">
        <span class="rating_text">Google Play</span>
        <span class="rating_score">4.8</span>
        <span class="rating_star"><i class="fa fa-star"></i></span>
      </div>
    </div>

    <div class="banner_button">
      <a href="https://onelink.to/hsnt8b" class="">
        <button class="btn_download">Download app</button>
      </a>
    </div>

  </div>
</div>
<!-- /sticky rating banner - DESKTOP VERSION -->

<!-- sticky rating banner - MOBILE VERSION -->
<div id="closeableElement" class="sticky_rating_banner display_df_none display_d_none">
  <div class="sticky_banner_inner">

    <div class="banner_close_logo">
      <div class="banner_close">
        <a class="" href="javascript:void(0);" onclick="closeElement();">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/webpage_close_grey.svg" class="img-responsive" alt="close">
        </a>
      </div>

      <div class="banner_logo">
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/happiermeicon_mobile.svg" alt="banner">
      </div>
    </div>

    <div class="banner_ratings">
      <div class="rating_row">
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_appstore.svg" class="rating_icon" alt="app">
        <span class="rating_text">App store</span>
        <span class="rating_score">4.8</span>
        <span class="rating_star"><img class="pb_4px" src="https://d1tenzemoxuh75.cloudfront.net/website/star_vector.svg" alt="star"></span>
      </div>
      <div class="rating_row">
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg" class="rating_icon" alt="playstore">
        <span class="rating_text">Google Play</span>
        <span class="rating_score">4.8</span>
        <span class="rating_star"><img class="pb_4px" src="https://d1tenzemoxuh75.cloudfront.net/website/star_vector.svg" alt="star"></span>
      </div>
    </div>

    <div class="banner_button">
      <a href="https://onelink.to/hsnt8b" class="">
        <button class="btn_download">Download app</button>
      </a>
    </div>

  </div>
</div>
<!-- /sticky rating banner - MOBILE VERSION -->
