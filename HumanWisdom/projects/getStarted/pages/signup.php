<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="og:title" id="tag1" content="HappierMe:For Teens & Adults" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Master your mind and be happier" />
    <meta property="og:image" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:alt" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:width" content="414" />
    <meta property="og:image:height" content="232" />
    <meta property="og:title" content="HappierMe:For Teens & Adults">
    <meta property="og:site_name" content="HappierMe">
    <meta property="og:url" content="https://happierme.app/">
    <!--Schema tag for Organization :-->
    <script type="application/ld+json">
      [{
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "HappierMe",
        "description": "Mental health app that helps users understand their emotions and thoughts, and offers a variety of tools and resources to help people improve their lives.",
        "url": "https://happierme.app/"
      }, {
        "@context": "https://schema.org",
        "@type": "MentalHealthService",
        "name": "HappierMe",
        "description": "Mental health app that helps users understand their emotions and thoughts, and offers a variety of tools and resources to help people improve their lives.",
        "url": "https://happierme.app/"
      }]
    </script>
    <!-- vendor_header --> <?php include('../includes/vendor_header.php'); ?>
    <!-- /vendor_header -->
    <link rel="stylesheet" href="../assets/css/mind.css" />
     <style>
      .pt-7px{
        padding-top: 7px;     }

      .signup-title {
        color: rgba(131, 75, 102, 1) !important;
      }

      /* Unchecked: Figma — 20×20, 4px radius, 1px #000 @ 50% (inner stroke → border-box) */
      #signup-form label.chkb_post_anonymously > input[type="checkbox"] + *::before {
        width: 20px;
        height: 20px;
        min-width: 20px;
        min-height: 20px;
        border-radius: 4px;
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
      }

      #signup-form label.chkb_post_anonymously > input[type="checkbox"]:checked + *::before {
        background-color: rgba(237, 125, 111, 1);
        background-image: url(https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/tick_white.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 12px 12px;
        border: 0;
        border-radius: 4px;
      }

      /* Download app — gradient + hover (overrides global .btn_tff:hover solid fill) */
      #download-app-btn.btn_tff:not(:disabled),
      #download-app-btn.btn_tff:not(:disabled):focus {
        background: linear-gradient(180deg, #ED7D6F 0%, #D7586B 100%);
        color: #fff;
        transition: background 0.3s ease;
      }

      #download-app-btn.btn_tff:not(:disabled):hover,
      #download-app-btn.btn_tff:not(:disabled):focus:hover,
      #download-app-btn.btn_tff:not(:disabled):active {
        background: linear-gradient(180deg, #da7d71 0%, #bf5061 100%);
        color: #fff;
      }

      /* Agreement rows — one flex line: custom checkbox + copy (Figma); avoids broken col-xs-* on BS5 */
      #signup-form label.signup-agree-row {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        cursor: pointer;
      }

      /* Holder for ::before checkbox — must not grow as a flex item (display:block was stealing row width → link wrapped) */
      #signup-form label.signup-agree-row .signup-agree-checkbox-ui {
        flex: 0 0 20px;
        width: 20px;
        min-width: 20px;
        align-self: flex-start;
        margin: 0;
        padding: 0;
        line-height: 0;
        display: inline-block;
      }

      #signup-form label.signup-agree-row .signup-agree-copy {
        flex: 1;
        min-width: 0;
        padding-top: 2px;
      }

      /* Link must not form a flex sub-box next to label text — contents = text flows inline with “I agree to the” */
      #signup-form a.blog_highlight_peach {
        display: contents !important;
      }
     </style>
  </head>
  <body class="page-signup">
    <!-- request a demo php script --> <?php
      // Simulate fetching country data from a database or external API
      $countries = 
     ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]
    ?>
    <!-- /request a demo php script -->
    <!-- <div class="row center_flex"><div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"> -->
    <!-- header --> 
     
   <!-- header -->
    <div class="row ">
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 center_flex header_new">

    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 p0">

        <img src="https://d1tenzemoxuh75.cloudfront.net/website/Logo_Only.svg" class="img-responsive"  alt="logo">
      
    </div>

    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-8 p0 dflex_end">
      <!-- <nav id="navbar" class="navbar m0pxi">
        <ul>

          <li><a href="../pages/about_us.php"  id="AboutUs" >About us</a></li>
          <li class="prelative">
            <a id="teenagersHeaderClick">       
              Teenagers
              <div class="badge_new">
                <h6 class="mtb0px fs_6px fw_600 lh_130p fc_ffffff">
                  NEW
                </h6>
              </div>
            </a> -->
            <!--
          </li>
          <li><a href="../blogs/blog_index.php" class="blog_main">Blog</a></li>
          <li class="dropdown"><a><span>For organisations</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          </li> -->
          <!-- <li><a href="../blogs/blog_index.php" id="blogs" class="">Blog</a></li>
          <li class="dropdown"><a id="organisation"><span>For organisations</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a  id="work">HappierMe for Work</a></li>
              <li><a id="education" >HappierMe for Education</a></li>
              <li><a id="healthcare">HappierMe for Healthcare</a></li>
            </ul>
          </li>
          <li><a id="pricing">Pricing</a></li>
          <li><a id="partnership">Partnership</a></li>
          <li><a id="loginClick">Login</a></li>
        </ul>
      </nav> -->

      <!-- <a class="btn_tff btn_tff_tn" href="https://onelink.to/qsptex">Try for free</a>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i> -->
    </div>

  </div>
