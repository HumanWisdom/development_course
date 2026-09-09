<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Healthcare Staff and Patient Wellbeing | HappierMe</title>
    <meta name="title" content="Healthcare Staff and Patient Wellbeing | HappierMe">
    <meta name="description" content="Support healthier staff and patients with HappierMe. ORCHA approved, our prevention-first approach builds self-awareness, stronger relationships and resilience.">
    <meta name="keywords" content="Healthcare wellbeing, healthcare staff wellbeing, patient self-management, burnout prevention, population health, healthcare mental health, clinician wellbeing, emotional intelligence in healthcare, preventive healthcare, workforce wellbeing, digital mental health">

    <meta property="og:title" id="tag1" content="Healthcare Staff and Patient Wellbeing | HappierMe">
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Support healthier staff and patients with HappierMe. ORCHA approved, our prevention-first approach builds self-awareness, stronger relationships and resilience.">
   
    <meta property="og:image" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:alt" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:width" content="414" />
    <meta property="og:image:height" content="232" />
   
    <meta property="og:site_name" content=HappierMe>
    <meta property="og:url" content=https://happierme.app/>
   
    
    <!-- <meta property="og:image" content=https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/healthcare_app.webp> -->
    <!--Schema tag for Organization :-->
    <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "name": "HappierMe",
      "description": "Support healthier staff and patients with HappierMe. ORCHA approved, our prevention-first approach builds self-awareness, stronger relationships and resilience.",
      "url": "https://happierme.app/"
    },
    {
      "@context": "https://schema.org",
      "@type": "MentalHealthService",
      "name": "HappierMe",
      "description": "Support healthier staff and patients with HappierMe. ORCHA approved, our prevention-first approach builds self-awareness, stronger relationships and resilience.",
      "url": "https://happierme.app/"
    }
  ]
