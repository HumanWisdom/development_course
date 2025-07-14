<!DOCTYPE html>
<html lang="en">

<head>
  <title>HappierMe: For Teens & Adults</title>
  <meta property="title" content="HappierMe & National Family Support Network">
  <meta property="description"
    content="HappierMe partners with the National Family Support Network to offer discounts on the app for NFSN members. Strengthen family mental wellness today with exclusive access.">
  <meta name="keywords"
    content="Stress,Breathing,Anger,Anxiety,Love,Manage,Meditation,Relaxation,Motivation,Mood,Relief,Mind,Calm">
  <meta property="og:title" content="HappierMe:For Teens & Adults">
  <meta property="og:site_name" content="HappierMe">
  <meta property="og:url" content="https://happierme.app/">
  <meta property="og:type" content="Website">
  <meta property="og:image" content=https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg>
  <meta property="og:image:width" content="414" />
  <meta property="og:image:height" content="232" />

  <!--Canonical Tag-->
  <link rel="canonical" href="https://happierme.app" />
  <!-- vendor_header -->
  <?php include('../includes/vendor_header.php'); ?>
  <!-- /vendor_header -->

  <!-- Google Tag Manager -->
  <script>(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NHPHHF97');</script>
  <!-- End Google Tag Manager -->

  <style>
    .section {
      background-color: #FCF2EC;
      width: 100%;
      height: 605px;
      padding-top: 40px;
      /* Fixed top padding */
      padding-bottom: 40px;
      /* Fixed bottom padding */
      gap: 80px
    }

    .container {
      background-color: #FCF2EC;
      width: 980px;
      /* Fixed width */
      margin: 0 auto;
      /* Center the container */
    }

    .content {
      display: flex;
      align-items: center;
      padding: 60px 0;
      /* Fixed vertical padding */
      width: 980px;
      /* Match container width */
      height: 525px;
      /* Fixed height */
      gap: 60px;
      /* Fixed gap between phone-mockups and text-content */
    }

    .phone-mockups {
      flex: 0 0 402px;
      /* Fixed width for phone mockups */
      height: 525px;
      /* Fixed height */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-image {
      max-width: 402px;
      /* Fixed width */
      height: 525px;
      /* Fixed height */
      object-fit: contain;
    }

    .desktop-image {
      display: block;
    }

    .mobile-only-image {
      display: none;
    }

    .text-content {
      flex: 0 0 478px;
      /* Fixed width for text content */
      height: 451px;
      width: 518px;
      padding-left: 0;
      /* Remove relative padding */
    }

    .main-title {
      font-size: 48px;
      font-weight: 600;
      color: #000000;
      line-height: 130%;
      opacity: 75%;
      margin-top: 0;
    }



    .features {
      list-style: none;
      width: 518px;
      height: 146px;
      padding-left: 0px;
      gap: 6px;
      display: grid;
    }

    .features li {
      width: 518px;
      height: 32px;
      gap: 8px;
      display: flex;
    }

    .feature-txt {
      font-size: 21px;
      line-height: 100%;
      font-weight: 400;
      color: #000000;
      opacity: 75%;
      line-height: 100%;
    }



    .cta-button {
      background: linear-gradient(45deg, #CB6171, #E58D82);
      width: 287px;
      height: 65px;
      padding-top: 18px;
      padding-right: 54px;
      padding-bottom: 18px;
      padding-left: 54px;
      gap: 10px;
      border-radius: 36px;
      color: white;
      margin-top: 25px;
      /* Add margin to separate from features */
    }

    .btn-txt {
      font-size: 21px;
      font-weight: 600;
      line-height: 140%;

    }


    .icon-container {
      width: 12px;
      height: 8px;
    }

    @media (max-width: 768px) {
      .content {
        flex-direction: column;
        padding: 40px 0;
        width: 980px;
        /* Maintain fixed width */
        height: 1050px;
        /* Double height for stacked layout */
        gap: 40px;
        /* Fixed gap */
      }

      .phone-mockups {
        height: 525px;
        /* Maintain fixed height */
      }

      .desktop-image {
        display: none;
      }

      .mobile-only-image {
        display: block;
      }

      .main-title {
        font-size: 48px;
        font-weight: 600;
        line-height: 130%;
        color: #000000;
        opacity: 75%;

      }

      .text-content {
        text-align: center;
      }
    }


    .testimonial-wrapper {
      width: 980px;
      height: 302px;
      display: flex;
      margin: 0 auto;
      gap: 30px;
      margin-top: 85px;
    }

    .testimonial-card {
      width: 490px;
      height: 302px;
      padding: 36px;
      position: relative;
      display: flex;
      flex-direction: column;
      background: #FCF2EC;
      border-radius: 20px;
      gap: 30px
    }



    .quotation-comma {
      position: absolute;
      top: -25px;

      z-index: 10;
      width: 60px;
      height: 39.92px;
      left: 83%;
    }

    .quotation-comma img {
      width: 64px;
      height: 64px;
      object-fit: contain;
    }

    .testimonial-header {
      display: flex;
      align-items: center;

      width: 403px;
      height: 100px;
      gap: 15px;
    }

    .testimonial-image {
      width: 100px;
      height: 100px;
      border-radius: 100px;

    }

    .testimonial-info {
      flex: 1;
    }

    .testimonial-info h5 {
      font-size: 21px;
      font-weight: 600;
      color: #000000;
      margin: 0;
      opacity: 75%;
    }
    .text-color{
      opacity: 75%;
      color: #000000;
    }

    .testimonial-info h3 {
      font-size: 15px;
      font-weight: 400;
      color: #000000;
      margin: 5px 0 0 0;
      line-height: 150%;
      opacity: 75%;
    }

    .testimonial-text {
      width: 403px;
      height: 69px;
      gap: 15px;
      margin-top: 20px;
    }

    .app-title {
      width: 403px;
      height: 69px;
      display: block;
      opacity: 75%;
      font-size: 15px;
      font-weight: 400;
      line-height: 150%;
      color: #000000;
    }

    .testimonial-card-section2 {
      height: 230px;
      width: 403px;
      gap: 15px;

    }

    .testimonial-text2 {
      height: 115px;
      width: 403px;
      margin-top: 20px;
    }

    .app-title2 {
      width: 403px;
      height: 115px;
      display: block;
      opacity: 75%;
      font-size: 15px;
      font-weight: 400;
      line-height: 150%;
      color: #000000;
    }

    .happy-wide-img {
      display: none;
    }

    @media (min-width: 1600px) {

      .display_mw_none,
      /* mobile image */
      .display_dw_none {
        /* desktop image */
        display: none !important;
      }

      .happy-wide-img {
        display: block;
        width: 100%
      }
    }

    .section-text {
      margin-top: 55px;
    }

    .iframe-video {
      width: 978px !important;
      height: 606px !important gap:30px
    }
  </style>


</head>

<body>
  <!-- header -->
  <div class="row ">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 center_flex header_new">

      <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 p0">

        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/logo.svg" class="img-responsive"
          alt="logo">

      </div>

      <div class="col-lg-10 col-md-10 col-sm-8 col-xs-8 p0 dflex_end">

      </div>

    </div>
  </div>
  <!-- /header -->

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHPHHF97" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div class="section">
    <div class="container">
      <div class="content">
        <div class="phone-mockups">
          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/AdultHome2.svg"
            class="mobile-image desktop-image" loading="lazy" alt="HappierMe app interface">
          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/Adults+homd.svg"
            class="mobile-image mobile-only-image" loading="lazy" alt="HappierMe app interface">
        </div>

        <div class="text-content">
          <h1 class="main-title">
            Transform your life<br>
            with HappierMe
          </h1>
          <ul class="features">
            <li>
              <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 p0 w5p icon-container">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_tick_black.svg" class=""
                  alt="wh_tick_black" loading="lazy">
              </div><span class="feature-txt">Overcome stress and anxiety</span>
            </li>
            <li>
              <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 p0 w5p icon-container">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_tick_black.svg" class=""
                  alt="wh_tick_black" loading="lazy">
              </div><span class="feature-txt">Manage your emotions and be happier</span>
            </li>
            <li>
              <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 p0 w5p icon-container">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_tick_black.svg" class=""
                  alt="wh_tick_black" loading="lazy">
              </div><span class="feature-txt">Build stronger relationships</span>
            </li>
            <li>
              <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 p0 w5p icon-container">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_tick_black.svg" class=""
                  alt="wh_tick_black" loading="lazy">
              </div><span class="feature-txt">Develop soft skills to succeed at work</span>
            </li>
          </ul>
         <div id="PricingSelectBtnHomePage">
           <button class="cta-button">
            <span class="btn-txt">Let's get started!</span>
          </button>
        </div>

        </div>
      </div>
    </div>
  </div>


  <!-- testimonial -->

  <div class="testimonial-wrapper">
    <!-- First Testimonial -->
    <div class="testimonial-card">
      <div class="testimonial-card-section">
        <div class="quotation-comma">
          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/quatation_new.svg" alt="quotation"
            loading="lazy">
        </div>
        <div class="testimonial-header">
          <img src="https://d1tenzemoxuh75.cloudfront.net/assets/webp/Brenda+McChesney.webp" alt="Brenda McChesney"
            class="testimonial-image">
          <div class="testimonial-info">
            <h5>Brenda McChesney</h5>
            <h3>Director, National Family Support Network, USA</h3>
          </div>
        </div>
        <div class="testimonial-text">
          <span class="app-title"><i>HappierMe is the best app I have found to assist entire families, and the root
              cause
              of their struggles, rather than just the symptoms. </i></span>
        </div>
      </div>
    </div>

    <!-- Second Testimonial -->
    <div class="testimonial-card">
      <div class="testimonial-card-section2">
        <div class="quotation-comma">
          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/quatation_new.svg" alt="quotation"
            loading="lazy">
        </div>
        <div class="testimonial-header">
          <img src="https://d1tenzemoxuh75.cloudfront.net/assets/webp/testimonial_adam_beagley.webp" alt="Adam Beagley"
            class="testimonial-image">
          <div class="testimonial-info">
            <h5>Adam Beagley</h5>
            <h3>Student,<br /> UK</h3>
          </div>
        </div>
        <div class="testimonial-text2">
          <span class="app-title2"><i>HappierMe has helped me become emotionally intelligent. I used to be shy, passive
              and
              fearful. The app has transformed my way of thinking and relieved me of my anxiety. Whatever you struggle
              with, there are modules to help.</i></span>
        </div>
      </div>
    </div>
  </div>

  <!-- section -->


  <div class="section-headernew mob-section section-text">
    <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
        <h2 class="mtb0px fs_21px fw_600 lh_120p fc_000000_0.7 text-color" >
          Findings from a survey of 1,000 HappierMe app users </h2>
      </div>
    </div>
  </div>

  <!-- section end -->

  <div class="row center_flex" data-aos="fade-up" data-aos-delay="200">
    <div>
      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/surveycircle.svg"
        class="img-responsive display_m_none display_mw_none w100p" alt="modules" loading=lazy>

      <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/happy_mobile.webp"
        class="img-responsive display_d_none display_dw_none ml-mobile" alt="modules" loading=lazy>

      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/survetcirclewider.svg" class="happy-wide-img"
        alt="happy user" loading=lazy>
    </div>
  </div>

  <!-- video -->
  <div class="section-headernew mob-section">
    <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 p0 ">
        <h2 class="mb20px fs_21px fw_600 lh_120p fc_000000_0.7  section-text text-color">
          Discover HappierMe in just 1 minute
        </h2>
      </div>
    </div>


    <div class="row center_flex mob-section" data-aos="fade-up" data-aos-delay="200">
      <div class="iframe-video">

        <iframe id="youtubeIntro" loading="lazy" title="youtubeIntro"
          src="https://www.youtube.com/embed/MgsYk1SZh-w?si=R5mFMHvkINh60C4b?" class="cvideo_b yt-embed"
          allow="autoplay" onclick="return logevent('click_play_video_home', 'index.php')"></iframe>
      </div>
    </div>
  </div>

  <!-- /video -->

  <div class="row center_flex divhome mob-section">
    <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2 class="mtb0px fs_12px fw_400 lh_120p fc_ffffff">
          Copyright © 2024 HappierMe. All rights reserved </h2>
      </div>
    </div>

  </div>
    <!-- vendor_footer -->
    <?php include('../includes/vendor_footer.php'); ?>
    <!-- /vendor_footer -->
</body>

</html>