</div>
<!-- /header -->
    <!-- /header -->
    <!-- <section class="hpt120px"><div class="row" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><div class="row prelative" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_landing.webp" class="img-responsive w100p display_m_none" alt="Boost workplace wellbeing, performance and productivity"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/work_mobile.webp" class="img-responsive w100p display_d_none" alt="Boost workplace wellbeing, performance and productivity"></div></div><div class="row center_flex absolute_desc absolute_desc_m" data-aos="fade-up" data-aos-delay="500"><div class="col-lg-4 col-md-4 col-sm-10 col-xs-10 p0 tleft"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 mt20px"><h1 class="mtb0px fs_36px fw_600 lh_140p fc_ffffff">
                      Boost workplace wellbeing, performance and productivity
                    </h1></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 mtb20px"><h5 class="mt20px mb30px fs_15px fw_400 lh_160p fc_ffffff">
                      Upskill your staff to be happier, emotionally intelligent and make better decisions. An all-in-one app for mental health, relationships, better decision-making and soft skills.
                    </h5></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p0"><a href="#bring_happierme" class=""><button class="fs_15px fw_600 lh_140p fc_ffffff btn_tff" id="requestDemoForWork"  >
                          Request a demo
                        </button></a></div></div></div></div></div></div></section> -->

      <!-- price -->
      <!-- <section><div class="section-header"><div class="row center_flex" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0"><h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                    Packages to suit your needs
                  </h2></div></div></div><div class="row center_flex"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 div_price"><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 p0 pr20px" data-aos="fade-up" data-aos-delay="200"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h4 class="mtb0px fs_18px fw_600 lh_150p fc_cb6171 tt_uppercase">
                        Bronze
                      </h4></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mt10px mb0px fs_12px fw_400 lh_150p fc_000000">
                        1-year subscription +
                        <br>
                        1-hour training session
                      </h6></div></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 p0 plr20px" data-aos="fade-up" data-aos-delay="300"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h4 class="mtb0px fs_18px fw_600 lh_150p fc_cb6171 tt_uppercase">
                        Silver
                      </h4></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mt10px mb0px fs_12px fw_400 lh_150p fc_000000"><span class="fw_600">
                            Bronze
                        </span>
                        + 12 hrs of training for facilitators over a year, to aid engagement, host discussions and answer questions
                      </h6></div></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 p0 plr20px" data-aos="fade-up" data-aos-delay="400"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h4 class="mtb0px fs_18px fw_600 lh_150p fc_cb6171 tt_uppercase">
                        Gold
                      </h4></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mt10px mb0px fs_12px fw_400 lh_150p fc_000000"><span class="fw_600">
                          Silver
                        </span>
                        + Coaching by trained HappierMe coaches
                      </h6></div></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 p0 pl20px" data-aos="fade-up" data-aos-delay="500"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h4 class="mtb0px fs_18px fw_600 lh_150p fc_cb6171 tt_uppercase">
                        Platinum
                      </h4></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mt10px mb0px fs_12px fw_400 lh_150p fc_000000"><span class="fw_600">
                          Gold
                        </span>
                        + Wisdom Leadership Training
                      </h6></div></div></div></div></div><div class="row center_flex mt40px" data-aos="fade-up" data-aos-delay="500"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 center_flex"><div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 p0"><a href="#bring_happierme"><button class="fs_15px fw_600 lh_140p fc_ffffff btn_tff" >
                      Request a demo
                    </button></a></div></div></div></section> -->
      <!-- /price -->
      <!-- did you know -->
      <!-- <section><div class="section-header"><div class="row center_flex" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0"><h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                    Did you know?
                  </h2></div></div></div><div class="row center_flex div_dyk"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 p0 div_dyk_l1"><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="100"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        75%
                      </h2></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of employers say staff lack soft skills
                      </h5></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (shrm.org)
                      </h6></div></div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        67%
                      </h2></div></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of employees are disengaged
                      </h5></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (Gallup)
                      </h6></div></div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="300"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        76%
                      </h2></div></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of employees have a mental health problem
                      </h5></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (US Surgeon General)
                      </h6></div></div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="400"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        50-70%
                      </h2></div></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of leaders fail within 18 months
                      </h5></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (CEB)
                      </h6></div></div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="500"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        1 in 6
                      </h2></div></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        people have a substance abuse disorder
                      </h5></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (CDC)
                      </h6></div></div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="600"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                        38%
                      </h2></div></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        of UK employees experience interpersonal conflict at work
                      </h5></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h6 class="mtb0px fs_12px fw_400 lh_140p fc_000000">
                        (CIPD)
                      </h6></div></div></div></div></div></section> -->
      <!-- /did you know -->
      <!-- testimonials -->
      <!-- inspiring -->
      <!-- <section><div class="section-header"><div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0"><h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                    Inspiring fresh ways of thinking
                  </h2></div></div></div><div class="row center_flex"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 tcenter div_inspire"><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_productivity.svg" class="img-responsive" alt="Improved productivity"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Improved productivity
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Boost productivity by helping staff feel 
                        <a class="fc_cb6171" href="https://happierme.app/adults/happiness">
                          happier
                        </a>
                        and less 
                        <a class="fc_cb6171" href="https://happierme.app/adults/stress">
                          stressed.
                        </a>
                        Reduce interpersonal friction and boost collaboration through healthier relationships.
                      </h5></div></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="300"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_intelligence.svg" class="img-responsive" alt="Emotional intelligence"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Emotional intelligence
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Understanding your 
                        <a class="fc_cb6171" href="https://happierme.app/adults/curated/manage-your-emotions">
                          emotions 
                        </a>
                        boosts your EQ, and this can help staff manage their mental health and have happier relationships.
                      </h5></div></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="400"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_well_being.svg" class="img-responsive" alt="Well-being"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Well-being
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Emotional intelligence can prevent problems before they arise, and supports staff to be happy and have a positive attitude. This is infectious.
                      </h5></div></div></div></div></div><div class="row center_flex"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 tcenter div_inspire"><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="500"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_leadership.svg" class="img-responsive" alt="Leadership skills"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Leadership skills
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Leadership skills are a by-product of self-awareness, and emotional intelligence. Our 
                        <a class="fc_cb6171" href="https://happierme.app/adults/leadership">
                          leadership 
                        </a>
                        section helps people learn these skills and flourish at work.
                      </h5></div></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="600"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_critical_thinking.svg" class="img-responsive" alt="Critical thinking"></div></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Critical thinking
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000"><a class="fc_cb6171" href="https://happierme.app/adults/awareness">
                          Self-awareness 
                        </a>
                        helps you to think clearly, understand your emotions, and make better decisions.
                      </h5></div></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="700"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_diversity.svg" class="img-responsive" alt="Diversity & inclusion"></div></div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Diversity & inclusion
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Our modules on 
                        <a class="fc_cb6171" href="https://happierme.app/adults/conditioning">
                          Conditioning,
                        </a>
                        and
                        <a class="fc_cb6171" href="https://happierme.app/adults/diversity-and-inclusion">
                          Diversity & Inclusion
                        </a>
                        help people explore and overcome their prejudices to enhance inclusion and reduce conflict.
                      </h5></div></div></div></div></div><div class="row center_flex"><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 tcenter div_inspire"><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="800"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_workplace.svg" class="img-responsive" alt="Workplace relationships"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Workplace relationships
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Less friction between people and departments improves collaboration. We have detailed modules on 
                        <a class="fc_cb6171" href="https://happierme.app/adults/relationships">
                          Relationships,
                        </a><a class="fc_cb6171" href="https://happierme.app/adults/work">
                          Work,
                        </a>
                        and 
                        <a class="fc_cb6171" href="https://happierme.app/adults/communication">
                          Communication
                        </a>
                        to enable this.
                      </h5></div></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="900"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_attract.svg" class="img-responsive" alt="Attract and retain talent"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Attract and retain talent
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        The app enables everyone to live with a positive attitude. This can change the culture of an organisation making it an attractive place to work.
                      </h5></div></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="1000"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_dealing_criticism.svg" class="img-responsive" alt="Dealing with criticism"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                        Dealing with criticism 
                      </h3></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0"><h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                        Our module on 
                        <a class="fc_cb6171" href="https://happierme.app/adults/criticism">
                          Criticism
                        </a>
                        helps employees accept feedback with a positive attitude, and can help managers offer it with care.
                      </h5></div></div></div></div></div></section> -->
      <!-- /inspiring -->
     
        <div class="row center_flex div_subscriptionnews_mind">
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 p0">
            <div class=" back">
              <!-- <div class="row center_flex" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h4 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                  Bring HappierMe to your organization
                </h4></div></div> -->
              <!-- <div class="row center_flex" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h4 class="mt15px mb0px fs_15px fw_400 lh_160p fc_000000">
                  Connect with our specialists today and see how we can help you
                </h4></div></div> -->
              <div class="row center_flex mt20px mb10px" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 p0">
                  <!-- <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 p0"></div>   -->
                  <!-- <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p0">
                    <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/Isolation_Mode.webp" class="img-responsive w100p display_m_none " loading="lazy" alt="performance">
                    <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/Isolation_Mobile.svg" class="img-responsive w100p display_d_none" loading="lazy" alt="performance">
                  </div> -->
                  <!-- <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 p0"></div>   -->
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                    <div class="box">
                      
                      <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                          <h1 class="mtb0px fs_30px fw_600 lh_130p fc_803358 tcenter ta_lc signup-title"> Welcome to HappierMe</h1>
                        </div>
                      </div>
                    </div>

                     <div class="row mt10px" >
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 center_flex">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 p0">
                          <hr class="hr_style_v3_05">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 p0">
                          <h4 class="mtb0px fs_15px fw_400 lh_150p fc_000000_0_5 tcenter">
                            Let’s get started
                          </h4>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 p0">
                          <hr class="hr_style_v3_05">
                        </div>
                      </div>
                    </div>
                    <!-- <div class="row mtb15px">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                        <h3 class="mtb0px fs_15px fw_400 lh_140p fc_000000 ta_lc"> Sign up for regular updates from HappierMe, and get some inspiration straight to your inbox. </h3>
                      </div>
                    </div> -->
                    <!-- <div class="row mt30px"><div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 p0><h1 class="mtb0px fs_32px fw_600 lh_130p fc_834b66 ta_lc">
                Subscribe to our newsletter!
                </h1><div class="row mt15px"><h3 class="mtb0px fs_15px fw_400 lh_140p fc_000000 ta_lcnew">
                Sign up for regular updates from HappierMe, and get some inspiration straight to your inbox.                  </h3></div> -->
                    <div class="row center_flex mt20px mb10px" data-aos="fade-up" data-aos-delay="100">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                        <form id="signup-form" action="javascript:void(0);">
                          <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input">
                                <input type="text" class="form-control fc_01" id="news-name" name="newsname" placeholder="Your Name">
                                <div class="fc_icons">
                                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/web_form_user.svg" class="img-responsive ">
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="row mt15px"> -->
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent" >
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input " >
                              <input type="text" class="form-control fc_01" id="signup-email" name="news-email" placeholder="Your email">
                              <div class="fc_icons">
                                <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/web_form_mail.svg" class="img-responsive ">
                              </div>
                            </div>
                          </div>
                            <div id="input_parents"></div>

                          <!-- </div> -->

  <div class="row mb10px">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input" id="signup-password-conatiner">
                                                     <input type="password" class="form-control fc_01" id="signup-password" name="signup-password" placeholder="Password">

                          <div class="fc_icons">
                                <img src=" https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/password_hide.svg"
                                 class="img-responsive">
                              </div>
                        </div>
                       
                      </div>


                       <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input">
                                                     <input type="password" class="form-control fc_01" id="signup-repeat-password" name="signup-repeat-password" placeholder="Repeat Password">

                          <div class="fc_icons">
                                <img src=" https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/password_hide.svg"
                                 class="img-responsive">
                              </div>
                        </div>
                       
                      </div>
                      <div id="password-container"></div>
    </div>
     <!-- <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input">
                                                     <input type="password" class="form-control fc_01" id="signup-repeat-password" name="signup-repeat-password" placeholder="Repeat Password">

                          <div class="fc_icons">
                                <img src=" https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/password_hide.svg"
                                 class="img-responsive">
                              </div>
                        </div>
                       
                      </div>
    </div> -->
     <div class="row mt10px">
                      <div class="col-12 p0">
                          <label for="privacy_checkbox" class="chkb_post_anonymously signup-agree-row">
                            <input id="privacy_checkbox" formControlName="privacychk" type="checkbox">
                            <span class="signup-agree-checkbox-ui" aria-hidden="true"></span>
                            <span class="signup-agree-copy fs_12px fw_500 lh_150p fc_000000_0_5">I agree to the
                            <a class="blog_highlight_peach fs_12px fw_600" href="https://happierme.app/pages/terms_conditions.php">Terms of use</a></span>
                          </label>
                      </div>
                    </div>

                      <div class="row mt10px">
                      <div class="col-12 p0">
                          <label for="marketing_checkbox" class="chkb_post_anonymously signup-agree-row">
                            <input id="marketing_checkbox" formControlName="privacychk" type="checkbox">
                            <span class="signup-agree-checkbox-ui" aria-hidden="true"></span>
                            <span class="signup-agree-copy fs_12px fw_500 lh_150p fc_000000_0_5">I agree to the
                            <a class="blog_highlight_peach fs_12px fw_600" href="https://happierme.app/pages/privacy_policy.php">Privacy policy</a></span>
                          </label>
                      </div>
                    </div>
                    
                     
                          
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent mt32px">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input">
                              <div class="row mt15px">
                                <button id="download-app-btn" type="button" class="fs_15px fw_600 lh_140p fc_ffffff btn_tff"> Download app </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#product_view">
          <i class="fa fa-search"></i> News popup </button> -->
  
   <!-- /inspiring -->
      <div class="modal fade product_view" id="product_view">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <a href="#" data-dismiss="modal" class="class pull-right">
                <span class="glyphicon glyphicon-remove"></span>
              </a>
              <div class="row center_flex">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <div class=" back">
                    <!-- <div class="row center_flex" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h4 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                  Bring HappierMe to your organization
                </h4></div></div> -->
                    <!-- <div class="row center_flex" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h4 class="mt15px mb0px fs_15px fw_400 lh_160p fc_000000">
                  Connect with our specialists today and see how we can help you
                </h4></div></div> -->
                    <div class="row center_flex mt40px mb20px" data-aos="fade-up" data-aos-delay="200">
                      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 p0">
                        <!-- <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 p0"></div>   -->
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p0">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/Isolation_Mode.webp" class="img-responsive w100p display_m_none " loading="lazy" alt="performance">
                          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/Isolation_Mobile.svg" class="img-responsive w100p display_d_none" loading="lazy" alt="performance">
                        </div>
                        <!-- <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 p0"></div>   -->
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p0">
                          <div class="box">
                            <div class="row mt30px">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                                <div class="row mt30px">
                                  <h1 class="mtb0px fs_32px fw_600 lh_130p fc_834b66 ta_lc">
                                    <!-- Subscribe to our newsletter! -->
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div class="row mt30px">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                                <h1 class="mtb0px fs_32px fw_600 lh_130p fc_834b66 ta_lc"> Sign up for our newsletter! </h1>
                              </div>
                            </div>
                          </div>
                          <div class="row mtb15px">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                              <h3 class="mtb0px fs_15px fw_400 lh_140p fc_000000 ta_lc"> Sign up for regular updates from HappierMe, and get some inspiration straight to your inbox. </h3>
                            </div>
                          </div>
                          <!-- <div class="row mt30px"><div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 p0><h1 class="mtb0px fs_32px fw_600 lh_130p fc_834b66 ta_lc">
                Subscribe to our newsletter!
                </h1><div class="row mt15px"><h3 class="mtb0px fs_15px fw_400 lh_140p fc_000000 ta_lcnew">
                Sign up for regular updates from HappierMe, and get some inspiration straight to your inbox.                  </h3></div> -->
                          <div class="row center_flex mt40px mb20px" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                              <form action="javascript:void(0);">
                                <div class="row">
                                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input">
                                      <input type="text" class="form-control fc_01" id="news-name" name="newsname" placeholder="Your Name">
                                      <div class="fc_icons">
                                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/web_form_user.svg" class="img-responsive ">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- <div class="row mt15px"> -->
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent">
                                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input">
                                    <input type="text" class="form-control fc_01" id="news-email" name="news-email" placeholder="Your email">
                                    <div class="fc_icons">
                                      <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/web_form_mail.svg" class="img-responsive ">
                                    </div>
                                  </div>
                                </div>
                                <!-- </div> -->
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 input_parent">
                                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 div_input">
                                    <div class="row mt15px">
                                      <button id="news-contact-form" class="fs_15px fw_600 lh_140p fc_ffffff btn_tff"> Subscribe </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div> 
   
    <!-- </div></div> -->
    <?php include('../includes/footer_copyright_sticky_mind.php'); ?>
    <!-- vendor_footer -->
    <?php include('../includes/vendor_footer.php'); ?>
    <!-- /vendor_footer -->
  </body>
