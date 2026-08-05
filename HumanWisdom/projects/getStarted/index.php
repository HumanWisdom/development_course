<?php
// Include security configuration
require_once('./includes/security_config.php');
require_once('./includes/page_assets.php');
hw_page_assets_configure('landing');
?>

<!DOCTYPE html>
<html lang="en">
 <head>
  <title>HappierMe: For Teens & Adults</title>
  <meta name="title" content="Mental Wellbeing, Self-awareness and Life Skills | HappierMe">
  <meta name="description"
    content="Build mental wellbeing through self-awareness with HappierMe. Develop emotional intelligence and life skills to reduce stress and strengthen relationships.">
  <meta name="keywords"
    content="mental wellbeing,emotional intelligence,self-awareness,
life skills,
mindfulness
stress management,
resilience,
personal growth

">
  <meta property="og:title" content="HappierMe: For Teens & Adults">
  <meta property="og:description"
    content="Struggling with stress or relationships? HappierMe empowers teens and adults to master emotional intelligence, mental health, and life skills for real change.">
  <meta property="og:site_name" content="HappierMe">
  <meta property="og:url" content="https://happierme.app">
  <meta property="og:type" content="">
  <meta property="og:image" content=https://d1tenzemoxuh75.cloudfront.net/website/webp/landing.webp>
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
    <title>HappierMe: For Teens &amp; Adults</title>
    
    <!-- vendor_header -->
    <?php include('./includes/vendor_header.php'); ?>
    <!-- /vendor_header -->
    
    <!-- LCP Hero images preloading (fetchpriority + media so only the viewport LCP image is prioritized) -->
    <link rel="preload" as="image" href="https://d1tenzemoxuh75.cloudfront.net/website/webp/bannerind.webp" fetchpriority="high" media="(min-width: 821px)" />
    <link rel="preload" as="image" href="https://d1tenzemoxuh75.cloudfront.net/website/webp/bannermobile11.webp" fetchpriority="high" media="(max-width: 820px)" />
    <link rel="preload" as="image" href="https://d1tenzemoxuh75.cloudfront.net/website/frame.webp" />
    <?php hw_defer_stylesheet('assets/css/index-inline.css'); ?>

  <script>
    (function () {
      var PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      function prep(section) {
        if (!section || !section.classList || !section.classList.contains("index-lazy-section")) return;
        if (section.dataset.lazyPrepared === "1") return;
        section.dataset.lazyPrepared = "1";
        section.querySelectorAll("img[src]:not([data-src])").forEach(function (img) {
          var url = img.getAttribute("src");
          if (!url || url.indexOf("data:") === 0) return;
          img.setAttribute("data-src", url);
          img.setAttribute("src", PLACEHOLDER);
        });
        section.querySelectorAll("picture source[srcset]:not([data-srcset])").forEach(function (source) {
          var srcset = source.getAttribute("srcset");
          if (!srcset) return;
          source.setAttribute("data-srcset", srcset);
          source.removeAttribute("srcset");
        });
        section.querySelectorAll("video source[src]:not([data-src])").forEach(function (source) {
          var url = source.getAttribute("src");
          if (!url) return;
          source.setAttribute("data-src", url);
          source.removeAttribute("src");
        });
      }
      if ("MutationObserver" in window) {
        var mo = new MutationObserver(function (list) {
          list.forEach(function (m) {
            m.addedNodes.forEach(function (node) {
              if (node.nodeType !== 1) return;
              if (node.classList && node.classList.contains("index-lazy-section")) prep(node);
              if (node.querySelectorAll) node.querySelectorAll(".index-lazy-section").forEach(prep);
            });
          });
        });
        mo.observe(document.documentElement, { childList: true, subtree: true });
        document.addEventListener("DOMContentLoaded", function () { mo.disconnect(); });
      }
    })();
  </script>
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
              <img class="new-app-adults-teen display_m_none"  fetchpriority="high"
                src="https://d1tenzemoxuh75.cloudfront.net/website/webp/bannerind.webp"
                alt="HappierMe app" />
             <img class="new-app-adults-teen display_d_none"  fetchpriority="high"
                src="https://d1tenzemoxuh75.cloudfront.net/website/webp/bannermobile11.webp"
                alt="HappierMe app" />
          <div class="div-3">
                 <!-- rating row -->
                 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 pt_18px">
                  <h1 class="mtb0px fs_12px fw_400 lh_140p fc_000000 ta_lc mb_16px rating-row">
                    <span class="rating_a">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="appstore_a">
                      <i class="fa fa-apple"></i>
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
                      Feel calmer. Strengthen your <br class="subtitle-br-m">relationships.<br class="subtitle-br-d"> Build <a href="#" class="human-skills-link" data-bs-toggle="modal" data-bs-target="#humanSkillsModal" role="button" aria-haspopup="dialog" id="lifeskills">these skills</a><br class="subtitle-br-m"> to thrive at home and at work.
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

      <!-- ===== ORCHA / Macmillan / Mind BANNER ===== -->
      <div class="orcha-strip index-lazy-section">
        <div class="orcha-strip-item orcha-strip-orcha">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/orcha_certifie.svg" alt="ORCHA Certified" height="60" width="60"/>
          <span>ORCHA approved for use in healthcare</span>
        </div>
        <div class="orcha-strip-item orcha-strip-macmillan">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/macmillansupport.svg" alt="Macmillan Cancer Support" width="120" height="36"/>
          <span>Featured in Macmillan&rsquo;s<br>cancer support app library</span>
        </div>
        <div class="orcha-strip-item orcha-strip-mind">
          <img src="https://d1tenzemoxuh75.cloudfront.net/website/working_with_mind.svg" alt="Working with Mind" width="120" height="54"/>
          <span>Featured in Mind&rsquo;s app library</span>
        </div>
      </div>

      <!-- ===== TOPICS ===== -->
      <div class="div-7 index-lazy-section">
        <div class="div-wrapper-2">
          <p class="text-wrapper-a">Find out how HappierMe can help you</p>
        </div>
        <div class="div-8">
          <div class="div-9">
            <div id="topic-help-mental-wellbeing" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-ga-event="click_mental_wellbeing"><div class="text-wrapper-7">Mental wellbeing</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
            <div id="topic-help-better-relationships" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalbuild" data-ga-event="click_better_relationships"><div class="text-wrapper-7">Better relationships</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
            <div id="topic-help-succeed-at-work" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModal3" data-ga-event="click_succeed_at_work"><div class="text-wrapper-7">Succeed at work</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
          </div>
          <div class="div-9">
            <div id="topic-help-learn-meditation" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-ga-event="click_learn_meditation"><div class="text-wrapper-7">Learn meditation</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
            <div id="topic-help-overcome-habits" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalbreak" data-ga-event="click_overcome_habits"><div class="text-wrapper-7">Overcome harmful habits</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
            <div id="topic-help-manage-emotions" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalemotions" data-ga-event="click_manage_emotions"><div class="text-wrapper-7">Manage emotions</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
          </div>
          <div class="div-9">
            <div id="topic-help-self-awareness" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalself" data-ga-event="click_self_awareness"><div class="text-wrapper-7">Build self-awareness</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
            <div id="topic-help-better-parenting" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalparent" data-ga-event="click_better_parenting"><div class="text-wrapper-7">Better parenting</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
            <div id="topic-help-teenagers" class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalteen" data-ga-event="click_happierme_for_teenagers"><div class="text-wrapper-7">HappierMe for Teenagers</div><img class="icon" src="https://d1tenzemoxuh75.cloudfront.net/website/findOutarrow.svg" alt="" /></div>
          </div>
        </div>
      </div>

      <!-- ===== VIDEO ===== -->
      <div class="div-13 index-lazy-section">
        <p class="text-wrapper-a">Discover HappierMe in just 1 minute</p>
        <div class="youtube-player">
          <button
            id="youtubeIntroCover"
            type="button"
            aria-label="Play HappierMe intro video"
            style="position:absolute;inset:0;border:0;padding:0;background:transparent;cursor:pointer;z-index:2;">
            <img
              src="https://d1tenzemoxuh75.cloudfront.net/website/yt_coverimg.webp"
              alt="HappierMe video cover"
              style="width:100%;height:100%;display:block;" class="display_m_none" />
                <img
              src="https://d1tenzemoxuh75.cloudfront.net/website/webp/mobile/ytcover_mobile.webp"
              alt="HappierMe video cover"
              style="width:100%;height:100%;display:block;" class="display_d_none" />
            <span
              aria-hidden="true"
              style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;width:68px;height:48px;border-radius:12px;background:rgba(0,0,0,0.25);">
              <svg width="18.37" height="19.18" viewBox="0 0 18.37 19.18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.37 9.59L0 0V19.18L18.37 9.59Z" fill="rgba(234,234,234,1)"/>
              </svg>
            </span>
          </button>
          <iframe
            id="youtubeIntro"
            src="about:blank"
            data-src="https://www.youtube-nocookie.com/embed/MgsYk1SZh-w?autoplay=1&rel=0&modestbranding=1&playsinline=1"
            title="HappierMe intro"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen>
          </iframe>
        </div>
      </div>


      <!-- ===== WHY HAPPIERME IS DIFFERENT ===== -->
      <section class="why-different-section index-lazy-section" aria-labelledby="why-different-title">
        <div class="why-different-inner">
          <div class="why-different-header">
            <h2 class="why-different-title" id="why-different-title">Why HappierMe is different</h2>
            <p class="why-different-subtitle">Most apps help you cope.<br class="why-different-subtitle-br"> We help you change.</p>
          </div>
          <div class="why-different-cards">
            <article class="why-different-card">
              <div class="why-different-card-icon why-different-card-icon--prevention">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/Prevention.svg" alt="" width="66" height="66"  class="display_m_none" />
                                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/preventation_mob.svg" alt="" width="66" height="66" class="display_d_none" />

              </div>
              <div class="why-different-card-body">
                <h3 class="why-different-card-title">Prevention</h3>
                <p class="why-different-card-desc">Deal with problems early, before they escalate</p>
              </div>
            </article>
            <article class="why-different-card">
              <div class="why-different-card-icon why-different-card-icon--root-cause">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/root.svg" alt="" width="66" height="66"  class="display_m_none" />
                                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/route_mob.svg" alt="" width="66" height="66" class="display_d_none" />

              </div>
              <div class="why-different-card-body">
                <h3 class="why-different-card-title">Root cause focus</h3>
                <p class="why-different-card-desc">Understand your own mind, so change can last</p>
              </div>
            </article>
            <article class="why-different-card">
              <div class="why-different-card-icon why-different-card-icon--inner-skills">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/build.svg" alt="" width="66" height="66"  class="display_m_none" />
                                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/skills_mob.svg" alt="" width="66" height="66" class="display_d_none" />

              </div>
              <div class="why-different-card-body">
                <h3 class="why-different-card-title">Build inner skills</h3>
                <p class="why-different-card-desc">Self-awareness, emotional intelligence and healthier habits</p>
              </div>
            </article>
            <article class="why-different-card">
              <div class="why-different-card-icon why-different-card-icon--whole-life">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/life.svg" alt="" width="66" height="66"  class="display_m_none" />
                                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/life_mob.svg" alt="" width="66" height="66" class="display_d_none" />

              </div>
              <div class="why-different-card-body">
                <h3 class="why-different-card-title">Whole-life approach</h3>
                <p class="why-different-card-desc">Mental health, relationships and work skills, all in one place</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ===== OLLY AI ===== -->
      <div class="frame-wrapper-3 index-lazy-section" id="olly-ai-section">
        <div class="div-11">
          <!-- <img class="group-3" src="https://d1tenzemoxuh75.cloudfront.net/website/secowly.svg" alt="Olly AI" /> -->
          <video
            id="olly-ai-video"
            class="group-3"
            muted
            playsinline
            webkit-playsinline
            preload="metadata"
                      aria-label="Olly AI">
            <source data-src="https://d1tenzemoxuh75.cloudfront.net/onboarding/olly_AI.mp4" type="video/mp4">
          </video>
          <div class="div-12">
            <div class="div-5">
              <p class="introducing-olly-AI">Meet Olly AI,<br />your personal guide.</p>
              <p class="text-wrapper-8">
               Talk to Olly about what's on your mind. Stress, anxiety, relationships, habits, parenting, or work. Olly listens without judgment and guides you to trusted, expert-backed resources.
              </p>
            </div>
            <a href="https://happierme.app/adults/chat-bot" id="OllyChatBtn">
              <div class="start-your-free-wrapper-2">
                <div class="text-wrapper-5">Chat with Olly now</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- ===== FIND SUPPORT & CONNECTION ===== -->
      <div class="div-20 index-lazy-section">
        <picture>
          <source media="(max-width: 768px)" srcset="https://d1tenzemoxuh75.cloudfront.net/website/webp/mobile/find_support_mob.webp" />
          <img class="design" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/Find_Support.webp" alt="Find support and connection" />
        </picture>
        <div class="div-21">
          <div class="frame-wrapper-6">
            <div class="div-22">
              <p class="text-wrapper-14">Find support and <br class="mobile-br">connection</p>
              <p class="text-wrapper-8">Join a supportive community of people on their wellness journey. Share experiences, celebrate wins, and grow together.</p>
            </div>
          </div>
          <div class="support-features">
            <div class="support-feature-item">
              <div class="support-feature-heading">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/communityforum.svg" alt="Community forum" class="support-feature-icon" />
                <a href="https://happierme.app/adults/forum" id="supportCommunityForum" class="support-feature-title">Community forum</a>
              </div>
              <p class="support-feature-desc">Connect with others and ask questions anonymously</p>
            </div>
            <div class="support-feature-item">
              <div class="support-feature-heading">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/live_events.svg" alt="Live Events" class="support-feature-icon" />
                <a href="https://happierme.app/adults/events" id="supportLiveEvents" class="support-feature-title">Live Events</a>
              </div>
              <p class="support-feature-desc">Join live discussions with experts and community members</p>
            </div>
            <div class="support-feature-item">
              <div class="support-feature-heading">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/coaching.svg" alt="Expert Coaching" class="support-feature-icon" />
                <a href="https://happierme.app/adults/coach" id="supportExpertCoaching" class="support-feature-title">Expert Coaching</a>
              </div>
              <p class="support-feature-desc">Get personalized 1-on-1 support from trained coaches</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== TESTIMONIALS ===== -->
      <div class="div-14 index-lazy-section">
        <div class="text-wrapper-user">Users love HappierMe</div>
        <div class="div-15">
          <!-- Card 1 -->
          <div class="frame-wrapper-4">
            <div class="frame-wrapper-5">
              <div class="div-16">
                <div class="div-17">
                  <img class="image" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/sakshi_te.webp" alt="Brenda McChesney" />
                  <div class="flexcontainer">
                    <p class="text"><span class="text-wrapper-10">Brenda McChesney</span></p>
                    <p class="text"><span class="text-wrapper-11">Director, National Family Support Network, USA</span></p>
                  </div>
                </div>
                <div class="div-wrapper-3">
                  <p class="text-wrapper-12">
                    "HappierMe is the best app I have found to assist entire families, and the root cause of their
                    struggles, rather than just the symptoms."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="frame-wrapper-4">
            <div class="frame-wrapper-5">
              <div class="div-16">
                <div class="div-17">
                  <img class="image" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/adam_te.webp" alt="Adam Beagley" />
                  <div class="flexcontainer">
                    <p class="text"><span class="text-wrapper-10">Adam Beagley</span></p>
                    <p class="text"><span class="text-wrapper-11">Student, UK</span></p>
                  </div>
                </div>
                <div class="div-wrapper-3">
                  <p class="text-wrapper-12">
                    "HappierMe has helped me become emotionally intelligent. I used to be shy, passive and fearful. The
                    app has transformed my way of thinking and relieved me of my anxiety."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="frame-wrapper-4">
            <div class="frame-wrapper-5">
              <div class="div-16">
                <div class="div-17">
                  <img class="image" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/dan_te.webp" alt="Dr Dan Reidenberg" />
                  <div class="flexcontainer">
                    <p class="text"><span class="text-wrapper-10">Dr Dan Reidenberg</span></p>
                    <p class="text"><span class="text-wrapper-11">Director, Mental Health Coalition, USA</span></p>
                  </div>
                </div>
                <div class="div-wrapper-3">
                  <p class="text-wrapper-12">
                    "HappierMe is a well-designed app that provides many useful tools and resources for anyone wanting
                    to improve their life, resilience and wellbeing."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-19">
          <a href="https://happierme.app/adults/testimonials" id="viewallsuccessstories" class="text-wrapper-13">View all success stories</a>
          <span class="chevron-pink"><span style="-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
        </div>
      </div>

   <div class="div-new_1 index-lazy-section">
    <p class="text-wrapper-6"> Findings from a survey of 1,000 HappierMe app users</p>      
  </div>

  <!-- section end -->

 <div class="div-new index-lazy-section">
    <div class="scroller-container div_new1">
      <div>
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/desktop_circle.svg"
          class="img-responsive d-wider w100p" alt="modules" loading="lazy">

        <img src="https://d1tenzemoxuh75.cloudfront.net/website/mobile_circle.svg"
          class="img-responsive circle-mobile ml-mobile" alt="modules" loading="lazy">

        <img src="https://d1tenzemoxuh75.cloudfront.net/website/wide_circle.svg" class="happy-wide-img"
          alt="happy user" loading="lazy">
      </div>
    </div>
  </div>              
      <!-- ===== ORGANISATION ===== -->
      <div class="div-23 index-lazy-section">
        <p class="text-wrapper-6 pb0px text-wrapper-6_mobile">Find out how HappierMe can help your organisation</p>
        <div class="div-24">
          <!-- Workplace -->
          <a href="/pages/work.php" class="div-25" id="orgCardWorkplace">
            <img class="rectangle display_m_none" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/work.webp" alt="Work" />
                       <img class="rectangle display_d_none" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/mobile/work_mobile.webp" alt="Work" />

            <div class="frame-wrapper-7">
              <div class="div-26">
                <div class="div-27">
                  <div class="text-wrapper-15">HappierMe for the <span class="fw_600">Workplace</span></div>
                  <p class="text-wrapper-16">Upskill your staff to be happier, emotionally intelligent and make better decisions.</p>
                </div>
                <div class="div-28">
                  <div class="view-all-success">Find out more</div>
                  <span class="chevron-pink">  <span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
                </div>
              </div>
            </div>
          </a>
          <!-- Education -->
          <a href="/pages/education.php" class="div-25" id="orgCardEducation">
            <img class="rectangle display_m_none" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/education.webp" alt="Education" />
                       <img class="rectangle display_d_none" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/mobile/education_mobile.webp" alt="Education" />

           
            <div class="frame-wrapper-8">
              <div class="div-29">
                <div class="div-30">
                  <div class="div-wrapper-5"><div class="text-wrapper-17">HappierMe for <span class="fw_600">Education</span></div></div>
                  <p class="text-wrapper-16">Help students manage stress and anxiety, and to be happier and successful.</p>
                </div>
                <div class="div-28">
                  <div class="view-all-success">Find out more</div>
                  <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
                </div>
              </div>
            </div>
          </a>
          <!-- Healthcare -->
          <a href="/pages/healthcare.php" class="div-25" id="orgCardHealthcare">
            <img class="rectangle display_m_none" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/healthcare.webp" alt="Healthcare" />
                        <img class="rectangle display_d_none" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/mobile/healthcare_mobile.webp" alt="Healthcare"  />

            <div class="frame-wrapper-8">
              <div class="div-29">
                <div class="div-30">
                  <div class="div-wrapper-5"><div class="text-wrapper-17">HappierMe for <span class="fw_600">Healthcare</span></div></div>
                  <p class="text-wrapper-16">Support your staff to be happier at work, and patients to lead healthier lives.</p>
                </div>
                <div class="div-28">
                  <div class="view-all-success">Find out more</div>
                  <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- ===== TEENAGERS ===== -->
      <div class="div-31 index-lazy-section">
        <img class="teenage-app-copy" src="https://d1tenzemoxuh75.cloudfront.net/website/help_teenagers.webp" alt="Teenagers app" />
        <div class="div-32">
          <div class="div-33">
            <div class="div-34">
              <div class="text-wrapper-18">HappierMe for Teenagers</div>
              <div class="div-35">
                <p class="text-wrapper-19">Help teenagers feel happier and succeed in life</p>
                <p class="text-wrapper-19-mobile">Help teenagers feel<br>happier and succeed in life</p>
                <p class="text-wrapper-20">
                  The HappierMe app for teens has been designed to help them manage their emotions, build better
                  friendships, navigate the challenges of social media, anxiety and peer pressure, and develop their
                  soft skills to succeed in life.
                </p>
                <p class="text-wrapper-20-mobile">
                  Introducing a new edition of the app especially curated to help teenagers manage their own mental health,
                  have better friendships, deal with various challenges and succeed in life.
                </p>
              </div>
            </div>
            <div class="div-28">
              <a href="/pages/teenagers.php" id="findoutMore" class="view-all-success">Find out more</a>
              <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
            </div>
          </div>
          <a href="https://happierme.app/teenagers/intro-carousel" id="happiermeTryForFree_teens">
            <div class="div-wrapper-4"><div class="text-wrapper-5">Try HappierMe for free</div></div>
          </a>
        </div>
      </div>



      <!-- ===== SUBSCRIPTION ===== -->
      <div class="frame-wrapper-9 index-lazy-section" id="div_subscription">
        <div class="div-39">
          <div class="div-40">
            <div class="div-wrapper-6">
              <div class="text-wrapper-25">Simple, transparent pricing</div>
               <span class="div-subs">Start free. Upgrade anytime. Cancel anytime.</span>
            </div>
            
            <div class="div-41">
              <div class="div-42">
                <img class="group-6" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/star.svg" alt="Expert" />
                <div class="text-wrapper-26">Expert guidance</div>
              </div>
              <div class="div-43">
                <img class="vector-6" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/goals.svg" alt="Goals" />
                <p class="text-wrapper-27">Personalised content to meet your goals</p>
              </div>
              <div class="div-42">
                <div class="ellipse"></div>
                <p class="text-wrapper-26">Daily practices that fit your life</p>
              </div>
            </div>
          </div>
          <div class="frame-wrapper-10">
            <div class="div-44">
              <div class="div-45">
                <!-- Yearly -->
                <div class="group-7" id="sub-plan-yearly">
                  <div class="rectangle-2"></div>
                  <div class="div-wrapper-7"><div class="text-wrapper-28">14-day free trial</div></div>
                  <div class="div-46">
                    <div class="text-wrapper-29">Yearly</div>
                    <p class="INR-yr-INR">
                      <span class="text-wrapper-31" id="annualPricingModelHeading">₹2400/yr</span>
                    </p>
                  </div>
                  <div class="text-wrapper-32" id="spanAnnualLabel">₹200/mo.</div>
                </div>
                <!-- Monthly -->
                <div class="group-8" id="sub-plan-monthly">
                  <div class="rectangle-3"></div>
                  <div class="div-47">
                    <div class="text-wrapper-29">Monthly</div>
                    <div class="text-wrapper-33">7-day free trial</div>
                  </div>
                  <div class="text-wrapper-34" id="monthlyPricingModelHeading">₹300/mo.</div>
                </div>
              </div>
              <p class="after-your-free">
                <span class="text-wrapper-35" id="totalAnnualPricingModelHeading">After your free trial, the yearly subscription is ₹2400/yr and automatically renews each year until cancelled.</span>
              </p>
              <div id="AnnualTypebtn">
                <div id="PricingSelectBtn1">
              <a href="https://happierme.app/pages/splash_options.php" id="startyourfreetrial1">
                <div class="div-wrapper-4"><div class="text-wrapper-5">Start your free trial</div></div>
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            <!-- ===== COACHES ===== -->
      <div class="coaches-section index-lazy-section">
        <p class="text-wrapper-6-1">Contact our experienced coaches for personalised support</p>
        <div class="coaches-outer">
          <div class="coaches-track-wrap">
            <div class="coaches-scroll" id="coaches-scroll">
              <a href="https://happierme.app/adults/coach/profile/692" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/1.webp" alt="Carolyn King" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Carolyn King</span></p>
                  <p class="span-wrapper"><span class="coach-country">Australia</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/18814" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/2.webp" alt="Deyvis Bebicaci" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Deyvis Bebicaci</span></p>
                  <p class="span-wrapper"><span class="coach-country">France</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/776" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/10.webp" alt="Saakshi Singla" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Saakshi Singla</span></p>
                  <p class="span-wrapper"><span class="coach-country">India</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/675" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/3.webp" alt="Dominic Curran" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Dominic Curran</span></p>
                  <p class="span-wrapper"><span class="coach-country">United Kingdom</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/755" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/4.webp" alt="Gopalan Nair" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Gopalan Nair</span></p>
                  <p class="span-wrapper"><span class="coach-country">Singapore</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/760" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/5.webp" alt="Jondi Whitis" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Jondi Whitis</span></p>
                  <p class="span-wrapper"><span class="coach-country">USA</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/926" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/11.webp" alt="Sam Dossa" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Sam Dossa</span></p>
                  <p class="span-wrapper"><span class="coach-country">United Kingdom</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/733" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/6.webp" alt="Maria Vieira" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Maria Vieira</span></p>
                  <p class="span-wrapper"><span class="coach-country">Portugal</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/702" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/7.webp" alt="Natasha Zervaas" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Natasha Zervaas</span></p>
                  <p class="span-wrapper"><span class="coach-country">Australia</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/19199" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/8.webp" alt="Robin Johnson" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Robin Johnson</span></p>
                  <p class="span-wrapper"><span class="coach-country">USA</span></p>
                </div>
              </a>
              <a href="https://happierme.app/adults/coach/profile/740" class="coach-card">
                <img class="coach-img" src="https://d1tenzemoxuh75.cloudfront.net/coach/images/9.webp" alt="Roland Yeo" />
                <div class="flexcontainer-3">
                  <p class="span-wrapper"><span class="coach-name">Roland Yeo</span></p>
                  <p class="span-wrapper"><span class="coach-country">Singapore</span></p>
                </div>
              </a>
            </div>
          </div>
          <div class="coaches-footer">
            <div class="coaches-footer-spacer"></div>
            <a href="https://happierme.app/adults/coach" class="coaches-more" id="coachesFindOutMore">
              <span>Find out more</span>
              <span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span>
            </a>
         <div class="coaches-nav-btns">
  <button class="coach-arrow coach-arrow-left" id="coaches-prev" aria-label="Previous" onclick="coachScroll(-1)" disabled>
    <i class="bi bi-chevron-left"></i>
  </button>
  <button class="coach-arrow coach-arrow-right" id="coaches-next" aria-label="Next" onclick="coachScroll(1)">
    <i class="bi bi-chevron-right"></i>
  </button>
