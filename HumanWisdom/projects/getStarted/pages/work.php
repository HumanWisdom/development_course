<!DOCTYPE html>
<html lang="en">

  <head>
    <meta property="og:title" id="tag1" content="Employee Wellbeing, Life Skills & Leadership | HappierMe">
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Improve employee wellbeing and build life skills with HappierMe. Develop emotional intelligence, communication and stronger workplace relationships.">
    <meta name="keywords" content="employee wellbeing

workplace wellbeing
workplace mental health
emotional intelligence at work
leadership skills
communication skills
resilience at work
employee resilience
workplace culture
stress management at work
life skills for work



">
    
    <meta property="og:image" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:alt" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:width" content="414" />
    <meta property="og:image:height" content="232" />
    <meta property="og:title" content="HappierMe:For Teens & Adults">
    <meta property="og:site_name" content="HappierMe">
    <meta property="og:url" content="https://happierme.app/">
    
    <!--Schema tag for Organization :-->
    <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "name": "HappierMe",
      "description": "Mental health app that helps users understand their emotions and thoughts, and offers a variety of tools and resources to help people improve their lives.",
      "url": "https://happierme.app/"
    },
    {
      "@context": "https://schema.org",
      "@type": "MentalHealthService",
      "name": "HappierMe",
      "description": "Mental health app that helps users understand their emotions and thoughts, and offers a variety of tools and resources to help people improve their lives.",
      "url": "https://happierme.app/"
    }
  ]
