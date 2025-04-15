<!-- Hero Section -->
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

      <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false" >

        <div class="carousel-item active">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new1.webp" alt=""class="img-responsive w100p display_m_none" loading="lazy">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm1.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
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
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                <div class="w3-container">
                  <span class="mtb0px slider-heading  fw_500 lh_130p fc_ffffff">With HappierMe you can</span>
                </div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">be happier and live in peace

            </h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px">       
                   <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a href="https://happierme.app/pages/splash_options.php" class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  display_m_none ">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                  </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>




<div class="carousel-item">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new2.webp" alt="" class="img-responsive w100p display_m_none"loading="lazy">
          
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm2.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
          <h6 class=" fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
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

                  <span class="fs_15px fw_700 lh_140p fc_ffffff">
                    4.8  
                  </span>  

                  App store rating
                </h6>
               
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <div class="w3-container">
              <h3 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff" >
                With HappierMe you can
               
              
                </h3>
</div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">overcome stress and anxiety</h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px"> 
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a href="https://happierme.app/pages/splash_options.php"class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12   display_m_none">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew ">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                  </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>
        

<div class="carousel-item">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new4.webp" alt="" class="img-responsive w100p display_m_none"loading="lazy">
         
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm3.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
          <h6 class=" fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
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

                  <span class="fs_15px fw_700 lh_140p fc_ffffff">
                    4.8  
                  </span>  

                  App store rating
                </h6>
               
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <div class="w3-container">
              <h3 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff " >
                With HappierMe you can
               
              
                </h3>
</div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">build fulfilling relationships</h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px"> 
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a  href="https://happierme.app/pages/splash_options.php"class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  display_m_none">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                  </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>
       

<div class="carousel-item">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new5.webp" alt="" class="img-responsive w100p display_m_none"loading="lazy">
          
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm4.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
          <h6 class=" fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
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

                  <span class="fs_15px fw_700 lh_140p fc_ffffff">
                    4.8  
                  </span>  

                  App store rating
                </h6>
               
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <div class="w3-container">
              <h3 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff" >
                With HappierMe you can
               
              
                </h3>
</div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">break free from unhealthy habits
            </h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px"> 
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a  href="https://happierme.app/pages/splash_options.php"class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  display_m_none">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                   </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>

<div class="carousel-item">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new8.webp" alt="" class="img-responsive w100p display_m_none"loading="lazy">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm5.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
          <h6 class=" fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
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

                  <span class="fs_15px fw_700 lh_140p fc_ffffff">
                    4.8  
                  </span>  

                  App store rating
                </h6>
               
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <div class="w3-container">
              <h3 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff" >
                With HappierMe you can
               
              
                </h3>
</div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">support children to flourish in life
            </h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px"> 
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a  href="https://happierme.app/pages/splash_options.php"class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  display_m_none">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                  </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>




<div class="carousel-item">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new3.webp" alt="" class="img-responsive w100p display_m_none"loading="lazy">
          
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm6.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
          <h6 class=" fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
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

                  <span class="fs_15px fw_700 lh_140p fc_ffffff">
                    4.8  
                  </span>  

                  App store rating
                </h6>
               
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <div class="w3-container">
              <h3 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff " >
                With HappierMe you can
               
              
                </h3>
</div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">develop your emotional intelligence
            </h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px">       
                   <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a  href="https://happierme.app/pages/splash_options.php"class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  display_m_none ">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                  </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>

<div class="carousel-item">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new6.webp" alt="" class="img-responsive w100p display_m_none" loading="lazy">
          
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm7.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
          <h6 class=" fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
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

                  <span class="fs_15px fw_700 lh_140p fc_ffffff">
                    4.8  
                  </span>  

                  App store rating
                </h6>
               
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <div class="w3-container">
              <h3 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff " >
                With HappierMe you can
               
              
                </h3>
</div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">communicate better
            </h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px"> 
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a  href="https://happierme.app/pages/splash_options.php"class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  display_m_none">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                  </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>

<div class="carousel-item">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/slider_new7.webp" alt="" class="img-responsive w100p display_m_none"loading="lazy">
          
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sliderm8.webp" class="img-responsive w100p display_d_none"  loading="lazy"alt="performance">

          <div class="carousel-container">
          <div class="top">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
          <h6 class=" fs_12px fw_400 lh_140p fc_ffffff ta_lctnewnew">
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

                  <span class="fs_15px fw_700 lh_140p fc_ffffff">
                    4.8  
                  </span>  

                  App store rating
                </h6>
               
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
              <div class="w3-container">
              <h3 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff" >
                With HappierMe you can
               
              
                </h3>
</div>
              </div>
              <div class="row">
            
            <div class="w3-container  w3-animate-bottom">
            <h2 class=" mtb0px fs_54px fw_500 lh_130p fc_ffffff">make better decisions
            </h2>
</div>
          
                
                  <h5 class=" fs_21px fw_400 lh_150p fc_ffffff">
                  Find long-term solutions by addressing the root cause                  </h5>
                
</div>
                  
            <!-- <p> 
            Find long-term solutions by addressing the root cause
            </p> -->


            
            <div class="row mt20px"> 
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
      <div>
        <a  href="https://happierme.app/pages/splash_options.php" class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing p-35">
          Try HappierMe for free
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  display_m_none">
    
                <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                Download the app on
                  <a class="" href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                    <img style="width:13.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/white_apple.svg"  alt="appstore" loading=lazy>
                  </a>
                  and
                  <a class="" href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                    <img style="width:14.5px;height:auto;" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/wh_playstore.svg"  alt="playstore" loading=lazy>
                  </a><br/>
                  and start your free trial
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
        </div><!-- End Carousel Item -->
</div>


       
</div>
        
       
       


        
</div>

        <!-- <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a> -->

        <ol class="carousel-indicators"></ol>

      </div>
<br/>
<br/>
    </section><!-- /Hero Section -->

    
  <!-- Scroll Top -->

  <div class="video-popup">
    <div class="popup-bg"></div>
      <div class="popup-content">
<!--         <p class="popup-title">Youtube</p> -->
        <iframe src="https://youtube.com/embed/gQojMIhELvM?autoplay=0" class="video" loading="lazy"></iframe>
        <button class="close-btn">close</button>
      </div>
                <div class="w3-container w3-animate-bottom">
                  <span class="mtb0px slider-heading fw_500 lh_130p fc_ffffff"><?= $slide['heading'] ?></span>
                </div>
                <h5 class="fs_21px fw_400 lh_150p fc_ffffff">Find long-term solutions by addressing the root cause</h5>
              </div>
              <div class="row mt10px">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div>
                    <a href="https://happierme.app/pages/splash_options.php" class="btn tryhappiermeClick fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricing_slider p-35">Try HappierMe for free</a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 display_m_none">
                  <h3 class="mtb5px fs_15px fw_400 lh_140p fc_ffffff dinline_block ta_lctnewnew">
                    Download the app on
                    <a href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567">
                      <img style="width:13.5px;height:auto;" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/white_apple.svg" alt="appstore" loading="lazy">
                    </a>
                    and
                    <a href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US">
                      <img style="width:14.5px;height:auto;" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/wh_playstore.svg" alt="playstore" loading="lazy">
                    </a><br>and start your free trial
                  </h3>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div>
                    <a href="#" data-videourl="https://www.youtube.com/watch?v=Da7CKigesTc" class="btn tryhappiermeClick mtb10px fs_15px fw_600 lh_140p fc_ffffff center_flex btn_pricingslider">
                      <img style="width:10px;height:10px; margin:10px;" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/video_slider.svg" class="img-responsive"> Why we created HappierMe
                    </a>
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