</div>
          </div>
        </div>
      </div>

      <!-- ===== TOOLS ===== -->
      <div class="tools-section index-lazy-section">
        <p class="text-wrapper-6">Tools for a happier life</p>
        <div class="tools-content-wrap">
        <!-- Tab pills -->
        <div class="tools-tabs" id="toolTabs">
          <button class="tool-tab tool-tab-active" id="HapinessScore-tab" onclick="switchTab(this,'survey')">Wellness score</button>
          <button class="tool-tab" id="feelbetterNow-tab" onclick="switchTab(this,'fbn')">Feel better now</button>
          <button class="tool-tab" id="pathWay-tab" onclick="switchTab(this,'pathway')">Guided Programs</button>
          <button class="tool-tab" id="journal-tab" onclick="switchTab(this,'journal_tab')">Journal</button>
          <button class="tool-tab" id="podcast-tab" onclick="switchTab(this,'podcast_tab')">Podcast</button>
          <button class="tool-tab" id="community-tab" onclick="switchTab(this,'forum')">Community</button>
        </div>
        <!-- Tab content area -->
        <div class="tools-panel-wrap">

          <!-- Feel better now -->
          <div id="fbn" class="tools-panel">
            <div class="tools-card">
              <div class="tools-thumb">
                <video playsinline
                  poster="https://d1tenzemoxuh75.cloudfront.net/website/webp/Feel_betternew.webp"
                  controlsList="nodownload"
                  class="tools-thumb-video"
                  id="fbn-video">
                  <source src="https://d1tenzemoxuh75.cloudfront.net/breathing/videos/1.5.mp4" type="video/mp4">
                </video>
                <button type="button" class="tools-play-btn tools-video-play-btn" aria-label="Play breathing exercise" id="fbn-play-btn">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio_play.svg" class="tools-audio-play-icon" width="48" height="48" alt="" aria-hidden="true" />
                </button>
              </div>
              <div class="tools-card-meta">
                <div class="tools-card-label-row">
                  <span class="tools-label-text">BREATHING EXERCISE</span>
                </div>
                <p class="tools-card-title">Humming bee</p>
                <p class="tools-card-duration">02:00</p>
              </div>
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">Feel better now</h3>
              <p class="tools-info-body">No matter what the challenge you face, we have breathing exercises, mediations and videos to help you feel better now.</p>
              <a href="https://happierme.app/adults/feel-better-now" id="exploreAppWeb" class="tools-explore-link">Explore on app <span class="chevron-pink">  <span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Guided Programs -->
          <div id="pathway" class="tools-panel">
            <div>
              <div class="tools-thumb">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/tools_pathway.webp" alt="Guided Programs" class="tools-thumb-img_sec" />
              </div>
             
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">PATHWAY — Guided program</h3>
              <p class="tools-info-body">A 5-step guided program to learn about yourself, grow as a person, and lead a happier and more successful life.</p>
              <div class="tools-audio-wrap" data-audio-wrap="aud1">
                <audio id="aud1" class="tools-audio-el" preload="metadata" controlslist="nodownload">
                  <source src="https://d1tenzemoxuh75.cloudfront.net/curated_dbs/audios/p_index.mp3" type="audio/mpeg">
                </audio>
                <div class="tools-audio-player">
                  <button type="button" class="tools-audio-play-btn" aria-label="Play audio" data-audio-id="aud1"></button>
                  <div class="tools-audio-body">
                    <p class="tools-audio-title">Introduction to PATHWAY</p>
                    <div class="tools-audio-timeline">
                      <span class="tools-audio-time tools-audio-time-current">0:00</span>
                      <input type="range" class="tools-audio-seek" value="0" min="0" max="100" step="0.1" aria-label="Playback position">
                      <span class="tools-audio-time tools-audio-time-duration">0:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://happierme.app/adults/pathway/" class="tools-explore-link">Explore on app <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Journal -->
          <div id="journal_tab" class="tools-panel">
            <div>
              <div class="tools-thumb">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/questions.svg" alt="Journal" class="tools-thumb-img_sec" />
              </div>
             
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">Your private journal</h3>
              <p class="tools-info-body">Journal your thoughts and feelings. Explore our Guided journaling to understand yourself, and find fresh ways of dealing with life's challenges.</p>
              <a href="https://happierme.app/adults/journal" class="tools-explore-link">Explore on app <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Podcast -->
          <div id="podcast_tab" class="tools-panel">
            <div class="tools-card tools-card--podcast">
              <div class="tools-thumb">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/tools_podcast.webp" alt="How can we be happier" class="tools-thumb-img" />
              </div>
              <div class="tools-card-meta">
                <div class="tools-card-label-row">
                  <span class="tools-label-text">PODCAST</span>
                </div>
                <p class="tools-card-title">How can we be happier</p>
                <p class="tools-card-duration tools-card-duration-aud2">51:23</p>
              </div>
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">HappierMe Podcast</h3>
              <p class="tools-info-body">A library of engaging podcasts on a wide variety of topics, where we explore a subject in depth with guests from around the world. They offer fresh ways of dealing with the many challenges we face and living our best life.</p>
              <div class="tools-audio-wrap" data-audio-wrap="aud2">
                <audio id="aud2" class="tools-audio-el" preload="metadata" controlslist="nodownload">
                  <source src="https://d1tenzemoxuh75.cloudfront.net/podcasts/54.mp3" type="audio/mpeg">
                </audio>
                <div class="tools-audio-player">
                  <button type="button" class="tools-audio-play-btn" aria-label="Play audio" data-audio-id="aud2"></button>
                  <div class="tools-audio-body">
                    <p class="tools-audio-title">How can we be happier</p>
                    <div class="tools-audio-timeline">
                      <span class="tools-audio-time tools-audio-time-current">0:00</span>
                      <input type="range" class="tools-audio-seek" value="0" min="0" max="100" step="0.1" aria-label="Playback position">
                      <span class="tools-audio-time tools-audio-time-duration">51:23</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://happierme.app/adults/podcast" class="tools-explore-link">Explore on app <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Community -->
          <div id="forum" class="tools-panel">
            <div>
              <div class="tools-thumb">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/tools_forum.webp" alt="Community" class="tools-thumb-img_sec" />
              </div>
             
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">Community forum</h3>
              <p class="tools-info-body">Interact with other users and our coaches. Ask questions, share your answers, be part of the HappierMe community.</p>
              <a href="https://happierme.app/adults/forum" class="tools-explore-link">Explore on app <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Wellness score -->
          <div id="survey" class="tools-panel active">
            <div>
              <div class="tools-thumb">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/track.svg" alt="Wellness score" class="tools-thumb-img_sec" />
              </div>
             
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">Track your wellness score</h3>
              <p class="tools-info-body">Check your wellness score and track your progress. Exchange points for discounts. Get a certificate each time you complete a topic.</p>
              <a href="https://happierme.app/adults/wisdom-survey" class="tools-wellness-btn" id="checkWellnessScore">Check your wellness score</a>
            </div>
          </div>

        </div>
        </div>
      </div>

      <!-- CTA after tools -->
      <div id="AnnualType">
        <div id="PricingSelectBtn">
      <a href="https://happierme.app/pages/splash_options.php" id="startyourfreetrial">
        <div class="div-wrapper-4" style="margin:0 auto;"><div class="text-wrapper-5">Try HappierMe for free</div></div>
      </a>
        </div>
      </div>

      <!-- ===== BLOG ===== -->
      <div class="div-13 index-lazy-section" id="exploreBlogSection">
        <div class="text-wrapper-blog">Explore our blog</div>
        <div class="blog-outer">
          <div class="blog-track-wrap">
          <div class="blog-scroll" id="blog-scroll">
            <a href="./blogs/10_ways_understanding_your_mind_could_transform_your_life.php" class="blog-card">
              <img class="blog-img" src="https://d1tenzemoxuh75.cloudfront.net/blogs/58.webp" alt="Blog 1" />
              <div class="blog-caption">
                <p class="blog-title" style="position:static !important; color:#000 !important; display:block !important; visibility:visible !important; opacity:1 !important; z-index:5 !important; margin:0 !important; padding:0 !important; width:100% !important;">#10 ways understanding your mind could transform your life</p>
              </div>
            </a>
            <a href="./blogs/self_Awareness_can_help_relationships_flourish.php" class="blog-card">
              <img class="blog-img" src="https://d1tenzemoxuh75.cloudfront.net/blogs/21.webp" alt="Blog 2" />
              <div class="blog-caption">
                <p class="blog-title" style="position:static !important; color:#000 !important; display:block !important; visibility:visible !important; opacity:1 !important; z-index:5 !important; margin:0 !important; padding:0 !important; width:100% !important;">Self-Awareness can help relationships flourish</p>
              </div>
            </a>
            <a href="./blogs/real_success.php" class="blog-card">
              <img class="blog-img" src="https://d1tenzemoxuh75.cloudfront.net/blogs/47.webp" alt="Blog 3" />
              <div class="blog-caption">
                <p class="blog-title" style="position:static !important; color:#000 !important; display:block !important; visibility:visible !important; opacity:1 !important; z-index:5 !important; margin:0 !important; padding:0 !important; width:100% !important;">Real success</p>
              </div>
            </a>
            <a href="./blogs/difficult_emotions.php" class="blog-card">
              <img class="blog-img" src="https://d1tenzemoxuh75.cloudfront.net/blogs/52.webp" alt="Blog 4" />
              <div class="blog-caption">
                <p class="blog-title" style="position:static !important; color:#000 !important; display:block !important; visibility:visible !important; opacity:1 !important; z-index:5 !important; margin:0 !important; padding:0 !important; width:100% !important;">Difficult emotions: a guide to freedom</p>
              </div>
            </a>
            <a href="./blogs/how_to_calm_anxiety_with_the_help_of_the_happierme_app.php" class="blog-card">
              <img class="blog-img" src="https://d1tenzemoxuh75.cloudfront.net/blogs/36.webp" alt="Blog 5" />
              <div class="blog-caption">
                <p class="blog-title" style="position:static !important; color:#000 !important; display:block !important; visibility:visible !important; opacity:1 !important; z-index:5 !important; margin:0 !important; padding:0 !important; width:100% !important;">How to calm anxiety</p>
              </div>
            </a>
          </div>
          </div>
          <div class="blog-footer">
           
            <a href="https://happierme.app/blogs/blog_index.php" id="viewAllBlogs" class="blog-more">
              <span>See all posts</span>
              <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
            </a>
               <div class="coaches-nav-btns">
  <button class="coach-arrow coach-arrow-left" id="blog-prev" aria-label="Previous" onclick="blogScroll(-1)" disabled>
    <i class="bi bi-chevron-left"></i>
  </button>
  <button class="coach-arrow coach-arrow-right" id="blog-next" aria-label="Next" onclick="blogScroll(1)">
    <i class="bi bi-chevron-right"></i>
  </button>
