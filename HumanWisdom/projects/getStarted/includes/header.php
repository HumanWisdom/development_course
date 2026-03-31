<!-- header -->
<style>
  @media (max-width: 767px) {
    .header_fixed.header {
      justify-content: flex-start !important;
    }
    /* Prevent the fixed 1360px wrapper pushing items off-screen on mobile */
    .header_fixed.header > div {
      width: 100% !important;
      padding: 0 0px !important;
      justify-content: space-between !important;
    }
  }
  /* Desktop nav: no text underline; line under titles comes from main.css :before, not text-decoration */
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
  /* Same asset as before (intrinsic size); tint to #834B66 on hover / .active_nav only */
  .header_fixed .navbar .dropdown > a img.dropdown-indicator {
    transition: filter 0.2s ease;
  }
  .header_fixed .navbar > ul > li.dropdown:hover > a img.dropdown-indicator,
  .header_fixed a#organisation.active_nav img.dropdown-indicator {
    filter: brightness(0) saturate(100%) invert(27%) sepia(18%) saturate(1400%) hue-rotate(255deg) brightness(0.92) contrast(1.05);
  }
  /* NEW badge: default #D7586B; hover / current page (.active_nav) #803358 */
  #teenagersHeaderClick .badge_new {
    background: #D7586B !important;
    border: none;
    box-sizing: border-box;
    transition: background 0.2s ease;
  }
  #teenagersHeaderClick:hover .badge_new,
  #teenagersHeaderClick.active_nav .badge_new {
    background: #803358 !important;
  }
  #teenagersHeaderClick .badge_new h6,
  #teenagersHeaderClick .badge_new h6:hover {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
  }
</style>
<div class="header_fixed header" style="    justify-content: center;
    display: flex;">
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12  " style="justify-content: center;width:1360px;
    text-align: center;
    display: flex;    padding: 0px 40px;">

    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 p0">
      <a class="" href="../index.php">
        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/logo_new.svg" class="img-responsive"  alt="logo">
      </a>
    </div>

    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-8 col-8 p0 dflex_end">
      <nav id="navbar" class="navbar m0pxi">
        <ul>

          <li><a href="../pages/about_us.php"  id="AboutUs"  class="nav">About us</a></li>
          <li class="prelative">
            <a id="teenagersHeaderClick" class="nav">       
              Teenagers
              <div class="badge_new">
                <h6 class="mtb0px fs_6px fw_600 lh_130p fc_ffffff">
                  NEW
                </h6>
              </div>
            </a>
            <!--
          </li>
          <li><a href="../blogs/blog_index.php" class="blog_main">Blog</a></li>
          <li class="dropdown"><a><span>For organisations</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          </li> -->
          <li><a href="../blogs/blog_index.php" id="blogs" class="nav">Blog</a></li>
          <li class="dropdown"><a id="organisation" class="nav"><span>For organisations</span> <img class="dropdown-indicator" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/header-arrow.svg" alt="" /></a>
            <ul>
              <li><a  id="work" class="nav">HappierMe for Work</a></li>
              <li><a id="education" class="nav">HappierMe for Education</a></li>
              <li><a id="healthcare" class="nav">HappierMe for Healthcare</a></li>
            </ul>
          </li>
          <li><a id="pricing" class="nav">Pricing</a></li>
          <li><a id="partnership" class="nav">Partnership</a></li>
          <li><a id="loginClick" class="nav">Login</a></li>
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
<!-- /header -->
