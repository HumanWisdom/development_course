<!DOCTYPE html>
<html lang="en">

  <head>
    <meta property="og:title" id="tag1" content="HappierMe: For a happier life" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Master your mind and be happier" />
    <meta property="og:image" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:alt" content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/imgs/website_share.jpg" />
    <meta property="og:image:width" content="414" />
    <meta property="og:image:height" content="232" />

    <!-- vendor_header -->
    <?php include('../includes/vendor_header.php'); ?>
    <!-- /vendor_header -->
  </head>

  <body>
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
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">

          <div class="row prelative" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/education_landing.webp" class="img-responsive" alt="Boost student wellbeing, learning and emotional intelligence">
            </div>
          </div>
    
          <div class="row center_flex absolute_desc" data-aos="fade-up" data-aos-delay="500">
            <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10 p0 tleft">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 mt20px">
                <h1 class="mtb0px fs_36px fw_600 lh_140p fc_834b66">
                  Boost student wellbeing, learning and emotional intelligence
                </h1>
              </div>
    
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 mtb20px">
                <h1 class="mt20px mb30px fs_15px fw_400 lh_160p fc_000000">
                  Give students all the support they need to help reduce stress and anxiety, manage their own mental health, be happier and learn the soft skills they need to succeed at work.
                </h1>
              </div>
    
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p0">
                  <a href="#bring_happierme">
                    <button class="fs_15px fw_600 lh_140p fc_ffffff btn_tff" >
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

      <!-- price -->
      <section>
        <div class="section-header">
          <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
              <h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                Packages to suit your needs
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 ta_lc div_price">

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 p0 pr20px" data-aos="fade-up" data-aos-delay="200">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h4 class="mtb0px fs_18px fw_600 lh_150p fc_cb6171">
                    Bronze
                  </h4>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h6 class="mt10px mb0px fs_12px fw_400 lh_150p fc_000000">
                    1-year subscription +
                    <br>
                    1-hour training session
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 p0 plr20px" data-aos="fade-up" data-aos-delay="300">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h4 class="mtb0px fs_18px fw_600 lh_150p fc_cb6171">
                    Silver
                  </h4>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h6 class="mt10px mb0px fs_12px fw_400 lh_150p fc_000000">
                    <span class="fw_600">
                        Bronze
                    </span>
                    + 12 hrs of training for facilitators over a year, to aid engagement, host discussions and answer questions
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 p0 pl20px" data-aos="fade-up" data-aos-delay="400">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h4 class="mtb0px fs_18px fw_600 lh_150p fc_cb6171">
                    Gold
                  </h4>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h6 class="mt10px mb0px fs_12px fw_400 lh_150p fc_000000">
                    <span class="fw_600">
                      Silver
                    </span>
                    + Coaching by trained HappierMe coaches
                  </h6>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="row center_flex mt40px" data-aos="fade-up" data-aos-delay="500">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 center_flex">
            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 p0">
              <a href="#bring_happierme">
                <button class="fs_15px fw_600 lh_140p fc_ffffff btn_tff" >
                  Request a demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- /price -->

      <!-- description -->
      <section>
        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 flex_block">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl0px" data-aos="fade-up" data-aos-delay="100">
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/education_app.webp" class="img-responsive" alt="Develop a mind that is calm, and open to learning">
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr0px tleft ta_lc" data-aos="fade-up" data-aos-delay="200">
              <h2 class="mtb0px fs_24px fw_600 lh_150p fc_834b66">
                Develop a mind that is calm, and open to learning
              </h2>

              <h5 class="mt15px mb10px fs_15px fw_400 lh_150p fc_000000">
                How we think matters! We can avoid and overcome so many challenges we face every day by understanding ourselves and how our minds work. This can help students to self-regulate their habits, emotions and mental health, have happier relationships, and shine in the world.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <!-- /description -->

      <!-- did you know -->
      <section>
        <div class="section-header">
          <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
              <h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                Did you know?
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex div_dyk">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 div_dyk_l1">

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="100">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    80%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students suffer from stress
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    44%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students use alcohol or drugs to cope with their problems
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="300">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    33%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students report that they were often or always lonely
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="400">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    42%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students suffer from anxiety
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="500">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    50%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    of students report some thoughts of self-harm
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="600">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h2 class="mt0px mb5px fs_24px fw_600 lh_120p fc_000000">
                    75%
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
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
      <section>
        <div class="section-header">
          <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
              <h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                The HappierMe impact across organisations
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">

            <div class="owl_container owl_testimonials">
              <div class="owl-carousel owl-theme">
                <a class="item" data-aos="fade-up" data-aos-delay="200">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          HappierMe has helped me become emotionally intelligent. I used to be shy, passive and fearful. The app has transformed my way of thinking and relieved me of my anxiety. Whatever you struggle with, there are modules to help.
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Adam Beagley, UK
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" data-aos="fade-up" data-aos-delay="300">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          HappierMe is more than an app to me. Whenever I need an answer to a question and I'm too shy or impatient to talk to somebody about it, HappierMe is my go to app. It has helped me be emotionally intelligent and given me an understanding of my emotions. It has helped me to make better decisions. It is my solution machine.
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Samaira, India
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" data-aos="fade-up" data-aos-delay="400">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          After a lifetime in education, I think there is an urgent need for solutions to help students deal with problems like stress, anxiety, addiction and conflict in their relationships. I believe the HappierMe project, which aims to awaken wisdom through self-understanding, is one of those solutions. Wisdom can bring peace to the individual, and so to the world.
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Sir Anthony Seldon, UK
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" data-aos="fade-up" data-aos-delay="500">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          Happier me has helped me build a better relationship with myself and others. This app provided a safe space for me to explore my thoughts and feelings, guided by insightful exercises and resources tailored to my needs. Through consistent use, I've cultivated a deeper understanding of myself and developed practical coping mechanisms that have significantly improved my mental well-being. I am grateful for the transformative impact this app has had on my life, empowering me to navigate challenges with greater resilience and self-awareness
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Roshal Sebastian, Texas, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item" data-aos="fade-up" data-aos-delay="600">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          The HappierMe App has helped me to look at what I think, how I think, and helped me to question why I think in certain ways. This understanding has transformed my life.
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Dominic Curran, England
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          Through its modules, awareness exercises and life stories the HappierMe app has helped me better understand why I think and act the way I do. This gave me a new perspective on how to handle various situations, including stress, peer pressure, and social media. I believe I have acquired crucial skills for my future.
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Swati, Dubai
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          HappierMe is a unique and inspiring app that has encouraged me to dig deeper within myself. Its various modules and journaling activities have helped me learn more about myself and how to cope with life's challenges. I really appreciate what the app offers because now I am more aware of how my mind operates and feel happier.
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Camille, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti" alt="Quotation">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          HappierMe is the best app I’ve found that fosters self connection, awareness, and an overall happier life. As a Psychology graduate I can say the lessons that are taught on this app are ones that will stick with you for a lifetime. HappierMe is a toolkit you can use for any personal or mental struggle you may face.
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Leah Christensen, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <!--
                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          The HappierMe app is a pre-eminent asset for people of all ages. It changes peoples lives by assisting them to better know themselves and live with peace, love, harmony, and fulfilment. It is a wonderful gift to humanity.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Garry Prigg, Australia
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          HappierMe has helped me become emotionally intelligent. I used to be shy, passive and fearful. The app has transformed my way of thinking and relieved me of my anxiety. Whatever you struggle with, there are modules to help.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Adam Beagley, UK
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          HappierMe is what today's world which is full of stress, needs so so desperately. I have been using the HappierMe app in my counselling practice and it's helped me fast track recovery of childhood trauma parents have been carrying. The app guides me everyday to help parents raise children who won't have to recover from their childhoods.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Saakshi Singla, New Delhi, India
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          The HappierMe app supports an individual's exploration in seeking positive outcomes through a journey of self- discovery, by applying our intelligence with common sense and insight. I believe this is truly a gift for every single human being to embrace.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Gopalan Nair, Singapore
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          It's so easy to get caught up in all the things we have to do, want to do, and should do. What we gain in productivity we lose in self-awareness, meaning, and satisfaction in our lives. We need tools to bring us back to the wisdom of our essential selves. The Human Wisdom app is such an excellent pocket companion that brings wisdom and joy back to our daily existence.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Dr Tim Merrick, USA
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          I recommend The HappierMe app to my clients as a stand-out app among similar programmes. The design and content meets users where they are and reminds them that wisdom comes from inquiry and a deeper understanding of self. The Human Wisdom app is an accessible "hand-hold" for anyone navigating the rough edges of life as well as provocative and inspiring for personal growth.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Lynne Staley, USA
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          I absolutely love the HappierMe app. It has enabled me to really go on a journey of self-exploration. It covers so many different aspects of how our mind works in the real world. I would highly recommend this app to anyone that wishes to improve their life through the art of self-enquiry.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Carolyn King, Melbourne
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          This app is exactly what each and every person in the world needs every day. It will give each person the tools to leads a purposeful and fulfilling life.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Tinamarie Rodriguez, USA
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          The HappierMe App has helped me to look at what I think, how I think, and helped me to question why I think in certain ways. This understanding has transformed my life.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Dominic Curran, England
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          By knowing more about how my mind works, I have learned to make better choices in how I think, behave and act. The Human Wisdom App is a space where I feel supported to grow into the person I want to be. It has helped me in many ways.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Suzanne Oades, UK
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          Using the HappierMe app has been life affirming. I have only two words after using this app - Game Changer! This app needs to be scaled up to reach every school and workplace. This program is an essential service and serves the need of mitigating mental health problems in our society.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Chandra Ramamurthy, India
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          The world is looking for serious catalysts to help us discover a brighter, better future. I am convinced the Human Wisdom Project is one of those catalysts.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Richard Gerver, UK
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          After a lifetime in education, I think there is an urgent need for solutions to help students deal with problems like stress, anxiety, addiction and conflict in their relationships. I believe the Human Wisdom project, which aims to awaken wisdom through self-understanding, is one of those solutions. Wisdom can bring peace to the individual, and so to the world.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Sir Anthony Seldon, UK
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          The Human Wisdom Project connects human beings to one another from distant lands, in thoughtful dialogue and shared experience through the power of technology. It connects us with our shared humanity and has the potential to bring peace to the individual, and to the world. Education takes on a broader meaning - a lifelong journey of learning about ourselves in addition to learning about the world. This understanding awakens wisdom and allows for personal growth and acceptance of the human experience we share.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Rod Berger, USA
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          Today's lecture by Manoj was one of the most interesting and thought provoking talks I've ever attended.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Hayley Hands, UK
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          This is a world changing project I am so pleased and privileged to be involved in. To inspire the next generation to be in tune with their own wisdom will truly be world changing.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Jo Thackwray, UK
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          Oh how I wish I had had this app available to me when my life imploded many years ago. In fact, I wish I had had access as a child. It would have made a significant difference to my life journey, and to exploring my emotions constructively, rather than destructively, as so often I did. For me, everyone should have access to this app, to unlock their own innate wisdom, their very own 'superpowers'.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Laura Toop, London
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          Through its modules, awareness exercises and life stories the HappierMe app has helped me better understand why I think and act the way I do. This gave me a new perspective on how to handle various situations, including stress, peer pressure, and social media. I believe I have acquired crucial skills for my future.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Swati, Dubai
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          HappierMe is a unique and inspiring app that has encouraged me to dig deeper within myself. Its various modules and journaling activities have helped me learn more about myself and how to cope with life's challenges. I really appreciate what the app offers because now I am more aware of how my mind operates and feel happier.
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Camille, USA
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a class="item">
                  <div class="div_testimonials">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/web_quotation.svg" class="img-responsive width_unseti">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mt20px mb12px fs_15px fw_500 lh_150p fc_ffffff">
                          Happier me has helped me build a better relationship with myself and others. This app provided a safe space for me to explore my thoughts and feelings, guided by insightful exercises and resources tailored to my needs. Through consistent use, I've cultivated a deeper understanding of myself and developed practical coping mechanisms that have significantly improved my mental well-being. I am grateful for the transformative impact this app has had on my life, empowering me to navigate challenges with greater resilience and self-awareness
                        </h4>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
                          Roshal Sebastian, Texas, USA
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>-->
              </div>

              <div class="owl-theme">
                <div class="owl-controls">
                  <div class="owl-nav"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <!-- /testimonials -->

      <!-- inspiring -->
      <section>
        <div class="section-header">
          <div class="row center_flex tcenter" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
              <h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                Inspiring fresh ways of thinking
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 tcenter div_inspire">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_employability.svg" class="img-responsive" alt="Boost employability">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Boost employability
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Soft skills like communication, teamwork, emotional intelligence, critical thinking, and creativity are a natural by-product of self-understanding.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="300">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_intelligence.svg" class="img-responsive" alt="Emotional intelligence">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Emotional intelligence
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Understanding your emotions boosts your EQ, and this can help staff manage their mental health and have happier relationships.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="400">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_learning.svg" class="img-responsive" alt="Better learning">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Better learning
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Happy students who are not stressed or anxious, and who have healthy relationships are able to learn better.
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 tcenter div_inspire">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="500">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_leadership.svg" class="img-responsive" alt="Leadership skills">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Leadership skills
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
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

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="600">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_critical_thinking.svg" class="img-responsive" alt="Critical thinking">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Critical thinking
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Self-awareness helps you to think clearly, solve problems, and make better decisions. This can lead to healthier habits.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="700">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_addiction.svg" class="img-responsive" alt="Overcome Addiction">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Overcome Addiction
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    Our need for pleasure, our conditioning, and escaping from emotional pain drive addiction. We help people avoid and overcome it.
                  </h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 tcenter div_inspire">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="800">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_relationships.svg" class="img-responsive" alt="Relationships">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Relationships
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
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

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="900">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_stress.svg" class="img-responsive" alt="Overcome stress & anxiety">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Overcome stress & anxiety  
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h5 class="mtb0px fs_15px fw_400 lh_140p fc_000000">
                    We offer quick solutions to relieve stress and anxiety, and then understand the root cause for prevention and long-term solutions.
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="1000">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/inspire_dealing_criticism.svg" class="img-responsive" alt="Dealing with criticism">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                  <h3 class="mt20px mb5px fs_21px fw_500 lh_150p fc_000000">
                    Dealing with criticism 
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
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
      <section>
        <div class="section-header">
          <div class="row center_flex" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
              <h2 class="mtb0px fs_24px fw_600 lh_120p fc_834b66">
                Explore our blog
              </h2>
            </div>
          </div>
        </div>

        <div class="row center_flex">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">

            <div class="owl_blog">
              <div class="owl-carousel owl-theme">
                <a class="item" data-aos="fade-up" data-aos-delay="200"href="../blogs/15_ways_self_awareness_can_help_students.php">
                  <div class="div_blog">
                    <div class="row">
                      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/19.webp" class="img-responsive" alt="15 ways self-awareness can help students">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/10.webp" class="img-responsive" alt="The purpose of education">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/3.webp" class="img-responsive" alt="Responding to criticism">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="mtb0px fs_18px fw_500 lh_150p fc_000000">
                          Responding to criticism
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="owl-theme">
                <div class="owl-controls">
                  <div class="owl-nav">
                    <a class="sap" href="https://happierme.app/adults/blogs">
                      <h4 class="mtb0px fs_18px fw_500 lh_150p fc_cb6171 td_underline">
                        View all blogs
                      </h4>
                    </a>
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

  </body>

</html>