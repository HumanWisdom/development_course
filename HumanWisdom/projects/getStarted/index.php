<?php
// Include security configuration
require_once('./includes/security_config.php');
require_once('./includes/page_assets.php');
require_once('./includes/media_config.php');
hw_page_assets_configure('landing');

$hw_lcp_banner_desktop = hw_lcp_image_url('banner_desktop');
$hw_lcp_banner_mobile = hw_lcp_image_url('banner_mobile');
?>

<!DOCTYPE html>
<html lang="en">
 <head>
  <title>Mental Wellbeing, Self-awareness and Life Skills | HappierMe</title>
  <meta name="title" content="Mental Wellbeing, Self-awareness and Life Skills | HappierMe">
  <meta name="description"
    content="Build mental wellbeing through self-awareness with HappierMe. Develop emotional intelligence and life skills to reduce stress and strengthen relationships.">
  <meta name="keywords"
    content="mental wellbeing,emotional intelligence,self-awareness, life skills, mindfulness, stress management, resilience, personal growth">
  <meta property="og:title" content="Mental Wellbeing, Self-awareness and Life Skills | HappierMe">
  <meta property="og:description"
    content="Build mental wellbeing through self-awareness with HappierMe. Develop emotional intelligence and life skills to reduce stress and strengthen relationships.">
  <meta property="og:site_name" content="HappierMe">
  <meta property="og:url" content="https://happierme.app">
  <meta property="og:type" content="">
  <meta property="og:image" content="https://d1tenzemoxuh75.cloudfront.net/assets/images/logo/logo_favicon_transparent_v3.png">
  <!-- <meta property="og:image" content="https://d1tenzemoxuh75.cloudfront.net/website/imgs/landing.png"> -->
  <!-- <meta property="og:image" content=https://d1tenzemoxuh75.cloudfront.net/website/webp/teens_app_01.webp>
     <meta property="og:image" content="">
     <meta property="og:image" content="">
     <meta property="og:image" content=""> -->
  <!--Schema tag for website -->
  <script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "HappierMe",
        "url": "https://happierme.app/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://happierme.app/index.php{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
      </script>
   


  <!--Canonical Tag-->
  <link rel="canonical" href="https://happierme.app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
  

    <!-- LCP: compressed WebP (~46KB). Do not preload both viewports. -->
    <link rel="preload" as="image" type="image/webp" href="<?= htmlspecialchars($hw_lcp_banner_desktop, ENT_QUOTES, 'UTF-8'); ?>" fetchpriority="high" media="(min-width: 821px)" />
    <link rel="preload" as="image" type="image/webp" href="<?= htmlspecialchars($hw_lcp_banner_mobile, ENT_QUOTES, 'UTF-8'); ?>" fetchpriority="high" media="(max-width: 820px)" />
    <title>Mental Wellbeing, Self-awareness and Life Skills | HappierMe</title>
    
    <!-- vendor_header -->
    <?php include('./includes/vendor_header.php'); ?>
    <!-- /vendor_header -->
    
    <?php hw_defer_stylesheet('assets/css/index-inline.css'); ?>
  </head>
