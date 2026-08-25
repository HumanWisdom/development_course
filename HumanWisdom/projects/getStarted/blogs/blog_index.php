<?php require_once __DIR__ . '/../includes/Template.php'; use GetStarted\Includes\Template; ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Mental Wellbeing and Life Skills Blog | HappierMe</title>
  <meta name="title" content="Mental Wellbeing and Life Skills Blog | HappierMe">
  <meta name="description" content="Explore expert articles on mental wellbeing, self-awareness, emotional intelligence, relationships and life skills from HappierMe.">
  <meta name="keyword" content="Mental wellbeing articles,self-awareness blog, emotional intelligence, life skills, personal growth, mental health articles, resilience, relationships, stress management">



  <meta property="og:title" content="Mental Wellbeing and Life Skills Blog | HappierMe">
  <meta property="og:description" content="Explore expert articles on mental wellbeing, self-awareness, emotional intelligence, relationships and life skills from HappierMe.">

  <!-- vendor_header -->
  <?php Template::vendorHeader(); ?>
  <!-- /vendor_header -->

  <style>
    .blog_links .col-lg-4 {
      float: left;
      margin-bottom: 30px;
    }

    .blog_links .clearfix {
      clear: both;
    }

    #text {
      display: contents;
    }

    body.page-blog-index:not(.blog-show-extra) #text > .col-lg-4 {
      display: none !important;
    }

    .btn-container {
      text-align: center;
      margin-top: 20px;
    }

    /* Match index.php .chevron-pink + .blog-more */
    #toggle.blog-more .chevron-pink {
      font-size: 12px;
      color: #d7586b;
      padding-top: 3px;
      display: inline-flex;
      align-items: center;
    }

    #toggle.blog-more {
      background: none;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 500;
      color: #d7586b;
      text-decoration: underline;
      padding: 0;
    }

    #toggle.blog-more:hover,
    #toggle.blog-more:hover .chevron-pink,
    #toggle.blog-more:hover .chevron-pink .bi {
      color: #803358 !important;
      text-decoration: underline !important;
    }

    #toggle.blog-more:active,
    #toggle.blog-more:active .chevron-pink,
    #toggle.blog-more:active .chevron-pink .bi {
      color: #803358 !important;
    }

    /* Don't keep hover color after click (focus) — match index blog-more */
    #toggle.blog-more:focus,
    #toggle.blog-more:focus-visible {
      outline: none;
      color: #d7586b;
    }

    #toggle.blog-more:focus .chevron-pink,
    #toggle.blog-more:focus .chevron-pink .bi,
    #toggle.blog-more:focus-visible .chevron-pink,
    #toggle.blog-more:focus-visible .chevron-pink .bi {
      color: #d7586b;
    }

    #toggle.blog-more:focus:hover,
    #toggle.blog-more:focus:hover .chevron-pink,
    #toggle.blog-more:focus:hover .chevron-pink .bi {
      color: #803358 !important;
    }

    /*
     * Hero: 400px gradient fully below the fixed header (120px + 49px subnav).
     * Copy is an absolute overlay, flex-centered — no AOS transform.
     */
    body.page-blog-index section.blog-index-hero.hpt120px {
      margin-top: 170px !important;
      padding-top: 0 !important;
    }

    body.page-blog-index section.blog-index-hero {
      position: relative !important;
      display: block !important;
      height: 400px !important;
      min-height: 400px !important;
      max-height: 400px !important;
      padding: 0 !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
    }

    body.page-blog-index .blog-index-hero-bg,
    body.page-blog-index section.blog-index-hero img.img_bl {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 400px !important;
      max-height: 400px !important;
      object-fit: cover !important;
      object-position: center !important;
      z-index: 0;
      pointer-events: none;
    }

    body.page-blog-index .blog-index-hero-copy {
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      height: 400px !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      margin: 0 !important;
      padding: 0 24px !important;
      z-index: 1;
      transform: none !important;
    }

    body.page-blog-index .blog-index-hero-copy h2,
    body.page-blog-index .blog-index-hero-copy h4 {
      margin-left: auto;
      margin-right: auto;
    }

    @media screen and (min-width: 1600px) {
      body.page-blog-index .blog_links > .col-lg-10,
      body.page-blog-index .blog_links > .col-md-10,
      body.page-blog-index .blog_links > .col-sm-10,
      body.page-blog-index .blog_links > .col-xs-10,
      body.page-blog-index .blog_links > .col-10 {
        width: 980px !important;
        max-width: 980px !important;
        flex: 0 0 980px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      body.page-blog-index .blog_links .col-lg-4 {
        width: 100% !important;
        max-width: 100% !important;
        flex: none !important;
      }
    }

    @media (max-width: 768px) {

      .blog-index-hero.hpt120px {
        margin-top: 70px !important;
      }

      /* Tighten space between View More and footer (default .dfooter margin-top: 100px) */
      body.page-blog-index .dfooter {
        margin-top: 40px !important;
      }

      body.page-blog-index .btn-container {
        margin-top: 16px;
        margin-bottom: 0;
        height: auto;
      }

      body.page-blog-index main#main > section:last-of-type {
        padding-bottom: 0;
        margin-bottom: 0;
      }

      /* Blog card titles: 18px on mobile — beat section.hpt120px ~ main#main section h4 { 12px } */
      body.page-blog-index section.hpt120px ~ main#main .blog_links h4,
      body.page-blog-index section.hpt120px ~ main#main .blog_links h4.fs_18px,
      body.page-blog-index section.hpt120px ~ main#main .blog_links a h4,
      body.page-blog-index section.hpt120px ~ main#main section .blog_links h4.mt20px.mb10px.fs_18px {
        font-size: 18px !important;
        line-height: 140% !important;
      }

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

    }

    /* Tags + search — Figma blog landing */
    body.page-blog-index .blog_links > .col-lg-10 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      column-gap: 24px;
      row-gap: 40px;
    }

    body.page-blog-index .blog-filter-bar-wrap,
    body.page-blog-index .blog-filter-heading,
    body.page-blog-index .blog-empty,
    body.page-blog-index .btn-container,
    body.page-blog-index .blog_links .clearfix {
      grid-column: 1 / -1;
    }

    body.page-blog-index .blog_links .clearfix {
      display: none;
    }

    body.page-blog-index .blog_links .col-lg-4 {
      float: none;
      width: 100%;
      max-width: 100%;
      margin-bottom: 0;
    }

    body.page-blog-index .blog_links .col-lg-4.blog-card-hidden {
      display: none !important;
    }

    body.page-blog-index .blog-filter-bar-wrap {
      float: none;
      clear: both;
      width: 100%;
      margin: 40px 0 48px;
    }

    body.page-blog-index .blog-filter-bar {
      display: flex;
      align-items: center;
      gap: 24px;
      position: relative;
      min-height: 54px;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    body.page-blog-index .blog-filter-bar::-webkit-scrollbar {
      display: none;
    }

    body.page-blog-index .blog-filter-tag {
      flex: 0 0 auto;
      height: 54px;
      margin: 0;
      padding: 4px 24px;
      border: 1px solid transparent;
      border-radius: 27px;
      background: rgba(255, 247, 230, 1);
      color: rgba(128, 51, 88, 1);
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      white-space: nowrap;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
    }

    body.page-blog-index .blog-filter-tag.is-active,
    body.page-blog-index .blog-filter-tag:focus-visible {
      background: rgba(255, 247, 230, 1);
      border: 1px solid rgba(128, 51, 88, 1);
      color: rgba(128, 51, 88, 1);
      font-weight: 600;
      outline: none;
    }

    body.page-blog-index .blog-filter-search {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 54px;
      width: 54px;
      height: 54px;
      margin: 0;
      padding: 0;
      border: none;
      border-radius: 27px;
      background: #FFF7E6;
      color: #834B66;
      cursor: pointer;
      position: relative;
      z-index: 2;
      appearance: none;
      -webkit-appearance: none;
      align-self: center;
    }

    body.page-blog-index .blog-filter-search i {
      font-size: 20px;
      line-height: 1;
      color: #834B66;
    }

    body.page-blog-index .blog-filter-search .blog-icon-search {
      width: 18px;
      height: 18px;
      display: block;
      object-fit: contain;
    }

    body.page-blog-index .blog-filter-search .blog-icon-close {
      display: none;
    }

    body.page-blog-index .blog-filter-search.is-open .blog-icon-search {
      display: none;
    }

    body.page-blog-index .blog-filter-search.is-open .blog-icon-close {
      display: inline-flex;
    }

    body.page-blog-index .blog-search-box {
      position: absolute;
      left: 0;
      right: 66px;
      top: 50%;
      transform: translateY(-50%);
      height: 54px;
      width: 0;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease, width 0.25s ease;
    }

    body.page-blog-index .blog-filter-bar.is-searching {
      overflow: visible;
    }

    body.page-blog-index .blog-filter-bar.is-searching .blog-filter-tag {
      opacity: 0;
      pointer-events: none;
    }

    body.page-blog-index .blog-filter-bar.is-searching .blog-search-box {
      width: calc(100% - 66px);
      opacity: 1;
      pointer-events: auto;
    }

    body.page-blog-index .blog-search-input {
      width: 100%;
      height: 54px;
      margin: 0;
      padding: 4px 48px 4px 24px;
      border: 1px solid #834B66;
      border-radius: 27px;
      background: #FFF7E6;
      color: #834B66;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
      box-shadow: none;
      -webkit-appearance: none;
      appearance: none;
    }

    body.page-blog-index .blog-search-input::-webkit-search-cancel-button,
    body.page-blog-index .blog-search-input::-webkit-search-decoration {
      -webkit-appearance: none;
      appearance: none;
      display: none;
    }

    body.page-blog-index .blog-search-input:focus {
      outline: none;
    }

    body.page-blog-index .blog-search-input::placeholder {
      color: rgba(131, 75, 102, 0.55);
    }

    body.page-blog-index .blog-search-clear {
      display: none;
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      padding: 0;
      border: none;
      background: transparent;
      color: #834B66;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    body.page-blog-index .blog-search-clear.is-visible {
      display: inline-flex;
    }

    body.page-blog-index .blog-search-clear i {
      font-size: 18px;
      line-height: 1;
      color: #834B66;
    }

    body.page-blog-index .blog-filter-heading,
    body.page-blog-index .blog-filter-heading:hover {
      margin: 64px 0 0;
      font-family: 'Poppins', sans-serif;
      font-size: 36px;
      font-weight: 600;
      line-height: 140%;
      color: #834B66;
      text-align: center;
      text-decoration: none;
    }

    body.page-blog-index .blog-filter-heading.is-hidden,
    body.page-blog-index .blog-empty.is-hidden {
      display: none;
    }

    body.page-blog-index .blog-empty {
      float: none;
      clear: both;
      width: 100%;
      padding: 40px 0;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      color: #834B66;
    }

    @media (max-width: 991px) {
      body.page-blog-index .blog_links > .col-lg-10 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 768px) {
      body.page-blog-index .blog_links > .col-lg-10 {
        grid-template-columns: 1fr;
        row-gap: 30px;
      }

      body.page-blog-index .blog-filter-bar-wrap {
        margin: 24px 0 32px;
      }

      body.page-blog-index .blog-filter-bar {
        gap: 12px;
      }

      body.page-blog-index .blog-filter-tag {
        height: 44px;
        padding: 4px 16px;
        font-size: 14px;
        border-radius: 22px;
      }

      body.page-blog-index .blog-filter-search,
      body.page-blog-index .blog-search-box,
      body.page-blog-index .blog-search-input {
        height: 44px;
      }

      body.page-blog-index .blog-filter-search {
        flex-basis: 44px;
        width: 44px;
        border-radius: 22px;
      }

      body.page-blog-index .blog-filter-heading {
        font-size: 22px;
        margin: 0 0 4px;
      }
    }
  </style>
</head>

<body class="page-blog-index">

  <!-- header -->
  <?php Template::header(); ?>
  <!-- /header -->

  <section class="hpt120px blog-index-hero">
    <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/blog_landing.png"
      class="blog-index-hero-bg img-responsive img_bl" alt="Insightful articles with practical tips to be happier">
    <div class="blog-index-hero-copy">
      <h2 class="mt0px mb20px fs_36px fw_600 lh_140p fc_ffffff">
        Insightful articles with practical tips to be happier
      </h2>
      <h4 class="mtb0px fs_15px fw_400 lh_150p fc_ffffff">
        Find articles on meditation, mental health, relationships, and how to succeed at work
      </h4>
    </div>
  </section>

  <main id="main">

    <!-- aspects -->
    <section>
      <div class="row center_flex blog_links">
        <div class="col-lg-10 col-md-10 col-sm-10 col-10 col-xs-10 p0">

          <div class="blog-filter-bar-wrap">
            <div class="blog-filter-bar" id="blog-filter-bar">
              <button type="button" class="blog-filter-tag is-active" data-filter="all" data-title="All">All</button>
              <button type="button" class="blog-filter-tag" data-filter="mental-health" data-title="Mental Health">Mental health</button>
              <button type="button" class="blog-filter-tag" data-filter="relationships" data-title="Relationships">Relationships</button>
              <button type="button" class="blog-filter-tag" data-filter="work-leadership" data-title="Work &amp; Leadership">Work &amp; Leadership</button>
              <button type="button" class="blog-filter-tag" data-filter="breathing-meditation" data-title="Breathing &amp; Meditation">Breathing &amp; Meditation</button>
              <button type="button" class="blog-filter-search" id="blog-search-toggle" aria-label="Search articles" aria-expanded="false">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/search.svg" class="blog-icon-search" alt="" width="18" height="18" aria-hidden="true">
                <i class="bi bi-x blog-icon-close" aria-hidden="true"></i>
              </button>
              <form class="blog-search-box" action="" onsubmit="return false;">
                <input type="text" class="blog-search-input" id="blog-search-input" placeholder="Search articles..." autocomplete="off">
                <button type="button" class="blog-search-clear" id="blog-search-clear" aria-label="Clear search">
                  <i class="bi bi-x" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <h2 class="blog-filter-heading is-hidden" id="blog-filter-heading"></h2>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="200">
            <a class="" href="10_ways_understanding_your_mind_could_transform_your_life.php">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/58.webp" class="img-responsive img_blogs"
                    alt="10 ways understanding your mind could transform your life">
                </div>
              </div>

              <div class="row mt20px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                    Mental health
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                  <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                    10 ways understanding your mind could transform your life
                  </h4>
                </div>
              </div>

             
            </a>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="200">
            <a class="" href="difficult_emotions.php">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/52.webp" class="img-responsive img_blogs"
                    alt="Difficult emotions: a guide to freedom">
                </div>
              </div>

              <div class="row mt20px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                    Manage your emotions
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                  <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                    Difficult emotions: a guide to freedom
                  </h4>
                </div>
              </div>

           
            </a>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="300">
            <a class="" href="real_success.php">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/47.webp" class="img-responsive img_blogs"
                    alt="Real success">
                </div>
              </div>

              <div class="row mt20px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                    Work and Leadership
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                    Real success
                  </h4>
                </div>
              </div>

             
            </a>
          </div>
          <div class="clearfix"></div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="400">
            <a class="" href="self_Awareness_can_help_relationships_flourish.php">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/21.webp" class="img-responsive img_blogs"
                    alt="Self-Awareness can help relationships flourish">
                </div>
              </div>

              <div class="row mt20px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                    Relationships
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                  <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                    Self-Awareness can help relationships flourish
                  </h4>
                </div>
              </div>

            
            </a>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="500">
            <a class="" href="why_are_we_critical_of_ourselves.php">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/12.webp" class="img-responsive img_blogs"
                    alt="Why are we critical of ourselves">
                </div>
              </div>

              <div class="row mt20px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                    Relationships
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                  <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                    Why are we critical of ourselves
                  </h4>
                </div>
              </div>

             
            </a>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="600">
            <a class="" href="how_to_calm_anxiety_with_the_help_of_the_happierme_app.php">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/36.webp" class="img-responsive img_blogs"
                    alt="How to calm anxiety">
                </div>
              </div>

              <div class="row mt20px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                    Mental health
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                  <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                    How to calm anxiety
                  </h4>
                </div>
              </div>

            
            </a>
          </div>
          <div class="clearfix"></div>
          <!-- <view more> -->
          <div id="text">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="700">
              <a class="" href="the_missed_opportunity_in_relationships.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/53.webp" class="img-responsive img_blogs"
                      alt="The missed opportunity in relationships">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Relationships
                    </button>

                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      The missed opportunity in relationships
                    </h4>
                  </div>
                </div>

             
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="800">
              <a class="" href="how_to_manage_your_own_mental_health.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/54.webp" class="img-responsive img_blogs"
                      alt="How to manage your own mental health">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Breathing & Meditation
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      How to manage your own mental health
                    </h4>
                  </div>
                </div>

               
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="900">
              <a class="" href="discover_the_joys_of_journaling.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/55.webp" class="img-responsive img_blogs"
                      alt="Discover the joys of journaling">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>

                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Discover the joys of journaling
                    </h4>
                  </div>
                </div>

               
              </a>
            </div>
            <div class="clearfix"></div>


            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1000">
              <a class="" href="6_ways_to_transform_organisations.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/56.webp" class="img-responsive img_blogs"
                      alt="6 ways to transform organisations">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      6 ways to transform organisations
                    </h4>
                  </div>
                </div>

               
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="6_barriers_to_overcoming_stress.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/57.webp" class="img-responsive img_blogs"
                      alt="6 Barriers to overcoming stress">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Breathing & Meditation
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      How can we overcome stress?
                    </h4>
                  </div>
                </div>

               
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="addressing_health_problems_with_emotional_intelligence.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/59.webp" class="img-responsive img_blogs"
                      alt="Addressing health problems with emotional intelligence">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Addressing health problems with emotional intelligence
                    </h4>
                  </div>
                </div>

              
              </a>
            </div>

            <div class="clearfix"></div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="does_education_make_us_intelligent.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/60.webp" class="img-responsive img_blogs"
                      alt="Does education make us intelligent?">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Does education make us intelligent?
                    </h4>
                  </div>
                </div>

              
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="a_fresh_way_to_avoid_and_overcome_addiction.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/48.webp" class="img-responsive img_blogs"
                      alt="A fresh way to avoid and overcome addiction">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Breathing & Meditation
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      A fresh way to avoid and overcome addiction
                    </h4>
                  </div>
                </div>

              
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="how_to_manage_anxiety_attacks.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/38.webp" class="img-responsive img_blogs"
                      alt="How to manage anxiety attacks">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      How to manage anxiety attacks
                    </h4>
                  </div>
                </div>

              
              </a>
            </div>
            <div class="clearfix"></div>


            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="how_to_meditate.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/40.webp" class="img-responsive img_blogs"
                      alt="How to meditate">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      How to meditate
                    </h4>
                  </div>
                </div>

               
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="happierme_survey_into_causes_of_work_stress.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/50.webp" class="img-responsive img_blogs"
                      alt="HappierMe survey into causes of work stress">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      HappierMe survey into causes of work stress
                    </h4>
                  </div>
                </div>

               
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="avoid_and_overcome_burnout_with_self_awareness.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/49.webp" class="img-responsive img_blogs"
                      alt="Avoid and overcome burnout, with self-awareness">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Avoid and overcome burnout, with self-awareness
                    </h4>
                  </div>
                </div>

               
              </a>
            </div>
            <div class="clearfix"></div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="looking_for_love.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/35.webp" class="img-responsive img_blogs"
                      alt="Looking for love">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Looking for love
                    </h4>
                  </div>
                </div>



              
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="to_succeed_as_a_leader_you_need_self-awareness.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/33.webp" class="img-responsive img_blogs"
                      alt="To succeed as a leader you need self-awareness">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      To succeed as a leader you need self-awareness
                    </h4>
                  </div>
                </div>
              
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="boosting_well-being_and_productivity_at_work.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/32.webp" class="img-responsive img_blogs"
                      alt="Boosting well-being and productivity at work">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Boosting well-being and productivity at work
                    </h4>
                  </div>
                </div>
               
              </a>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="transforming_the_lives_of_children_through_self-knowledge.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/62.webp" class="img-responsive img_blogs"
                      alt="Transforming the lives of children through self-knowledge">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Transforming the lives of children through self-knowledge
                    </h4>
                  </div>
                </div>



               
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="the_future_of_education_a_happierme_survey.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/63.webp" class="img-responsive img_blogs"
                      alt="The Future of Education: A HappierMe Survey">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      The Future of Education: A HappierMe Survey
                    </h4>
                  </div>
                </div>
               
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="transforming_education_to_meet_the_needs_of_students_and_society.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/64.webp" class="img-responsive img_blogs"
                      alt="Transforming education to meet the needs of students and society">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Transforming education to meet the needs of students and society
                    </h4>
                  </div>
                </div>
              
              </a>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="tackling_the_teen_suicide_crisis.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/65.webp" class="img-responsive img_blogs"
                      alt="Tackling The Teen Suicide Crisis">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Tackling The Teen Suicide Crisis
                    </h4>
                  </div>
                </div>
             
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="alarming_impact_of_work_stress.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/69.webp" class="img-responsive img_blogs"
                      alt="Alarming impact of work stress on sleep">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Alarming impact of work stress on sleep
                    </h4>
                  </div>
                </div>
            
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="teens_says.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/68.webp" class="img-responsive img_blogs"
                      alt="If Teens Says This, They Might Be Struggling">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      mental health
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      If Teens Says This, They Might Be Struggling
                    </h4>
                  </div>
                </div>
               
              </a>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">
              <a class="" href="workplace_bullying.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/70.webp" class="img-responsive img_blogs"
                      alt="Workplace Bullying">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>

                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Workplace Bullying
                    </h4>
                  </div>
                </div>
                
              </a>
            </div>



            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="new_poll.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/71.webp" class="img-responsive img_blogs"
                      alt="Why Do Leaders Fail? Insights from a new poll">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">
                      Work and Leadership
                    </button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">
                      Why Do Leaders Fail? Insights from a new poll
                    </h4>
                  </div>
                </div>
               
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="find-love-and-deepen-your-relationships.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/72.webp" class="img-responsive img_blogs" alt="Why Do Leaders Fail? Insights from a new poll">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">Relationships</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">12 questions to deepen your relationships   </h4>
                  </div>
                </div>
              
              </a>
            </div>

            
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="10-ways-to-thrive-as-a-parent.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/73.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">Parenting</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">10 Ways to Thrive as a Parent</h4>
                  </div>
                </div>
               
              </a>
            </div>


             <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="3_steps_to_deeper_meditation.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/74.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">Manage your emotions</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">Three Steps to a Deeper Meditation Practice
</h4>
                  </div>
                </div>
               
              </a>
            </div>


             <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="10_ways_get_mentally_fit.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/75.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">Manage your emotions</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">10 Ways Athletes Can Get Mentally Fit

</h4>
                  </div>
                </div>
               
              </a>
            </div>
              <div class="clearfix"></div>
           <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="10_ways_success_as_coach.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/76.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">Mental health</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">10 Ways to Succeed as a Coach
</h4>
                  </div>
                </div>
               
              </a>
            </div>


               <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="mental_health_preventation.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/77.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp"> Mental health</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">What does “Prevention” in Mental Health actually mean?


</h4>
                  </div>
                </div>
               
              </a>
            </div>

             <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="first_mental_health_support.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/78.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp"> Mental health</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">Why HR leaders are shifting to prevention-first mental health support



</h4>
                  </div>
                </div>
               
              </a>
            </div>
  <div class="clearfix"></div>
           <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="as_Ai_changes_work.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/79.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">Mental health</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">New poll: As AI changes work, what skills will matter most?
</h4>
                  </div>
                </div>
               
              </a>
            </div>

          
             <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="skills_ai_world.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/blogs/80.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">Work and Leadership</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">9 life-skills students need to thrive in an AI world

</h4>
                  </div>
                </div>
               
              </a>
            </div>



               <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="human_skilss_Ai_world.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/blogs/81.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">                    
Work and Leadership</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">Human Skills to Thrive in an AI World


</h4>
                  </div>
                </div>
               
              </a>
            </div>
  <div class="clearfix"></div>
           <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="preventing_sucide.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/83.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp">  Stress Management</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">Preventing suicide before the fire starts

</h4>
                  </div>
                </div>
               
              </a>
            </div>

             <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 rp0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100">

              <a class="" href="live_with_less_stress.php">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <img src="https://d1tenzemoxuh75.cloudfront.net/blogs/84.webp" class="img-responsive img_blogs" alt="Blog_img">
                  </div>
                </div>

                <div class="row mt20px">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                    <button class="mtb0px fs_12px fw_400 lh_150p fc_834b66 btn_blogp"> Suicide Prevention</button>


                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h4 class="mt20px mb10px fs_18px fw_500 lh_140p fc_000000">How can we live with less stress?


</h4>
                  </div>
                </div>
               
              </a>
            </div>
          </span>
            <div class="clearfix"></div>

          <div class="blog-empty is-hidden" id="blog-empty">No articles match your search.</div>

          <div class="btn-container">
            <button type="button" id="toggle" class="blog-more">
              <span class="toggle-label">View More</span>
              <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
            </button>
          </div>
          <!-- <view less> -->
        </div>
      </div>
    </section>
    <!-- /aspects -->

    <!-- footer -->
    <?php Template::footer(); ?>
    <!-- /footer -->

  </main>

  <!-- vendor_footer -->
  <?php Template::vendorFooter(); ?>
  <!-- /vendor_footer -->

  <script>
(function initBlogIndex() {
  if (typeof window.jQuery === 'undefined') {
    window.addEventListener('load', initBlogIndex);
    return;
  }

  jQuery(function ($) {
  let isExpanded = false;
  var $bar = $('#blog-filter-bar');
  var $searchToggle = $('#blog-search-toggle');
  var $searchInput = $('#blog-search-input');
  var $searchClear = $('#blog-search-clear');
  var $heading = $('#blog-filter-heading');
  var $empty = $('#blog-empty');
  var $cards = $('.blog_links .col-lg-4');

  var setToggleLabel = function (label) {
    var $label = $('#toggle .toggle-label');
    if ($label.length) {
      $label.text(label);
      return;
    }
    $('#toggle').html(
      '<span class="toggle-label">' + label + '</span>' +
      '<span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>'
    );
  };

  var categoryForTag = function (text) {
    var t = (text || '').toLowerCase().replace(/\s+/g, ' ').trim();
    if (t.indexOf('mental') !== -1 || t.indexOf('emotion') !== -1 || t.indexOf('anxiety') !== -1 || t.indexOf('stress') !== -1) {
      return 'mental-health';
    }
    if (t.indexOf('relationship') !== -1 || t.indexOf('parenting') !== -1) {
      return 'relationships';
    }
    if (t.indexOf('work') !== -1 || t.indexOf('leadership') !== -1 || t.indexOf('organisation') !== -1 || t.indexOf('organization') !== -1) {
      return 'work-leadership';
    }
    if (t.indexOf('breath') !== -1 || t.indexOf('meditat') !== -1) {
      return 'breathing-meditation';
    }
    return '';
  };

  var syncSearchClear = function () {
    $searchClear.toggleClass('is-visible', ($searchInput.val() || '').trim().length > 0);
  };

  var applyBlogFilters = function () {
    var $active = $('.blog-filter-tag.is-active');
    var filter = $active.attr('data-filter') || 'all';
    var query = ($searchInput.val() || '').toLowerCase().trim();
    var isFiltering = filter !== 'all' || query !== '';
    var visibleCount = 0;

    $cards.each(function () {
      var $card = $(this);
      var title = $card.find('h4').text().toLowerCase();
      var categories = $card.find('.btn_blogp').map(function () {
        return categoryForTag($(this).text());
      }).get();
      var tagMatch = filter === 'all' || categories.indexOf(filter) !== -1;
      var searchMatch = !query || title.indexOf(query) !== -1;
      var show = tagMatch && searchMatch;
      $card.toggleClass('blog-card-hidden', !show);
      if (show) {
        $card.addClass('aos-animate').css({ opacity: 1, transform: 'none' });
        visibleCount += 1;
      }
    });

    if (filter !== 'all' && !query) {
      $heading.text($active.attr('data-title') || $active.text().trim()).removeClass('is-hidden');
    } else {
      $heading.addClass('is-hidden').text('');
    }

    $empty
      .text(query ? 'No articles match your search.' : 'No articles in this category.')
      .toggleClass('is-hidden', visibleCount > 0);

    $('body').toggleClass('blog-show-extra', isFiltering || isExpanded);
    $('.btn-container').toggle(!isFiltering);
    syncSearchClear();
  };

  // Remove shared #toggle handler so it cannot replace the button HTML
  $('#toggle').off('click');

  $('#toggle').on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    isExpanded = !isExpanded;
    setToggleLabel(isExpanded ? 'View Less' : 'View More');
    applyBlogFilters();
    this.blur();
  });

  $('.blog-filter-tag').on('click', function () {
    $('.blog-filter-tag').removeClass('is-active');
    $(this).addClass('is-active');
    applyBlogFilters();
  });

  var closeSearch = function () {
    $bar.removeClass('is-searching');
    $searchToggle.removeClass('is-open').attr('aria-expanded', false);
    $searchInput.val('');
    applyBlogFilters();
  };

  $searchToggle.on('click', function () {
    var opening = !$bar.hasClass('is-searching');
    if (opening) {
      $bar.addClass('is-searching');
      $searchToggle.addClass('is-open').attr('aria-expanded', true);
      $searchInput.trigger('focus');
    } else {
      closeSearch();
    }
  });

  $searchClear.on('click', function () {
    $searchInput.val('').trigger('focus');
    applyBlogFilters();
  });

  $searchInput.on('input', applyBlogFilters);

  $searchInput.on('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSearch();
    }
  });
  });
})();
  </script>

</body>

</html>