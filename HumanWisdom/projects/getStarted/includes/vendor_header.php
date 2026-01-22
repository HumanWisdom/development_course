<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">

<!-- Favicons -->
<link href="https://d1tenzemoxuh75.cloudfront.net/../assets/images/logo/logo_favicon_transparent.png" rel="icon">
<link href="https://d1tenzemoxuh75.cloudfront.net/../assets/images/logo/logo_favicon_transparent.png" rel="apple-touch-icon">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" >
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin >
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" >
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" >

<!-- Bootstrap 5.3 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
<!-- Vendor CSS Files -->
<link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" >
<link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

<!-- Template Main CSS File -->
<link href="../assets/css/landing.css" rel="stylesheet">
<link href="../assets/css/main.css" rel="stylesheet">
<link href="../assets/css/home.css" rel="stylesheet">
<link href="../assets/css/index.css" rel="stylesheet">
<link href="../assets/css/responsive.css" rel="stylesheet">
<link href="../assets/font/font_colour.css" rel="stylesheet">
<link href="../assets/font/font_size.css" rel="stylesheet">
<link href="../assets/font/font_weight.css" rel="stylesheet">
<link href="../assets/font/line_height.css" rel="stylesheet">
<link href="../assets/css/style_hb.css" rel="stylesheet"> 

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Owl Carousel -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"  /> 

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1WBHRGL7VH"></script>

<!-- Debug CSS for tabs and modals -->
<style>
/* Ensure tab content is visible when active */
.tab-content > .tab-pane.active {
    display: block !important;
}

.tab-content > .tab-pane.active.show {
    display: block !important;
}

/* Ensure tab navigation is clickable */
.nav-tabs > li > a {
    cursor: pointer;
}

.nav-tabs > li.active > a {
    background-color: #f5f5f5;
    border-color: #ddd;
}

/* Debug styles to ensure tabs are working */
.tab-pane {
    transition: opacity 0.3s ease;
}

.tab-pane.show.active {
    opacity: 1;
}

.tab-pane:not(.show.active) {
    opacity: 0;
    display: none;
}

/* Bootstrap 5.3 Modal styles */
.modal {
    display: none;
}

.modal.show {
    display: block !important;
}

.modal.fade .modal-dialog {
    transform: translate(0, -25%);
    transition: transform 0.3s ease-out;
}

.modal.show .modal-dialog {
    transform: translate(0, 0) !important;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}

.modal-backdrop.show {
    opacity: 0.5;
}

/* Ensure modal is visible when shown */
.modal.show {
    display: block !important;
}

.modal.show .modal-dialog {
    transform: translate(0, 0) !important;
}

/* Bootstrap 5.3 specific styles */
.btn-close {
    background: transparent;
    border: 0;
    font-size: 1.5rem;
    line-height: 1;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.btn-close::before {
    content: "×";
    display: block;
    width: 1em;
    height: 1em;
    line-height: 1;
    text-align: center;
}

/* Prevent Bootstrap from adding padding-right to body when modal opens */
body {
    padding-right: 0px !important;
}

body.modal-open {
    padding-right: 0px !important;
    overflow: hidden;
}

/* Custom Scrollbar Styles */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #E58D82;
}

/* For Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: #ccc #f1f1f1;
}

/* Mobile Layout Overrides - Text above Image */
@media (max-width: 767px) {
    .flex_block, 
    .flex_fd_cr,
    .flex_fd_cr.flex_fd_cr,
    .tab-content .flex_fd_cr,
    .tab-content .row.center_flex > [class^="col-"].flex_fd_cr {
        display: flex !important;
        flex-direction: column-reverse !important;
    }
    
    /* Ensure the inner columns also don't force a standard column order */
    .flex_block > div, 
    .flex_fd_cr > div {
        width: 100% !important;
        max-width: 100% !important;
    }
}
</style>