<body id="body" style="padding:0px !important">

  <!-- header -->
  <?php include('./includes/header.php'); ?>

  <!-- /header --> 

    <div class="frame" id="main">

      <!-- ===== HERO ===== -->
      <div class="frame-wrapper web_home_divlanding" style="background: linear-gradient(180deg, #803358 0%, #230F40 100%) no-repeat; background-size: cover;">
        <div class="div-wrapper">
          <div class="div">
            <div class="div-2">
              <picture>
                <source media="(min-width: 821px)" type="image/webp" srcset="<?= htmlspecialchars($hw_lcp_banner_desktop, ENT_QUOTES, 'UTF-8'); ?>" />
                <img class="new-app-adults-teen"
                  src="<?= htmlspecialchars($hw_lcp_banner_mobile, ENT_QUOTES, 'UTF-8'); ?>"
                  width="331" height="480"
                  fetchpriority="high" decoding="async" alt="HappierMe app" />
              </picture>
          <div class="div-3">
                 <!-- rating row -->
                 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 pt_18px">
                  <h1 class="mtb0px fs_12px fw_400 lh_140p fc_000000 ta_lc mb_16px rating-row">
                    <span class="rating_a" aria-hidden="true">
                      <span class="hero-star">★</span><span class="hero-star">★</span><span class="hero-star">★</span><span class="hero-star">★</span><span class="hero-star">★</span>
                    </span>
                    <span class="appstore_a" aria-hidden="true">
                      <span class="hero-app-icon"></span>
                    </span>
                    <span class="fs_15px fw_700 lh_140p fc_000000">
                      4.8
                    </span>
                    App store rating
                  </h1>
                </div>
                <div class="frame-wrapper-2">
                  <div class="div-4">
                    <div class="div-65">
                     <p class="p" id="hw-website-title" style="color:rgba(255, 247, 230, 1) !important;text-align: left;line-height: 1.3;" ><span class="hero-title-verb">Think</span><span class="hero-title-better">&nbsp;better.</span><br><span class="scrolling-words"><span class="scrolling-word">Live</span><span class="scrolling-word">Feel</span><span class="scrolling-word">Sleep</span><span class="scrolling-word">Love</span><span class="scrolling-word">Work</span></span><span class="hero-title-accent">&nbsp;better.</span></p>
                     
                    </div>
                    <p class="text-wrapper-4" id="hw-website-subtitle">
                      Feel calmer. Build happier <br class="subtitle-br-m">relationships.<br class="subtitle-br-d"> Develop <a href="#" class="human-skills-link" data-bs-toggle="modal" data-bs-target="#humanSkillsModal" role="button" aria-haspopup="dialog" id="lifeskills">these skills</a><br class="subtitle-br-m"> to create the life you want.
                    </p>
                  </div>
                </div>
                <a class="hero-try-free-link" id="happiermeTryForFree" href="https://happierme.app/pages/splash_options.php">
                  <div class="start-your-free-wrapper">
                    <div class="text-wrapper-5">Try HappierMe for free</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progressive HTML: sections load when scrolled into view (see index-html-chunks.js) -->
      <div class="index-html-chunk" data-hw-chunk="1" aria-busy="true"></div>
      <div class="index-html-chunk" data-hw-chunk="2" aria-busy="true"></div>
      <div class="index-html-chunk" data-hw-chunk="3" aria-busy="true"></div>
      <div class="index-html-chunk" data-hw-chunk="4" aria-busy="true"></div>

    </div>

    <script>
      function hwWhenChunkDomReady(fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
        document.addEventListener("hw:chunk-loaded", fn);
      }

      function switchTab(el, panelId) {
        document.querySelectorAll('.tool-tab').forEach(function(t){
          t.classList.remove('tool-tab-active');
        });
        el.classList.add('tool-tab-active');
        if (panelId !== 'fbn') {
          var fbnVideo = document.getElementById('fbn-video');
          var fbnPlayBtn = document.getElementById('fbn-play-btn');
          if (fbnVideo) {
            fbnVideo.pause();
            fbnVideo.controls = false;
            fbnVideo.load();
          }
          if (fbnPlayBtn) fbnPlayBtn.hidden = false;
        }
        document.querySelectorAll('.tools-panel').forEach(function(p){
          p.classList.remove('active');
        });
        document.getElementById(panelId).classList.add('active');
      }

      /* FAQ tab switcher */
      function switchFaq(el, panelId) {
        document.querySelectorAll('.faq-tab').forEach(function(t){
          t.classList.remove('faq-tab-active');
        });
        el.classList.add('faq-tab-active');
        document.querySelectorAll('.faq-panel').forEach(function(p){
          p.classList.remove('active');
        });
        var panel = document.getElementById(panelId);
        if (panel) panel.classList.add('active');
      }

      function findDesktopFaqBody(row) {
        var block = row.closest('.div-58');
        if (block) {
          var body = block.querySelector('.faq-body');
          if (body) return body;
        }
        var parent = row.parentElement;
        return parent ? parent.querySelector('.faq-body') : null;
      }

      function syncDesktopFaqAccordionState() {
        var section = document.querySelector('.div-54');
        if (!section) return;
        section.querySelectorAll('.faq-panel').forEach(function (panel) {
          panel.querySelectorAll('.faq-body').forEach(function (b) {
            b.style.display = 'none';
          });
          panel.querySelectorAll('.div-60.faq-open, .div-61.faq-open').forEach(function (row) {
            var body = findDesktopFaqBody(row);
            if (body) body.style.display = 'block';
          });
        });
      }

      (function initDesktopFaqAccordion() {
        if (window.__hwDesktopFaqAccordion) return;
        window.__hwDesktopFaqAccordion = true;
        document.addEventListener('click', function (e) {
          var row = e.target.closest('.div-60, .div-61');
          if (!row || !row.closest('.div-54')) return;
          var panel = row.closest('.faq-panel');
          if (!panel || !panel.classList.contains('active')) return;

          var body = findDesktopFaqBody(row);
          if (!body) return;

          var isOpen = row.classList.contains('faq-open');
          if (typeof logevent === 'function' && isOpen) logevent('click_faq_collapse', 'index.php');

          panel.querySelectorAll('.faq-body').forEach(function (p) {
            p.style.display = 'none';
          });
          panel.querySelectorAll('.div-60.faq-open, .div-61.faq-open').forEach(function (r) {
            r.classList.remove('faq-open');
          });
          panel.querySelectorAll('img.faq-toggle-icon').forEach(function (img) {
            img.src = 'https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg';
          });

          if (!isOpen) {
            body.style.display = 'block';
            if (typeof logevent === 'function') logevent('click_faq_expand', 'index.php');
            row.classList.add('faq-open');
            var toggle = row.querySelector('.faq-toggle');
            if (toggle) {
              var iconImg = toggle.querySelector('img.faq-toggle-icon');
              if (iconImg) {
                iconImg.src = 'https://d1tenzemoxuh75.cloudfront.net/website/faq-open.svg';
              }
            }
          }
        });
      })();

      document.addEventListener('hw:chunk-loaded', function (ev) {
        if (ev.detail && ev.detail.id === '4') syncDesktopFaqAccordionState();
      });
      hwWhenChunkDomReady(syncDesktopFaqAccordionState);

      hwWhenChunkDomReady(function() {
        var video = document.getElementById('fbn-video');
        var playBtn = document.getElementById('fbn-play-btn');
        if (!video || !playBtn) return;

        playBtn.addEventListener('click', function() {
          video.controls = true;
          playBtn.hidden = true;
          var playPromise = video.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function() {});
          }
        });

        video.addEventListener('play', function() {
          video.controls = true;
          playBtn.hidden = true;
        });

        // Mid-playback pause: keep native controls only — do not re-show the custom
        // overlay (it stacks an audio/play icon on top of the browser play button).
        video.addEventListener('pause', function() {
          if (video.ended) return;
          video.controls = true;
          playBtn.hidden = true;
        });

        video.addEventListener('ended', function() {
          video.controls = false;
          playBtn.hidden = false;
        });
      });

      /* Coaches arrow navigation – left disabled initially, enabled after first scroll right */
      function updateCoachesNavButtons() {
        var el = document.getElementById('coaches-scroll');
        var prevBtn = document.getElementById('coaches-prev');
        var nextBtn = document.getElementById('coaches-next');
        if (!el || !prevBtn || !nextBtn) return;
        var atStart = el.scrollLeft <= 1;
        var atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        var outer = el.closest('.coaches-outer');
        if (outer) {
          outer.classList.toggle('is-scrolled', !atStart);
        }
        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
      }

      function coachScroll(dir) {
        var el = document.getElementById('coaches-scroll');
        if (!el) return;
        var cardWidth = 220; // card 200px + 20px gap
        el.scrollBy({ left: dir * cardWidth * 3, behavior: 'smooth' });
        setTimeout(updateCoachesNavButtons, 350);
      }
    function coachDot(idx, btn) {
        var scroll = document.getElementById('coaches-scroll');
        var pageWidth = scroll.offsetWidth;
        scroll.scrollTo({ left: idx * pageWidth, behavior: 'smooth' });
        document.querySelectorAll('.cdot').forEach(function(d){ d.classList.remove('active'); });
        btn.classList.add('active');
      }

      (function initCoachesNav() {
        function run() {
          var el = document.getElementById('coaches-scroll');
          if (!el || el.dataset.hwNavInit) return;
          el.dataset.hwNavInit = "1";
          updateCoachesNavButtons();
          el.addEventListener('scroll', updateCoachesNavButtons);
        }
        hwWhenChunkDomReady(run);
      })();

      /* Blog arrow navigation – left disabled initially, enabled after first scroll right */
      function updateBlogNavButtons() {
        var el = document.getElementById('blog-scroll');
        var prevBtn = document.getElementById('blog-prev');
        var nextBtn = document.getElementById('blog-next');
        if (!el || !prevBtn || !nextBtn) return;
        var atStart = el.scrollLeft <= 1;
        var atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        var outer = el.closest('.blog-outer');
        if (outer) {
          outer.classList.toggle('is-scrolled', !atStart);
        }
        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
      }

      function blogScroll(dir) {
        if (typeof logevent === 'function') logevent('scroll_blog_carousel', 'index.php');
        var el = document.getElementById('blog-scroll');
        if (!el) return;
        var cardWidth = 490; // blog card 470px + 20px gap
        el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
        setTimeout(updateBlogNavButtons, 350);
      }

      (function initBlogNav() {
        function run() {
          var el = document.getElementById('blog-scroll');
          if (!el || el.dataset.hwNavInit) return;
          el.dataset.hwNavInit = "1";
          updateBlogNavButtons();
          el.addEventListener('scroll', updateBlogNavButtons);
        }
        hwWhenChunkDomReady(run);
      })();

      /* Blog dot navigation */
      function blogDot(idx, btn) {
        var scroll = document.getElementById('blog-scroll');
        var pageWidth = scroll.offsetWidth;
        scroll.scrollTo({ left: idx * pageWidth, behavior: 'smooth' });
        document.querySelectorAll('.bdot').forEach(function(d){ d.classList.remove('active'); });
        btn.classList.add('active');
      }
    </script>

    <div id="hw-chunk-modals" class="index-html-chunk index-html-chunk--modals" data-hw-chunk="modals" aria-busy="true"></div>

    <?php
    $chunkVer = (int) @filemtime(__DIR__ . '/includes/index/chunks/chunk_1.php');
    ?>
    <script>window.__HW_INDEX_CHUNK_V__=<?= $chunkVer ?>;</script>
    <script defer src="<?= hw_asset_url('../assets/js/index-html-chunks.js'); ?>"></script>
    <script defer src="<?= hw_asset_url('../assets/js/index-lazy-media-prep.js'); ?>"></script>

    <!-- vendor_footer -->
    <?php include('./includes/vendor_footer.php'); ?>
    <!-- /vendor_footer -->

    <script>
      hwWhenChunkDomReady(function () {
        var supportMap = {
          supportCommunityForum: 'click_community_forum',
          supportLiveEvents: 'click_live_events',
          supportExpertCoaching: 'click_expert_coaching'
        };
        Object.keys(supportMap).forEach(function (id) {
          var el = document.getElementById(id);
          if (!el) return;
          el.addEventListener('click', function (e) {
            e.preventDefault();
            if (typeof logevent === 'function') {
              logevent(supportMap[id], 'index.php', { source: 'support_section' });
            }
            var href = el.getAttribute('href');
            var go = function () { window.location.href = href; };
            if (typeof afterLogNavigate === 'function') {
              afterLogNavigate(go);
            } else {
              setTimeout(go, 220);
            }
          });
        });
      });
    </script>

    <script>
      function hwInitAosAnimations() {
        if (typeof AOS === 'undefined') return;
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
      }
      document.addEventListener('hw:aos-ready', hwInitAosAnimations);
      if (typeof AOS !== 'undefined') hwInitAosAnimations();
    </script>

    <script>
      hwWhenChunkDomReady(function () {
        var triggerTabList = [].slice.call(document.querySelectorAll('#toolTabs.nav-tabs button'));
        triggerTabList.forEach(function (triggerEl) {
          var tabTrigger = new bootstrap.Tab(triggerEl);
          triggerEl.addEventListener('click', function (event) {
            event.preventDefault();
            tabTrigger.show();
          });
        });
      });
    </script>

    <script>
      hwWhenChunkDomReady(function () {
        var y = document.getElementById('sub-plan-yearly');
        var m = document.getElementById('sub-plan-monthly');
        var d = document.getElementById('totalAnnualPricingModelHeading');
        if (!y || !m || !d) return;
        function yearlyDisclaimer() {
          var annual = document.getElementById('annualPricingModelHeading');
          var price = annual ? annual.textContent.trim() : '';
          return 'After your free trial, the yearly subscription is ' + price + ' and automatically renews each year until cancelled.';
        }
        function monthlyDisclaimer() {
          var monthly = document.getElementById('monthlyPricingModelHeading');
          var price = monthly ? monthly.textContent.trim() : '';
          return 'After your free trial, the monthly subscription is ' + price + ' and automatically renews each month until cancelled.';
        }
        function pickMonthly() {
          if (typeof logevent === 'function') logevent('click_monthly', 'index.php');
          y.classList.add('sub-plan-off');
          m.classList.add('sub-plan-on');
          d.textContent = monthlyDisclaimer();
        }
        function pickYearly() {
          if (typeof logevent === 'function') logevent('click_yearly', 'index.php');
          y.classList.remove('sub-plan-off');
          m.classList.remove('sub-plan-on');
          d.textContent = yearlyDisclaimer();
        }
        y.addEventListener('click', pickYearly);
        m.addEventListener('click', pickMonthly);
      });
    </script>

    <script>
      hwWhenChunkDomReady(function () {
        var introFrame = document.getElementById('youtubeIntro');
        var introCover = document.getElementById('youtubeIntroCover');
        if (!introFrame || !introCover) return;

        introCover.addEventListener('click', function () {
          if (!introFrame.src || introFrame.src === 'about:blank') {
            introFrame.src = introFrame.getAttribute('data-src');
          }
          introCover.style.display = 'none';
        });
      });
    </script>

    <!-- Fallback tab functionality -->
    <script>
      // Fallback tab functionality in case Bootstrap tabs don't work
      hwWhenChunkDomReady(function () {
        // Get all tab links
        var tabLinks = document.querySelectorAll('a[data-toggle="tab"]');

        tabLinks.forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target tab content
            var targetId = this.getAttribute('href');
            var targetContent = document.querySelector(targetId);

            if (targetContent) {
              // Hide all tab contents
              var allTabContents = document.querySelectorAll('.tab-pane');
              allTabContents.forEach(function (content) {
                content.classList.remove('in', 'active');
              });

              // Remove active class from all tab links
              var allTabLinks = document.querySelectorAll('.nav-tabs li');
              allTabLinks.forEach(function (li) {
                li.classList.remove('active');
              });

              // Show target content and activate tab
              targetContent.classList.add('in', 'active');
              this.parentElement.classList.add('active');
            }
          });
        });
      });
    </script>

       <script>
 
    var words = document.querySelectorAll('.scrolling-word');
  var container = document.querySelector('.scrolling-words');
  var current = 0;
  var timer;

  /* Slot width = "Think" only, so "Think better." keeps normal spacing; line-2 words right-align in that slot */
  function lockVerbColumnWidth() {
    if (!container) return;
    var verbEl = document.querySelector('#hw-website-title .hero-title-verb');
    if (!verbEl) return;
    var thinkW = Math.ceil(verbEl.getBoundingClientRect().width || verbEl.offsetWidth || 0);
    if (thinkW > 0) container.style.width = thinkW + 'px';
  }

  function resetWords() {
    if (!words.length) return;
    words.forEach(function(w) {
    w.classList.remove('active', 'exit');
    w.style.transition = 'none';
    w.style.transform = 'translateY(60%)';
    w.style.opacity = '0';
  });
  current = 0;
  words[0].style.transition = 'none';
  words[0].style.transform = '';
  words[0].style.opacity = '';
  words[0].classList.add('active');
  lockVerbColumnWidth();
  }

  function showNext() {
    var prev = words[current];
    prev.classList.remove('active');
    prev.classList.add('exit');

    setTimeout(function() {
      prev.classList.remove('exit');
      prev.style.transition = 'none';
      prev.style.transform = 'translateY(60%)';
      prev.style.opacity = '0';
    }, 420);

    current = (current + 1) % words.length;
    var next = words[current];

    next.style.transition = 'none';
    next.style.transform = 'translateY(60%)';
    next.style.opacity = '0';

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        next.style.transition = '';
        next.style.transform = '';
        next.style.opacity = '';
        next.classList.add('active');
      });
    });
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(showNext, 2000);
  }

  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      resetWords();
      startTimer();
    } else {
      clearInterval(timer);
    }
  });

  window.addEventListener('resize', function() {
    lockVerbColumnWidth();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(lockVerbColumnWidth);
  }

  resetWords();
  startTimer();
  </script>

  </body>
</html>