</div>
          </div>
        </div>
      </div>

      <!-- ===== READY TO TRANSFORM ===== -->
      <section class="transform-cta-section index-lazy-section">
        <div class="transform-cta-inner">
          <div class="transform-cta-text">
            <h2 class="transform-cta-heading">Ready to transform<br class="mobile-br"> your life?</h2>
            <p class="transform-cta-sub">Join thousands of people who've discovered a happier, more resilient version of themselves.</p>
          </div>
          <div class="transform-cta-actions">
            <a href="https://happierme.app/pages/splash_options.php" id="transformStartTrial">
              <div class="div-wrapper-4 transform-cta-btn"><div class="text-wrapper-5">Start your free trial</div></div>
            </a>
            <a href="https://happierme.app/pages/splash_options.php" id="transformDownloadApp">
              <div class="transform-cta-btn transform-cta-btn-outline"><div class="text-wrapper-5">Download the app</div></div>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== FAQ ===== -->
      <!-- Desktop FAQ -->
      <div class="div-54 display_m_none index-lazy-section">
        <div class="text-wrapper-21">Frequently asked questions</div>
        <div class="div-55">
          <div class="div-56">
            <div class="about-happierme faq-tab faq-tab-active" onclick="switchFaq(this,'about_happierme')">ABOUT HAPPIERME</div>
            <div class="text-wrapper-45 faq-tab" onclick="switchFaq(this,'how_can_the_app_help')">HOW CAN THE APP HELP?</div>
            <div class="text-wrapper-45 faq-tab" onclick="switchFaq(this,'app_features')">APP FEATURES</div>
            <div class="text-wrapper-45 faq-tab" onclick="switchFaq(this,'teenage_program')">TEENAGE PROGRAM</div>
            <div class="text-wrapper-45 faq-tab" onclick="switchFaq(this,'support')">SUPPORT</div>
          </div>
            <div class="div-57">
            <!-- About -->
            <div id="about_happierme" class="faq-panel active">
              <div class="div-58">
                <div class="div-59">
                  <div class="div-60 faq-open">
                    <div class="text-wrapper-46">What is HappierMe?</div>
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faq-open.svg" alt="" /></span>
                  </div>
                  <p class="faq-body" style="display:block;">HappierMe is an app you can use on your desktop and phone. It can be downloaded from the Android or App store. Many users think it has been life changing. It is your guide to lead a happier and more successful life.</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How do I start my free trial?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">From the desktop or in the app you will have an option of starting a free trial. You can choose whether to have a one week or 2 week free trial. You can cancel anytime during the free trial.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How do I get started with HappierMe?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">On the app there is an Introduction section. Begin here. It has videos and audios which help you understand what the app does, and how to make the most of it.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How much time do I need to spend every day on the app?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">It is up to you but 10 minutes/day will be enough to begin feeling the benefits. You could just do the ‘My daily practice’ every day.</p>
              </div>
            </div>
            <!-- How can app help -->
            <div id="how_can_the_app_help" class="faq-panel">
              <div class="div-58">
                <div class="div-59">
                  <div class="div-60">
                    <div class="text-wrapper-46">What is self-awareness?</div>
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                  </div>
                  <p class="faq-body">Self-awareness is a simple way of noticing what you are thinking and feeling, in your mind and in your body. These thoughts and feelings decide our behaviour. By noticing them we can be curious, learn more about them and explore where they come from.</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can the app help me manage my own mental health?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">Our mind is reactive and we are usually not aware of, or in control of our reactions. These reactions often create the mental health problems we experience. By understanding our thoughts, feelings and emotions better, we can better manage our reactions, and so manage our own mental health.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can the app help me to have happier relationships?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">By understanding ourselves, our reactions and our own emotional needs we can understand others better, and this can help us to reduce conflict in our relationships. By learning to communicate with care we can have relationships with depth and meaning.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can the app help me succeed at work?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">Studies suggest that our soft skills play a much greater role in our long term success than academic achievement. They include emotional intelligence, communication, leadership, empathy, resilience and integrity. All of these are enhanced by self-awareness and the app has a dedicated Work and Leadership section to explore.</p>
              </div>
            </div>
            <!-- App features -->
            <div id="app_features" class="faq-panel">
              <div class="div-58">
                <div class="div-59">
                  <div class="div-60">
                    <div class="text-wrapper-46">I want to know more about your live events</div>
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                  </div>
                  <p class="faq-body">We host a live event every two weeks on different subjects and explore how self-awareness can help with that. There is usually an invited guest and an opportunity to contribute and ask questions. You can access our library of past events through the Events section.</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">What is your partnership program?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">Once you subscribe you can join our partnership program, and be rewarded for sharing HappierMe with your network. Details can be found in the Partnership program in the app.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can I contact a coach through the app?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">We have trained coaches that can be accessed through the app. They are familiar with the app and can offer 1-2-1 coaching for an extra fee. You can ask a coach a question as part of your subscription through the Forum, and this can be done anonymously.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">Is there a community forum?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">The app has a community forum for you to make new friends and share your thoughts. There is also a feature where you can ask one of our trained coaches a question anonymously.</p>
              </div>
            </div>
            <!-- Teen -->
            <div id="teenage_program" class="faq-panel">
              <div class="div-58">
                <div class="div-59">
                  <div class="div-60">
                    <div class="text-wrapper-46">I want to know more about your teenage program</div>
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                  </div>
                  <p class="faq-body">Teenagers are under so much pressure and need support to manage their mental health, make sense of their emotions, and develop the soft skills to succeed in life. We have a completely separate app designed for teenagers which can be accessed through the main menu in the app.</p>
                </div>
              </div>
            </div>
            <!-- Support -->
            <div id="support" class="faq-panel">
              <div class="div-58">
                <div class="div-59">
                  <div class="div-60">
                    <div class="text-wrapper-46">How can I contact the support team?</div>
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                  </div>
                  <p class="faq-body">Please email us: support@happierme.app</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can I cancel a subscription?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">Click on My subscriptions in your profile and you can cancel your subscription from there. It will run till your next renewal date.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can I share this with others?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">In the hamburger menu of the app (top right in the app) there is a Refer a friend button. You can also buy a subscription for someone else.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile FAQ -->
      <div class="row center_flex prelative display_df_none index-lazy-section" style="margin-bottom: 40px;">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0">
          <div class="text-wrapper-21" style="margin-bottom: 20px;">Frequently asked questions</div>
          <div class="tab-content tc_faqs mobile">
            <div id="about_happierme_mobile" class="tab-pane fade in active">
              <h5 class="mt0px mb20px fs_15px fw_600 lh_150p fc_D7586B tt_uppercase mobile">About HappierMe</h5>
              <div class="panel-group" id="accordion_faq_2">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion_faq_2" href="#cm11">What is HappierMe?</a>
                    </h4>
                  </div>
                  <div id="cm11" class="panel-collapse collapse in">
                    <div class="panel-body">HappierMe is an app that you can use on your desktop, and on your phone. It can be downloaded onto your phone from the Android or App store. Many users think it has been life changing for them. It is your guide to lead a happier and more successful life.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_2" href="#cm12">How do I start my free trial?</a>
                    </h4>
                  </div>
                  <div id="cm12" class="panel-collapse collapse">
                    <div class="panel-body">From the desktop or in the app you will have an option of starting a free trial. You can choose whether to have a one week or 2 week free trial. You can cancel anytime during the free trial.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_2" href="#cm13">How do I get started with HappierMe?</a>
                    </h4>
                  </div>
                  <div id="cm13" class="panel-collapse collapse">
                    <div class="panel-body">On the app there is an Introduction section. Begin here. It has videos and audios which help you understand what the app does, and how to make the most of it.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_2" href="#cm14">How much time do I need to spend every day on the app?</a>
                    </h4>
                  </div>
                  <div id="cm14" class="panel-collapse collapse">
                    <div class="panel-body">It is up to you but 10 minutes/day will be enough to begin feeling the benefits. You could just do the 'My daily practice' every day.</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="how_can_the_app_help_mobile" class="tab-pane fade in active">
              <h5 class="mt40px mb20px fs_15px fw_600 lh_150p fc_D7586B tt_uppercase mobile">How can the app help?</h5>
              <div class="panel-group" id="accordion_faq_3">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion_faq_3" href="#cm21">What is self-awareness?</a>
                    </h4>
                  </div>
                  <div id="cm21" class="panel-collapse collapse">
                    <div class="panel-body">Self-awareness is a simple way of noticing what you are thinking and feeling, in your mind and in your body. These thoughts and feelings decide our behaviour. By noticing them we can be curious, learn more about them and explore where they come from.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_3" href="#cm22">How can the app help me manage my own mental health?</a>
                    </h4>
                  </div>
                  <div id="cm22" class="panel-collapse collapse">
                    <div class="panel-body">Our mind is reactive and we are usually not aware of, or in control of our reactions. These reactions often create the mental health problems we experience. By understanding our thoughts, feelings and emotions better, we can better manage our reactions, and so manage our own mental health.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_3" href="#cm23">How can the app help me to have happier relationships?</a>
                    </h4>
                  </div>
                  <div id="cm23" class="panel-collapse collapse">
                    <div class="panel-body">By understanding ourselves, our reactions and our own emotional needs we can understand others better, and this can help us to reduce conflict in our relationships. By learning to communicate with care we can have relationships with depth and meaning.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_3" href="#cm25">How can the app help me succeed at work?</a>
                    </h4>
                  </div>
                  <div id="cm25" class="panel-collapse collapse">
                    <div class="panel-body">Studies suggest that our soft skills play a much greater role in our long term success than academic achievement. They include emotional intelligence, communication, leadership, empathy, resilience and integrity. All of these are enhanced by self-awareness and the app has a dedicated Work and Leadership section to explore.</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="app_features1" class="tab-pane fade in active">
              <h5 class="mt40px mb20px fs_15px fw_600 lh_150p fc_D7586B tt_uppercase mobile">App features</h5>
              <div class="panel-group" id="accordion_faq_4">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion_faq_4" href="#cm31">I want to know more about your live events</a>
                    </h4>
                  </div>
                  <div id="cm31" class="panel-collapse collapse">
                    <div class="panel-body">We host a live event every two weeks on different subjects and explore how self-awareness can help with that. There is usually an invited guest and an opportunity to contribute and ask questions. You can access our library of past events through the Events section.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_4" href="#cm33">How can I contact a coach through the app?</a>
                    </h4>
                  </div>
                  <div id="cm33" class="panel-collapse collapse">
                    <div class="panel-body">We have trained coaches that can be accessed through the app. They are familiar with the app and can offer 1-2-1 coaching for an extra fee. You can ask a coach a question as part of your subscription through the Forum, and this can be done anonymously.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_4" href="#cm34">Is there a community forum?</a>
                    </h4>
                  </div>
                  <div id="cm34" class="panel-collapse collapse">
                    <div class="panel-body">The app has a community forum for you to make new friends and share your thoughts. There is also a feature where you can ask one of our trained coaches a question anonymously.</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="teenage_program_mobile" class="tab-pane fade in active">
              <h5 class="mt40px mb20px fs_15px fw_600 lh_150p fc_D7586B tt_uppercase mobile">Teenage program</h5>
              <div class="panel-group" id="accordion_faq_5">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion_faq_5" href="#cm41">I want to know more about your teenage program</a>
                    </h4>
                  </div>
                  <div id="cm41" class="panel-collapse collapse">
                    <div class="panel-body">Teenagers are under so much pressure and need support to manage their mental health, make sense of their emotions, and develop the soft skills to succeed in life. We have a completely separate app designed for teenagers which can be accessed through the main menu in the app.</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="support_mobile" class="tab-pane fade in active">
              <h5 class="mt40px mb20px fs_15px fw_600 lh_150p fc_D7586B tt_uppercase mobile">Support</h5>
              <div class="panel-group" id="accordion_faq_6">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion_faq_6" href="#cm51">How can I contact the support team?</a>
                    </h4>
                  </div>
                  <div id="cm51" class="panel-collapse collapse in">
                    <div class="panel-body">Please email us: support@happierme.app</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_6" href="#cm52">How can I cancel a subscription?</a>
                    </h4>
                  </div>
                  <div id="cm52" class="panel-collapse collapse">
                    <div class="panel-body">Click on My subscriptions in your profile and you can cancel your subscription from there. It will run till your next renewal date.</div>
                  </div>
                </div>
                <div class="row"><div class="col-12"><hr class="hr_style_web_01"></div></div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_faq_6" href="#cm53">How can I share this with others?</a>
                    </h4>
                  </div>
                  <div id="cm53" class="panel-collapse collapse">
                    <div class="panel-body">In the hamburger menu of the app (top right in the app) there is a Refer a friend button. You can also buy a subscription for someone else.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== FOOTER ===== -->
         <div class="div-70" >
          <div class="div-71">
      <?php include('./includes/footer.php'); ?>
            </div>  
            </div>

    </div>

    <script>
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
        document.getElementById(panelId).classList.add('active');
      }

      /* FAQ accordion toggle */
      document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.div-60, .div-61').forEach(function(row) {
          row.style.cursor = 'pointer';
          row.addEventListener('click', function() {
            var body = this.parentElement.querySelector('.faq-body');
            if (!body) return;

            // If this one is already open, clicking it should close it.
            var isOpen = body.style.display === 'block';
            var nowOpen = !isOpen;
            if (typeof logevent === 'function' && isOpen) logevent('click_faq_collapse', 'index.php');

            // Close all FAQ items first (true accordion behavior).
            document.querySelectorAll('.faq-body').forEach(function(p) {
              p.style.display = 'none';
            });
            document.querySelectorAll('.div-60.faq-open, .div-61.faq-open').forEach(function(r) {
              r.classList.remove('faq-open');
            });

            // Reset all icons to "closed".
            document.querySelectorAll('img.faq-toggle-icon').forEach(function(img) {
              img.src = 'https://d1tenzemoxuh75.cloudfront.net/website/faqclosed.svg';
            });
            document.querySelectorAll('.faq-toggle').forEach(function(toggle) {
              if (toggle.querySelector('img.faq-toggle-icon')) return;
              toggle.textContent = '+';
            });

            if (nowOpen) {
              body.style.display = 'block';
              if (typeof logevent === 'function') logevent('click_faq_expand', 'index.php');

              var toggle = this.querySelector('.faq-toggle');
              if (!toggle) return;

              // Desktop FAQ icon (open/closed SVG)
              var iconImg = toggle.querySelector('img.faq-toggle-icon');
              if (iconImg) {
                iconImg.src = 'https://d1tenzemoxuh75.cloudfront.net/website/faq-open.svg';
              } else {
                // Fallback (if any mobile/legacy toggle uses text)
                toggle.textContent = '−';
              }

              this.classList.add('faq-open');
            }
          });
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
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
          if (!el) return;
          updateCoachesNavButtons();
          el.addEventListener('scroll', updateCoachesNavButtons);
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', run);
        } else {
          run();
        }
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
          if (!el) return;
          updateBlogNavButtons();
          el.addEventListener('scroll', updateBlogNavButtons);
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', run);
        } else {
          run();
        }
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

    <!-- Human Skills modal -->
    <div class="modal fade" id="humanSkillsModal" tabindex="-1" aria-labelledby="humanSkillsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered human-skills-dialog">
        <div class="modal-content human-skills-modal">
          <div class="human-skills-modal-close-row">
            <button type="button" class="human-skills-modal-close" data-bs-dismiss="modal" aria-label="Close">
              <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden="true" focusable="false">
                <path d="M2 2l5 5M7 2L2 7" stroke="rgba(215, 88, 107, 1)" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <div class="human-skills-modal-inner">
            <div class="human-skills-modal-header">
              <h2 class="human-skills-modal-title" id="humanSkillsModalLabel">Life skills</h2>
              <p class="human-skills-modal-subtitle">Feel better. Do better.</p>
            </div>
            <ul class="human-skills-list">
              <li>Self-awareness</li>
              <li>Emotional intelligence</li>
              <li>Communication</li>
              <li>Relationships</li>
              <li>Empathy</li>
              <li>Resilience</li>
              <li>Confidence</li>
              <li>Decision-making</li>
              <li>Self-regulation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- All Modals from older version -->
    <!-- Mental wellbeing modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered m_auto">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn1" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading=lazy>
                </a>
              </div>
            </div>
            <div class="row center_flex ">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/overcomeanxiety.svg" class="img-responsive "
                    alt="Mental Health" loading=lazy>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex popup_w pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Overcome stress and anxiety
                </h2>
                <h6 class="para">Learn to address the root cause, and not just the symptoms.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0 d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block ">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                    <div class="row" >
                      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                          class="img-responsive img_aspects" alt="PATHWAY">
                      </div>
                      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                        <h3 style="margin-top:0px;" class="fs_18px fw_600 f_15px  fc_000000">
                          Guided programs
                        </h3>
                        <h6 class="review">Covering Stress, Anxiety, Depression and Bereavement </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                          class="img-responsive img_aspects" alt="PATHWAY">
                      </div>
                      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                        <h3 style="margin-top:0px;" class="fs_18px fw_600 f_15px  fc_000000">
                          Hundreds of podcasts
                        </h3>
                        <h6 class="review">Insightful conversations on mental wellbeing </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/feelBetter.svg"
                          class="img-responsive img_aspects" alt="PATHWAY">
                      </div>
                      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                        <h3 style="margin-top:0px;" class="  fs_18px fw_600 f_15px  fc_000000">
                          Feel better now
                        </h3>
                        <h6 class="review">Breathing and tapping exercises for quick relief </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex">
              <div
                class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0 mtb20px d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/shortvideo.svg"
                          class="img-responsive img_aspects" alt="PATHWAY">
                      </div>
                      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                        <h3 style="margin-top:0px;" class=" fs_18px fw_600 f_15px  fc_000000">
                          Short videos
                        </h3>
                        <h6 class="review">Wellbeing tips from trained coaches </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/journaling.svg"
                          class="img-responsive img_aspects" alt="PATHWAY">
                      </div>
                      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 pr20px mb10px">
                        <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000 f_15px "> Guided journaling</h3>
                        <h6 class="review">Your private journal with questions for personal growth </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/communityforum.svg"
                          class="img-responsive img_aspects" alt="PATHWAY">
                      </div>
                      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0 pr20px mb10px">
                        <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000 f_15px ">Community forum</h3>
                        <h6 class="review">Find support, share your thoughts and make friends </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4" style="/* min-height: 150px; */">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Build deeper relationships modal -->
    <div class="modal fade" id="exampleModalbuild" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn2" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading="lazy">
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/BuildDeeperRelationship.svg" class="img-responsive"
                    alt="Mental Health" loading="lazy">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex aos-init aos-animate pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Build deeper relationships
                </h2>
                <h6 class="para">Learn to avoid and overcome relationship problems and build deeper connections.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0 d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block ">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">Covering Relationships, Emotional needs, Communication, Kindness and Love </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Hundreds of podcasts
                      </h3>
                      <h6 class="review">Conversations on healing strained relationships, building deeper connections and
                        finding love </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/blog_b.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="  fs_18px fw_600  fc_000000">
                        Blog
                      </h3>
                      <h6 class="review">
                        In-depth articles on building your relationship skills
                        </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex">
              <div
                class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0 mtb20px d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/shortvideo.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">
                        Short videos
                      </h3>
                      <h6 class="review">Relationship tips from trained coaches </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/journaling.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Guided journaling</h3>
                      <h6 class="review">Your private journal with questions for personal growth </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/communityforum.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">Community forum</h3>
                      <h6 class="review">Find support, share your thoughts and make friends </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4" style="/* min-height: 150px; */">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Learn meditation modal -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn3" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading=lazy>
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/meditationPractice.svg" class="img-responsive"
                    alt="Mental Health" loading=lazy>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Build a meditation practice
                </h2>
                <h6 class="para">Learn how to get started and reap the benefits of meditation.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">Covering Meditation, Breathing exercises, and Inner boredom </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/self_build.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Nature meditations
                      </h3>
                      <h6 class="review">Explore a fresh way of connecting with nature </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/audio.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="  fs_18px fw_600  fc_000000">
                        Audio meditations
                      </h3>
                      <h6 class="review">
                        A library of audio meditations and soundscapes
                        </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mt20px mb-4">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Succeed at work modal -->
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn4" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading="lazy">
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/Buildsoftskill.svg" class="img-responsive"
                    alt="Mental Health" loading="lazy">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex aos-init aos-animate pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Build soft skills for work success
                </h2>
                <h6 class="para">Learn to be a better leader and succeed at work.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">Covering Work, Leadership, Critical thinking, Decision making, Communication,
                        Success and failure, and Bullying </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Hundreds of podcasts
                      </h3>
                      <h6 class="review">Conversations on leadership, dealing with work pressures, decision making, finding
                        your purpose and bullying </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/journaling.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Guided journaling</h3>
                      <h6 class="review">your private journal for reflection and personal growth </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex mtb20px">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/build_soft.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">
                        Blog
                      </h3>
                      <h6 class="review">In-depth articles on being happier at work and developing your people skills </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/couching.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Coaching</h3>
                      <h6 class="review">Trained coaches for personalised support </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0 aos-init aos-animate" data-aos="fade-up"
                  data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/selfawareness.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">Self-awareness</h3>
                      <h6 class="review">Exercises to develop your self-awareness and emotional intelligence </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Break harmful habits modal -->
    <div class="modal fade" id="exampleModalbreak" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn5" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading=lazy>
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/harmfulhabit.svg" class="img-responsive"
                    alt="Mental Health" loading=lazy>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Break harmful habits
                </h2>
                <h6 class="para">Understand why harmful habits develop and how to break free from them</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">Covering Addiction, Emotional pain, Pleasure, Boredom and Conditioning </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Hundreds of podcasts
                      </h3>
                      <h6 class="review">Discussions on why addiction occurs and how to overcome it </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/build_soft.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Blog</h3>
                      <h6 class="review">In-depth articles on understanding and overcoming harmful habits </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex">
              <div
                class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0 mtb20px d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/breathingexercise.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">
                        Breathing exercises
                      </h3>
                      <h6 class="review">To regain control of your emotions</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/couching.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Coaching</h3>
                      <h6 class="review">Speak to one of our trained coaches for extra support </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/communityforum.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">Community forum</h3>
                      <h6 class="review">Find support, share your thoughts and make friends </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Manage emotions modal -->
    <div class="modal fade" id="exampleModalemotions" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn6" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading=lazy>
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/manageemotions.svg" class="img-responsive"
                    alt="Mental Health" loading=lazy>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Manage your emotions
                </h2>
                <h6 class="para">Learn to understand and master your emotions.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">Covering Anger, Fear, Desire, Loneliness and Envy </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Hundreds of podcasts
                      </h3>
                      <h6 class="review">Conversations on understanding and managing emotions </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/journaling.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Guided journaling</h3>
                      <h6 class="review">
                        Understand your feelings and where they come from
                        </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex mtb20px">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/breathingexercise.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">
                        Breathing exercises
                      </h3>
                      <h6 class="review">To regain control of your emotions </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/shortvideo.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Short videos</h3>
                      <h6 class="review">Quick tips from trained coaches on regulating emotions </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/communityforum.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">Community forum</h3>
                      <h6 class="review">Find support, share your thoughts and make friends </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Self-awareness modal -->
    <div class="modal fade" id="exampleModalself" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn7" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading=lazy>
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/meditationPractice.svg" class="img-responsive"
                    alt="Mental Health" loading=lazy>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex pt-12px" data-aos="fade-up" data-aos-delay="100" >
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Develop your self-awareness
                </h2>
                <h6 class="para">A life-changing skill for a happier and more successful life</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">Covering Awareness, Insight, Inquiry, Seeing the world freshly </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Hundreds of podcasts
                      </h3>
                      <h6 class="review">Discussions on how to learn about ourselves and how our minds work</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/build_soft.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Blog</h3>
                      <h6 class="review">In-depth articles on the benefits of self-awareness </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex mtb20px">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/journaling.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">
                        Guided journaling
                      </h3>
                      <h6 class="review">Exercises to learn about thoughts and feelings</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/meditation.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Guided meditations</h3>
                      <h6 class="review">To feel calm, find clarity and be your best self</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/shortvideo.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">Short videos</h3>
                      <h6 class="review">Helpful tips to discover who you are </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Parenting modal -->
    <div class="modal fade" id="exampleModalparent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn8" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading=lazy>
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/supportingparents.svg" class="img-responsive"
                    alt="Mental Health" loading=lazy>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  Supporting parents to flourish
                </h2>
                <h6 class="para">Learn how to look after yourself, and be the best parent you can be.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">Covering Stress, Anxiety and Communication</h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Hundreds of podcasts
                      </h3>
                      <h6 class="review">On dealing with overwhelm, talking to kids, mistakes to avoid and more </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/build_soft.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Blog</h3>
                      <h6 class="review">In-depth articles on parenting </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex mtb20px">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/communityforum.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">
                        Community forum
                      </h3>
                      <h6 class="review">Find support, share your thoughts and make friends </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/breathingexercise.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Breathing exercises</h3>
                      <h6 class="review">To deal with stressful situations </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/shortvideo.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">Short videos</h3>
                      <h6 class="review">Quick tips on parenting from trained coaches </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width btn_wh">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Teenagers modal -->
    <div class="modal fade" id="exampleModalteen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content1">
          <div class="modal-header d-block">
            <div class="row center_flex cross_btn_row">
              <div class="col-lg-12 col-md-12 col-sm-11 col-xs-11 p0  tright">
                <a href="#" id="closebtn9" data-bs-dismiss="modal" class="popup-close-btn pull-right" aria-label="Close">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/closeIcon.svg" class="img-responsive cross_btn"
                    alt="Mental Health" loading=lazy>
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 tcenter">
                  <img src="https://d1tenzemoxuh75.cloudfront.net/website/teenagerapp.svg" class="img-responsive"
                    alt="Mental Health" loading=lazy>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                </div>
              </div>
            </div>
          </div>
          <div class="section-header1">
            <div class="row center_flex pt-12px" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                <h2 class="popuptitle">
                  A separate app, just for teenagers
                </h2>
                <h6 class="para">Supporting teenagers to be happier and succeed in life</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/GuidedPrg.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Guided programs
                      </h3>
                      <h6 class="review">75+ in-depth programs on Mental health, Emotions, Relationships, and Success in
                        school </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/podcast.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class="fs_18px fw_600  fc_000000">
                        Hundreds of podcasts
                      </h3>
                      <h6 class="review">On dealing with common challenges teenagers face </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/feelBetter.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Feel better now</h3>
                      <h6 class="review">Breathing and tapping exercises for quick relief </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row center_flex mtb20px">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p0  d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/communityforum.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">
                        Community forum
                      </h3>
                      <h6 class="review">Find support, share your thoughts and make friends </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/teentalk.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000"> Teen talk</h3>
                      <h6 class="review">Conversations with teens from around the world </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 p0" data-aos="fade-up" data-aos-delay="200">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p0">
                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/shortvideo.svg"
                        class="img-responsive img_aspects" alt="PATHWAY">
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p0">
                      <h3 style="margin-top:0px;" class=" fs_18px fw_600  fc_000000">Short videos</h3>
                      <h6 class="review">Quick tips from trained coaches to help teens flourish in life </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center mb-4">
              <div class="col-lg-11 d-flex justify-content-center">
                <a href="https://happierme.app/pages/splash_options.php" class="text-decoration-none">
                  <button class="btn_popup fs_15px fw_600 lh_140p fc_ffffff btn_tff btn_tff_width ">
                    Try HappierMe for free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter modal -->
    <div class="modal fade product_view" id="product_view" tabindex="-1" aria-labelledby="newsletterModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="width: 96%;">
          <div class="modal-header d-block">
            <div class="row center_flex">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
                <a href="#" id="closebtn10" data-bs-dismiss="modal" class="pull-right">
                  <h2 class="bi bi-x" style="color: black;"></h2>
                </a>
              </div>
            </div>
            <div class="row center_flex">
              <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 col-11 p0  ">
                <div class=" back1">
                  <div class="row center_flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 d-lg-flex d-lg-flex d-md-flex d-sm-flex d-block">
                      <div class="col-lg-7 col-md-7 col-12 p0 center_flex ">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/Isolation_Mode.webp"
                          class="img-responsive display_m_none " loading="lazy" alt="performance">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/Isolation_Mobile.svg"
                          class="img-responsive w100p display_d_none" loading="lazy" alt="performance">
                      </div>
                      <div class="col-lg-5 col-md-5 col-12 p0">
                        <div class="box">
                          <div class="row mt30px center_flex">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p10">
                              <h1 class="mtb0px fs_32px fw_600 lh_130p fc_834b66 ta_lc f_24px"> Sign up for our newsletter! </h1>
                            </div>
                          </div>
                        </div>
                        <div class="row mtb15px center_flex ">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p10">
                            <h3 class="mtb0px fs_15px fw_400 lh_140p fc_000000 ta_lc"> Sign up for regular updates from
                              HappierMe, and get some inspiration straight to your inbox. </h3>
                          </div>
                        </div>
                        <div class="row center_flex mt40px aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p10">
                            <form action="javascript:void(0);">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 input_parent">
                                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 div_input">
                                    <input type="text" class="form-control fc_01" id="modal-news-name" name="newsname"
                                      placeholder="Your Name">
                                    <div class="fc_icons">
                                      <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/web_form_user.svg"
                                        class="img-responsive" alt="name">
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 input_parent">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 div_input">
                                  <input type="text" class="form-control fc_01" id="modal-news-email" name="news-email"
                                    placeholder="Your email">
                                  <div class="fc_icons">
                                    <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/web_form_mail.svg"
                                      class="img-responsive" alt="email">
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 input_parent">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0 div_input">
                                  <div class="row mt20px">
                                    <button id="modal-news-contact-form" class="fs_15px fw_600 lh_140p fc_ffffff btn_tff"
                                      href="../pages/splash_options.php"> Subscribe </button>
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

    <!-- vendor_footer -->
    <?php include('./includes/vendor_footer.php'); ?>
    <!-- /vendor_footer -->

    <script>
      document.addEventListener('DOMContentLoaded', function () {
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
      document.addEventListener('DOMContentLoaded', function () {
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
      document.addEventListener('DOMContentLoaded', function () {
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
      document.addEventListener('DOMContentLoaded', function () {
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
      document.addEventListener('DOMContentLoaded', function () {
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