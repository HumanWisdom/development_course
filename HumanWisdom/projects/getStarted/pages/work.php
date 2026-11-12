<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Employee Wellbeing, Life Skills & Leadership | HappierMe</title>
    <meta name="title"  content="Employee Wellbeing, Life Skills & Leadership | HappierMe">
    <meta name="description" content="Improve employee wellbeing and build life skills with HappierMe. Develop emotional intelligence, communication and stronger workplace relationships.">
    <meta name="keywords" content="employee wellbeing, workplace wellbeing, workplace mental health, emotional intelligence at work, leadership skills, communication skills, resilience at work, employee resilience, workplace culture, stress management at work, life skills for work">


    <meta property="og:title" id="tag1" content="Employee Wellbeing, Life Skills & Leadership | HappierMe">
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Improve employee wellbeing and build life skills with HappierMe. Develop emotional intelligence, communication and stronger workplace relationships.">
    
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
      "description": "Improve employee wellbeing and build life skills with HappierMe. Develop emotional intelligence, communication and stronger workplace relationships.",
      "url": "https://happierme.app/"
    },
    {
      "@context": "https://schema.org",
      "@type": "MentalHealthService",
      "name": "HappierMe",
      "description": "Improve employee wellbeing and build life skills with HappierMe. Develop emotional intelligence, communication and stronger workplace relationships.",
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

        /* Testimonials native scroll — sizes owned by work.css (Figma 13309:7403) */
        .owl-carousel .owl-stage {
          width: auto !important;
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
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/workkk.webp" class="img-responsive w100p display_m_none h-800" alt="Build a happier, more capable workforce">

                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_mobile.webp" class="img-responsive w100p display_d_none" alt="Build a happier, more capable workforce">

                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_widescreen.webp" class="img-responsive w100p display_m_none wide-screen-only" loading="lazy" alt="Build a happier, more capable workforce">
                </div>
              </div>

              <div class="row center_flex absolute_desc absolute_desc_m" data-aos="fade-up" data-aos-delay="500">
                <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10 col-10 p0 tleft work-hero-stack">
                  <h1>
                    Build a happier, more capable workforce.
                  </h1>

                  <h5>
                    Help your people develop self-awareness and emotional skills to reduce stress and prevent burnout, strengthen relationships and make better decisions.
                  </h5>

                  <div class="work-hero-ctas">
                    <a href="#bring_happierme" class="fs_15px fw_600 lh_140p fc_ffffff btn_tff req_button work-hero-btn" id="requestDemoForWork">
                      Request a demo
                    </a>
                    <a href="../organisation-choose.php/happierme" class="fs_15px fw_600 lh_140p fc_ffffff btn_tff work-hero-btn">
                      Try free for 10 days
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section class="work-trust" aria-label="Trust badges">
          <div class="work-trust-inner">
            <div class="work-trust-item">
              <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/orcha_certifie.svg" width="60" height="45" alt="ORCHA Certified">
              <span>ORCHA approved for use in healthcare</span>
            </div>
            <div class="work-trust-item">
              <img src="https://d1tenzemoxuh75.cloudfront.net/website/working_with_mind.svg" width="104" height="45" alt="Working with Mind">
              <span>Featured in Mind’s app library</span>
            </div>
          </div>
        </section>

        <main id="main">

          <!-- Improve performance -->
          <section class="work-section work-perf-section">
            <div class="work-section-inner">
              <div class="work-section-head">
                <h2 class="work-section-title">
                  <span class="work-copy-desktop">Improve performance and productivity<br>with HappierMe</span>
                  <span class="work-copy-mobile">Inspiring fresh ways of thinking</span>
                </h2>
              </div>
              <div class="work-pillars">
                <article class="work-pillar">
                  <span class="work-icon-slot" aria-hidden="true"></span>
                  <div class="work-pillar-copy">
                                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/mentall.svg" width="79" height="60" alt="Working with Mind">

                    <h3 class="work-pillar-title">Proactive mental wellbeing</h3>
                    <p class="work-pillar-text">Build self-awareness and emotional skills to help prevent mental health problems and burnout before they escalate and affect performance.</p>
                  </div>
                </article>
                <article class="work-pillar">
                  <span class="work-icon-slot" aria-hidden="true"></span>
                  <div class="work-pillar-copy">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/relationnn.svg" width="79" height="60" alt="Working with Mind">

                    <h3 class="work-pillar-title">Stronger relationships</h3>
                    <p class="work-pillar-text">Develop self-awareness and empathy to improve communication, collaboration and conflict resolution, fostering a more positive workforce culture.</p>
                  </div>
                </article>
                <article class="work-pillar">
                  <span class="work-icon-slot" aria-hidden="true"></span>
                  <div class="work-pillar-copy">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/makk.svg" width="79" height="60" alt="Working with Mind">

                    <h3 class="work-pillar-title">Better decision making</h3>
                    <p class="work-pillar-text">Understand how emotions, unconscious biases and personal values influence thinking, enabling clearer judgement.</p>
                  </div>
                </article>
                <article class="work-pillar">
                  <span class="work-icon-slot" aria-hidden="true"></span>
                  <div class="work-pillar-copy">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/prodddd.svg" width="79" height="60" alt="Working with Mind">

                    <h3 class="work-pillar-title">Improved productivity</h3>
                    <p class="work-pillar-text">Happier, more engaged employees tend to be more productive, take fewer sick days and experience less burnout, contributing to better business performance.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          
          <!-- <section class="work-section work-video-section">
            <div class="work-section-inner">
              <div class="work-section-head">
                <h2 class="work-section-title">Boost human skills to thrive at work</h2>
              </div>
              <div class="work-video-wrap"> -->
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/ROP4llA74DA?si=6Zk3KCbtVKEohzVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
                <!-- <iframe
                  loading="lazy"
                  title="How to Boost Wellbeing and Productivity Using Human Skills"
                  src="https://www.youtube.com/embed/ROP4llA74DA?si=6Zk3KCbtVKEohzVg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </div>
          </section> -->

           <!-- video -->
   <section class="work-section work-video-section">
      <div class="section-header-teen">
        <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
           <div class="work-section-head">
                <h2 class="work-section-title">Boost human skills to thrive at work</h2>
              </div>
        </div>
      </div>

      <div class="row center_flex" data-aos="fade-up" data-aos-delay="200">
        <div class="col-lg-6 col-md-6 col-sm-10 col-xs-10 col-10 p0 w-980px teen-video-wrap">
          <div class="youtube-player teen-youtube-player">
            <button
              id="teenYoutubeCover"
              type="button"
              aria-label="Play HappierMe for Teens video">
              <img
                src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/Youtube+player.webp"
                alt="HappierMe for Teens video cover" />
            </button>
            <iframe
                  loading="lazy"
                  title="How to Boost Wellbeing and Productivity Using Human Skills"
                  src="https://www.youtube.com/embed/ROP4llA74DA?si=6Zk3KCbtVKEohzVg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
    <!-- /video -->


          <!-- Why different -->
          <section class="work-section work-diff-section">
            <div class="work-section-inner">
              <div class="work-section-head">
                <h2 class="work-section-title">Why HappierMe is different</h2>
                <p class="work-section-sub">
                  <span class="work-copy-desktop">Most apps help you cope. HappierMe helps you understand yourself and change.</span>
                  <span class="work-copy-mobile">Most apps help you cope.<br>We help you change.</span>
                </p>
              </div>
              <div class="work-diff-cards">
                <article class="work-diff-card">
                  <div class="work-diff-card-top work-diff-card-top--prevention">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/Prevention.svg" alt="" width="66" height="66" class="work-diff-icon display_m_none">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/preventation_mob.svg" alt="" width="66" height="66" class="work-diff-icon display_d_none">
                  </div>
                  <div class="work-diff-card-body">
                    <h3 class="work-diff-card-title">Prevention-first approach</h3>
                    <p class="work-diff-card-text">Build skills to manage challenges early, before stress and mental health problems escalate.</p>
                  </div>
                </article>
                <article class="work-diff-card">
                  <div class="work-diff-card-top work-diff-card-top--root">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/root.svg" alt="" width="66" height="66" class="work-diff-icon display_m_none">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/route_mob.svg" alt="" width="66" height="66" class="work-diff-icon display_d_none">
                  </div>
                  <div class="work-diff-card-body">
                    <h3 class="work-diff-card-title">Address the root causes</h3>
                    <p class="work-diff-card-text">Understand hidden patterns of thinking and behaviour behind stress, conflict and poor decisions to create lasting change.</p>
                  </div>
                </article>
                <article class="work-diff-card">
                  <div class="work-diff-card-top work-diff-card-top--skills">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/build.svg" alt="" width="66" height="66" class="work-diff-icon display_m_none">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/skills_mob.svg" alt="" width="66" height="66" class="work-diff-icon display_d_none">
                  </div>
                  <div class="work-diff-card-body">
                    <h3 class="work-diff-card-title">Build skills for life</h3>
                    <p class="work-diff-card-text">Develop self-awareness, emotional intelligence and interpersonal skills to thrive at work and beyond.</p>
                  </div>
                </article>
                <article class="work-diff-card">
                  <div class="work-diff-card-top work-diff-card-top--whole">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/life.svg" alt="" width="66" height="66" class="work-diff-icon display_m_none">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/life_mob.svg" alt="" width="66" height="66" class="work-diff-icon display_d_none">
                  </div>
                  <div class="work-diff-card-body">
                    <h3 class="work-diff-card-title">Whole person wellbeing</h3>
                    <p class="work-diff-card-text">Dedicated sections for adults, parents and teenagers support the whole family with mental health, relationships, parenting and everyday challenges.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <!-- Measure well-being: cream banner 400px; image taller and overflows -->
          <section class="work-measure">
            <div class="work-measure-band" aria-hidden="true"></div>
            <div class="work-measure-inner" data-aos="fade-up" data-aos-delay="100">
              <div class="work-measure-media">
                <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/measureee.webp" class="img-responsive" alt="Organization Dashboard">
              </div>
              <div class="work-measure-copy">
                <h2 class="work-section-title">Measure well-being. Drive performance.</h2>
                <p>Give HR teams a clear view of employee engagement and wellness with actionable insights that help build healthier, more productive workplaces.</p>
                <p>All data is anonymised, so individuals cannot be identified.</p>
              </div>
            </div>
          </section>

          <!-- testimonials -->
          <section class="work-testimonials-section">
            <div class="section-header work-testimonials-header">
              <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
                  <h2 class="mtb0px fw_600 fc_000000 work-testimonials-title">
                    <span class="work-copy-desktop">The HappierMe impact across<br>organisations</span>
                    <span class="work-copy-mobile">The HappierMe impact across organisations</span>
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
                        <p class="work-testimonial-quote">“I subscribed to The HappierMe app for all my staff because I have seen how transformative it is to understand my reactions to situations, and my personal emotions such as anxiety &amp; depression. To be able to help others understand, with wisdom, why they feel as they do, is my life-long gift to them.”</p>
                      </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-delay="300">
                      <div class="div_testimonials work-testimonial-card">
                        <div class="work-testimonial-header">
                          <img src="https://d1tenzemoxuh75.cloudfront.net/assets/webp/testimonial_dan_reidenberg.webp" class="work-testimonial-avatar" alt="Dr Dan Reidenberg" loading="lazy">
                          <div class="work-testimonial-meta">
                            <p class="work-testimonial-name">Dr Dan Reidenberg</p>
                            <p class="work-testimonial-role">Director, Mental Health Coalition, USA</p>
                          </div>
                        </div>
                        <p class="work-testimonial-quote">“HappierMe is a well-designed intuitive app that provides many useful tools and resources for anyone wanting to improve their life resilience and well-being. Built upon the belief that the more you know the stronger you will be in moments of crisis HappierMe increases your knowledge awareness and internal strength in an easy to use format.”</p>
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
                        <p class="work-testimonial-quote">“Having trouble figuring it all out? The HappierMe app is an awesome resource for everyday living. You'll find easy, soothing support here - modern tools for exploring your own inner wisdom, for every dilemma.”</p>
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

          <!-- Workplace challenges -->
          <section class="work-section work-challenge-section">
            <div class="work-section-inner">
              <div class="work-section-head">
                <h2 class="work-section-title">
                  <span class="work-copy-desktop">Multiple workplace challenges.<br>One proactive solution.</span>
                  <span class="work-copy-mobile">Multiple workplace challenges. One proactive solution.</span>
                </h2>
                <p class="work-section-sub">HappierMe helps address these challenges by building self-awareness<br class="display_m_none"> and emotional skills across the workforce</p>
              </div>
              <div class="work-challenge-cards">
                <article class="work-challenge-card work-challenge-card--1">
                  <p class="work-challenge-stat">76%</p>
                  <p class="work-challenge-text">of US workers reported at least one symptom of a mental health condition.</p>
                  <p class="work-challenge-cite">(US Surgeon General, 2022)</p>
                </article>
                <article class="work-challenge-card work-challenge-card--2">
                  <p class="work-challenge-stat">88%</p>
                  <p class="work-challenge-text">of European employees are not engaged or are actively disengaged.</p>
                  <p class="work-challenge-cite">(Gallup, 2026)</p>
                </article>
                <article class="work-challenge-card work-challenge-card--3">
                  <p class="work-challenge-stat">60%</p>
                  <p class="work-challenge-text">of new managers fail within their first 24 months.</p>
                  <p class="work-challenge-cite">(Gartner, cited by Wharton)</p>
                </article>
                <article class="work-challenge-card work-challenge-card--4">
                  <p class="work-challenge-stat">44%</p>
                  <p class="work-challenge-text">of working age adults in Great Britain experienced workplace conflict in the previous year.</p>
                  <p class="work-challenge-cite">(Acas, 2025)</p>
                </article>
              </div>
            </div>
          </section>

          <!-- Human skills -->
          <section class="work-section work-skills-section11">
            <div class="work-section-inner">
              <div class="work-section-head">
                <h2 class="work-section-title">
                  <span class="work-copy-desktop">Building human skills to thrive<br>in the age of AI</span>
                  <span class="work-copy-mobile">Building human skills to thrive in the age of AI</span>
                </h2>
                <p class="work-section-sub">As AI transforms the workplace, human skills matter more than ever. HappierMe helps employees build these skills to thrive at work and beyond.</p>
              </div>
              <div class="work-skills-grid">
                <article class="work-skill-card">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_well_being.svg" class="work-skill-icon" width="46" height="46" alt="">
                  <div>
                    <h3 class="work-skill-title">Self-awareness</h3>
                    <p class="work-skill-text">Understand the thoughts, emotions and patterns behind your behaviour to think clearly and respond thoughtfully.</p>
                  </div>
                </article>
                <article class="work-skill-card">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_intelligence.svg" class="work-skill-icon" width="46" height="46" alt="">
                  <div>
                    <h3 class="work-skill-title">Emotional intelligence and resilience</h3>
                    <p class="work-skill-text">Understand and manage your emotions, navigate stress and uncertainty, and respond constructively to life's challenges.</p>
                  </div>
                </article>
                <article class="work-skill-card">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_dealing_criticism.svg" class="work-skill-icon" width="46" height="46" alt="">
                  <div>
                    <h3 class="work-skill-title">Communication &amp; relationships</h3>
                    <p class="work-skill-text">Communicate with clarity and empathy, handle criticism, resolve conflict and build stronger working relationships.</p>
                  </div>
                </article>
                <article class="work-skill-card">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_critical_thinking.svg" class="work-skill-icon" width="46" height="46" alt="">
                  <div>
                    <h3 class="work-skill-title">Critical thinking &amp; decision-making</h3>
                    <p class="work-skill-text">Recognise biases, question assumptions and develop sound judgement to make better decisions.</p>
                  </div>
                </article>
                <article class="work-skill-card">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_productivity.svg" class="work-skill-icon" width="46" height="46" alt="">
                  <div>
                    <h3 class="work-skill-title">Adaptability &amp; growth</h3>
                    <p class="work-skill-text">Embrace change, overcome fear of the unfamiliar and develop the confidence to learn and grow.</p>
                  </div>
                </article>
                <article class="work-skill-card">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_leadership.svg" class="work-skill-icon" width="46" height="46" alt="">
                  <div>
                    <h3 class="work-skill-title">Leadership &amp; collaboration</h3>
                    <p class="work-skill-text">Learn to lead from within - with empathy, courage and good judgement, and work more effectively with others.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <?php
            $hm_demo_subtitle = 'Connect with our specialists today and see how we can help you prioritize a happier workspace';
            $hm_demo_secondary_label = 'Try HappierMe free for 10 days';
            $hm_demo_secondary_href = '../organisation-choose.php/happierme';
          ?>
          <!-- header -->
          <?php include('../includes/happierme-email.php'); ?>
          <!-- /header -->

          <!-- blog -->
          <section class="work-blog-section">
            <div class="section-header work-blog-header">
              <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
                  <h2 class="mtb0px fw_600 fc_000000 work-blog-title">
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
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
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
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
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
                          <div class="col-xs-12 col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
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
                  <span class="work-copy-desktop">View all blogs</span>
                  <span class="work-copy-mobile">Find out more</span>
                </h4>
                <span class="chevron-pink work-copy-desktop"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
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
    <link rel="stylesheet" href="<?= hw_asset_url('../assets/css/work.css'); ?>">
    <!-- Force Figma mobile title size (beats deferred index.css 18px hammer) -->
    <style id="work-mobile-title-figma">
      @media (max-width: 767px) {
        body.page-work main#main h2.work-testimonials-title,
        body.page-work main#main h2.work-section-title,
        body.page-work main#main h2.work-blog-title,
        body.page-work main#main .work-measure-copy h2.work-section-title,
        body.page-work #bring_happierme h2.work-demo-title,
        body.page-work section.hpt120px ~ main#main .work-testimonials-header h2.work-testimonials-title,
        body.page-work section.hpt120px ~ main#main .section-header h2.work-testimonials-title,
        body.page-work section.hpt120px ~ main#main .section-header h2.work-blog-title {
          font-family: Poppins, sans-serif !important;
          font-size: 24px !important;
          font-weight: 600 !important;
          letter-spacing: 0 !important;
          width: 335px !important;
          max-width: 335px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          text-align: center !important;
          white-space: normal !important;
        }
        body.page-work main#main h2.work-testimonials-title {
          line-height: 1.5 !important; /* Figma 150% → 2 lines at 335px */
        }
        body.page-work main#main h2.work-section-title,
        body.page-work main#main .work-measure-copy h2 {
          line-height: 1.4 !important;
        }
        body.page-work main#main h2.work-blog-title {
          line-height: 1.2 !important;
        }
        body.page-work #bring_happierme h2.work-demo-title {
          line-height: 1.5 !important;
          color: #fff !important;
        }
        body.page-work main#main .work-diff-section h2.work-section-title {
          line-height: 1.2 !important;
        }
        /* Beat responsive.css span { 12px } leak on mobile title copy */
        body.page-work main#main h2.work-section-title .work-copy-mobile,
        body.page-work main#main h2.work-testimonials-title .work-copy-mobile,
        body.page-work main#main h2.work-blog-title .work-copy-mobile,
        body.page-work main#main h2.work-section-title span,
        body.page-work main#main h2.work-testimonials-title span,
        body.page-work section.hpt120px ~ main#main section h2 .work-copy-mobile {
          font-family: Poppins, sans-serif !important;
          font-size: 24px !important;
          font-weight: 600 !important;
          letter-spacing: 0 !important;
          color: inherit !important;
        }
      }
    </style>

    <script>
      (function () {
        var workTestimonialsMode = null;

        function ensureTestimonialItems($tc) {
          var $items = $tc.find('.item');
          if (!$items.length) return $();
          // Flatten so .item are direct children (needed after Owl or native mode)
          $items.detach();
          $tc.children().remove();
          $tc.append($items);
          return $items;
        }

        function initWorkTestimonialsCarousel() {
          var $tc = $('body.page-work .owl_testimonials .owl-carousel');
          if (!$tc.length) return;

          var isMobile = window.matchMedia('(max-width: 767px)').matches;
          var nextMode = isMobile ? 'mobile' : 'desktop';

          // Avoid destroying/rebuilding on every resize pixel
          if (workTestimonialsMode === nextMode) {
            if (nextMode === 'desktop' && !$tc.hasClass('owl-loaded') && typeof $.fn.owlCarousel === 'function') {
              // fall through to (re)init
            } else {
              return;
            }
          }

          if ($tc.hasClass('owl-loaded')) {
            try {
              $tc.trigger('destroy.owl.carousel');
            } catch (e) {}
          }

          ensureTestimonialItems($tc);
          $tc.removeClass('work-testimonials-native owl-loaded owl-drag owl-grab');
          $tc.css({ display: '', flexDirection: '', flexWrap: '', overflowX: '', overflowY: '' });

          if (isMobile) {
            $tc.addClass('work-testimonials-native');
            workTestimonialsMode = 'mobile';
            return;
          }

          if (typeof $.fn.owlCarousel !== 'function') {
            workTestimonialsMode = null;
            return;
          }

          $tc.owlCarousel({
            stagePadding: 0,
            loop: false,
            margin: 30,
            nav: false,
            /* Fit 3 full cards — autoWidth caused the last card to clip */
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
          workTestimonialsMode = 'desktop';
        }

        function scheduleInit() {
          initWorkTestimonialsCarousel();
          // Owl may load slightly after this inline script
          setTimeout(initWorkTestimonialsCarousel, 100);
          setTimeout(initWorkTestimonialsCarousel, 500);
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', scheduleInit);
        } else {
          scheduleInit();
        }
        window.addEventListener('load', scheduleInit);
        window.addEventListener('resize', function () {
          initWorkTestimonialsCarousel();
        });
      })();
    </script>

  </body>

</html>