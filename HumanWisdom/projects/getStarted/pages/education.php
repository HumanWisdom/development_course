<!DOCTYPE html>
<html lang="en">

  <head>
    <meta property="og:title" id="tag1" content="Student Wellbeing and Life Skills | HappierMe">
    <meta property="og:description" content="Improve student wellbeing and build life skills with HappierMe. Develop emotional intelligence, confidence and stronger relationships.">
     <meta name="keywords" content="student wellbeing
,student mental health,
social emotional learning,
emotional intelligence for students,
life skills for students,
resilience for students,
self-awareness for students,
school wellbeing,
emotional wellbeing in schools,
student resilience


">
    <meta property="og:image" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:alt" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:width" content="414" />
     <meta name="keywords" content="student wellbeing
student mental health
emotional intelligence for students
social emotional learning

">
    <meta property="og:image:height" content="232" />
  
    <meta property="og:site_name" content=HappierMe>
    <meta property="og:url" content=https://happierme.app/>
    <meta property="og:type" content="Website">
    <!-- <meta property="og:image" content=https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/education_app.webp> -->
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
          display: flex !important;
          height: 100% !important;
        }

        .owl_testimonials .div_testimonials.edu-testimonial-card {
          height: auto !important;
          min-height: 260px !important;
          display: flex !important;
          flex-direction: column !important;
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
    }

    /* Education hero copy — Figma: 383px, black title, left-aligned */
    @media screen and (min-width: 768px) {
      body.page-education .healthcare-hero-shell .absolute_desc > .edu-hero-copy,
      body.page-education .healthcare-hero-shell .absolute_desc_m > .edu-hero-copy {
        max-width: 383px !important;
        width: 383px !important;
        flex: 0 0 383px !important;
        text-align: left !important;
      }

      body.page-education .edu-hero-title,
      body.page-education section.hpt120px .absolute_desc_m h1.edu-hero-title {
        font-family: 'Poppins', sans-serif !important;
        font-size: 36px !important;
        font-weight: 600 !important;
        line-height: 140% !important;
        color: rgba(0, 0, 0, 1) !important;
        text-align: left !important;
        margin: 0 !important;
      }

      body.page-education .edu-hero-subtitle {
        color: rgba(0, 0, 0, 1) !important;
        text-align: left !important;
      }
    }

    @media screen and (min-width: 1600px) {
      body.page-education .healthcare-hero-shell .absolute_desc > .edu-hero-copy,
      body.page-education .healthcare-hero-shell .absolute_desc_m > .edu-hero-copy,
      body.page-education .healthcare-hero-shell .absolute_desc > [class*="col-"].edu-hero-copy,
      body.page-education .healthcare-hero-shell .absolute_desc_m > [class*="col-"].edu-hero-copy {
        max-width: 383px !important;
        width: 383px !important;
      }
    }
    </style>
  </head>

  <body class="page-education">
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
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/education_landing.webp" class="img-responsive w100p display_m_none h-800" alt="Boost student wellbeing, learning and emotional intelligence">

              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/education_mobile.webp" class="img-responsive w100p display_d_none" alt="Boost student wellbeing, learning and emotional intelligence">

              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/education_widescreen.webp" class="img-responsive w100p display_m_none wide-screen-only" loading="lazy" alt="Boost student wellbeing, learning and emotional intelligence">
            </div>
          </div>
    
          <div class="row center_flex absolute_desc absolute_desc_m" data-aos="fade-up" data-aos-delay="500">
            <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10  col-10 p0 tleft edu-hero-copy">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0 mt20px">
                <h1 class="mtb0px fs_36px fw_600 lh_140p fc_000000 edu-hero-title">
                  Boost student wellbeing, learning and emotional intelligence
                </h1>
              </div>
    
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0 mtb20px">
                <h5 class="mt20px mb30px fs_15px fw_400 lh_160p fc_000000 edu-hero-subtitle">
                  Give students all the support they need to help reduce stress and anxiety, manage their own mental health, be happier and learn the soft skills they need to succeed at work.
                </h5>
              </div>
    
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  col-12 p0">
                  <a href="#bring_happierme">
                    <button class="fs_15px fw_600 lh_140p fc_ffffff btn_tff req_button" >
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
            <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 pr0px tleft ta_lc mb20px display_d_none" data-aos="fade-up" data-aos-delay="200">
              <h2 class="mtb0px fs_24px fw_600 lh_150p fc_834b66">
                Develop a mind that is calm, and open to learning
              </h2>
            </div> -->

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  col-12 pl0px cpr_a ml15px" data-aos="fade-up" data-aos-delay="100">
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/education_app.webp" class="img-responsive education_app_img" alt="Develop a mind that is calm, and open to learning">
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 pr0px tleft w-384px mt0px edu-desc-copy" data-aos="fade-up" data-aos-delay="200">
              <h2 class="mtb0px fs_30px fw_600 lh_140p fc_000000 edu-desc-title">
                Develop a mind that is calm, and open to learning
              </h2>

              <h5 class="mtb0px fs_15px fw_400 lh_150p fc_000000 edu-desc-subtitle">
                How we think matters! We can avoid and overcome so many challenges we face every day by understanding ourselves and how our minds work. This can help students to self-regulate their habits, emotions and mental health, have happier relationships, and shine in the world.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <!-- /description -->

      <!-- did you know -->
      <section class="edu-dyk-section">
        <div class="section-header edu-dyk-header">
          <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
              <h2 class="mtb0px fs_30px fw_600 lh_150p fc_000000 edu-dyk-title">
                Did you know?
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex div_dyk edu-dyk-band">
          <div class="p0 div_dyk_l1 w-980px">

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="100">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    80%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students suffer from stress
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="200">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    44%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students use alcohol or drugs to cope with their problems
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="300">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    33%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students report that they were often or always lonely
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="400">
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
                    of students suffer from anxiety
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="500">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    50%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students report some thoughts of self-harm
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="600">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    75%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students conceal symptoms due to fears of stigma
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <!-- /did you know -->

      <!-- testimonials -->
      <section class="edu-testimonials-section">
        <div class="section-header edu-testimonials-header">
          <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
              <h2 class="mtb0px fs_30px fw_600 lh_120p fc_000000 edu-testimonials-title">
                The HappierMe impact across institutions
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="edu-testimonials-wrap">
            <div class="owl_container owl_testimonials">
              <div class="owl-carousel owl-theme">

                <div class="item" data-aos="fade-up" data-aos-delay="200">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_adam_beagley.webp" class="edu-testimonial-avatar" alt="Adam Beagley" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Adam Beagley</p>
                        <p class="edu-testimonial-role">Student, UK</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">HappierMe has helped me become emotionally intelligent. I used to be shy, passive and fearful. The app has transformed my way of thinking and relieved me of my anxiety. Whatever you struggle with, there are modules to help.</p>
                  </div>
                </div>

                <div class="item" data-aos="fade-up" data-aos-delay="300">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_samaira_giri.webp" class="edu-testimonial-avatar" alt="Samaira" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Samaira</p>
                        <p class="edu-testimonial-role">Student, India</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">HappierMe is more than an app to me. Whenever I need an answer to a question and I'm too shy or impatient to talk to somebody about it, HappierMe is my go to app. It has helped me be emotionally intelligent and given me an understanding of my emotions.</p>
                  </div>
                </div>

                <div class="item" data-aos="fade-up" data-aos-delay="400">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_rahul_bagale.webp" class="edu-testimonial-avatar" alt="Dr Rahul Bagale" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Dr Rahul Bagale</p>
                        <p class="edu-testimonial-role">Psychiatrist, Symbiosis University, India</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">The HappierMe App has been introduced to Symbiosis University students. I think it is an absolute necessity to provide this amazing platform to students in Universities worldwide, to help them take charge of their own wellbeing and succeed in life.</p>
                  </div>
                </div>

                <div class="item" data-aos="fade-up" data-aos-delay="500">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_anthony_seldon.webp" class="edu-testimonial-avatar" alt="Sir Anthony Seldon" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Sir Anthony Seldon</p>
                        <p class="edu-testimonial-role">Vice Chancellor, UK</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">After a lifetime in education, I think there is an urgent need for solutions to help students deal with problems like stress, anxiety, addiction and conflict in their relationships. I believe the HappierMe project is one of those solutions.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_roshal_sebastian.webp" class="edu-testimonial-avatar" alt="Roshal Sebastian" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Roshal Sebastian</p>
                        <p class="edu-testimonial-role">Texas, USA</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">HappierMe has helped me build a better relationship with myself and others. This app provided a safe space for me to explore my thoughts and feelings, guided by insightful exercises and resources tailored to my needs.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_dominic_curran.webp" class="edu-testimonial-avatar" alt="Dominic Curran" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Dominic Curran</p>
                        <p class="edu-testimonial-role">England</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">The HappierMe App has helped me to look at what I think, how I think, and helped me to question why I think in certain ways. This understanding has transformed my life.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_swati_nair.webp" class="edu-testimonial-avatar" alt="Swati" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Swati</p>
                        <p class="edu-testimonial-role">Student, UAE</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">Through its modules, awareness exercises and life stories the HappierMe app has helped me better understand why I think and act the way I do. This gave me a new perspective on how to handle various situations, including stress, peer pressure, and social media.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_camille_hoffheinz.webp" class="edu-testimonial-avatar" alt="Camille" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Camille</p>
                        <p class="edu-testimonial-role">USA</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">HappierMe is a unique and inspiring app that has encouraged me to dig deeper within myself. Its various modules and journaling activities have helped me learn more about myself and how to cope with life's challenges.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="div_testimonials edu-testimonial-card">
                    <div class="edu-testimonial-header">
                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/testimonial_leah_christensen.webp" class="edu-testimonial-avatar" alt="Leah Christensen" loading="lazy">
                      <div class="edu-testimonial-meta">
                        <p class="edu-testimonial-name">Leah Christensen</p>
                        <p class="edu-testimonial-role">Student, USA</p>
                      </div>
                    </div>
                    <p class="edu-testimonial-quote">HappierMe is the best app I've found that fosters self connection, awareness, and an overall happier life. As a Psychology graduate I can say the lessons taught on this app are ones that will stick with you for a lifetime.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /testimonials -->


      <!-- inspiring -->
      <section class="edu-inspire-section">
        <div class="section-header edu-inspire-header">
          <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
              <h2 class="mtb0px fs_30px fw_600 lh_140p fc_000000 edu-inspire-title">
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
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_employability.svg" class="img-responsive" alt="Boost employability">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Boost employability
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Soft skills like communication, teamwork, emotional intelligence, critical thinking, and creativity are a natural by-product of self-understanding.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="300">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_intelligence.svg" class="img-responsive" alt="Emotional intelligence">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Emotional intelligence
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Understanding your emotions boosts your EQ, and this can help staff manage their mental health and have happier relationships.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="400">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_learning.svg" class="img-responsive" alt="Better learning">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Better learning
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Happy students who are not stressed or anxious, and who have healthy relationships are able to learn better.
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
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_leadership.svg" class="img-responsive" alt="Leadership skills">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Leadership skills
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Leadership skills are a by-product of self-awareness. The 
                    <a class="fc_cb6171" href="https://happierme.app/adults/leadership">
                      Leadership
                    </a>
                    section offers students a way of developing these skills to succeed at work.
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="600">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_critical_thinking.svg" class="img-responsive" alt="Critical thinking">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Critical thinking
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Self-awareness helps you to think clearly, solve problems, and make better decisions. This can lead to healthier habits.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="700">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_addiction.svg" class="img-responsive" alt="Overcome Addiction">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Overcome Addiction
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Our need for pleasure, our conditioning, and escaping from emotional pain drive addiction. We help people avoid and overcome it.
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
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_relationships.svg" class="img-responsive" alt="Relationships">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Relationships
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Happy relationships enhance learning and lay the foundation for long-term happiness. We have a dedicated 
                    <a class="fc_cb6171" href="https://happierme.app/adults/curated/have-fulfilling-relationships">
                      Relationship section 
                    </a>
                    for users to explore.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="900">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_stress.svg" class="img-responsive" alt="Overcome stress & anxiety">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Overcome stress & anxiety  
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    We offer quick solutions to relieve stress and anxiety, and then understand the root cause for prevention and long-term solutions.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12  col-12 p0" data-aos="fade-up" data-aos-delay="1000">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_dealing_criticism.svg" class="img-responsive" alt="Dealing with criticism">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Dealing with criticism 
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    We help students accept feedback with a positive attitude, which can enhance their learning and employability.
                  </h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <!-- /inspiring -->

      <!-- bring happierme -->
      <?php include('../includes/happierme-email.php'); ?>
      <!-- /bring happierme -->

      <!-- blog -->
      <section class="edu-blog-section">
        <div class="section-header edu-blog-header">
          <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
              <h2 class="mtb0px fs_30px fw_600 lh_120p fc_000000 edu-blog-title">
                Explore our blog
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 edu-blog-wrap">

            <div class="owl_blog">
              <div class="owl-carousel owl-theme">
                <a class="item" data-aos="fade-up" data-aos-delay="200"href="../blogs/15_ways_self_awareness_can_help_students.php">
                  <div class="div_blog">
                    <div class="row">
                      <div class="col-xs-12  col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/19.webp" class="img-responsive" alt="15 ways self-awareness can help students">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-12  col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12">
                        <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                          15 ways self-awareness can help students 
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" data-aos="fade-up" data-aos-delay="300"href="../blogs/the_purpose_of_education.php">
                  <div class="div_blog">
                    <div class="row">
                      <div class="col-xs-12  col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/10.webp" class="img-responsive" alt="The purpose of education">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-12  col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12">
                        <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                          The purpose of education
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" data-aos="fade-up" data-aos-delay="400"href="../blogs/responding_to_criticism.php">
                  <div class="div_blog">
                    <div class="row">
                      <div class="col-xs-12  col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/3.webp" class="img-responsive" alt="Responding to criticism">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-12  col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12">
                        <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                          Responding to criticism
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="edu-blog-footer">
                <a class="sap edu-blog-more" href="https://happierme.app/adults/blogs">
                  <h4 class="mtb0px fs_18px fw_500 lh_150p td_underline">
                    See all posts
                  </h4>
                </a>
                <div class="owl-theme mt10px edu-blog-nav">
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

    <!-- vendor_footer -->
    <?php include('../includes/vendor_footer.php'); ?>
    <!-- /vendor_footer -->

    <script>
      function initEducationTestimonialsCarousel() {
        var $tc = $('body.page-education .owl_testimonials .owl-carousel');
        if (!$tc.length) return;

        var isMobile = window.matchMedia('(max-width: 767px)').matches;

        if ($tc.hasClass('owl-loaded')) {
          $tc.trigger('destroy.owl.carousel');
        }

        $tc.removeClass('edu-testimonials-native owl-loaded owl-drag');

        if (isMobile) {
          $tc.addClass('edu-testimonials-native');
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

      document.addEventListener('DOMContentLoaded', initEducationTestimonialsCarousel);
      window.addEventListener('load', initEducationTestimonialsCarousel);
      window.addEventListener('resize', initEducationTestimonialsCarousel);
    </script>

  </body>

</html>