</html>
<script>
// Replace with your actual API base URL and ProgramId
const API_BASE_URL = 'https://www.humanwisdom.info/api';
//const API_BASE_URL = 'https://staging.humanwisdom.info/api';
const ProgramId = '9';

(function initOrchaUidFromQuery() {
  try {
    var p = new URLSearchParams(window.location.search).get('orcha_uid');
    if (p && String(p).trim()) {
      sessionStorage.setItem('orcha_uid', String(p).trim());
    }
  } catch (e) {}
})();

function getOrchaUid() {
  try {
    var fromUrl = new URLSearchParams(window.location.search).get('orcha_uid');
    if (fromUrl && String(fromUrl).trim()) return String(fromUrl).trim();
    var fromStore = sessionStorage.getItem('orcha_uid');
    if (fromStore && String(fromStore).trim()) return String(fromStore).trim();
  } catch (e) {}
  return '1234';
}

function addLearner(fname, email, password) {
  const body = JSON.stringify({
    FName: fname,
    Lname: "",
    Email: email,
    Pwd: password,
    OrchaId: getOrchaUid()
  });
  return fetch(`${API_BASE_URL}/AddLearner_Website`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    });
}

// Password show/hide toggle
function setupPasswordToggle(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!input || !icon) return;
  icon.addEventListener('click', function() {
    if (input.type === 'password') {
      input.type = 'text';
      icon.src = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/password_show.svg';
    } else {
      input.type = 'password';
      icon.src = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/password_hide.svg';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Add eye icons with IDs if not already present
  let pwdIcon = document.querySelector('#signup-password ~ .fc_icons img');
  let repeatPwdIcon = document.querySelector('#signup-repeat-password ~ .fc_icons img');
  if (pwdIcon) pwdIcon.id = 'signup-password-eye';
  if (repeatPwdIcon) repeatPwdIcon.id = 'signup-repeat-password-eye';

  setupPasswordToggle('signup-password', 'signup-password-eye');
  setupPasswordToggle('signup-repeat-password', 'signup-repeat-password-eye');
});

document.getElementById('download-app-btn').addEventListener('click', function() {
  const fname = document.getElementById('news-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const repeatPassword = document.getElementById('signup-repeat-password').value;



  // if(isValidEmail(email) === false) {
  //   alert('Please enter a valid email address.');
  //   return;
  // }

  // Show non-blocking info message
  let infoDiv = document.getElementById('signup-info-message');
  if (!infoDiv) {
    infoDiv = document.createElement('div');
    infoDiv.id = 'signup-info-message';
    infoDiv.style.position = 'fixed';
    infoDiv.style.top = '20px';
    infoDiv.style.left = '50%';
    infoDiv.style.transform = 'translateX(-50%)';
    infoDiv.style.background = '#333';
    infoDiv.style.color = '#fff';
    infoDiv.style.padding = '10px 24px';
    infoDiv.style.borderRadius = '6px';
    infoDiv.style.zIndex = '9999';
    infoDiv.style.fontSize = '16px';
    document.body.appendChild(infoDiv);
  }
  infoDiv.textContent = 'Your request is being processed...';
  infoDiv.style.display = 'block';

  // Optionally, validate email/password here
  addLearner(fname, email, password)
    .then(data => {
      if (infoDiv) infoDiv.style.display = 'none';
      let id = parseInt(data);
      if(isNaN(id)) {
         alert(data);
      }else{
           window.location.href = "../pages/download_qr.php";
      }
      // Hide info message on success or error
   
    })
    .catch(err => {
      if (infoDiv) infoDiv.style.display = 'none';
      alert('Internal Server Error');
    });
});

    
function onRecaptchaSuccess(token) {
  // document.getElementById('download-app-btn').disabled = false;
}
function onRecaptchaExpired() {
  // document.getElementById('download-app-btn').disabled = true;
}

document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...
  document.getElementById('download-app-btn').disabled = true;

  // Enable "Download app" button only when both checkboxes are checked
  const checkboxes = document.querySelectorAll('input[type="checkbox"]#privacy_checkbox');
  const marketingcheckbox = document.querySelectorAll('input[type="checkbox"]#marketing_checkbox');
  const downloadBtn = document.getElementById('download-app-btn');

  checkboxes.forEach(cb => cb.addEventListener('change', updateDownloadBtnStateAll));
  marketingcheckbox.forEach(cb => cb.addEventListener('change', updateDownloadBtnStateAll));

  // --- Require all fields to be filled and both checkboxes checked to enable the button ---
  const nameInput = document.getElementById('news-name');
  const emailInput = document.getElementById('signup-email');
  const pwdInput = document.getElementById('signup-password');
  const repeatPwdInput = document.getElementById('signup-repeat-password');

  function allFieldsFilled() {
    return (
      nameInput.value.trim() !== '' &&
      emailInput.value.trim() !== '' &&
      pwdInput.value.trim() !== '' &&
      repeatPwdInput.value.trim() !== ''
    );
  }

  function validateEmail() {
      const emailInput = document.getElementById('signup-email');
      const messageContainer = document.getElementById('input_parents');
      const signuppasswordconatiner = document.getElementById('signup-password-conatiner');
      messageContainer.innerHTML = '';
     signuppasswordconatiner.classList.remove('mt10');
      if(emailInput.value!=""){
       if ( !isValidEmail(emailInput.value)) {
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error';
        errorSpan.textContent = 'Please enter a valid email address.';
        messageContainer.appendChild(errorSpan);
        signuppasswordconatiner.classList.add('mt10');
      }
      }
    }


  function updateDownloadBtnStateAll() {
    validateEmail();
      const password = document.getElementById('signup-password').value;
      const repeatPassword = document.getElementById('signup-repeat-password').value;
      if (password !== repeatPassword) {
      const pwdContainer = document.getElementById('password-container');
     
        if(password.length>0 && repeatPassword.length>0){
        pwdContainer.innerHTML = '';
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error';
        errorSpan.textContent = 'Passwords do not match.';
        pwdContainer.appendChild(errorSpan);
        }
  }else{
   document.getElementById('password-container').innerHTML = '';
  }
    if (
      checkboxes.length === 1 &&
      checkboxes[0].checked &&
      marketingcheckbox.length === 1 &&
      marketingcheckbox[0].checked &&
      allFieldsFilled()
    ) {
      downloadBtn.disabled = false;
      downloadBtn.classList.remove('btn_disabled'); // Add class when enabled
      // ...existing code...
      return false;
    
    } else {
      downloadBtn.disabled = true;
      downloadBtn.classList.add('btn_disabled'); // Remove class when disabled
      // ...existing code...
      return true;
    }
  }
  
  function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


  // Listen for changes on all fields and checkboxes
  [nameInput, emailInput, pwdInput, repeatPwdInput].forEach(input => {
    input.addEventListener('input', updateDownloadBtnStateAll);
  });
  checkboxes.forEach(cb => cb.addEventListener('change', updateDownloadBtnStateAll));
  updateDownloadBtnStateAll();

  // reCAPTCHA integration
  grecaptcha.ready(function () {
    grecaptcha.execute('6Lfi18QqAAAAAIBaGMBh91M3we0ZnAdU_StbpwiR', {action: 'submit'}).then(function(token) {
      // Add token to form before submitting
      var form = document.getElementById('myForm');
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'g-recaptcha-response';
      input.value = token;
      form.appendChild(input);
      form.submit();
    });
  });
});
</script>
<script src="https://www.google.com/recaptcha/api.js?render=6Lfi18QqAAAAAIBaGMBh91M3we0ZnAdU_StbpwiR"></script>
