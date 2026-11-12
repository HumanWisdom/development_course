<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="facebook-domain-verification" content="zxnan2nc1tyzk3dayx6ef3iluoo8hy" />
      <meta property="og:title" id="tag1" content="HappierMe:For Teens & Adults" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://happierme.app/" />
      <meta property="og:description" content="Understand your mind, have happier relationships and succeed in life" />
      <meta property="og:image"  content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/webpage/02.jpg" />
      <meta property="og:image:alt"  content="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/webpage/02.jpg" />
      <meta property="fb:app_id" content="806018844533100">
      <meta property="og:image:width" content="818" />
      <meta property="og:image:height" content="545" />

      <link rel="apple-touch-startup-image" href="assets/images/splash.jpg" />
      <link rel="icon" type="image/x-icon" href="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/logo/logo_favicon_transparent.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <title> HappierMe:For Teens & Adults </title>
      <meta name="robots" content="index, follow">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable = no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>    
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="../styles/index.css" rel="stylesheet">
      <link href="../assets/font/font_colour.css" rel="stylesheet">
      <link href="../assets/font/font_size.css" rel="stylesheet">
      <link href="../assets/font/font_weight.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="../assets/font/line_height.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">

       <style>
        body {
          font-family: Poppins, sans-serif !important;
        }
        #scrollTopArrow {
          display: none !important;
        }
        /* Chevron sized to match 12px “Get started” label */
        .chevron-pink {
          display: inline-flex;
          align-items: center;
          font-size: 9px;
          color: rgba(215, 88, 107, 1);
          padding-top: 1px;
          line-height: 1;
        }
        .chevron-pink .bi {
          font-size: 9px;
          line-height: 1;
          color: inherit;
        }
        .splash-get-started {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: #d7586b !important;
          text-decoration: none !important;
        }
        .splash-get-started:hover,
        .splash-get-started:hover .chevron-pink,
        .splash-get-started:hover .chevron-pink .bi,
        .backcolor:hover .splash-get-started,
        .backcolor:hover .splash-get-started .chevron-pink,
        .backcolor:hover .splash-get-started .chevron-pink .bi {
          color: #803358 !important;
        }
        </style>
  </head>

  <body>
    <?php
      $hwHost = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
      if ($hwHost === 'localhost' || $hwHost === '127.0.0.1' || $hwHost === '[::1]') {
        $hwAppBase = 'http://localhost:4200';
      } elseif ($hwHost === 'staging.happierme.app' || strpos($hwHost, 'staging.') === 0) {
        $hwAppBase = 'https://staging.happierme.app';
      } else {
        $hwAppBase = 'https://happierme.app';
      }
      $hwTeenLogin = $hwAppBase . '/teenagers/onboarding/login';
      $hwAdultLogin = $hwAppBase . '/adults/onboarding/login';
    ?>
    <div class="row center_flex">
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 v1_3_bg_splash col_cw">
    
        <div class="row mt80px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 center_flex">
            <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12  tcenter">
              <h4 class="mtb0px fs_24px fw_500 lh_140p fc_000000 ">
Welcome to HappierMe!              </h4>
      
              <h4 class="mt0px mtb20px fs_15px fw_400 lh_140p fc_000000_0_5 tcenter">
Understand yourself. Feel better. Build happier relationships.              </h4>
              
             
              <!-- <h4 class="mt60px mb20px fs_15px fw_400 lh_140p fc_000000 tcenter">
              Pick a section to get started
              </h4> -->

            </div>
          </div>
        </div>
        
        <div class="row mb20px center_flex" id="teenagersClick">
          <div class="backcolor">
          <a  style="text-decoration:none;" href="<?= htmlspecialchars($hwTeenLogin, ENT_QUOTES, 'UTF-8') ?>"> 
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 tcenter">
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/webteen.svg" class="img-responsive">
              <h4 class="mt20px mb10px fs_21px fw_600 lh_140p fc_000000">
               Teenagers (13+ yrs)
              </h4>
                <h4 class="mtb5px fs_12px fw_400 lh_140p fc_000000">
              Understand your feelings, build confidence and navigate relationships.
              </h4>

  <!-- <h4 class="mtb0px fs_18px fw_500 lh_150p td_underline">
                    View all blogs
                  </h4> -->
<!-- <span class="chevron-pink"><span style="-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span> -->

               <!-- <a class="sap edu-blog-more" href="https://happierme.app/adults/blogs">
                  <h4 class="mtb0px fs_18px fw_500 lh_150p td_underline">
                    View all blogs
                  </h4>
<span class="chevron-pink"><span style="-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>

                  <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
                </a> -->
                   <a class="splash-get-started mtb10px fs_12px fw_600 lh_140p" href="<?= htmlspecialchars($hwTeenLogin, ENT_QUOTES, 'UTF-8') ?>">
                         Get started
              <span class="chevron-pink"><span style="-webkit-text-stroke: 1px;" class="bi bi-chevron-right" aria-hidden="true"></span></span>
                        </a>
            </div>
          </a>
        </div>
</div>
      
        <div class="row center_flex" id="adultsClick">
        <div class="backcolor">
          <a href="<?= htmlspecialchars($hwAdultLogin, ENT_QUOTES, 'UTF-8') ?>">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0 tcenter">
              <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/webad.svg" class="img-responsive">
               <h4 class="mt20px  mb10px fs_21px fw_600 lh_140p fc_000000">
              Adults (18+ yrs)
              </h4>
                <h4 class="mtb5px fs_12px fw_400 lh_140p fc_000000">
Understand yourself, manage emotions and build happier relationships.              
</h4>
 <a class="splash-get-started mtb10px fs_12px fw_600 lh_140p" href="<?= htmlspecialchars($hwAdultLogin, ENT_QUOTES, 'UTF-8') ?>">
                         Get started
              <span class="chevron-pink"><span style="-webkit-text-stroke: 1px;" class="bi bi-chevron-right" aria-hidden="true"></span></span>
                         </a>
            </div>
          </a>
        </div>
</div>
      </div>
    </div>

    <?php include('../includes/vendor_footer.php'); ?>

  </body>

</html>
