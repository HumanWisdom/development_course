<!-- header -->
<style>
  /* Full-bleed fixed stack: main.css .header uses padding: 30px 60px which inset the subnav — remove horizontal padding and auto height so both rows + cream bar fit */
  .header_fixed.header.header_site_stack {
    flex-direction: column !important;
    align-items: stretch !important;
    width: 100% !important;
    max-width: none !important;
    height: auto !important;
    min-height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    left: 0 !important;
    right: 0 !important;
    box-sizing: border-box;
  }
  .header_site_top {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
    padding: 29px 0;
    height:120px;
  }
  .header_main_inner {
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    text-align: center;
    display: flex;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .header_subnav {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    background: rgba(255, 249, 238, 1);
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border-top: 1px solid rgba(214, 112, 112, 0.2);
    flex-shrink: 0;
  }
  .header_subnav_inner {
    width: 100%;
    max-width: 1440px;
    box-sizing: border-box;
    height: 49px;
    padding: 15px 40px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 60px;
    line-height: 1.2;
  }
  .header_subnav_inner a {
    color: rgba(215, 88, 107, 1);;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;;
  }
  .header_subnav_inner a:hover {
    color: #803358;
  }
  /* Desktop/tablet: cream subnav only. Mobile: hidden — links live in hamburger menu */
  .header_nav_mobile_only {
    display: none !important;
  }
  @media (max-width: 767px) {
    .header_fixed.header_site_stack {
      justify-content: flex-start !important;
    }
    .header_main_inner {
      width: 100% !important;
      padding: 0 16px !important;
      justify-content: space-between !important;
      align-items: center !important;
    }
    .header_site_top {
      padding: 12px 0;
      height: auto !important;
      min-height: 0;
    }
    .header_subnav {
      display: none !important;
    }
    .header_nav_mobile_only {
      display: list-item !important;
    }
    /* Top row: logo | compact CTA + menu — avoid oversized button crowding the bar */
    .header_main_inner > .dflex_end {
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      flex-wrap: nowrap !important;
      gap: 10px;
      flex: 1 1 auto;
      min-width: 0;
      max-width: none;
    }
    .header_site_top .btn_tff.btn_popup {
      width: auto !important;
      min-width: 0;
      max-width: none;
      height: 40px !important;
      padding: 8px 14px !important;
      font-size: 13px !important;
      line-height: 1.2 !important;
      border-radius: 20px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .header_main_inner .mobile-nav-show {
      margin: 0 !important;
      flex-shrink: 0;
    }
  }
  @media (min-width: 768px) {
    .header_fixed .navbar > ul > li > a:hover {
      text-decoration: none !important;
    }
    .header_fixed .navbar > ul > li > a:before,
    .header_fixed .navbar > ul > li > a:hover:before,
    .header_fixed .navbar > ul > li:hover > a:before {
      width: 0 !important;
      visibility: hidden !important;
    }
  }
  #teenagersHeaderClick .badge_new,
  #teenagersHeaderClick_mobile .badge_new {
    background: #D7586B !important;
    border: none;
    box-sizing: border-box;
    transition: background 0.2s ease;
    border-radius: 999px;
    padding: 2px 6px;
    line-height: 1;
  }
  #teenagersHeaderClick:hover .badge_new,
  #teenagersHeaderClick.active_nav .badge_new,
  #teenagersHeaderClick_mobile:hover .badge_new,
  #teenagersHeaderClick_mobile.active_nav .badge_new {
    background: #803358 !important;
  }
  #teenagersHeaderClick .badge_new h6,
  #teenagersHeaderClick .badge_new h6:hover,
  #teenagersHeaderClick_mobile .badge_new h6,
  #teenagersHeaderClick_mobile .badge_new h6:hover {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
  }
</style>
<div class="header_fixed header header_site_stack" style="justify-content: flex-start; display: flex;">
  <div class="header_site_top">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 header_main_inner p0">

      <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 p0">
        <a class="" href="../index.php">
          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/logo_new.svg" class="img-responsive" alt="logo">
        </a>
      </div>

      <div class="col-lg-10 col-md-10 col-sm-8 col-xs-8 col-8 p0 dflex_end">
        <nav id="navbar" class="navbar m0pxi">
          <ul>
            <li><a href="../pages/about_us.php" id="AboutUs" class="nav">About us</a></li>
            <li><a href="../blogs/blog_index.php" id="blogs" class="nav">Blog</a></li>
            <li><a id="pricing" class="nav" href="../index.php#div_subscription">Pricing</a></li>
            <li><a id="events" class="nav" href="https://happierme.app/adults/events" target="_blank" rel="noopener noreferrer">Events</a></li>
            <li class="header_nav_mobile_only">
              <a id="teenagersHeaderClick_mobile" class="nav" href="../pages/teenagers.php">
                For Teenagers
                <div class="badge_new">
                  <h6 class="mtb0px fs_6px fw_600 lh_130p fc_ffffff">NEW</h6>
                </div>
              </a>
            </li>
            <li class="header_nav_mobile_only"><a id="work_mobile" class="nav" href="../pages/work.php">For Work</a></li>
            <li class="header_nav_mobile_only"><a id="healthcare_mobile" class="nav" href="../pages/healthcare.php">For Healthcare</a></li>
            <li class="header_nav_mobile_only"><a id="education_mobile" class="nav" href="../pages/education.php">For Education</a></li>
          </ul>
        </nav>

        <style>
          a.no-underline-hover:hover {
            text-decoration: none !important;
          }
        </style>
        <a class="btn_tff btn_tff_tn btn_popup no-underline-hover" href="https://onelink.to/qsptex">Try for free</a>
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>

    </div>
  </div>

  <nav class="header_subnav" aria-label="HappierMe for">
    <div class="header_subnav_inner">
      <a id="teenagersHeaderClick" class="nav" href="../pages/teenagers.php">
        For Teenagers
        <div class="badge_new">
          <h6 class="mtb0px fs_6px fw_600 lh_130p fc_ffffff">NEW</h6>
        </div>
      </a>
      <a id="work" href="../pages/work.php">For Work</a>
      <a id="healthcare" href="../pages/healthcare.php">For Healthcare</a>
      <a id="education" href="../pages/education.php">For Education</a>
    </div>
  </nav>
</div>
<!-- /header -->
