<?php
// Include security configuration
require_once('./includes/security_config.php');
?>

<!DOCTYPE html>
<html lang="en">
 <head>
  <title>HappierMe: For Teens & Adults</title>
  <meta property="title" content="Boost Your Emotional Intelligence and Mental Well Being with HappierMe">
  <meta property="description"
    content="Struggling with stress or relationships? HappierMe empowers teens and adults to master emotional intelligence, mental health, and life skills for real change.">
  <meta name="keywords"
    content="Stress,Breathing,Anger,Anxiety,Love,Manage,Meditation,Relaxation,Motivation,Mood,Relief,Mind,Calm">
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
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    
    <!-- Bootstrap CSS -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    
    <!-- AOS Animation CSS -->
 
  <script>
    $('#myCarousel').carousel({
      interval: 3000,
    })

  </script>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

/* ── RESET / BASE ── */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: "Poppins", Helvetica, sans-serif; background: #ffffff; color: #000; }
a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }

/* ── SHARED HELPERS ── */
.chevron        { font-size: 20px; color: #000; margin-left: 4px; }
.chevron-pink   { font-size: 12px; color: rgba(215, 88, 107, 1);padding-top:3px }
/* Scroll-to-top icon: add visible white outer circle on footer background */
#scrollTopArrow {
  border: 1px solid #fff !important;
  box-sizing: border-box;
}
.pt-12px { padding:12px;}

/* ========================================
   HERO
======================================== */
.frame { display: flex; flex-direction: column; align-items: center; width: 100%; gap: 0; }

.frame-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-left: 40px;
  padding-right: 40px;
}
.div-wrapper { width: 100%; max-width: 1340px; }
.div         { width: 100%; }
.div-2       { display: flex; align-items: center; gap: 60px; justify-content: center; flex-wrap: wrap;margin-top:100px }

.new-app-adults-teen { width: 415px; height: 525px; object-fit: contain; flex-shrink: 0; }

.div-3 {margin-top: -26px; display: flex; flex-direction: column; gap: 24px; flex: 1; min-width: 280px; max-width: 654px; }

/* rating */
.p0        { padding: 0; }
.p{
  padding-top: 0px !important;
}
p:hover {
  color: #000 !important;
  text-decoration:none !important;
}