</script>

    <!-- vendor_header -->
    <?php include('../includes/vendor_header.php'); ?>
    <!-- /vendor_header -->

    <style>
      @media (max-width: 767px) {

        /* Force White Plus/Minus Icons on Mobile Accordion - Override SVG from main.css */
        /* Override: #accordion_footer .panel-title>a:after { content: url(...svg...) } */
        #accordion_footer .panel-title > a::after,
        #accordion_footer .panel-title > a.accordion-toggle::after,
        .dfooter #accordion_footer .panel-title > a::after,
        .panel-group#accordion_footer .panel-title > a::after {
          content: "+" !important;
          color: #ffffff !important;
          font-family: inherit !important;
          font-size: 24px !important;
          line-height: 24px !important;
          background: none !important;
          background-image: none !important;
          width: 24px !important;
          height: 24px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          float: right !important;
          opacity: 1 !important;
          filter: none !important;
          -webkit-filter: none !important;
          transform: none !important;
        }
        
        #accordion_footer .panel-title > a[aria-expanded="true"]::after,
        #accordion_footer .panel-title > a.accordion-toggle[aria-expanded="true"]::after,
        .dfooter #accordion_footer .panel-title > a[aria-expanded="true"]::after,
        .panel-group#accordion_footer .panel-title > a[aria-expanded="true"]::after {
          content: "-" !important;
          color: #ffffff !important;
          background: none !important;
          background-image: none !important;
        }
        
        /* New override for Bootstrap 5 .accordion-button if present - Exact match from about_us.php */
        .accordion-button::after {
          background-image: none !important;
          content: "+" !important;
          color: #ffffff !important;
          font-size: 16px !important;
          font-weight: 300 !important;
          width: auto !important;
          height: auto !important;
          transform: none !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        .accordion-button:not(.collapsed)::after {
          background-image: none !important;
          content: "-" !important;
          transform: none !important;
        }
        
        .accordion {
          padding: 10px;
        }

        /* Make testimonial cards same height on mobile */
        .owl_testimonials .owl-carousel .owl-item {
          display: flex !important;
          height: auto !important;
        }

        .owl_testimonials .owl-carousel .owl-item .item {
          width: 100% !important;
          height: auto !important;
        }

        .owl_testimonials .div_testimonials.work-testimonial-card {
          height: auto !important;
          min-height: 260px !important;
          width: 100% !important;
        }

        .owl-carousel .owl-stage {
          width: auto !important;
        }

      /* Reduce section padding on mobile to fix large gaps */
      section {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
      }
      
      .section-header {
        padding-bottom: 20px !important;
      }

      .section-header.work-dyk-header,
      .section-header.work-testimonials-header,
      .section-header.work-inspire-header {
        padding-bottom: 40px !important;
      }

      .section-header.work-blog-header {
        padding-bottom: 0 !important;
      }
    }
    </style>
  </head>

  <body class="page-work">

    <!-- request a demo php script -->
    <?php
      // Simulate fetching country data from a database or external API
      $countries = 
     ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]
    ?>
    <!-- /request a demo php script -->

    <!-- <div class="row center_flex">
      <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0"> -->

        <!-- header -->
        <?php include('../includes/header.php'); ?>
        <!-- /header -->

        <section class="hpt120px">
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 healthcare-hero-shell">

              <div class="row prelative" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 mt3rem">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_landing.webp" class="img-responsive w100p display_m_none h-800" alt="Boost workplace wellbeing, performance and productivity">

                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_mobile.webp" class="img-responsive w100p display_d_none" alt="Boost workplace wellbeing, performance and productivity">

                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_widescreen.webp" class="img-responsive w100p display_m_none wide-screen-only" loading="lazy" alt="Boost workplace wellbeing, performance and productivity">
                </div>
              </div>
        
              <div class="row center_flex absolute_desc absolute_desc_m" data-aos="fade-up" data-aos-delay="500">
                <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10 col-10 p0 tleft">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 mt20px">
                    <h1 class="mtb0px fs_36px fw_600 lh_140p fc_ffffff">
                      Boost workplace wellbeing, performance and productivity
                    </h1>
                  </div>
        
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 ">
                    <h5 class="mt20px mb35px fs_15px fw_400 lh_160p fc_ffffff">
                      Upskill your staff to be happier, emotionally intelligent and make better decisions. An all-in-one app for mental health, relationships, better decision-making and soft skills.
                    </h5>
                  </div>
        
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 p0">
                      <a href="#bring_happierme" class="">
                        <button class="fs_15px fw_600 lh_140p fc_ffffff btn_tff req_button" id="requestDemoForWork"  >
                          Request a demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <main id="main">


          <!-- description -->
          <section>
            <div class="row center_flex">
              <div class="p0 flex_block w-1245px gap_40px gap_m24px">
                <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 pr0px tleft ta_lc mb20px display_d_none" data-aos="fade-up" data-aos-delay="200">
                  <h2 class="mtb0px fs_24px fw_600 lh_150p fc_834b66">
                    Feel calm, capable, and better everyday, with HappierMe!
                  </h2>
                </div> -->

                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 pl0px cpr_a" data-aos="fade-up" data-aos-delay="100">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_app.webp" class="img-responsive work_app_img" alt="Feel calm, capable, and better everyday, with HappierMe!">
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 pr0px tleft w-384px mt0px work-desc-copy" data-aos="fade-up" data-aos-delay="200">
                  <h2 class="mtb0px fs_30px fw_600 lh_140p fc_000000 work-desc-title">
                    Feel calm, capable,<br>
                    and better everyday,<br>
                    with HappierMe!
                  </h2>

                  <h5 class="mtb0px fs_15px fw_400 lh_150p fc_000000 work-desc-subtitle">
                    How you think matters! The app helps you feel better now, and then helps you to understand your own mind so you can be in charge of how you respond to challenges.
                  </h5>
                </div>
              </div>
            </div>
          </section>
          <!-- /description -->

          <!-- did you know -->
          <section class="work-dyk-section">
            <div class="section-header work-dyk-header">
              <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
                  <h2 class="mtb0px fs_30px fw_600 lh_150p fc_000000 work-dyk-title">
                    Did you know?
                  </h2>
                </div>
              </div>
            </div>

            <div class="row center_flex div_dyk work-dyk-band">
              <div class="p0 div_dyk_l1 w-980px">

                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="100">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        75%
                      </h2>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of employers say staff lack soft skills
                      </h5>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (shrm.org)
                      </h6>
                    </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        67%
                      </h2>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of employees are disengaged
                      </h5>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (Gallup)
                      </h6>
                    </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="300">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        76%
                      </h2>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of employees have a mental health problem
                      </h5>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (US Surgeon General)
                      </h6>
                    </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="400">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        50-70%
                      </h2>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of leaders fail within 18 months
                      </h5>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (CEB)
                      </h6>
                    </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="500">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        1 in 6
                      </h2>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        people have a substance abuse disorder
                      </h5>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (CDC)
                      </h6>
                    </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="600">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        38%
                      </h2>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of UK employees experience interpersonal conflict at work
                      </h5>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (CIPD)
                      </h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <!-- /did you know -->

          <!-- testimonials -->
          <section class="work-testimonials-section">
            <div class="section-header work-testimonials-header">
              <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
                  <h2 class="mtb0px fs_30px fw_600 lh_120p fc_000000 work-testimonials-title">
                    The HappierMe impact across organisations
                  </h2>
                </div>
              </div>
            </div>

            <div class="row center_flex">
              <div class="work-testimonials-wrap">

                <div class="owl_container owl_testimonials">
                  <div class="owl-carousel owl-theme">

                    <div class="item" data-aos="fade-up" data-aos-delay="200">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_julie_goodfellow.webp" class="work-testimonial-avatar" alt="Julie Goodfellow" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Julie Goodfellow</p>
                            <p class="work-testimonial-role">Headteacher, UK</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">I subscribed to this app for all my staff because I have seen how transformative it is to understand my reactions to situations and my personal emotions such as anxiety and depression.</p>
                      </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-delay="300">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_tinamarie_rodriguez.webp" class="work-testimonial-avatar" alt="Tinamarie Rodriguez" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Tinamarie Rodriguez</p>
                            <p class="work-testimonial-role">Wisdom coach, USA</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">This app is exactly what each and every person in the world needs every day. It gives each person the tools to lead a purposeful and fulfilling life.</p>
                      </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-delay="400">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_jondi_whitis.webp" class="work-testimonial-avatar" alt="Jondi Whitis" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Jondi Whitis</p>
                            <p class="work-testimonial-role">EFT trainer and coach, USA</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">Having trouble figuring it all out? The HappierMe app is an awesome resource for everyday living. You'll find easy, soothing support here - modern tools for exploring your own inner wisdom, for every dilemma.</p>
                      </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-delay="500">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_garry_prigg.webp" class="work-testimonial-avatar" alt="Garry Prigg" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Garry Prigg</p>
                            <p class="work-testimonial-role">CEO, Australia</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">The HappierMe app is a pre-eminent asset for people of all ages. It changes peoples lives by assisting them to better know themselves and live with peace, love, harmony, and fulfilment. It is a wonderful gift to humanity.</p>
                      </div>
                    </div>

                    <div class="item">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_suzanne_oades.webp" class="work-testimonial-avatar" alt="Suzanne Oades" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Suzanne Oades</p>
                            <p class="work-testimonial-role">Psychotherapist, UK</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">By knowing more about how my mind works, I have learned to make better choices in how I think, behave and act. The HappierMe app is a space where I feel supported to grow into the person I want to be.</p>
                      </div>
                    </div>

                    <div class="item">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_gopalan_nair.webp" class="work-testimonial-avatar" alt="Gopalan Nair" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Gopalan Nair</p>
                            <p class="work-testimonial-role">Life coach, Singapore</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">The HappierMe app supports an individual's exploration in seeking positive outcomes through a journey of self-discovery, by applying our intelligence with common sense and insight. I believe this is truly a gift for every single human being to embrace.</p>
                      </div>
                    </div>

                    <div class="item">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_lynne_staley.webp" class="work-testimonial-avatar" alt="Lynne Staley" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Lynne Staley</p>
                            <p class="work-testimonial-role">Life and loss coach, USA</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">I recommend The HappierMe app to my clients as a stand-out app among similar programmes. The design and content meets users where they are and reminds them that wisdom comes from inquiry and a deeper understanding of self.</p>
                      </div>
                    </div>

                    <div class="item">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/k1.webp" class="work-testimonial-avatar" alt="Carolyn King" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Carolyn King</p>
                            <p class="work-testimonial-role">Kinesiologist, Australia</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">I absolutely love the HappierMe app. It has enabled me to really go on a journey of self-exploration. It covers so many different aspects of how our mind works in the real world. I would highly recommend this app to anyone that wishes to improve their life.</p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </section>
          <!-- /testimonials -->


          <!-- inspiring -->
          <section class="work-inspire-section">
            <div class="section-header work-inspire-header">
              <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
                  <h2 class="mtb0px fs_30px fw_600 lh_120p fc_000000 work-inspire-title">
                    Inspiring fresh ways of thinking
                  </h2>
                </div>
              </div>
            </div>

            <div class="row center_flex">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0 tcenter div_inspire">

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_productivity.svg" class="img-responsive" alt="Improved productivity">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Improved productivity
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Boost productivity by helping staff feel 
                        <a class="fc_cb6171" href="https://happierme.app/adults/happiness">
                          happier
                        </a>
                        and less 
                        <a class="fc_cb6171" href="https://happierme.app/adults/stress">
                          stressed.
                        </a>
                        Reduce interpersonal friction and boost collaboration through healthier relationships.
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="300">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_intelligence.svg" class="img-responsive" alt="Emotional intelligence">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Emotional intelligence
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Understanding your 
                        <a class="fc_cb6171" href="https://happierme.app/adults/curated/manage-your-emotions">
                          emotions 
                        </a>
                        boosts your EQ, and this can help staff manage their mental health and have happier relationships.
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="400">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_well_being.svg" class="img-responsive" alt="Well-being">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Well-being
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Emotional intelligence can prevent problems before they arise, and supports staff to be happy and have a positive attitude. This is infectious.
                      </h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="row center_flex">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0 tcenter div_inspire">

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="500">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_leadership.svg" class="img-responsive" alt="Leadership skills">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Leadership skills
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Leadership skills are a by-product of self-awareness, and emotional intelligence. Our 
                        <a class="fc_cb6171" href="https://happierme.app/adults/leadership">
                          leadership 
                        </a>
                        section helps people learn these skills and flourish at work.
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="600">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_critical_thinking.svg" class="img-responsive" alt="Critical thinking">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Critical thinking
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        <a class="fc_cb6171" href="https://happierme.app/adults/awareness">
                          Self-awareness 
                        </a>
                        helps you to think clearly, understand your emotions, and make better decisions.
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="700">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_diversity.svg" class="img-responsive" alt="Diversity & inclusion">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Diversity & inclusion
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Our modules on 
                        <a class="fc_cb6171" href="https://happierme.app/adults/conditioning">
                          Conditioning,
                        </a>
                        and
                        <a class="fc_cb6171" href="https://happierme.app/adults/diversity-and-inclusion">
                          Diversity & Inclusion
                        </a>
                        help people explore and overcome their prejudices to enhance inclusion and reduce conflict.
                      </h5>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div class="row center_flex">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0 tcenter div_inspire">

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="800">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_workplace.svg" class="img-responsive" alt="Workplace relationships">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Workplace relationships
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Less friction between people and departments improves collaboration. We have detailed modules on 
                        <a class="fc_cb6171" href="https://happierme.app/adults/relationships">
                          Relationships,
                        </a>
                        <a class="fc_cb6171" href="https://happierme.app/adults/work">
                          Work,
                        </a>
                        and 
                        <a class="fc_cb6171" href="https://happierme.app/adults/communication">
                          Communication
                        </a>
                        to enable this.
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="900">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_attract.svg" class="img-responsive" alt="Attract and retain talent">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Attract and retain talent
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        The app enables everyone to live with a positive attitude. This can change the culture of an organisation making it an attractive place to work.
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 p0" data-aos="fade-up" data-aos-delay="1000">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_dealing_criticism.svg" class="img-responsive" alt="Dealing with criticism">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Dealing with criticism 
                      </h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                      <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Our module on 
                        <a class="fc_cb6171" href="https://happierme.app/adults/criticism">
                          Criticism
                        </a>
                        helps employees accept feedback with a positive attitude, and can help managers offer it with care.
                      </h5>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
          <!-- /inspiring -->

          <!-- header -->
          <?php include('../includes/happierme-email.php'); ?>
          <!-- /header -->

          <!-- blog -->
          <section class="work-blog-section">
            <div class="section-header work-blog-header">
              <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
                  <h2 class="mtb0px fs_30px fw_600 lh_120p fc_000000 work-blog-title">
                    Explore our blog
                  </h2>
                </div>
              </div>
            </div>

            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 work-blog-wrap">

                <div class="owl_blog">
                  <div class="owl-carousel owl-theme">
                    <a class="item" data-aos="fade-up" data-aos-delay="200"href="../blogs/to_succeed_as_a_leader_you_need_self_awareness.php">
                      <div class="div_blog">
                        <div class="row">
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                            <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/33.webp" class="img-responsive" alt="To succeed as a leader you need self-awareness">
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                            <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                              To succeed as a leader you need self-awareness
                            </h4>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a class="item" data-aos="fade-up" data-aos-delay="300" href="../blogs/6_ways_to_transform_organisations.php">
                      <div class="div_blog">
                        <div class="row">
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                            <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/56.webp" class="img-responsive" alt="6 ways to transform organisations">
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                            <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                              6 ways to transform organisations
                            </h4>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a class="item" data-aos="fade-up" data-aos-delay="400"href="../blogs/how_can_organizations_reduce_workplace_conflict_and_boost_collaboration.php">
                      <div class="div_blog">
                        <div class="row">
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                            <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/26.webp" class="img-responsive" alt="How can organizations reduce workplace conflict and boost collaboration?">
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                            <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                              How can organizations reduce workplace conflict and boost collaboration? 
                            </h4>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

            <div class="work-blog-footer">
              <a class="sap work-blog-more" href="https://happierme.app/adults/blogs">
                <h4 class="mtb0px fs_18px fw_500 lh_150p td_underline">
                  See all posts
                </h4>
              </a>
              <div class="owl-theme mt10px work-blog-nav">
                <div class="owl-controls">
                  <div class="owl-nav owl-nav-w"></div>
                </div>
              </div>
            </div>
                </div>

              </div>
            </div>
          </section>
          <!-- /blog -->

          <!-- footer -->
          <?php include('../includes/footer.php'); ?>
          <!-- /footer -->

        </main>

      <!-- </div>
    </div> -->

    <!-- vendor_footer -->
    <?php include('../includes/vendor_footer.php'); ?>
    <!-- /vendor_footer -->

    <script>
      function initWorkTestimonialsCarousel() {
        var $tc = $('body.page-work .owl_testimonials .owl-carousel');
        if (!$tc.length) return;

        var isMobile = window.matchMedia('(max-width: 767px)').matches;

        if ($tc.hasClass('owl-loaded')) {
          $tc.trigger('destroy.owl.carousel');
        }

        $tc.removeClass('work-testimonials-native owl-loaded owl-drag');

        if (isMobile) {
          $tc.addClass('work-testimonials-native');
          return;
        }

        if (typeof $.fn.owlCarousel !== 'function') return;

        $tc.owlCarousel({
          stagePadding: 0,
          loop: false,
          margin: 30,
          nav: false,
          autoWidth: true,
          dots: false,
          touchDrag: true,
          mouseDrag: true,
          pullDrag: true,
          responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 3 }
          }
        });
      }

      document.addEventListener('DOMContentLoaded', initWorkTestimonialsCarousel);
      window.addEventListener('load', initWorkTestimonialsCarousel);
      window.addEventListener('resize', initWorkTestimonialsCarousel);
    </script>

  </body>

</html>