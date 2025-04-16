<section id="hero" class="hero section dark-background">
  <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="true">
    <?php 
    $slides = [
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new1.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm1.webp",
        "heading" => "be happier and live in peace",
      ],
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new2.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm2.webp",
        "heading" => "overcome stress and anxiety",
      ],
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new4.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm3.webp",
        "heading" => "build fulfilling relationships",
      ],
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new5.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm4.webp",
        "heading" => "break free from unhealthy habits",
      ],
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new8.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm5.webp",
        "heading" => "support children to flourish in life",
      ],
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new3.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm6.webp",
        "heading" => "develop your emotional intelligence",
      ],
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new6.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm7.webp",
        "heading" => "communicate better",
      ],
      [
        "image_desktop" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/slider_new7.webp",
        "image_mobile" => "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/sliderm8.webp",
        "heading" => "make better decisions",
      ],
    ];

    foreach ($slides as $index => $slide) {
      $activeClass = $index === 0 ? 'active' : '';
    ?>
    <div class="carousel-item <?= $activeClass ?>">
      <img src="<?= $slide['image_desktop'] ?>" alt="" class="img-responsive w100p display_m_none height-carousel-reponsiveness">
      <img src="<?= $slide['image_mobile'] ?>" class="img-responsive w100p display_d_none height-carousel-reponsiveness" loading="lazy" alt="performance">
      <div class="carousel-container">
        <div class="top">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <h6 class="fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
                <span class="rating_a">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </span>
                <span class="appstore_a">
                  <i class="fa fa-apple fff"></i>
                </span>
                <span class="fs_15px fw_700 lh_140p fc_ffffff">4.8</span> App store rating
              </h6>
              <div class="col-lg-12 col-md-4 col-sm-12 col-xs-12 p0">
                <div class="w3-container">
                  <span class="mtb0px slider-heading  fw_500 lh_130p fc_ffffff">With HappierMe you can</span>
                </div>
              </div>
              <div class="row">
                <div class="w3-container w3-animate-bottom">
                  <span class="mtb0px slider-heading fw_500 lh_130p fc_ffffff"><?= $slide['heading'] ?></span>
                </div>
                <h5 class="fs_21px fw_400 lh_150p fc_ffffff">Find long-term solutions by addressing the root cause</h5>
              </div>
              <div class="row mt10px">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div>
                    <a href="https://happierme.app/pages/splash_options.php" class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing_slider p-35">Try HappierMe for free</a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 display_m_none downloadApp_slider">
                  <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                    Download the app on
                    <a href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                      <img style="width:13.5px;height:auto;margin:5px;" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/white_apple.svg" alt="appstore" loading="lazy">
                    </a>
                    and
                    <a href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                      <img style="width:14.5px;height:auto; margin:5px;" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/wh_playstore.svg" alt="playstore" loading="lazy">
                    </a><br>and start your free trial
                  </h3>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div>
                  <a href="#" data-videourl="bottohttps://https://www.youtube.com/watch?v=Da7CKigesTc" class=" btn tryhappiermeClick mtb10px fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricingslider p-35">
      <img style="width:10px;height:10px; margin:10px;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/video_slider.svg" class="img-responsive">  
      Why we created HappierMe</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php } ?>
  </div>
</section>


<!-- Scroll Top -->

<div class="video-popup">
    <div class="popup-bg"></div>
      <div class="popup-content">
<!--         <p class="popup-title">Youtube</p> -->
        <iframe src="https://youtube.com/embed/gQojMIhELvM?autoplay=0" class="video" loading="lazy"></iframe>
        <button class="close-btn">close</button>
      </div>
  </div>

  <!-- Preloader -->


  



  <script>

var youtubeVideo = {
    videoBtn:'[data-videourl]',

    model: function() {

        function videoinit() {
            $('body').on('click', youtubeVideo.videoBtn, function(event) {
            	event.preventDefault();
                var videoSrc = $(this).data('videourl');
              
                var ID = '';
                var url = videoSrc.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                if (url[2] !== undefined) {
                    ID = url[2].split(/[^0-9a-z_\-]/i);
                    ID = ID[0];
                } else {
                    ID = url;
                }

                var videoElement = $('<div class="video-popup-model">' + 
                '<div class="video-layer">' +
                   '<div class="model-wrapper">' + '<div class="videomodel">' + '<div class="videoscreen">' + '<iframe width="100%" height="auto" class="videlement"' + 'src="https://www.youtube.com/embed/' + ID + '?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1' + '" frameborder="0"' + 'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"' + 'allowfullscreen></iframe>' + '</div>' + '<div class="modelCloseBtn">' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>');

                $('body').prepend(videoElement);
                var videoWidth = $('.video-popup-model .videlement').width();
                var videHeight = (9 / 16) * videoWidth;
                $('.video-popup-model .videlement').height(videHeight);
                $('body').find('.video-popup-model').addClass('smooth_show');
            });
        }
        videoinit();

        function modelClose() {
            $('body').on('click', '.modelCloseBtn', function(event) {
                var model = $(this).parents('.video-popup-model')
                model.removeClass('smooth_show');
                setTimeout(function() {
                    model.remove();
                }, 500);
                $('body').removeClass('no-reload');
            });
        }
        modelClose();

        // function modelLayerClose() {
        //     $('body').on('click', '.video-model-close-layer', function(event) {
        //         $(".modelCloseBtn").trigger('click');
        //     });
        // }
        // modelLayerClose();
    },
    init: function() {
        youtubeVideo.model();
    }
};

youtubeVideo.init();
    </script>