</script>

    <!-- vendor_header -->
    <?php include('../includes/vendor_header.php'); ?>
    <!-- /vendor_header -->

    <link rel="stylesheet" href="<?= hw_asset_url('../assets/css/healthcare.css'); ?>">

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
               .owl-carousel .owl-stage {
          width: auto !important;
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

        /* Native testimonial / blog carousels hug content on mobile */
    }
    </style>
  </head>

  <body class="page-healthcare">
  <?php
      // Simulate fetching country data from a database or external API
      $countries = 
     ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]
    ?>
    <!-- header -->
    <?php include('../includes/header.php'); ?>
    <!-- /header -->
    
    <section class="hpt120px">
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0 healthcare-hero-shell">

          <div class="row prelative" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0 mt3rem">
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/healthcare_landing.webp" class="img-responsive w100p display_m_none h-800" alt="Support your staff to be happier at work, and patients to lead healthier lives.">

              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/healthcare_mobile.webp" class="img-responsive w100p display_d_none" alt="Support your staff to be happier at work, and patients to lead healthier lives.">

              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/health_widescreen.webp" class="img-responsive w100p display_m_none wide-screen-only" loading="lazy" alt="Support your staff to be happier at work, and patients to lead healthier lives.">
            </div>
          </div>

          <div class="row center_flex absolute_desc absolute_desc_m" data-aos="fade-up" data-aos-delay="500">
            <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10  col-10 p0 tleft">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0 mt20px m-tcenter">
                <h1 class="mtb0px fs_36px fw_600 lh_140p d-contents hc-hero-title">
                  Support your staff to be happier at work, and patients to lead healthier lives.
                </h1>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0 mtb20px m-tcenter">
                <h5 class="mt20px mb30px fs_15px fw_400 lh_160p fc_000000 d-contents">
                  Support staff to be more resilient, avoid burnout, manage their own emotions and mental health, and be more compassionate.
                  <br>
                  Empower patients to self-regulate their habits, emotions and mental health so they can lead happier and healthier lives.
                </h5>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  col-12 p0">
                  <a href="#bring_happierme">
                    <button class="fs_15px fw_600 lh_140p fc_ffffff btn_tff req_button">
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
          <div class="p0 flex_block w-1245px gap_40px gap_m24px" >
            <!-- Mobile-only heading: shows above image on mobile -->
            <div class="col-12 p0 tcenter display_d_none hc-desc-heading-mobile" data-aos="fade-up" data-aos-delay="100">
              <h2 class="mtb0px fs_18px fw_600 lh_140p fc_000000">
                Take charge of your mental health, habits and emotions.
              </h2>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  col-12 pl0px cpr_a " data-aos="fade-up" data-aos-delay="100">
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/healthcare_app.webp" class="img-responsive" alt="Take charge of your mental health, habits and emotions.">
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  col-12 pr0px tleft w-384px mt0px hc-desc-copy" data-aos="fade-up" data-aos-delay="200">
              <!-- Desktop heading: hidden on mobile (mobile uses the div above) -->
              <h2 class="mtb0px fs_30px fw_600 lh_140p fc_000000 display_m_none hc-desc-title">
                Take charge of your<br class="display_m_none">
                mental health, habits<br class="display_m_none">
                and emotions.
              </h2>

              <h5 class="mtb0px fs_15px fw_400 lh_150p fc_000000 hc-desc-subtitle">
                Reduce the demand for healthcare by helping patients self-regulate their habits and manage their own mental health.
              </h5>

              <h5 class="mtb0px fs_15px fw_400 lh_150p fc_000000 hc-desc-subtitle">
                Reduce burnout, boost retention and productivity by supporting staff to develop a positive attitude, have healthy relationships, and be happier.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <!-- /description -->

      <!-- did you know -->
      <section>
        <div class="section-header hc-dyk-header">
          <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10  col-10 p0">
              <h2 class="mtb0px fs_30px fw_600 lh_150p mb0px fc_000000 hc-dyk-title">
                Did you know?
              </h2>
            </div>
          </div>
        </div>
        
        <div class="row center_flex div_dyk">
          <div class="p0 div_dyk_l1 w-980px">

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="100">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    60-80%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of primary care visits are linked to stress 
                    <span class="fs_12px">
                      (NIH)
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="200">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    79%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of healthcare staff report burnout
                    <span class="fs_12px">
                      (CDC)
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="300">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    42%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Obesity rate 
                    <span class="fs_12px">
                      (CDC)
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="400">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    1 in 6
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    people have a substance abuse problem
                    <span class="fs_12px">
                      (HHS)
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="500">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    1 in 5
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    people have a mental health problem
                    <span class="fs_12px">
                      (HHS)
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="600">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    70%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of people with depression don’t seek help
                  </h5>
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
                The HappierMe impact<br class="display_d_none"> across organisations
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="work-testimonials-wrap">
            <div class="owl_container owl_testimonials">
              <div class="owl-carousel owl-theme">

                <div class="item">
                  <div class="div_testimonials work-testimonial-card">
                    <div class="work-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_jondi_whitis.webp" class="work-testimonial-avatar" alt="Jondi Whitis" loading="lazy">
                      <div class="work-testimonial-meta">
                        <p class="work-testimonial-name">Jondi Whitis</p>
                        <p class="work-testimonial-role">EFT trainer and coach, USA</p>
                      </div>
                    </div>
                    <p class="work-testimonial-quote">“Having trouble figuring it all out? The HappierMe app is an awesome resource for everyday living. You’ll find easy, soothing support here - modern tools for exploring your own inner wisdom, for every dilemma”</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials work-testimonial-card">
                    <div class="work-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_garry_prigg.webp" class="work-testimonial-avatar" alt="Garry Prigg" loading="lazy">
                      <div class="work-testimonial-meta">
                        <p class="work-testimonial-name">Garry Prigg</p>
                        <p class="work-testimonial-role">CEO, Australia</p>
                      </div>
                    </div>
                    <p class="work-testimonial-quote">“The HappierMe app is a pre-eminent asset for people of all ages. It changes peoples’ lives by assisting them to better know themselves and live with peace, love, harmony, and fulfilment. It is a wonderful gift to humanity.”</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials work-testimonial-card">
                    <div class="work-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_saakshi_singla.webp" class="work-testimonial-avatar" alt="Saakshi Singla" loading="lazy">
                      <div class="work-testimonial-meta">
                        <p class="work-testimonial-name">Saakshi Singla</p>
                        <p class="work-testimonial-role">Psychotherapist, India</p>
                      </div>
                    </div>
                    <p class="work-testimonial-quote">“HappierMe is what today’s world which is full of stress, needs so so desperately. I have been using the HappierMe app in my counselling practice and it’s helped me fast track recovery of childhood trauma parents have been carrying.”</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials work-testimonial-card">
                    <div class="work-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_tim_merrick.webp" class="work-testimonial-avatar" alt="Dr Tim Merrick" loading="lazy">
                      <div class="work-testimonial-meta">
                        <p class="work-testimonial-name">Dr Tim Merrick</p>
                        <p class="work-testimonial-role">Executive Coach, USA</p>
                      </div>
                    </div>
                    <p class="work-testimonial-quote">It's so easy to get caught up in all the things we have to do, want to do, and should do. The HappierMe app is such an excellent pocket companion that brings wisdom and joy back to our daily existence.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials work-testimonial-card">
                    <div class="work-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_dominic_curran.webp" class="work-testimonial-avatar" alt="Dominic Curran" loading="lazy">
                      <div class="work-testimonial-meta">
                        <p class="work-testimonial-name">Dominic Curran</p>
                        <p class="work-testimonial-role">England</p>
                      </div>
                    </div>
                    <p class="work-testimonial-quote">The HappierMe App has helped me to look at what I think, how I think, and helped me to question why I think in certain ways. This understanding has transformed my life.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials work-testimonial-card">
                    <div class="work-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_anthony_seldon.webp" class="work-testimonial-avatar" alt="Sir Anthony Seldon" loading="lazy">
                      <div class="work-testimonial-meta">
                        <p class="work-testimonial-name">Sir Anthony Seldon</p>
                        <p class="work-testimonial-role">Vice Chancellor, UK</p>
                      </div>
                    </div>
                    <p class="work-testimonial-quote">After a lifetime in education, I think there is an urgent need for solutions to help students deal with problems like stress, anxiety, addiction and conflict in their relationships. I believe the HappierMe project is one of those solutions.</p>
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
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_laura_toop.webp" class="work-testimonial-avatar" alt="Laura Toop" loading="lazy">
                      <div class="work-testimonial-meta">
                        <p class="work-testimonial-name">Laura Toop</p>
                        <p class="work-testimonial-role">Leadership consultant, London</p>
                      </div>
                    </div>
                    <p class="work-testimonial-quote">Oh how I wish I had this app available to me when my life imploded many years ago. For me, everyone should have access to this app, to unlock their own innate wisdom, their very own 'superpowers'.</p>
                  </div>
                </div>

              </div>

              <div class="work-testimonials-footer">
                <a class="sap work-testimonials-more" href="https://happierme.app/adults/testimonials">
                  <h4 class="mtb0px fs_18px fw_500 lh_150p fc_cb6171 td_underline">
                    View all success stories
                  </h4>
                  <span class="chevron-pink"><span style="-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      <!-- /testimonials -->

      <!-- inspiring -->
      <section class="hc-inspire-section">
        <div class="section-header hc-inspire-header">
          <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10  col-10 p0">
              <h2 class="mtb0px fs_30px fw_600 lh_120p fc_000000 hc-inspire-title">
                Inspiring fresh ways of thinking
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10  col-10 p0 tcenter div_inspire">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="200">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_intelligence.svg" class="img-responsive" alt="Mental health">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Mental health
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Understanding your mind helps you be in charge of your thoughts, feelings and reactions, and self-regulate your emotions and mental health.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="300">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_happier.svg" class="img-responsive" alt="Be happier">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Be happier
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Happiness is more of an inside job and comes from loving what you do, a positive attitude, and being grateful. Happy staff perform better.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="400">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_burnout.svg" class="img-responsive" alt="Avoid burnout">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Avoid burnout
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Avoid staff burnout by helping them deal with stress better in the present, and then understand the root cause to overcome it more easily.
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10  col-10 p0 tcenter div_inspire">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="500">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_kind.svg" class="img-responsive" alt="Be more kind">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Be more kind
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Patients and staff remember the kindness shown to them. Our kindness module explores what gets in the way of being more kind.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="600">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_attitude.svg" class="img-responsive" alt="A positive attitude">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    A positive attitude
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Finding the good in people and situations helps develop a positive attitude, which helps people and organisations flourish.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="700">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_relationships.svg" class="img-responsive" alt="Healthy relationships">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Healthy relationships
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    The more we understand ourselves, the easier it is to understand others, and have healthy relationships with meaning and without conflict.
                  </h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10  col-10 p0 tcenter div_inspire">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="800">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_critical_thinking.svg" class="img-responsive" alt="Make better decisions">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Make better decisions
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    By understanding our ego, our fear and our conditioning we can make better decisions, which can improve patient care and reduce complaints.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="900">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_leadership.svg" class="img-responsive" alt="Leadership and emotional intelligence">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Leadership and emotional intelligence
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    <span class="hc-inspire-leadership-d">Every skill leaders need is enhanced by self-awareness - empathy, communication, emotional intelligence, resilience, integrity and so on.</span>
                    <span class="hc-inspire-leadership-m">The app enables everyone to live with a positive attitude. This can change the culture of an organisation making it an attractive place to work.</span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="1000">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_addiction.svg" class="img-responsive" alt="Avoid unhealthy habits and addiction">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Avoid unhealthy habits and addiction 
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Self-awareness allows us to self-regulate our habits around sleep, food, alcohol and exercise helping us to lead healthier lives.
                  </h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <!-- /inspiring -->

      <!-- bring happierme -->
      <?php
        $hm_demo_subtitle = 'Connect with us today and see how we can help you to support staff and patients';
        $hm_demo_org_placeholder = 'Institute name';
        include('../includes/happierme-email.php');
      ?>
      <!-- /bring happierme -->

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
                <a class="item" href="../blogs/avoid_and_overcome_burnout_with_self_awareness.php">
                  <div class="div_blog">
                    <div class="row">
                      <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/49.webp" class="img-responsive" alt="Avoid and overcome burnout, with wisdom">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 p0">
                        <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                          Avoid and overcome burnout, with wisdom
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" href="../blogs/how_to_manage_your_own_mental_health.php">
                  <div class="div_blog">
                    <div class="row">
                      <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/54.webp" class="img-responsive" alt="Understanding the impact of loneliness on adults">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 p0">
                        <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                          Understanding the impact of loneliness on adults
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" href="../blogs/difficult_emotions.php">
                  <div class="div_blog">
                    <div class="row">
                      <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/52.webp" class="img-responsive" alt="The Path to a Positive Mindset: Unleashing Inner Strength and Happiness">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 p0">
                        <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                          The Path to a Positive Mindset: Unleashing Inner Strength and Happiness
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="work-blog-footer">
                <a class="sap work-blog-more" href="https://happierme.app/adults/blogs">
                  <h4 class="mtb0px fs_18px fw_500 lh_150p td_underline">
                    View all blogs
                  </h4>
                  <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
                </a>
                <div class="owl-theme work-blog-nav">
                  <div class="owl-controls">
                    <div class="owl-nav"></div>
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

    <!-- vendor_footer -->
    <?php include('../includes/vendor_footer.php'); ?>
    <!-- /vendor_footer -->

    <script>
      (function () {
        var hcTestimonialsMode = null;
        var hcBlogReady = false;

        function whenJqueryOwl(fn) {
          var started = false;
          function run() {
            if (!window.jQuery || typeof window.jQuery.fn.owlCarousel !== 'function') return false;
            if (started) return true;
            started = true;
            fn(window.jQuery);
            return true;
          }
          if (run()) return;
          document.addEventListener('hw:owl-ready', function () {
            setTimeout(run, 0);
            setTimeout(run, 250);
          });
          window.addEventListener('load', function () {
            var n = 0;
            var t = setInterval(function () {
              n += 1;
              if (run() || n > 50) clearInterval(t);
            }, 100);
          });
        }

        function flattenCarouselItems($el) {
          var $items = $el.find('.item');
          if (!$items.length) return $();
          $items.detach();
          $el.children().remove();
          $el.append($items);
          return $items;
        }

        function ensureTestimonialItems($tc) {
          return flattenCarouselItems($tc);
        }

        function initHcTestimonialsCarousel($) {
          var $tc = $('body.page-healthcare .owl_testimonials .owl-carousel');
          if (!$tc.length) return;

          var isMobile = window.matchMedia('(max-width: 767px)').matches;
          var nextMode = isMobile ? 'mobile' : 'desktop';

          if (hcTestimonialsMode === nextMode) {
            if (nextMode === 'mobile' && $tc.hasClass('owl-loaded')) {
              // fall through — destroy leftover Owl and restore native scroll
            } else if (nextMode === 'desktop' && !$tc.hasClass('owl-loaded') && typeof $.fn.owlCarousel === 'function') {
              // fall through
            } else {
              return;
            }
          }

          if ($tc.hasClass('owl-loaded')) {
            try { $tc.trigger('destroy.owl.carousel'); } catch (e) {}
          }

          ensureTestimonialItems($tc);
          $tc.removeClass('work-testimonials-native owl-loaded owl-drag owl-grab');
          $tc.css({ display: '', flexDirection: '', flexWrap: '', overflowX: '', overflowY: '' });

          if (isMobile) {
            $tc.addClass('work-testimonials-native');
            hcTestimonialsMode = 'mobile';
            return;
          }

          $tc.owlCarousel({
            stagePadding: 0,
            loop: false,
            margin: 30,
            nav: false,
            autoWidth: false,
            dots: false,
            touchDrag: true,
            mouseDrag: true,
            pullDrag: true,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1100: { items: 3 }
            }
          });
          hcTestimonialsMode = 'desktop';
        }

        var hcBlogMode = null;

        function initHcBlogCarousel($) {
          var $blog = $('body.page-healthcare .owl_blog .owl-carousel');
          var $nav = $('body.page-healthcare .owl_blog .owl-nav');
          if (!$blog.length) return;

          var isMobile = window.matchMedia('(max-width: 767px)').matches;
          var isWide = window.matchMedia('(min-width: 1400px)').matches;
          var nextMode = isMobile ? 'mobile' : (isWide ? 'wide' : 'desktop');

          if (hcBlogMode === nextMode) {
            if (nextMode === 'desktop' && !$blog.hasClass('owl-loaded') && typeof $.fn.owlCarousel === 'function') {
              // fall through — init Owl
            } else if (nextMode !== 'desktop' && $blog.hasClass('owl-loaded')) {
              // fall through — destroy leftover Owl
            } else {
              return;
            }
          }

          if ($blog.hasClass('owl-loaded')) {
            try { $blog.trigger('destroy.owl.carousel'); } catch (e) {}
          }

          flattenCarouselItems($blog);
          $blog.removeClass('hc-blog-native hc-blog-wide owl-loaded owl-drag owl-grab');

          if (isMobile) {
            $blog.addClass('hc-blog-native');
            hcBlogMode = 'mobile';
            return;
          }

          // Wide screen: show all cards, no carousel / arrows (same as index.php)
          if (isWide) {
            $blog.addClass('hc-blog-wide');
            hcBlogMode = 'wide';
            hcBlogReady = true;
            return;
          }

          if (typeof $.fn.owlCarousel !== 'function') return;

          $blog.owlCarousel({
            loop: false,
            margin: 40,
            nav: true,
            dots: false,
            autoWidth: true,
            stagePadding: 0,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            navText: [
              '<span class="bi bi-chevron-left"></span>',
              '<span class="bi bi-chevron-right"></span>'
            ],
            navContainer: $nav.length ? $nav : false,
            responsive: {
              0: { items: 1, autoWidth: true },
              768: { items: 2, autoWidth: true }
            }
          });
          hcBlogMode = 'desktop';
          hcBlogReady = true;
        }

        function initAll($) {
          initHcTestimonialsCarousel($);
          initHcBlogCarousel($);
        }

        whenJqueryOwl(function ($) {
          initAll($);
          setTimeout(function () { initAll($); }, 300);
          setTimeout(function () { initHcBlogCarousel($); }, 900);
          window.addEventListener('resize', function () {
            initHcTestimonialsCarousel($);
            initHcBlogCarousel($);
          });
        });
      })();
    </script>
    
  </body>

</html>