/* Blog cards: prevent underline-on-hover on the title text */
.blog-card:hover,
.blog-card:hover .blog-title {
  text-decoration: none !important;
}
.p-18px    { padding: 18px; }
.mtb0px    { margin-top: 0; margin-bottom: 0; }
.mb_16px   { margin-bottom: 16px; }
.fs_12px   { font-size: 12px; }
.fs_15px   { font-size: 15px; }
.fw_400    { font-weight: 400; }
.fw_700    { font-weight: 700; }
.lh_140p   { line-height: 1.4; }
.fc_000000 { color: #000; }
.ta_lc     { text-align: left; }

.rating-row {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-wrap: nowrap;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  margin: 0 0 8px;
  line-height: 1;
  vertical-align: middle;
}
.rating_a {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  line-height: 1;
}
.rating_a .fa-star { color: #000; font-size: 16px; line-height: 1; vertical-align: middle;    height: 16px;
    width: 16px; }
.appstore_a {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}
.appstore_a .fa-apple { font-size: 16px; color: #000; line-height: 1; vertical-align: middle; }
.fs_15px.fw_700 { font-size: 15px; font-weight: 700; line-height: 1; vertical-align: middle; }

/* headline */
.frame-wrapper-2 { width: 100%; }
.div-4  { display: flex; flex-direction: column; gap: 16px; }
.div-5  { display: flex; flex-direction: column; gap: 16px; }
.p      { font-size: 48px; font-weight: 600; line-height: 1.2; color: #000; margin: 0; }

/* Olly pill */
.div-6  { display: flex; align-items: center; gap: 10px; }
.text-wrapper-3 { font-size: 21px; font-weight: 600; color: #000; }
.text-wrapper-4 { font-size: 18px; font-weight: 400; color: rgba(0, 0, 0, 1); line-height: 1.6; margin: 0;line-height: 150%; }

/* CTA button – blue (matches .btn_landing) */
.start-your-free-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 54px;
  border-radius: 36px;
  cursor: pointer;
  background: linear-gradient(180deg, #4267a5 0%, #183c79 100%);
}
.start-your-free-wrapper:hover {
  background: linear-gradient(180deg, #2d5392 0%, #0e2e64 100%);
}
.text-wrapper-5 {
  font-size: 21px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}

/* CTA button – pink/red (matches .btn_tff / .btn_popup) */
.start-your-free-wrapper-2,
.div-wrapper-4 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 54px;
  border-radius: 36px;
  cursor: pointer;
  background: linear-gradient(180deg, #ed7d6f 0%, #d7586b 100%);
}
.start-your-free-wrapper-2:hover,
.div-wrapper-4:hover {
  background: linear-gradient(180deg, #da7d71 0%, #bf5061 100%);
}

/* ========================================
   ORCHA BANNER
======================================== */
.orcha-strip {
  width: 100%; background: rgba(255, 249, 238, 1);
  display: flex; align-items: center; justify-content: center; gap: 14px;
  padding: 20px 20px;
  height: 100px;
}
.orcha-strip img { width: 60px; height: 60px; }
.orcha-strip span { font-size: 18px; font-weight: 400; color: #000000; }

/* ========================================
   TOPICS GRID
======================================== */
.div-7 { width: 100%; max-width: 1340px; padding: 60px 80px; display: flex; flex-direction: column; gap: 60px; }
.div-wrapper-2 { display: flex; justify-content: center; }
.text-wrapper-6 { font-size: 30px; font-weight: 600; color: #000; text-align: center; margin: 0;   padding-bottom: 45px; }
.text-wrapper-6-1{ font-size: 30px; font-weight: 600; color: #000; text-align: center; margin: 0; }
.text-wrapper-a { font-size: 30px; font-weight: 600; color: #000; text-align: center; margin: 0;    margin-top: 20px; }
.text-wrapper-user { font-size: 30px; font-weight: 600; color: #000; text-align: center; margin: 0;   padding-top: 60px; }
.text-wrapper-blog { font-size: 30px; font-weight: 600; color: #000; text-align: center; margin: 0;  }
.div-8 { display: flex; flex-direction: column; gap: 20px; }
.div-9 { display: flex; gap: 20px; flex-wrap: wrap; }
.div-10 {
  flex: 1; min-width: 260px; height: 70px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px; background: rgba(255, 249, 238, 1); border-radius: 12px;
  border: 0.5px solid rgba(215, 88, 107, 1); cursor: pointer;
  transition: background 0.2s;
}
.div-10:hover { background: #FFEACF; }
.div-10 .icon { width: 13px; height: 12px; flex-shrink: 0; }
.text-wrapper-7 { font-size: 18px; font-weight: 500; color: rgba(215, 88, 107, 1); }

/* ========================================
   OLLY AI SECTION
======================================== */
.frame-wrapper-3 { width: 100%; background: rgba(255, 249, 238, 1); display: flex; justify-content: center; padding: 80px 20px; }
.div-11 { display: flex; align-items: center; gap: 60px; max-width: 1110px; width: 100%; flex-wrap: wrap; }
.group-3 { width: 400px; height: 360px; object-fit: contain; flex-shrink: 0; }
.div-12 { flex: 1; min-width: 280px; display: flex; flex-direction: column; gap: 30px; }
.introducing-olly-AI { font-size: 42px; font-weight: 600; color: #000; line-height: 1.4; margin: 0; }
/* responsive override will keep 42px base */
.text-wrapper-8 { font-size: 18px; font-weight: 400; color: #000; line-height: 1.6; margin: 0; }

/* ========================================
   VIDEO / GENERIC CENTER COL
======================================== */
.div-13 { width: 100%; max-width: 1340px; padding: 60px 20px; display: flex; flex-direction: column; align-items: center; gap: 60px; }
.text-wrapper-21 { font-size: 24px; font-weight: 600; color: #000; text-align: center; margin: 0; }
.youtube-player { width: 100%; max-width: 810px; aspect-ratio: 16/9; overflow: hidden; position: relative; background: #000; }
.div-new{
    width: 100%;
    align-items: center;
    background: rgba(255, 249, 238, 1);
}
.div-new1{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
}

/* ========================================
   TESTIMONIALS
======================================== */
.div-14 { width: 100%; max-width: 1340px; padding: 0px 20px; display: flex; flex-direction: column; gap: 40px; align-items: center; }
.div-15 { display: flex; gap: 30px; flex-wrap: wrap; width: 100%;padding-left: 50px;
    padding-right: 50px; }
.frame-wrapper-4 { flex: 1; min-width: 280px; background: rgba(255, 244, 230, 1); border-radius: 20px; padding: 36px; }
.frame-wrapper-5 { width: 100%; }
.div-16 { display: flex; flex-direction: column; gap: 15px; }
.div-17 { display: flex; align-items: center; gap: 15px; }
.image  { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.flexcontainer, .flexcontainer-2 { display: flex; flex-direction: column; gap: 3px; }
.text   { font-size: 15px; color: #000; margin: 0; opacity: 0.85; }
.text-wrapper-10 { font-weight: 600; font-size: 18px; }
.text-wrapper-11 { font-size: 13px; }
.div-wrapper-3 { width: 100%; }
.text-wrapper-12 { font-size: 15px; font-weight: 400; font-style: italic; color: #000; opacity: 0.75; line-height: 1.6; margin: 0; }
.div-19 { display: flex; align-items: center; gap: 6px; justify-content: center; }
.text-wrapper-13 { font-size: 18px; font-weight: 500; color: #d7586b; text-decoration: underline; }
.text-wrapper-13:hover {
  color: #803358 !important;
  text-decoration: underline !important;
}
.text-wrapper-13:hover + .chevron-pink,
.text-wrapper-13:hover + .chevron-pink .bi {
  color: #803358 !important;
}
/* Same hover colour when moving over the chevron (whole row) */
.div-19:hover .text-wrapper-13 {
  color: #803358 !important;
  text-decoration: underline !important;
}
.div-19:hover .chevron-pink,
.div-19:hover .chevron-pink .bi {
  color: #803358 !important;
}
a:hover {
  color: #803358 !important;
  text-decoration: underline !important;
}
header a:hover,
nav a:hover {
  text-decoration: none !important;
}
/* Keep header "Try for free" text white on hover/focus/active */
header .btn_tff,
header .btn_tff:hover,
header .btn_tff:focus,
header .btn_tff:active,
header a.btn_tff,
header a.btn_tff:hover,
header a.btn_tff:focus,
header a.btn_tff:active {
  color: #fff !important;
  text-decoration: none !important;
}
header .btn_tff *,
header a.btn_tff * {
  color: #fff !important;
}
/* Header CTA may come from included markup without btn_tff class */
header a[href*="splash_options.php"],
header a[href*="splash_options.php"]:hover,
header a[href*="splash_options.php"]:focus,
header a[href*="splash_options.php"]:active,
header a[href*="splash_options.php"]:visited {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  text-decoration: none !important;
}
header a[href*="splash_options.php"] * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}
/* Actual top nav uses .header container (not <header> tag) */
#body .header a.btn_tff,
#body .header a.btn_tff:hover,
#body .header a.btn_tff:focus,
#body .header a.btn_tff:active,
#body .header a.btn_tff:visited,
#body .header a.btn_tff.btn_tff_tn.btn_popup.no-underline-hover,
#body .header a.btn_tff.btn_tff_tn.btn_popup.no-underline-hover:hover,
#body .header a.btn_tff.btn_tff_tn.btn_popup.no-underline-hover:focus,
#body .header a.btn_tff.btn_tff_tn.btn_popup.no-underline-hover:active,
#body .header a.btn_tff.btn_tff_tn.btn_popup.no-underline-hover:visited {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  text-decoration: none !important;
}
.text-wrapper-26:hover,
.text-wrapper-27:hover {
  color: #fff !important;
  text-decoration: none !important;
}
/* ========================================
   ROOT CAUSE
======================================== */
.div-20 { width: 100%; background: rgba(255, 249, 238, 1); display: flex; align-items: center; justify-content: center; gap: 80px; padding: 60px 50px; flex-wrap: wrap;     margin-top: 55px;}
.design { width: 456px; height: 500px; object-fit: contain; flex-shrink: 0; }
.div-21 { display: flex; flex-direction: column; gap: 32px; max-width: 444px; }
.frame-wrapper-6 { display: flex; flex-direction: column; gap: 16px; }
.div-22 { display: flex; flex-direction: column; gap: 8px; }
.text-wrapper-14 { font-size: 30px; font-weight: 600; color: #000; line-height: 1.5; margin: 0; }

/* ========================================
   ORGANISATION CARDS
======================================== */
.div-23 { width: 100%; max-width: 1340px; padding: 60px 20px; display: flex; flex-direction: column; gap: 40px; align-items: center; }
.div-24 { display: flex; gap: 30px; flex-wrap: wrap; width: 100%; justify-content: center;padding-left: 50px; padding-right: 50px; }
.div-25 {
  display: flex; flex-direction: column; flex: 1; min-width: 280px; max-width: 429px;
  border-radius: 20px; overflow: hidden; background: #fff4e6;
  transition: box-shadow 0.2s; cursor: pointer;
}
/* .div-25:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.10); } */
/* Card is an <a>. Global `a:hover { text-decoration: underline !important; }` would underline ALL
   text in the card — override it on the anchor, then re-apply underline only on "Find out more". */
.div-25:hover {
  text-decoration: none !important;
}
.div-25:hover .view-all-success {
  text-decoration: underline !important;
}
/* Title + description must look the same on card hover (no colour/underline change). */
.div-25:hover .text-wrapper-15,
.div-25:hover .text-wrapper-17,
.div-25:hover .text-wrapper-16 {
  color: #000 !important;
  text-decoration: none !important;
}
.rectangle { width: 100%; height: 180px; object-fit: cover; }
.frame-wrapper-7, .frame-wrapper-8 { padding: 36px; display: flex; flex: 1;     max-height: 190px;}
.div-26, .div-29 { display: flex; flex-direction: column; gap: 12px; width: 100%; }
.div-27, .div-30 { display: flex; flex-direction: column; gap: 6px; }
.text-wrapper-15, .text-wrapper-17 { font-size: 20px; font-weight: 500; color: #000; line-height: 1.4; }
.text-wrapper-16 { font-size: 14px; font-weight: 400; color: #000; line-height: 1.5; margin: 0; }
.div-28 { display: flex; align-items: center; margin-top: auto; width: 40%;}
.view-all-success { font-size: 15px; font-weight: 500; color: #d7586b; text-decoration: underline; }
.view-all-success:hover { color: #803358 !important; text-decoration: underline !important; }
.view-all-success:hover + .chevron-pink { color: #803358 !important; }
.div-28:hover .view-all-success {
  color: #803358 !important;
  text-decoration: underline !important;
}
.div-28:hover .chevron-pink,
.div-28:hover .chevron-pink .bi {
  color: #803358 !important;
}
.view-all-success:active {
  /* On click we keep the original (non-hover) pink to avoid "yellow flash". */
  color: #d7586b !important;
  text-decoration: underline !important;
}
.view-all-success:active + .chevron-pink {
  color: #d7586b !important;
}
.div-25:active .view-all-success {
  color: #d7586b !important;
  text-decoration: underline !important;
}
.div-25:active .chevron-pink {
  color: #d7586b !important;
}

/* If user clicks while still hovering the "Find out more" area, keep the hover color. */
.div-25:active .div-28:hover .view-all-success {
  color: #803358 !important;
  text-decoration: underline !important;
}
.div-25:active .div-28:hover .chevron-pink,
.div-25:active .div-28:hover .chevron-pink .bi {
  color: #803358 !important;
}
.div-wrapper-5 { display: flex; align-items: center; }

/* ========================================
   TEENAGERS SECTION
======================================== */
.div-31 { width: 100%; max-width: 1340px; padding: 5px 20px; display: flex; align-items: center; gap: 40px; flex-wrap: wrap; justify-content: center; }
.teenage-app-copy { width: 554px; height: 555px; object-fit: cover; border-radius: 16px; flex-shrink: 0; }
.div-32 { display: flex; flex-direction: column; gap: 32px; max-width: 500px; }
.div-33 { display: flex; flex-direction: column; gap: 15px; }
.div-34 { display: flex; flex-direction: column; gap: 24px; }
.div-35 { display: flex; flex-direction: column; gap: 18px; }
.text-wrapper-18 { font-size: 24px; font-weight: 600; color: #803358; }
.text-wrapper-19 { font-size: 36px; font-weight: 600; color: #000; line-height: 1.3; margin: 0; }
.text-wrapper-20 { font-size: 15px; font-weight: 400; color: #000; line-height: 1.6; margin: 0; }
.text-wrapper-19-mobile,
.text-wrapper-20-mobile { display: none; }

/* ========================================
   COACHES CAROUSEL
======================================== */
.group-4 { width: 100%; max-width: 980px; position: relative; }
.div-36 { display: flex; gap: 20px; overflow-x: auto; padding-bottom: 20px; scroll-behavior: smooth; }
.div-36::-webkit-scrollbar { height: 4px; }
.div-36::-webkit-scrollbar-thumb { background: #d7586b; border-radius: 2px; }
.div-37 { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 10px; background: #fff4e6; border-radius: 10px; flex-shrink: 0; width: 234px; cursor: pointer; transition: box-shadow 0.2s; }
.div-37:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
.image-2 { width: 214px; height: 214px; object-fit: cover; border-radius: 8px; }
.flexcontainer-3 { display: flex; flex-direction: column; align-items: center; gap: 0px; width: 100%; }
.span-wrapper { font-size: 15px; color: #000; text-align: center; margin: 0; }
.text-wrapper-22 { font-weight: 600; font-size: 18px; }
.text-wrapper-23 { font-size: 12px; }
.text-wrapper-24 { font-weight: 600; font-size: 15px; }
.div-38 { display: flex; align-items: center; gap: 6px; justify-content: flex-end; margin-top: 16px; }

/* ========================================
   SUBSCRIPTION
======================================== */
.frame-wrapper-9 {
  width: 100%;
  background: linear-gradient(180deg, #4267a5 0%, #183c79 100%);
  display: flex; justify-content: center;
  padding: 60px 20px;
}
.div-39 { display: flex; flex-direction: column; align-items: center; gap: 40px; max-width: 980px; width: 100%; }
.div-40 { display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%; }
.div-wrapper-6 { display: flex; flex-direction: column; align-items: center; }
.text-wrapper-25 { font-size: 30px; font-weight: 600; color: #fff; text-align: center; line-height: 1.5; margin: 0; }
.div-41 { display: flex; align-items: center; gap: 30px; flex-wrap: wrap; justify-content: center; }
.div-42, .div-43 { display: flex; align-items: center; gap: 10px; }
.group-6, .vector-6 { width: 26px; height: 24px; object-fit: contain; }
.text-wrapper-26, .text-wrapper-27 { font-size: 18px; font-weight: 500; color: #fff; margin: 0; }
.ellipse { width: 24px; height: 24px; border-radius: 50%; background: linear-gradient(0deg, #ffaca2 0%, #ffcaa9 100%); flex-shrink: 0; }
.frame-wrapper-10 { width: 100%; }
.div-44 { display: flex; flex-direction: column; gap: 24px; align-items: center; width: 100%; }
.div-45 { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; width: 100%; }

/* Yearly card */
.group-7 { position: relative; width: 420px; min-height: 97px; padding-top: 13px; cursor: pointer; }
.rectangle-2 { width: 100%; height: 84px; background: rgba(255,255,255,0.1); border-radius: 10px; border: 1px solid #fff; }
.div-wrapper-7 { position: absolute; top: -13px; right: 16px; background: #fff; border-radius: 10px; padding: 4px 16px; }
.text-wrapper-28 { font-size: 12px; font-weight: 600; color: #325795; }
.div-46 { position: absolute; top: 24px; left: 20px; display: flex; flex-direction: column; gap: 2px; }
.text-wrapper-29 { font-size: 18px; font-weight: 500; color: #fff; }
.INR-yr-INR { font-size: 15px; color: #fff; margin: 0; }
.text-wrapper-30 { color: rgba(255,255,255,0.5); text-decoration: line-through; }
.text-wrapper-31 { font-weight: 600; color: #fff; }
.text-wrapper-32 { position: absolute; top: 36px; right: 20px; font-size: 21px; font-weight: 600; color: #fff; }

/* Monthly card */
.group-8 { position: relative; width: 420px; height: 84px; cursor: pointer; }
.rectangle-3 { width: 100%; height: 84px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.25); }
.div-47 { position: absolute; top: 18px; left: 22px; display: flex; flex-direction: column; gap: 2px; }
.text-wrapper-33 { font-size: 15px; font-weight: 400; color: #fff; }
.text-wrapper-34 { position: absolute; top: 27px; right: 20px; font-size: 21px; font-weight: 600; color: #fff; }

.after-your-free { font-size: 13px; color: #fff; text-align: center; max-width: 860px; line-height: 1.6; margin: 0; }
.text-wrapper-35 { color: #fff; }
.text-wrapper-36 { text-decoration: underline; color: #fff; }

/* ========================================
   TOOLS SECTION (Figma exact)
======================================== */
.tools-section {
  width: 100%;
  max-width: 1100px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  box-sizing: border-box;
}

/* Tab pill row */
.tools-tabs {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 6.5rem;
  position:absolute
}
.tool-tab {
  width: 127px;
  height:26px;
  padding: 4px 11px;
  border-radius: 10px;
  background:  rgba(238, 161, 112, 1);
  font-family: "Poppins", Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border-color 0.18s;
  white-space: nowrap;
}
.tool-tab-active {
  background:  rgba(237, 125, 111, 1);
  border: 1px solid rgba(128, 51, 88, 1);
  color: #fff;
}
/* Outer panel container — very light peach */
.tools-panel-wrap {
  width: 900px;
  background: rgba(255, 244, 230, 1);
  overflow: hidden;
}

/* Individual panel */
.tools-panel {
  display: none;
  align-items: center;
  /* Keep app tile + description in one row (prevents large/odd gaps). */
  gap: 40px;
  padding: 60px 60px;
  flex-wrap: nowrap;
  height: 500px;
}
.tools-panel.active { display: flex; }

/* ---- App card (left side) ---- */
.tools-card {
  background: rgba(255, 232, 187, 1);
  border-radius: 16px;
  flex-shrink: 0;
  width: 343px;
  height:340px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Thumbnail with play button — inset with padding */
.tools-thumb {
  position: relative;
  width: 100%;
  padding: 12px 12px 0;
  box-sizing: border-box;
}
.tools-thumb-img {
  width: 100%;
  height: 206px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}
/* Feel better now: real MP4 (same as indexolder.php tools section) */
.tools-thumb-video {
  width: 100%;
  height: 206px;
  display: block;
  border-radius: 10px;
  background: #FFE8BB;
  object-fit: cover;
  /* Helps timeline scrub in some Chromium builds */
  accent-color: #000;
}
/* Homepage FBN: cream bar — scoped selectors + clear background-image (index.css sets video::-webkit-media-controls-panel) */
.tools-thumb-video::-webkit-media-controls-panel,
#fbn-video::-webkit-media-controls-panel,
video#fbn-video.tools-thumb-video::-webkit-media-controls-panel {
  background: #FFE8BB !important;
  background-image: none !important;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}
/* Time text — panel `color` does not apply; target shadow parts (Chromium/WebKit) */
.tools-thumb-video::-webkit-media-controls-current-time-display,
.tools-thumb-video::-webkit-media-controls-time-remaining-display,
#fbn-video::-webkit-media-controls-current-time-display,
#fbn-video::-webkit-media-controls-time-remaining-display,
video#fbn-video.tools-thumb-video::-webkit-media-controls-current-time-display,
video#fbn-video.tools-thumb-video::-webkit-media-controls-time-remaining-display {
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
}
/* Progress / scrub bar */
.tools-thumb-video::-webkit-media-controls-timeline,
#fbn-video::-webkit-media-controls-timeline,
video#fbn-video.tools-thumb-video::-webkit-media-controls-timeline {
  background-color: rgba(0, 0, 0, 0.22) !important;
  border-radius: 4px;
}
.tools-thumb-video::-webkit-media-controls-timeline::-webkit-slider-thumb,
#fbn-video::-webkit-media-controls-timeline::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #000 !important;
}
/* Built-in control icons are drawn light-on-dark; invert so they read on #FFE8BB */
.tools-thumb-video::-webkit-media-controls-play-button,
.tools-thumb-video::-webkit-media-controls-mute-button,
.tools-thumb-video::-webkit-media-controls-fullscreen-button,
.tools-thumb-video::-webkit-media-controls-overlay-play-button,
#fbn-video::-webkit-media-controls-play-button,
#fbn-video::-webkit-media-controls-mute-button,
#fbn-video::-webkit-media-controls-fullscreen-button {
  filter: invert(1);
}
/* Overflow ⋮ — invert() often does not affect inner SVG; brightness(0) maps light pixels to black */
.tools-thumb-video::-webkit-media-controls-overflow-button,
#fbn-video::-webkit-media-controls-overflow-button,
video#fbn-video.tools-thumb-video::-webkit-media-controls-overflow-button {
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
  opacity: 1 !important;
  filter: brightness(0) !important;
  -webkit-filter: brightness(0) !important;
}
/* Chromium variant */
.tools-thumb-video::-webkit-media-controls-overflow-menu-button,
#fbn-video::-webkit-media-controls-overflow-menu-button,
video#fbn-video.tools-thumb-video::-webkit-media-controls-overflow-menu-button {
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
  opacity: 1 !important;
  filter: brightness(0) !important;
  -webkit-filter: brightness(0) !important;
}
/* Extra fallback selectors for Chromium variants */
video::-webkit-media-controls-overflow-button,
video::-webkit-media-controls-overflow-menu-button,
video.tools-thumb-video::-webkit-media-controls-overflow-button,
video.tools-thumb-video::-webkit-media-controls-overflow-menu-button {
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
  opacity: 1 !important;
  filter: brightness(0) !important;
  -webkit-filter: brightness(0) !important;
}
/* FBN: while playing, video fills card (353px) */
#tab-fbn .tools-card.tools-card-fbn-playing {
  height: 353px;
  min-height: 353px;
}
#tab-fbn .tools-card.tools-card-fbn-playing .tools-thumb {
  padding: 0;
  height: 353px;
}
#tab-fbn .tools-card.tools-card-fbn-playing .tools-card-meta {
  display: none !important;
}
#fbn-video.tools-thumb-video-playing {
  height: 353px !important;
  max-height: 353px;
  border-radius: 16px;
  object-fit: cover;
}
.tools-thumb-img_sec{
   object-fit: cover;
    display: block;
    border-radius: 10px;
    width: 343px;

}
.tools-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.18);
  transition: transform 0.2s, background 0.2s;
}
.tools-play-btn:hover {
  background: #fff;
  transform: translate(-50%, -50%) scale(1.08);
}
.tools-play-btn span {
  font-size: 16px;
  color: #000;
  margin-left: 3px;
  line-height: 1;
}
.tools-video-play-btn {
  border: 0;
  z-index: 2;
}
.tools-video-play-btn[hidden] {
  display: none !important;
}

/* Card meta area */
.tools-card-meta {
  padding: 12px 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Label row: pink dot + uppercase category */
.tools-card-label-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.tools-label-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ed7d6f 0%, #d7586b 100%);
  flex-shrink: 0;
  display: inline-block;
}
.tools-label-text {
  font-size: 12px;
  font-weight: 700;
  color: #444;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.tools-card-title {
  font-size: 18px;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
}
.tools-card-duration {
  font-size: 12px;
  font-weight: 400;
  color: #777;
  margin: 0;
}

/* ---- Info text (right side) ---- */
.tools-info {
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tools-info-heading {
  font-size: 21px;
  font-weight: 500;
  color: #000000;
  margin: 0;
  line-height: 1.25;
}
.tools-info-body {
  font-size: 15px;
  font-weight: 400;
  color: #000;
  line-height: 1.7;
  margin: 0;
  max-width: 360px;
}
/* HTML5 audio in tools tabs — same sources as indexolder.php; styling from main.css (webkit controls) */
.tools-info audio#aud1,
.tools-info audio#aud2 {
  width: 100%;
  max-width: 335px;
  margin: 4px 0 0 0;
  display: block;
}
.tools-explore-link {
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: rgba(215, 88, 107, 1);
  text-decoration: underline;
  text-underline-offset: 2px;
  margin-top: 2px;
  text-decoration: underline;
}
.tools-explore-link:hover { color: #803358; text-decoration: underline; }
.tools-explore-link:hover .chevron-pink { color: #803358 !important; }
.tools-explore-link:active {
  color: #803358 !important;
  text-decoration: underline !important;
}
.tools-explore-link:active .chevron-pink {
  color: #803358 !important;
}

/* index-only: remove mobile tap highlight without overriding link colors */
#body a {
  -webkit-tap-highlight-color: transparent;
}

/* Keep old selectors harmless */
.group-wrapper, .group-9, .div-51, .div-wrapper-8, .div-wrapper-9, .div-wrapper-10,
.text-wrapper-42, .text-wrapper-43, .tab-content-panel, .div-49, .div-50,
.text-wrapper-37, .text-wrapper-38, .group-10, .tool-card-image-wrap,
.rectangle-5, .group-11, .ellipse-2, .polygon-btn, .tool-card-divider,
.tool-card-label-row, .tool-card-icon-pill, .tool-card-icon-circle,
.text-wrapper-39-inline, .tool-card-body, .text-wrapper-39-bold,
.flexcontainer-4, .text-2, .text-wrapper-40, .text-wrapper-41,
.text-wrapper-39, .rectangle-4 { display: none !important; }

/* ========================================
   COACHES SECTION
======================================== */
.coaches-section {
  width: 100%;
  max-width: 100%;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  box-sizing: border-box;
}
.coaches-outer {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 0;
}
.coaches-outer.is-scrolled {
  padding-left: 0;
}

/* track wrap: arrows sit on left/right, scroll strip in between */
.coaches-track-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
}

/* arrow buttons */
.coach-arrow {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: rgba(173, 173, 173, 1);;
  color: #fff;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  z-index: 2;
  padding: 0;
}
.coach-arrow:disabled {
  opacity: 0.5 !important;
}   
.coach-arrow-left  { margin-right: 0; }
.coach-arrow-right { margin-left: 0; }

.coaches-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  width: 100%;
  /* hide scrollbar on all browsers */
  scrollbar-width: none;        /* Firefox */
  -ms-overflow-style: none;     /* IE/Edge */
}
.coaches-scroll::-webkit-scrollbar { display: none; }
.coaches-scroll .coach-card:first-child {
  margin-left: 12rem;
}

.coach-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #fff4e6;
  border-radius: 12px;
  flex-shrink: 0;
  width: 234px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  text-decoration: none;
  height:287px
}
.coach-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  text-decoration: none !important;
}
.coach-card:hover * {
  text-decoration: none !important;
}
.coach-img { width: 214px; height: 214px; object-fit: cover; border-radius: 10px; display: block; }
.coach-name { font-size: 18px; font-weight: 600; color: #000; text-align: center; margin: 0; }
.coach-country { font-size: 12px; font-weight: 400; color: #000; text-align: center; margin: 0; }

.coaches-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  padding-left: 12rem;
  box-sizing: border-box;
}
.coaches-footer-spacer {
  flex: 1;
}
.coaches-nav-btns {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
      margin-left: 15rem;
}
                  

.coaches-more {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 17px; font-weight: 500; color: rgba(215, 88, 107, 1);
  text-decoration: underline;
}
.coaches-more .bi-chevron-right {
  color: rgba(215, 88, 107, 1);
  font-size: 14px;
  font-weight: 700;
}
/* Icon fix for coach arrow buttons */
.coach-arrow .bi {
  font-size: 13px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.coaches-more:hover {
  color: #803358 !important;
  text-decoration: underline !important;
}
.coaches-more:hover .bi-chevron-right {
  color: #803358 !important;
}
.coaches-more:active {
  color: rgba(215, 88, 107, 1) !important;
}
.coaches-more:active .bi-chevron-right {
  color: rgba(215, 88, 107, 1) !important;
}
.coaches-more:hover:active {
  color: #803358 !important;
}
.coaches-more:hover:active .bi-chevron-right {
  color: #803358 !important;
}
.div_new1{
  justify-content: center;
    display: flex;
}


/* keep old dot classes harmless */
.coaches-dots, .cdot { display: none; }

/* ========================================
   BLOG
======================================== */
.blog-outer {
  width: 100%;
  max-width: 980px;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.blog-scroll {
  display: flex;
  gap: 20px;
  padding-bottom: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height:370px;
}
.blog-scroll::-webkit-scrollbar { display: none; }
.blog-scroll .blog-card:first-child {
  margin-left: max(20px, calc((100vw - 980px) / 2));
}
.blog-card {
  position: relative;
  width: 470px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
  display: block;
}
.nav-buttons {
  display: flex;
  gap: 12px;
  padding: 10px;
  background: #f5f5f5;
}

.circle-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(173, 173, 173, 1);
  color: rgba(173, 173, 173, 1);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.circle-btn:disabled {
  opacity: 0.5;
  cursor: none;
}

.circle-btn:active {
  transform: scale(0.95);
}
.blog-img { width: 470px; height: 240px; object-fit: cover; display: block; }
.blog-caption {
  width: 100%;
  height: 130px;
  background: rgba(255, 244, 230, 1);
  box-sizing: border-box;
  padding: 25px 0px 1px 22px;/* keeps title below the image */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.blog-title {
  position: static !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
  font-size: 18px;
  font-weight: 500;
  color: #000 !important;
  line-height: 1.45;
  margin: 0 !important;
  padding: 0 !important;
  display: block;
  width: 100%;
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 2;
}
.blog-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap;
  margin-left: 27rem;
}
.blog-dots { display: flex; gap: 8px; align-items: center; }
.bdot {
  width: 10px; height: 10px; border-radius: 50%;
  border: none; cursor: pointer; padding: 0;
  background: rgba(215,88,107,0.3);
  transition: background 0.2s;
}
.bdot.active { background: #d7586b; }
.blog-more {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 16px; font-weight: 500; color: #d7586b;
  text-decoration: underline;
}
.blog-more:hover { color: #803358 !important; }
.blog-more:hover .chevron-pink { color: #803358 !important; }
.blog-more:active { color: #803358 !important; }
.blog-more:active .chevron-pink { color: #803358 !important; }
.blog-more img { width: 8px; height: auto; }

/* Mobile blog card (matches Figma dimensions) */
@media (max-width: 767px) {
  .text-wrapper-blog {
    font-size: 18px !important;
    font-weight: 600 !important;
  }

  .blog-scroll {
    width: 100%;
    margin-left: 0;
    height: 289px;
    overflow-y: visible;
    align-items: center;
    margin-top: -18px;
  }
  .blog-scroll .blog-card:first-child {
    margin-left: 0;
  }

  .blog-card {
    width: 306px;
    max-width: 100%;
    height: 242.5372314453125px;
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column; /* blog-img on top, blog-caption below */
    align-items: stretch;
  }

  .blog-img {
    width: 100%;
    height: 156.25531005859375px;
    flex-shrink: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    object-fit: cover;
  }

  .blog-caption {
    height: 86.28196716308594px;
    flex-shrink: 0;
    background: rgba(255, 249, 238, 1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 10px 5px 0 5px; /* keeps title below the image */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .blog-footer {
    margin-top: 0;
    margin-left: 0;
    justify-content: center;
  }

  /* Carousel arrows are horizontal-scroll controls; hide on stacked mobile layout */
  #blog-prev,
  #blog-next {
    display: none;
  }

  /* Put title inside caption (image then text) */
  .blog-title {
    position: static !important;
    bottom: auto !important;
    left: auto !important;
    right: auto !important;
    margin: 0;
    padding: 0;
    font-size: 15px !important;
    font-weight: 500 !important;
    line-height: 1.4;
    display: block;
    width: 100%;
    color: #000 !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 2;
  }
  .accordion-button::after{
    content:"+" !important;
    font-size: 15px;
  }
  
.accordion-button:not(.collapsed)::after {
    content: "-" !important;
    font-size: 15px;
  }

  .modal-content1 .cross_btn_row a[data-bs-dismiss="modal"] .cross_btn, .modal-content1 .popup-close-btn .cross_btn{
        min-width: 20px !important;
  }
}

/* keep old selectors harmless */
.group-13, .div-52, .group-14, .rectangle-6, .rectangle-7, .text-wrapper-44, .div-53 {}

/* ========================================
   FAQ
======================================== */
.div-54 { width: 100%; max-width: 980px; padding: 10px 20px; display: flex; flex-direction: column; align-items: center; gap: 40px; }
.div-55 { display: flex; gap: 40px; width: 100%; flex-wrap: wrap; }
.div-56 { display: flex; flex-direction: column; gap: 20px; min-width: 200px; flex-shrink: 0; padding-top: 12px}
.about-happierme { font-size: 15px; font-weight: 500; color: rgba(203, 97, 113, 1); text-decoration: underline; cursor: pointer; }
.text-wrapper-45 { font-size: 15px; font-weight: 500; color: rgba(203, 97, 113, 1);text-decoration: underline; cursor: pointer; }
.faq-tab:hover { color: #803358 !important;
    text-decoration: none !important; }
.faq-tab-active {
  opacity: 1 !important;
  font-weight: 600 !important;
  color: rgba(128, 51, 88, 1) !important;
  text-decoration: none !important;
}
.faq-tab-active:hover {
  color: rgba(128, 51, 88, 1) !important;
  text-decoration: none !important;
}
.div-57 { flex: 1; min-width: 280px; }
.faq-panel { display: none; }
.faq-panel.active { display: block; }
.div-58 { margin-bottom: 8px; }
.div-59 { display: flex; flex-direction: column; }
.div-70 { width: 100%; display: flex;
    justify-content: center;}
.div-71 { width: 100%;}
.div-60, .div-61 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}
.text-wrapper-46 { font-size: 15px; font-weight: 600; color: #000; flex: 1; margin: 0; }
.icon-2, .icon-3 { width: 13px; height: 8px; object-fit: contain; }
.faq-toggle {
  display: flex;
  align-items: center;
  margin-left: 12px;
  cursor: pointer;
}
.faq-toggle-icon {
  width: 14px;
  height: 8px;
  object-fit: contain;
  transition: 0.2s ease;
}
.div-60.faq-open .faq-toggle-icon,
.div-61.faq-open .faq-toggle-icon {
  transform: none;
}
.faq-body {
  font-size: 15px;
  color: #000;
  line-height: 1.6;
  margin: 6px 0 12px;
  display: none;
}

/* Mobile: keep plus / minus instead of chevron */
@media (max-width: 767px) {
  .faq-toggle {
    font-size: 22px;
    color: #d7586b;
  }
  .faq-toggle-icon {
    display: none;
  }
}

  /* ========================================
   FOOTER
======================================== */
.group-16 { width: 100%; position: relative; background: #d7586b; padding: 60px 0 40px; }
.rectangle-8 { position: absolute; inset: 0; background: #d7586b; z-index: 0; }
.text-wrapper-47 { position: relative; z-index: 1; font-size: 12px; color: rgba(255,255,255,0.5); text-align: center; margin: 0 0 8px; }
.div-62 { position: relative; z-index: 1; display: flex; gap: 80px; justify-content: center; flex-wrap: wrap; padding: 0 60px; }
.div-63 { display: flex; flex-direction: column; gap: 16px; }
.text-wrapper-48 { font-size: 15px; font-weight: 600; color: #fff; }
.div-64 { display: flex; flex-direction: column; gap: 10px; }
.text-wrapper-49 { font-size: 12px; font-weight: 400; color: #fff; margin: 0; }
.text-wrapper-50 { font-size: 12px; font-weight: 400; color: #fff; margin: 0; }
.img-2 { position: absolute; bottom: 0; right: 60px; width: 154px; height: auto; z-index: 1; }

/* ========================================
   RESPONSIVE
======================================== */

/* ── Global layout helpers ── */
.div-48 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
}

/* Tools responsive */
@media (max-width: 900px) {
  .tools-panel { padding: 40px 40px; gap: 40px; flex-wrap: wrap; }
}
@media (max-width: 768px) {
  .tools-panel { padding: 32px 24px; gap: 28px; }
  .tools-card { width: 210px; }
  .tools-thumb-img { height: 155px; }
  .tools-thumb-video { height: 178px; }
  #tab-fbn .tools-card.tools-card-fbn-playing,
  #tab-fbn .tools-card.tools-card-fbn-playing .tools-thumb {
    height: auto;
    min-height: min(353px, 85vw);
    max-height: none;
  }
  #fbn-video.tools-thumb-video-playing {
    height: min(353px, 85vw) !important;
    max-height: min(353px, 85vw);
  }
  .tools-info-heading { font-size: 22px; }
  .tools-info-body { max-width: 100%; }

  /* Tab pills: horizontal scroll (override desktop absolute positioning) */
  .tools-section {
    align-items: stretch;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  .tools-tabs {
    position: relative !important;
    inset: auto !important;
    padding-top: 0 !important;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0;
    width: 100%;
    max-width: 100%;
    justify-content: flex-start;
    flex-wrap: nowrap !important;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
    scrollbar-width: none;
    gap: 10px;
    box-sizing: border-box;
  }
  .tools-tabs::-webkit-scrollbar {
    display: none;
    height: 0;
  }
  .tool-tab {
    flex-shrink: 0;
  }
  .tools-panel-wrap {
    width: 100% !important;
    max-width: 100%;
    box-sizing: border-box;
  }
}
@media (max-width: 480px) {
  .tools-panel { align-items: center; padding: 24px 18px; }
  .tools-card { width: 100%; }
  /* Don’t stretch the text block — avoids empty space between link and card */
  .tools-info {
    align-items: center;
    text-align: center;
    flex: 0 0 auto;
    padding-bottom: 24px;
  }
  .tools-info-body { max-width: 100%; }
  .tools-info-heading { font-size: 20px; }
  .tools-explore-link {
    margin-top: 0;
    margin-bottom: 0;
  }
  /* Mobile layout: info + link above, card/video below — tighter space between link row and video */
  .tools-panel {
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    gap: 4px;
  }
  .tools-tabs {
    padding-left: 12px;
    padding-right: 12px;
    gap: 8px;
  }
  .tool-tab { font-size: 12px; padding: 4px 14px; }
  .tools-section {
    padding-left: 0;
    padding-right: 0;
    padding-top: 24px;
    padding-bottom: 60px;
    gap: 0;
  }
  .tools-panel-wrap {
    width: 100% !important;
    max-width: 100%;
  }
  .tools-panel.active {
    justify-content: center;
  }
}

/* Subscription price cards — fluid by default */
.group-7 {
  position: relative;
  width: min(420px, 100%);
  min-height: 97px;
  padding-top: 0px;
  cursor: pointer;
}
.group-8 {
  position: relative;
  width: min(420px, 100%);
  height: 84px;
  cursor: pointer;
}

/* When user picks Monthly: dim Yearly card + highlight Monthly (14-day badge stays visible on Yearly) */
.group-7.sub-plan-off .rectangle-2 {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.25);
}
.group-8.sub-plan-on .rectangle-3 {
  background: rgba(255,255,255,0.1);
  border: 1px solid #fff;
}

/* Coaches: smooth touch scroll */
.div-36 { -webkit-overflow-scrolling: touch; touch-action: pan-x; }

/* Blog card fluid base */
.group-14 {
  position: relative;
  width: clamp(260px, 45vw, 470px);
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

/* Tools mock-app card fluid base */
.group-10 {
  width: min(343px, 100%);
}

/* ── 1200 px: large monitors ── */
@media (min-width: 1200px) {
  .frame-wrapper { padding: 80px 40px;padding-top: 80px;
        padding-bottom: 60px; }
  .p { font-size: 42px; }
  .introducing-olly-AI { font-size: 42px; }
}

/* ── 1024 px: laptop ── */
@media (max-width: 1024px) {
  .p { font-size: 36px; }
  .introducing-olly-AI { font-size: 34px; }
  .new-app-adults-teen { width: 320px; height: 406px; }
  .group-3 { width: 300px; height: 270px; }
  .div-62 { gap: 48px; padding: 0 40px; }
}

/* ── 768 px: tablet ── */
@media (max-width: 768px) {
  /* Hero */
  /* Mobile hero banner layout (image first, then content) */
  .frame-wrapper.web_home_divlanding {
    width: 375px;
    max-width: 100%;
    height: 755px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto;
  }

  .div-2 {
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: 0;
    padding-top: 60px;
  }

  .new-app-adults-teen {
    width: 237px;
    height: 300px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .div-3 { max-width: 100%; text-align: center; align-items: center; gap: 18px; }
  .div-4 { gap: 18px; }
  .div-5 { gap: 18px; }
  .group { justify-content: center; }
  .start-your-free-wrapper { align-self: center; }

  /* Anchor must define width: inner .start-your-free-wrapper uses max-width:100% and
     would otherwise shrink-wrap wrong inside .div-3 (align-items:center). */
  .web_home_divlanding .hero-try-free-link {
    width: 335px;
    max-width: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: stretch;
    justify-content: center;
    box-sizing: border-box;
    text-decoration: none;
  }

  .p { font-size: 27px; font-weight: 600; text-align: center !important; }
  .text-wrapper-4 { font-size: 12px; font-weight: 400; line-height: 1.5; }
  .text-wrapper-5 { font-size: 16px; }
  .start-your-free-wrapper,
  .start-your-free-wrapper-2,
  .div-wrapper-4 { padding: 14px 32px; }

  /* CTA button size (hero: Try HappierMe for free) */
  .web_home_divlanding .hero-try-free-link .start-your-free-wrapper {
    width: 100%;
    max-width: none;
    height: 48px;
    border-radius: 24px;
    padding: 0 20px !important;
    gap: 12px;
  }

  /* Ensure rating stays centered on mobile */
  .rating-row { justify-content: center; margin: 0; }

  /* Orcha */
  .orcha-strip { flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; align-items: center; }
  .orcha-strip span { font-size: 15px; text-align: left; line-height: 1.3; flex: 1; display: block; }

  /* Topics */
  .div-7 { padding: 40px 20px; gap: 10px; }
  .div-8 { gap: 10px; }
  .div-9 { gap: 10px; }
  .text-wrapper-6 { font-size: 22px; }
  .div-9 { flex-direction: column; }
  .div-10 { min-width: unset; width: 100%; height: auto; min-height: 60px; }

  /* Olly */
  .div-11 { flex-direction: column; align-items: center; text-align: center; gap:18px}
  .group-3 { width: clamp(160px, 50vw, 260px); height: auto; }
  .introducing-olly-AI { font-size: 24px !important; font-weight: 600; }
  .div-12 { align-items: center; }
  .start-your-free-wrapper-2 { align-self: center; }
  .text-wrapper-8 { font-size: 12px; font-weight: 400; }

  /* Chat with Olly now button */
  .start-your-free-wrapper-2 {
    width: 335px;
    max-width: 100%;
    height: 48px;
    border-radius: 24px;
    padding: 0 20px !important;
  }

  /* Pink CTA pills (.div-wrapper-4): anchor must set width — same flex shrink issue as hero */
  a:has(> .div-wrapper-4) {
    display: flex;
    width: 335px;
    max-width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: stretch;
    text-decoration: none;
  }

  a:has(> .div-wrapper-4) .div-wrapper-4 {
    width: 100%;
    max-width: none;
    height: 48px;
    border-radius: 24px;
    padding: 0 20px !important;
    box-sizing: border-box;
  }

  /* Testimonials */
  .div-15 { flex-direction: column; }
  .div-14 { align-items: center; }

  /* Root cause */
  .div-20 { flex-direction: column; align-items: center; padding: 40px 20px;text-align: center; gap: 30px;}
  .design { width: 100%; max-width: 340px; height: auto; }
  .div-21 { max-width: 100%; }

  /* Org cards */
  .div-24 { flex-direction: column; align-items: center;padding-left: 0px;padding-right:0px; }
  .div-25 { max-width: 100%; }
  /* Organisation cards: image + title only */
  .div-23 .rectangle { width: 335px; height: 150px; object-fit: cover; margin: 0 auto; max-width: 100%; }
  .div-23 .frame-wrapper-7, .div-23 .frame-wrapper-8 { padding: 18px 20px; max-height: none; }
  .div-23 .div-27, .div-23 .div-30 { gap: 0px; align-items: center; }
  .div-23 .text-wrapper-15, .div-23 .text-wrapper-17 { font-size: 15px; font-weight: 400; text-align: center; }
  .div-23 .text-wrapper-16 { display: none !important; }
  .div-23 .div-28 { display: none !important; }

  /* Teenagers */
  .div-31 { flex-direction: column; align-items: center; gap:10px}
  .teenage-app-copy { width: 100%; max-width: 420px; height: auto; }
  .div-32 { max-width: 100%; }
  /* Teenagers mobile: image + title + single paragraph only */
  /* Collapse wrappers so title + paragraphs can be reordered around the image */
  .div-31 .div-32 { display: contents; max-width: unset; }
  .div-31 .div-33 { display: contents; }
  .div-31 .div-34 { display: contents; }
  .div-31 .div-35 { display: contents; }

  .div-31 .text-wrapper-18 { font-size: 18px !important; font-weight: 600; color: #000 !important; text-align: center; order: 1; }
  .div-31 .teenage-app-copy { order: 2; }
  .div-31 .text-wrapper-19 { display: none !important; }
  .div-31 .text-wrapper-20 { display: none !important; }
  .div-31 .text-wrapper-19-mobile { display: block !important; font-size: 18px !important; font-weight: 500; color: #000 !important; text-align: center; line-height: 1.6; margin: 0; order: 3; }
  .div-31 .text-wrapper-20-mobile { display: block !important; font-size: 12px !important; font-weight: 400; color: #000 !important; line-height: 1.6; margin: 0; text-align: center; order: 4; }
  .div-31 .div-28 { display: none !important; } /* Hide "Find out more" */
  .div-31 .div-wrapper-4 { display: none !important; } /* Hide bottom CTA button */
  .div-31 a[href*="teenagers/intro-carousel"] { display: none !important; }

  /* Subscription */
  .div-45 { flex-direction: column; align-items: center;padding-left: 18px;
    padding-right: 18px;gap:10px }
  .text-wrapper-25 { font-size: 22px; }
  .div-41 { gap: 16px; flex-direction: column;}
  .group-6, .vector-6 ,.ellipse{width: 16px; height: 15px;}

  /* Tools tabs */
  .div-51 { gap: 6px; }
  .tab-content-panel.active { flex-direction: column; align-items: center; }
  .group-wrapper { width: 100%; max-width: 100%; }
  .group-9 { min-height: unset; }
  .div-49 { min-width: unset; width: 100%; }

  /* Blog */
  .group-14 { width: clamp(160px, 45vw, 220px); }

  /* FAQ */
  .div-55 { flex-direction: column; }
  .div-56 { flex-direction: row; flex-wrap: wrap; gap: 10px; }
  .about-happierme, .text-wrapper-45 { font-size: 13px; }

  /* Footer */
  .div-62 { gap: 32px; padding: 0 20px; flex-wrap: wrap; }
  .group-16 { padding: 40px 0 80px; }
  .img-2 { width: 100px; right: 16px; }

  /* Headings */
  .text-wrapper-21 { font-size: 20px; }
  .text-wrapper-14 { font-size: 24px; }
  .text-wrapper-19 { font-size: 28px; }

  .text-wrapper-a{
    font-size: 18px;
    padding: 2px;
    margin-top: 0px;
  }
  .div-6 {
    justify-content: center;
  }

  /* Coaches (mobile): center footer + fix carousel start */
  .coaches-section {
    align-items: stretch;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    gap: 24px;
  }
  .text-wrapper-6-1 {
    font-size: 18px;
  }
  .coaches-outer {
    padding-left: 0 !important;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }
  .coaches-footer { flex-direction: column; justify-content: center; gap: 12px; margin-top: 20px; padding-left: 0; }
  .coaches-footer-spacer { display: none; }
  .coaches-nav-btns { margin-left: 0 !important; justify-content: center; }
  .coaches-more { justify-content: center; }

  /* Coach strip: full-width scroll + room to see last cards */
  .coaches-track-wrap {
    padding-left: 0 !important;
    width: 100%;
    margin-left: 0;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }
  #coaches-scroll.coaches-scroll {
    width: 100%;
    padding-right: max(24px, env(safe-area-inset-right, 0px));
    touch-action: pan-x;
    overscroll-behavior-x: contain;
  }
  /* Once user starts scrolling, make strip edge-to-edge on mobile */
  .coaches-outer.is-scrolled .coaches-track-wrap {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    max-width: none;
  }
  .coaches-outer.is-scrolled #coaches-scroll.coaches-scroll {
    padding-right: 0;
  }
  .coaches-scroll .coach-card:first-child {
    margin-left: 0;
  }

  /* Coach card sizing (mobile) */
  .coach-card { width: 190px !important; height: 245px !important; border-radius: 10px; }
  .coach-img { width: 160px !important; height: 160px !important; border-radius: 10px; }

  /* Hide bottom scroll buttons (mobile) */
  .coaches-nav-btns,
  .coaches-nav-btns * { display: none !important; }
}

/* ── 480 px: phone ── */
@media (max-width: 480px) {
  /* Hero */
  .frame-wrapper { padding: 36px 16px; }
  .p { font-size: 27px; }
  .text-wrapper-3 { font-size: 15px; }
  .text-wrapper-4 { font-size: 16px; }
  .new-app-adults-teen { width: clamp(150px, 70vw, 240px); }
  .div-6 img { width: 28px !important; height: 32px !important; }
  /* Let tools panel size to content — fixed 600px + flex:1 on .tools-info caused a large gap under "Explore on app" */
  .tools-panel.active {
    height: auto !important;
    min-height: 0;
  }

  /* Orcha */
  .orcha-strip { padding: 12px 16px; }

  /* Organisation cards: image + title only */
  .div-23 .rectangle { width: 335px; height: 150px; object-fit: cover; margin: 0 auto; max-width: 100%; }
  .div-23 .frame-wrapper-7, .div-23 .frame-wrapper-8 { padding: 18px 20px; max-height: none; }
  .div-23 .div-27, .div-23 .div-30 { gap: 0px; align-items: center; }
  .div-23 .text-wrapper-15, .div-23 .text-wrapper-17 { font-size: 15px; font-weight: 400; text-align: center; }
  .div-23 .text-wrapper-16 { display: none !important; }
  .div-23 .div-28 { display: none !important; }

  /* Topics */
  .div-7 { padding: 40px 16px; gap: 10px; }
  .div-8 { gap: 10px; }
  .div-9 { gap: 10px; }
  .text-wrapper-7 { font-size: 15px; }
  .introducing-olly-AI{
    font-size: 24px !important;
    font-weight: 600;
  }

  /* Olly */
  .frame-wrapper-3 { padding: 48px 16px; }
  .text-wrapper-8 { font-size: 12px; font-weight: 400; }
  .start-your-free-wrapper-2 {
    width: 335px;
    max-width: 100%;
    height: 48px;
    border-radius: 24px;
    padding: 0 20px !important;
  }

  /* Video */
  .div-13 {padding: 40px 16px;
        gap: 24px;
        padding-left: 16px; }

  /* Testimonials */
  .frame-wrapper-4 { padding: 24px 18px; }
  .text-wrapper-10 { font-size: 15px; }

  /* Root cause */
  .text-wrapper-14 { font-size: 20px; }

  /* Org cards */
  .frame-wrapper-7, .frame-wrapper-8 { padding: 24px; }
  .text-wrapper-15, .text-wrapper-17 { font-size: 20px; }

  /* Teenagers */
  .div-31 { padding: 40px 16px; }
  .div-31 .text-wrapper-18 { font-size: 18px !important; font-weight: 600; color: #000 !important; }
  .div-31 .text-wrapper-19 { display: none !important; }
  .div-31 .text-wrapper-20 { display: none !important; }
  .div-31 .text-wrapper-19-mobile { display: block !important; font-size: 18px !important; font-weight: 500; color: #000 !important; text-align: center; line-height: 1.6; margin: 0; }
  .div-31 .text-wrapper-20-mobile { display: block !important; font-size: 12px !important; font-weight: 400; color: #000 !important; line-height: 1.6; margin: 0; text-align: center; }
  .div-31 .div-28 { display: none !important; } /* Hide "Find out more" */
  .div-31 .div-wrapper-4 { display: none !important; } /* Hide bottom CTA button */
  .div-31 a[href*="teenagers/intro-carousel"] { display: none !important; }
  .div-23 {    padding-bottom: 20px;}

  /* Subscription */
  .frame-wrapper-9 { padding: 40px 16px; }
  .text-wrapper-25 { font-size: 18px; }
  .text-wrapper-26, .text-wrapper-27 { font-size: 15px; }
  .text-wrapper-29 { font-size: 15px; }
  .text-wrapper-32, .text-wrapper-34 { font-size: 18px; }
  .div-46 { top: 16px; left: 14px; }
  .div-47 { top: 12px; left: 14px; }
  .coach-name {font-size: 15px;}
  .after-your-free {font-size: 12px}

  /* Tools */
  .tab-content-panel { padding: 20px 14px; }
  .text-wrapper-37 { font-size: 17px; }
  .text-wrapper-38 { font-size: 14px; }

  /* Blog */
  .group-14 { width: calc(70vw); }
  .rectangle-6 { height: 140px; }
  .rectangle-7 { height: 100px; }
  .text-wrapper-44 { font-size: 13px; left: 12px; bottom: 10px; }

  /* FAQ */
  .div-54 { padding: 40px 16px; }
  .div-56 { gap: 8px; }
  .about-happierme, .text-wrapper-45 { font-size: 12px; }
  .text-wrapper-46 { font-size: 14px; }

  /* Footer */
  .div-62 { flex-direction: column; gap: 24px; padding: 0 16px; }
  .text-wrapper-47 { font-size: 11px; padding: 0 16px; }
  .img-2 { display: none; }

  /* Section headings */
  .text-wrapper-6 { font-size: 18px; padding-bottom: 30px; }
  .text-wrapper-21 { font-size: 18px; }
  .text-wrapper-user {
        font-size: 18px;
  }
  .div-15 {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  /* Coaches (mobile): center footer + fix carousel start */
  .coaches-outer { padding-left: 0 !important; }
  .coaches-footer { flex-direction: column; justify-content: center; gap: 12px; margin-top: 20px; padding-left: 0; }
  .coaches-footer-spacer { display: none; }
  .coaches-nav-btns { margin-left: 0 !important; justify-content: center; }
  .coaches-more { justify-content: center; }

  /* Coach card sizing (mobile) */
  .coach-card { width: 190px !important; height: 245px !important; border-radius: 10px; }
  .coach-img { width: 160px !important; height: 160px !important; border-radius: 10px; }

  /* Hide bottom scroll buttons (mobile) */
  .coaches-nav-btns,
  .coaches-nav-btns * { display: none !important; }
}





    </style>
  </head>
<body id="body" style="padding:0px !important">

  <!-- header -->
  <?php include('./includes/header.php'); ?>
  <?php include('../includes/assets/css/landing.css'); ?>
  <?php include('.../includes/assets/css/landing.css'); ?>


  <!-- /header --> 

    <div class="frame" id="main">

      <!-- ===== HERO ===== -->
      <div class="frame-wrapper web_home_divlanding">
        <div class="div-wrapper">
          <div class="div">
            <div class="div-2">
              <img class="new-app-adults-teen display_m_none"
                src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/bannerind.svg"
                alt="HappierMe app" />
             <img class="new-app-adults-teen display_d_none"
                src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/bannermobile11.svg"
                alt="HappierMe app" />
          <div class="div-3">
                 <!-- rating row -->
                 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p0">
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
                    <div class="div-5">
                     <p class="p" style="text-align: left;line-height: 1.3;">Understand your mind.<br>Change your life.</p>
                      <div class="div-6">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/olyAi.svg" alt="Olly AI" style="width:38px;height:42px;" />
                        <div class="text-wrapper-3">Now with Olly AI</div>
                      </div>
                    </div>
                    <p class="text-wrapper-4">
                      Personalized support to reduce stress and anxiety, deepen your relationships and build a happier life from within.
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

      <!-- ===== ORCHA BANNER ===== -->
      <div class="orcha-strip">
        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/orcha_certified.png" alt="ORCHA Certified"  height="60px" width="60px"/>
        <span>ORCHA approved for use in healthcare in the UK and USA</span>
      </div>

      <!-- ===== TOPICS ===== -->
      <div class="div-7">
        <div class="div-wrapper-2">
          <p class="text-wrapper-a">Find out how HappierMe can help you</p>
        </div>
        <div class="div-8">
          <div class="div-9">
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModal"><div class="text-wrapper-7">Mental wellbeing</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalbuild"><div class="text-wrapper-7">Better relationships</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModal3"><div class="text-wrapper-7">Succeed at work</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
          </div>
          <div class="div-9">
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModal2"><div class="text-wrapper-7">Learn meditation</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalbreak"><div class="text-wrapper-7">Overcome harmful habits</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalemotions"><div class="text-wrapper-7">Manage emotions</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
          </div>
          <div class="div-9">
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalself"><div class="text-wrapper-7">Build self-awareness</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalparent"><div class="text-wrapper-7">Better parenting</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
            <div class="div-10" role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalteen"><div class="text-wrapper-7">HappierMe for Teenagers</div><img class="icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/findOutarrow.svg" alt="" /></div>
          </div>
        </div>
      </div>

      <!-- ===== OLLY AI ===== -->
      <div class="frame-wrapper-3">
        <div class="div-11">
          <img class="group-3" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/secowly.svg" alt="Olly AI" />
          <div class="div-12">
            <div class="div-5">
              <p class="introducing-olly-AI" style="font-size:42px;">Introducing Olly AI,<br />your personal guide inside HappierMe.</p>
              <p class="text-wrapper-8">
                Talk to Olly about what's on your mind — stress, anxiety, relationships, tricky habits, parenting, or
                work. Olly offers practical support and guides you to trusted, expert-backed resources.
              </p>
            </div>
            <a href="https://happierme.app/pages/splash_options.php" id="OllyChatBtn">
              <div class="start-your-free-wrapper-2">
                <div class="text-wrapper-5">Chat with Olly now</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- ===== VIDEO ===== -->
      <div class="div-13">
        <p class="text-wrapper-a">Discover HappierMe in just 1 minute</p>
        <div class="youtube-player">
          <iframe
            id="youtubeIntro"
            src="https://www.youtube-nocookie.com/embed/MgsYk1SZh-w?si=R5mFMHvkINh60C4b&rel=0&modestbranding=1"
            title="HappierMe intro"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen
            style="width:100%;height:100%;border:none;border-radius:12px;">
          </iframe>
        </div>
      </div>


   <div class="div-new_1">
    <p class="text-wrapper-6"> Findings from a survey of 1,000 HappierMe app users</p>      
  </div>

  <!-- section end -->

 <div class="div-new">
    <div class="scroller-container div_new1">
      <div>
        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/surveycircle.svg"
          class="img-responsive d-wider w100p" alt="modules" loading="lazy">

        <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/home_circle.svg"
          class="img-responsive circle-mobile ml-mobile" alt="modules" loading="lazy">

        <img src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/survetcirclewider.svg" class="happy-wide-img"
          alt="happy user" loading="lazy">
      </div>
    </div>
  </div>              
      <!-- ===== TESTIMONIALS ===== -->
      <div class="div-14">
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
          <span class="chevron-pink">  <span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span>
        </div>
      </div>

      <!-- ===== ROOT CAUSE ===== -->
      <div class="div-20">
        <img class="design" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/Design.svg" alt="Design" />
        <div class="div-21">
          <div class="frame-wrapper-6">
            <div class="div-22">
              <p class="text-wrapper-14">Address the root cause of problems for lasting change.</p>
              <p class="text-wrapper-8">Our happiness depends on many factors. HappierMe addresses them all.</p>
            </div>
          </div>
          <a href="https://happierme.app/pages/splash_options.php">
            <div class="div-wrapper-4"><div class="text-wrapper-5">Try HappierMe for free</div></div>
          </a>
        </div>
      </div>

      <!-- ===== ORGANISATION ===== -->
      <div class="div-23">
        <p class="text-wrapper-6">Find out how HappierMe can help your organisation</p>
        <div class="div-24">
          <!-- Workplace -->
          <a href="/pages/work.php" class="div-25">
            <img class="rectangle" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/work.svg" alt="Work" />
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
          <a href="/pages/education.php" class="div-25">
            <img class="rectangle" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/education.svg" alt="Education" />
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
          <a href="/pages/healthcare.php" class="div-25">
            <img class="rectangle" src="https://d1tenzemoxuh75.cloudfront.net/website/svgs/healthcare.svg" alt="Healthcare" />
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
      <div class="div-31">
        <img class="teenage-app-copy" src="https://d1tenzemoxuh75.cloudfront.net/website/webp/teens_app_01.webp" alt="Teenagers app" />
        <div class="div-32">
          <div class="div-33">
            <div class="div-34">
              <div class="text-wrapper-18">HappierMe for Teenagers</div>
              <div class="div-35">
                <p class="text-wrapper-19">Help teenagers feel happier and succeed in life</p>
                <p class="text-wrapper-19-mobile">Guiding teenagers to flourish in life</p>
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

      <!-- ===== COACHES ===== -->
      <div class="coaches-section">
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
            <a href="https://happierme.app/adults/coach" class="coaches-more">
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

      <!-- ===== SUBSCRIPTION ===== -->
      <div class="frame-wrapper-9" id="div_subscription">
        <div class="div-39">
          <div class="div-40">
            <div class="div-wrapper-6">
              <div class="text-wrapper-25">Subscribe to HappierMe Premium</div>
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

      <!-- ===== TOOLS ===== -->
      <div class="tools-section">
        <p class="text-wrapper-6">Tools for a happier life</p>
        <!-- Tab pills -->
        <div class="tools-tabs" id="toolTabs">
          <button class="tool-tab tool-tab-active" id="feelbetterNow-tab" onclick="switchTab(this,'fbn')">Feel better now</button>
          <button class="tool-tab" id="pathWay-tab" onclick="switchTab(this,'pathway')">Guided Programs</button>
          <button class="tool-tab" id="journal-tab" onclick="switchTab(this,'journal_tab')">Journal</button>
          <button class="tool-tab" id="podcast-tab" onclick="switchTab(this,'podcast_tab')">Podcast</button>
          <button class="tool-tab" id="community-tab" onclick="switchTab(this,'forum')">Community</button>
          <button class="tool-tab" id="HapinessScore-tab" onclick="switchTab(this,'survey')">Happiness score</button>
        </div>
        <!-- Tab content area -->
        <div class="tools-panel-wrap">

          <!-- Feel better now -->
          <div id="fbn" class="tools-panel active">
            <div class="tools-card">
              <div class="tools-thumb">
                <video playinline
                  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/rec-tool.svg"
                  controlsList="nodownload"
                  class="tools-thumb-video"
                  id="fbn-video">
                  <source src="https://d1tenzemoxuh75.cloudfront.net/breathing/videos/1.5.mp4" type="video/mp4">
                </video>
                <button type="button" class="tools-play-btn tools-video-play-btn" aria-label="Play breathing exercise" id="fbn-play-btn">
                  <span>&#9654;</span>
                </button>
              </div>
              <div class="tools-card-meta">
                <div class="tools-card-label-row">
                  <span class="tools-label-dot">
                    <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/rec-toolcircle.svg" alt="Breathing exercise" class="tools-label-icon" />
                  </span>
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
              <audio id="aud1" controls controlslist="nodownload">
                <source src="https://d1tenzemoxuh75.cloudfront.net/curated_dbs/audios/p_index.mp3" type="audio/mpeg">
              </audio>
              <a href="https://happierme.app/adults/pathway/" class="tools-explore-link">Explore on app <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Journal -->
          <div id="journal_tab" class="tools-panel">
            <div>
              <div class="tools-thumb">
                <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/questions.svg" alt="Journal" class="tools-thumb-img_sec" />
                <div class="tools-play-btn"><span>&#9654;</span></div>
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
            <div>
              <div class="tools-thumb">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/tools_podcast.webp" alt="Podcast" class="tools-thumb-img_sec" />
              </div>
              
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">HappierMe Podcast</h3>
              <p class="tools-info-body">A library of engaging podcasts on a wide variety of topics, where we explore a subject in depth with guests from around the world. They offer fresh ways of dealing with the many challenges we face and living our best life.</p>
              <audio id="aud2" controls controlslist="nodownload">
                <source src="https://d1tenzemoxuh75.cloudfront.net/podcasts/54.mp3" type="audio/mpeg">
              </audio>
              <a href="https://happierme.app/adults/podcast" class="tools-explore-link">Explore on app <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Community -->
          <div id="forum" class="tools-panel">
            <div>
              <div class="tools-thumb">
                <img src="https://d1tenzemoxuh75.cloudfront.net/website/webp/tools_forum.webp" alt="Community" class="tools-thumb-img_sec" />
                <div class="tools-play-btn"><span>&#9654;</span></div>
              </div>
             
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">Community forum</h3>
              <p class="tools-info-body">Interact with other users and our coaches. Ask questions, share your answers, be part of the HappierMe community.</p>
              <a href="https://happierme.app/adults/forum" class="tools-explore-link">Explore on app <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
            </div>
          </div>

          <!-- Happiness score -->
          <div id="survey" class="tools-panel">
            <div>
              <div class="tools-thumb">
                <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/track.svg" alt="Happiness score" class="tools-thumb-img_sec" />
              </div>
             
            </div>
            <div class="tools-info">
              <h3 class="tools-info-heading">Track your wellness score</h3>
              <p class="tools-info-body">Check your wellness score and track your progress. Exchange points for discounts. Get a certificate each time you complete a topic.</p>
              <a href="https://happierme.app/adults/wisdom-survey" class="tools-explore-link">Check your wellness score <span class="chevron-pink"><span style="margin-left:6px;-webkit-text-stroke: 1px;" class="bi bi-chevron-right"></span></span></a>
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
      <div class="div-13">
        <div class="text-wrapper-blog">Explore our blog</div>
        <div class="blog-outer">
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

      <!-- ===== FAQ ===== -->
      <!-- Desktop FAQ -->
      <div class="div-54 display_m_none">
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
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faq-open.svg" alt="" /></span>
                  </div>
                  <p class="faq-body" style="display:block;">HappierMe is an app you can use on your desktop and phone. It can be downloaded from the Android or App store. Many users think it has been life changing. It is your guide to lead a happier and more successful life.</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How do I start my free trial?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">From the desktop or in the app you will have an option of starting a free trial. You can choose whether to have a one week or 2 week free trial. You can cancel anytime during the free trial.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How do I get started with HappierMe?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">On the app there is an Introduction section. Begin here. It has videos and audios which help you understand what the app does, and how to make the most of it.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How much time do I need to spend every day on the app?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
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
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                  </div>
                  <p class="faq-body">Self-awareness is a simple way of noticing what you are thinking and feeling, in your mind and in your body. These thoughts and feelings decide our behaviour. By noticing them we can be curious, learn more about them and explore where they come from.</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can the app help me manage my own mental health?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">Our mind is reactive and we are usually not aware of, or in control of our reactions. These reactions often create the mental health problems we experience. By understanding our thoughts, feelings and emotions better, we can better manage our reactions, and so manage our own mental health.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can the app help me to have happier relationships?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">By understanding ourselves, our reactions and our own emotional needs we can understand others better, and this can help us to reduce conflict in our relationships. By learning to communicate with care we can have relationships with depth and meaning.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can the app help me succeed at work?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
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
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                  </div>
                  <p class="faq-body">We host a live event every two weeks on different subjects and explore how self-awareness can help with that. There is usually an invited guest and an opportunity to contribute and ask questions. You can access our library of past events through the Events section.</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">What is your partnership program?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">Once you subscribe you can join our partnership program, and be rewarded for sharing HappierMe with your network. Details can be found in the Partnership program in the app.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can I contact a coach through the app?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">We have trained coaches that can be accessed through the app. They are familiar with the app and can offer 1-2-1 coaching for an extra fee. You can ask a coach a question as part of your subscription through the Forum, and this can be done anonymously.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">Is there a community forum?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
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
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
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
                    <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                  </div>
                  <p class="faq-body">Please email us: support@happierme.app</p>
                </div>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can I cancel a subscription?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">Click on My subscriptions in your profile and you can cancel your subscription from there. It will run till your next renewal date.</p>
              </div>
              <div class="div-58">
                <div style="width:100%;height:1px;background:#e0e0e0;"></div>
                <div class="div-61">
                  <p class="text-wrapper-46">How can I share this with others?</p>
                  <span class="faq-toggle"><img class="faq-toggle-icon" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg" alt="" /></span>
                </div>
                <p class="faq-body">In the hamburger menu of the app (top right in the app) there is a Refer a friend button. You can also buy a subscription for someone else.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile FAQ -->
      <div class="row center_flex prelative display_df_none" style="margin-bottom: 40px;">
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
        if (panelId !== 'tab-fbn') {
          var fbnVideo = document.getElementById('fbn-video');
          var fbnPlayBtn = document.getElementById('fbn-play-btn');
          var fbnCard = document.querySelector('#tab-fbn .tools-card');
          if (fbnVideo) {
            fbnVideo.pause();
            fbnVideo.currentTime = 0;
            fbnVideo.controls = false;
            fbnVideo.classList.remove('tools-thumb-video-playing');
          }
          if (fbnCard) fbnCard.classList.remove('tools-card-fbn-playing');
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

            // Close all FAQ items first (true accordion behavior).
            document.querySelectorAll('.faq-body').forEach(function(p) {
              p.style.display = 'none';
            });
            document.querySelectorAll('.div-60.faq-open, .div-61.faq-open').forEach(function(r) {
              r.classList.remove('faq-open');
            });

            // Reset all icons to "closed".
            document.querySelectorAll('img.faq-toggle-icon').forEach(function(img) {
              img.src = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faqclosed.svg';
            });
            document.querySelectorAll('.faq-toggle').forEach(function(toggle) {
              if (toggle.querySelector('img.faq-toggle-icon')) return;
              toggle.textContent = '+';
            });

            if (nowOpen) {
              body.style.display = 'block';

              var toggle = this.querySelector('.faq-toggle');
              if (!toggle) return;

              // Desktop FAQ icon (open/closed SVG)
              var iconImg = toggle.querySelector('img.faq-toggle-icon');
              if (iconImg) {
                iconImg.src = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/faq-open.svg';
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

        var fbnCard = video.closest('.tools-card');

        function setFbnPlayingLayout(on) {
          video.classList.toggle('tools-thumb-video-playing', on);
          if (fbnCard) fbnCard.classList.toggle('tools-card-fbn-playing', on);
        }

        playBtn.addEventListener('click', function() {
          video.controls = true;
          setFbnPlayingLayout(true);
          var playPromise = video.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function() {});
          }
        });

        video.addEventListener('play', function() {
          video.controls = true;
          playBtn.hidden = true;
          setFbnPlayingLayout(true);
        });

        video.addEventListener('pause', function() {
          video.controls = false;
          if (video.currentTime < video.duration) {
            playBtn.hidden = false;
          }
          setFbnPlayingLayout(false);
        });

        video.addEventListener('ended', function() {
          video.controls = false;
          playBtn.hidden = false;
          setFbnPlayingLayout(false);
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
        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
      }

      function blogScroll(dir) {
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

    <!-- AOS Animation JS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
      });
    </script>

    <!-- Owl Carousel Initialization -->
    <script>
      $(document).ready(function() {
        // Initialize Owl Carousel for coaches
        if ($('.owl_coach .owl-carousel').length) {
          $('.owl_coach .owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            dots: false,
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 },
              1200: { items: 4 }
            }
          });
        }

        // Initialize Owl Carousel for blog
        if ($('.owl_blog .owl-carousel').length) {
          $('.owl_blog .owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            dots: false,
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 }
            }
          });
        }

        // Initialize Bootstrap tabs (older layout: ul#toolTabs.nav-tabs; custom tools use #toolTabs.tools-tabs + switchTab)
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
        var tY = 'After your free trial, the yearly subscription is ₹2400/yr and automatically renews each year until cancelled.';
        var tM = 'After your free trial, the monthly subscription is ₹300/mo and automatically renews each month until cancelled.';
        function pickMonthly() {
          y.classList.add('sub-plan-off');
          m.classList.add('sub-plan-on');
          d.textContent = tM;
        }
        function pickYearly() {
          y.classList.remove('sub-plan-off');
          m.classList.remove('sub-plan-on');
          d.textContent = tY;
        }
        y.addEventListener('click', pickYearly);
        m.addEventListener('click', pickMonthly);
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
  </body>
</html>