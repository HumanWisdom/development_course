
const userAgent = navigator.userAgent;
const isLoggedIn = localStorage.getItem('isloggedin') == 'T';
const url = "https://happierme.app";
//const url ="https://staging.happierme.app"
//const url ="http://localhost:4200"


(window.dataLayer = window.dataLayer || []),
    gtag("js", new Date()),
    gtag("config", "G-1WBHRGL7VH"),
    (type = "Desktop"),
    /Mobi|Android/i.test(userAgent) ? (type = "Mobile") : /Tablet|iPad|PlayBook/i.test(userAgent) || (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) ? (type = "Tablet") : (type = "Desktop");

function gtag() {
    dataLayer.push(arguments);
}
 function logevent(e, t) {
    gtag("event", e, { screen_name: t });
}

// Function to remove active_nav class from all navigation elements
function removeActiveNavClass(tab) {
 
      let  navElements = [
        'AboutUs', 'blogs', 'organisation', 'work', 'education', 
        'healthcare', 'pricing', 'teenagersHeaderClick', 'partnership'
    ];
     if(tab == 'work' || tab =='education' || tab == 'healthcare'){
      navElements = [
        'AboutUs', 'blogs', 'work', 'education', 
        'healthcare', 'pricing', 'teenagersHeaderClick', 'partnership'
      ];
     }

   
    navElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove("active_nav");
        }
    });
}

// Function to add active_nav class to a specific element
function setActiveNav(elementId) {
    removeActiveNavClass(elementId);
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add("active_nav");
    }
}

// Function to update FAQ tab attributes to Bootstrap 5.3
function updateFAQTabAttributes() {
    // Only target FAQ tabs, not tool tabs
    const faqTabLinks = document.querySelectorAll('.tab_faqs a[data-toggle="tab"]');
    
    faqTabLinks.forEach(link => {
        // Update data-toggle to data-bs-toggle
        link.setAttribute('data-bs-toggle', 'tab');
        link.removeAttribute('data-toggle');
    });
}

// FAQ Tab functionality
function initializeFAQTabs() {
    // Update tab attributes to Bootstrap 5.3 only for FAQ tabs
    updateFAQTabAttributes();
    
    // Get all FAQ tab links (both old and new Bootstrap syntax)
    const faqTabLinks = document.querySelectorAll('.tab_faqs a[data-toggle="tab"], .tab_faqs a[data-bs-toggle="tab"]');
    
    // Add click event listeners to FAQ tabs
    faqTabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all FAQ tabs
            faqTabLinks.forEach(tab => {
                tab.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.parentElement.classList.add('active');
            
            // Get target tab content
            const targetId = this.getAttribute('href');
            const targetContent = document.querySelector(targetId);
            
            // Hide all FAQ tab content
            const allFAQTabContent = document.querySelectorAll('.tc_faqs .tab-pane');
            allFAQTabContent.forEach(content => {
                content.classList.remove('in', 'active', 'show');
            });
            
            // Show target tab content with smooth transition
            if (targetContent) {
                targetContent.classList.add('in', 'active', 'show');
                
                // Convert accordion in this tab if it hasn't been converted yet
                const panelGroups = targetContent.querySelectorAll('.panel-group');
                if (panelGroups.length > 0) {
                    convertAccordionToBootstrap53();
                }
            }
        });
    });
    
    // Set "About HappierMe" as default active tab
    const aboutHappierMeTab = document.querySelector('.tab_faqs a[href="#about_happierme"]');
    if (aboutHappierMeTab) {
        aboutHappierMeTab.parentElement.classList.add('active');
        const aboutContent = document.querySelector('#about_happierme');
        if (aboutContent) {
            aboutContent.classList.add('in', 'active', 'show');
        }
    }
}

// Initialize tool tabs separately to avoid conflicts
function initializeToolTabs() {
    // Get all tool tab buttons (Bootstrap 5.3 syntax)
    const toolTabButtons = document.querySelectorAll('#toolTabs .nav-link');
    
    toolTabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tool tabs
            toolTabButtons.forEach(tab => {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // Get target tab content
            const targetId = this.getAttribute('data-bs-target');
            const targetContent = document.querySelector(targetId);
            
            // Hide all tool tab content
            const allToolTabContent = document.querySelectorAll('#toolTabs + .tab-content .tab-pane');
            allToolTabContent.forEach(content => {
                content.classList.remove('show', 'active');
            });
            
            // Show target tab content
            if (targetContent) {
                targetContent.classList.add('show', 'active');
            }
        });
    });
}

// Accordion functionality with smooth transitions
function initializeFAQAccordion() {
    // Initialize Bootstrap 5.3 accordion
    const accordionElements = document.querySelectorAll('.accordion');
    
    accordionElements.forEach(accordion => {
        // Initialize Bootstrap 5.3 accordion for each accordion group
        const bsAccordion = new bootstrap.Collapse(accordion, {
            toggle: false
        });
        
        // Add custom event listeners for smooth transitions
        const accordionButtons = accordion.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Get the target collapse element
                const targetId = this.getAttribute('data-bs-target');
                const targetCollapse = document.querySelector(targetId);
                
                if (targetCollapse) {
                    // Close all other accordion items in the same group
                    const parentAccordion = targetCollapse.closest('.accordion');
                    if (parentAccordion) {
                        const otherCollapses = parentAccordion.querySelectorAll('.accordion-collapse.show');
                        otherCollapses.forEach(collapse => {
                            if (collapse !== targetCollapse) {
                                const bsCollapse = new bootstrap.Collapse(collapse, {
                                    toggle: false
                                });
                                bsCollapse.hide();
                            }
                        });
                    }
                }
            });
        });
    });
}

// Function to convert existing accordion to Bootstrap 5.3
function convertAccordionToBootstrap53() {
    const panelGroups = document.querySelectorAll('.panel-group');
    
    panelGroups.forEach((panelGroup, groupIndex) => {
        // Skip if this panel group has already been converted
        if (panelGroup.parentElement.classList.contains('accordion')) {
            return;
        }
        
        // Create new accordion container
        const accordion = document.createElement('div');
        accordion.className = 'accordion';
        accordion.id = `accordion_faq_${groupIndex}_${Date.now()}`;
        
        // Get all panels in this group
        const panels = panelGroup.querySelectorAll('.panel');
        
        panels.forEach((panel, panelIndex) => {
            // Create accordion item
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            
            // Get the existing content
            const panelHeading = panel.querySelector('.panel-heading');
            const panelTitle = panelHeading.querySelector('.panel-title a');
            const panelCollapse = panel.querySelector('.panel-collapse');
            const panelBody = panelCollapse.querySelector('.panel-body');
            
            // Create accordion header
            const accordionHeader = document.createElement('h2');
            accordionHeader.className = 'accordion-header';
            accordionHeader.id = `heading_${panelTitle.getAttribute('href').substring(1)}`;
            
            // Create accordion button
            const accordionButton = document.createElement('button');
            accordionButton.className = panelCollapse.classList.contains('in') ? 'accordion-button' : 'accordion-button collapsed';
            accordionButton.type = 'button';
            accordionButton.setAttribute('data-bs-toggle', 'collapse');
            accordionButton.setAttribute('data-bs-target', panelTitle.getAttribute('href'));
            accordionButton.setAttribute('aria-expanded', panelCollapse.classList.contains('in') ? 'true' : 'false');
            accordionButton.setAttribute('aria-controls', panelTitle.getAttribute('href').substring(1));
            accordionButton.textContent = panelTitle.textContent.trim();
            
            // Create accordion collapse
            const accordionCollapse = document.createElement('div');
            accordionCollapse.id = panelTitle.getAttribute('href').substring(1);
            accordionCollapse.className = panelCollapse.classList.contains('in') ? 'accordion-collapse collapse show' : 'accordion-collapse collapse';
            accordionCollapse.setAttribute('aria-labelledby', `heading_${panelTitle.getAttribute('href').substring(1)}`);
            accordionCollapse.setAttribute('data-bs-parent', `#${accordion.id}`);
            
            // Create accordion body
            const accordionBody = document.createElement('div');
            accordionBody.className = 'accordion-body';
            accordionBody.innerHTML = panelBody.innerHTML;
            
            // Assemble the accordion
            accordionHeader.appendChild(accordionButton);
            accordionCollapse.appendChild(accordionBody);
            accordionItem.appendChild(accordionHeader);
            accordionItem.appendChild(accordionCollapse);
            accordion.appendChild(accordionItem);
            
            // Add HR if it exists after this panel
            const nextElement = panel.nextElementSibling;
            if (nextElement && nextElement.classList.contains('row')) {
                accordion.appendChild(nextElement.cloneNode(true));
            }
        });
        
        // Replace the old panel group with new accordion
        panelGroup.parentNode.replaceChild(accordion, panelGroup);
    });
}

setTimeout(() => {
    console.log("User Agent:", "adtraction");
      if(window.location.href.includes('adtraction')){
        var val =  window.location.href.split("at_gd=")
        localStorage.setItem("adtraction",val[1]);
        localStorage.setItem("adtraction",val[1]);
    }  
}, 1000);

// Function to clean up modal backdrop
function cleanupModalBackdrop() {
    setTimeout(() => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }, 150);
}

// Newsletter popup functionality
setTimeout(() => {
    console.log("Checking newsletter popup...");
    console.log("Session storage value:", sessionStorage.getItem('newsLetterOpened'));
    
    if(sessionStorage.getItem('newsLetterOpened') !== 'true'){
        console.log("Newsletter popup should open");
        sessionStorage.setItem('newsLetterOpened','true');
        
        // Set up newsletter form handler
        const newsLetterForm = document.getElementById("news-contact-form");
        if (newsLetterForm) {
            newsLetterForm.addEventListener("click", () => {
                const email = document.getElementById("news-email").value;
                const name = document.getElementById("news-name").value;
                const o = { Name: name, EmailID: email };
              
                if (!(email && name && "" != email && "" != name)) {
                    alert("All fields must be filled out");
                    return false;
                }
                if(!validateEmail(email)){
                    alert("Please enter valid email");
                    return false;
                }
                
                fetch("https://www.humanwisdom.info/api/subscribe_newsletter", { 
                    method: "POST", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify(o) 
                })
                .then((e) => e.json())
                .then((e) => {
                    document.getElementById("news-email").value = "";
                    document.getElementById("news-name").value = "";
                    alert(e?.Message ? e.Message : e);
                    
                    // Close modal after successful submission using Bootstrap 5.3
                    const modal = document.getElementById('product_view');
                    if (modal) {
                        const bsModal = new bootstrap.Modal(modal);
                        bsModal.hide();
                        cleanupModalBackdrop();
                    }
                })
                .catch((e) => {
                    let content = e['error'] ? e['error']['Message'] : 'An error occurred';
                    console.error("Error:", e);
                    alert(content);
                });
            });
        }
        
        // Add event listener for close button
        const closeBtn = document.getElementById('closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                cleanupModalBackdrop();
            });
        }
        
        // Trigger the popup using Bootstrap 5.3
        const newsPopupBtn = document.getElementById('newsPopup');
        if (newsPopupBtn) {
            console.log("Triggering newsletter popup...");
            newsPopupBtn.click();
        } else {
            console.error("News popup button not found");
            // Fallback: try to show modal directly using Bootstrap 5.3
            const modal = document.getElementById('product_view');
            if (modal) {
                console.log("Showing modal directly...");
                const bsModal = new bootstrap.Modal(modal);
                bsModal.show();
            }
        }
    } else {
        console.log("Newsletter popup already shown");
    }
}, 10000); // Reduced from 20000 to 10000 for faster testing

const loginClick = document.getElementById('loginClick');
if (loginClick) {
    loginClick.addEventListener('click', function () {
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        logevent("click_login_header_web", "index.php");
        window.location.href = "../pages/splash_options.php";
    });
}

const happiermeTryForFree =  document.getElementById('happiermeTryForFree');
if (happiermeTryForFree) {
    happiermeTryForFree.addEventListener('click', function () {
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        logevent("click_start_your_free_trial_now", "index.php");
        window.location.href = "../pages/splash_options.php";
    });
}

const tryhappiermeClick = document.getElementsByClassName('tryhappiermeClick');
if (tryhappiermeClick[0]) {
    tryhappiermeClick[0].addEventListener('click', function () {
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        window.location.href = "../pages/splash_options.php";
    });
}

const pricingSelectBtn = document.getElementById('PricingSelectBtn');
if (pricingSelectBtn) {
    pricingSelectBtn.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        logevent("start_your_free_trial_button_click", "index.php");
        window.location.href = "../pages/splash_options.php";
    });
}

const PricingSelectBtnHomePage = document.getElementById('PricingSelectBtnHomePage');
if (PricingSelectBtnHomePage) {
    PricingSelectBtnHomePage.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        logevent("start_your_free_trial_button_click", "home.php");
        window.location.href = "../pages/splash_options.php";
    });
}

const discoverSectionPricingClick = document.getElementById('discoverSectionPricingClick');
if (discoverSectionPricingClick) {
    discoverSectionPricingClick.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        window.location.href = "../pages/splash_options.php";
    });
}

const teenagersLogin = document.getElementById('teenagersLogin');
if (teenagersLogin) {
    teenagersLogin.addEventListener('click', function () {
        // window.location.href = url+"/teenagers/onboarding/login";
         window.location.href = url+"/teenagers/intro-carousel";
    });
}

const teenagersPricing = document.getElementById('teenagersPricing');
if (teenagersPricing) {
    teenagersPricing.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        window.location.href = url+"/teenagers/subscription/start-your-free-trial";
    });
}

const teenagersClick = document.getElementById('teenagersClick');
if (teenagersClick) {
    teenagersClick.addEventListener('click', function () {
        if(localStorage.getItem('pricing')=='true'){
           window.location.href = url+"/teenagers/subscription/start-your-free-trial";
        }
        else if(localStorage.getItem('login')=='true'){
        //    window.location.href = url+"/teenagers/onboarding/login";
              window.location.href = url+"/teenagers/intro-carousel";           
        
        }
        else {
            // window.location.href = url + "/teenagers/onboarding/login";
                        window.location.href = url+"/teenagers/intro-carousel";

        }
    });
}

const teenagerCoverClick = document.getElementById('teenagerCoverClick');
if (teenagerCoverClick) {
    teenagerCoverClick.addEventListener('click', function () {
        //    window.location.href = url+"/teenagers/onboarding/login/";
        window.location.href = url+"/teenagers/intro-carousel";
    });
}

const adultsClick = document.getElementById('adultsClick');
if (adultsClick) {
    adultsClick.addEventListener('click', function () {
        if(localStorage.getItem('pricing')=='true'){
           window.location.href = url+"/adults/subscription/start-your-free-trial";
        }
        else if(localStorage.getItem('login')=='true'){
            localStorage.setItem('login',false);
            localStorage.setItem('pricing',false);
        //    window.location.href = url+"/adults/onboarding/login";
            window.location.href = url+"/adults/intro/intro-carousel";
        } else {
             localStorage.setItem('login',false);
             localStorage.setItem('pricing',false);
            // window.location.href = url + "/adults/onboarding/login";
              window.location.href = url+"/adults/intro/intro-carousel";

        }
    });
}

var element = document.getElementById("scrollTopArrow");
element && ("Desktop" == type ? element.classList.add("mb15px") : element.classList.add("mb-8rem"));
const requestDemoForWork = document.getElementById("requestDemoForWork");
requestDemoForWork &&
    requestDemoForWork.addEventListener("click", function (e) {
        logevent("click_Request_a_demo", "work.php");
    }),
    setTimeout(() => {
        var e = document.getElementById("AboutUs");
        e &&
            e.addEventListener(
                "click",
                function (e) {
                    logevent("click_AboutUs", "index.php");
                    setActiveNav("AboutUs");
                    localStorage.setItem("activeTab", "aboutUs"), (window.location.href = "../pages/about_us.php");
                },
                !1
            );
        var t = document.getElementById("blogs");
        t &&
            t.addEventListener(
                "click",
                function (e) {
                    logevent("click_blogs", "index.php");
                    setActiveNav("blogs");
                    localStorage.setItem("activeTab", "blogs"), (window.location.href = "../blogs/blog_index.php");
                },
                !1
            );
        var n = document.getElementById("organisation");
        n && n.addEventListener("click", function (e) {}, !1);
        var o = document.getElementById("work");
        o &&
            o.addEventListener(
                "click",
                function (e) {
                    localStorage.setItem("activeTab", "org-work"),
                    logevent("click_Happierme_For_Work", "index.php"),
                    setActiveNav("work");
                    setActiveNav("organisation");
                    (window.location.href = "../pages/work.php");
                },
                !1
            );
        var a = document.getElementById("education");
        a &&
            a.addEventListener(
                "click",
                function (e) {
                    localStorage.setItem("activeTab", "org-work"), 
                    setActiveNav("education");
                    setActiveNav("organisation");
                    logevent("click_Happierme_For_education", "index.php"),
                    (window.location.href = "../pages/education.php");
                },
                !1
            );
        var i = document.getElementById("healthcare");
        i &&
            i.addEventListener("click", function (e) {
                localStorage.setItem("activeTab", "org-healthcare"),
                logevent("click_Happierme_For_healthcare", "index.php"),
                setActiveNav("organisation");
                (window.location.href = "../pages/healthcare.php");
            });
        var c = document.getElementById("pricing");
        c &&
            c.addEventListener(
                "click",
                function (e) {
                    localStorage.setItem("activeTab", "pricing"), 
                    setActiveNav("pricing");
                    logevent("Click_Pricing", "index.php#div_subscription"), (window.location.href = "../index.php#div_subscription");
                },
                !1
            );
        var l = document.getElementById("teenagersHeaderClick");
        l &&
            l.addEventListener("click", function () {
                localStorage.setItem("programType", "11"),
                logevent("click_teenagers_click", "index.php"),
                setActiveNav("teenagersHeaderClick");
                (window.location.href = "../pages/teenagers.php");
            });
        
        // Handle partnership click
        var p = document.getElementById("partnership");
        p &&
            p.addEventListener("click", function () {
                setActiveNav("partnership");
                logevent("click_partnership", "index.php");
                (window.location.href = "../pages/partnership.php");
            });
            
        var s = window.location.href;
        // Set active state based on current URL
        if (s.includes("blogs")) {
            setActiveNav("blogs");
        } else if (s.includes("work.php")) {
               setActiveNav("organisation");
            setActiveNav("work");
        } else if (s.includes("healthcare.php")) {
               setActiveNav("organisation");
            setActiveNav("healthcare");
        } else if (s.includes("education.php")) {
               setActiveNav("organisation");
            setActiveNav("education");
        } else if (s.includes("index.php#div_subscription")) {
            setActiveNav("pricing");
        } else if (s.includes("about")) {
            setActiveNav("AboutUs");
        } else if (s.includes("pages/teenagers.php")) {
            setActiveNav("teenagersHeaderClick");
        } else if (s.includes("partnership.php")) {
            setActiveNav("partnership");
        }
    }, 200),
    "true" == localStorage.getItem("isDownloadHide") && this.closeElement();
var adults = document.getElementById("adults");
adults &&
    adults.addEventListener("click", function () {
        window.location.href = url+"/adults/intro/intro-carousel";
    });
var teenagers = document.getElementById("teenagers");
teenagers &&
    teenagers.addEventListener("click", function () {
        window.location.href = url+"/teenagers/intro-carousel";
    });

var viewAllSucessStories = document.getElementById("viewallsuccessstories");
viewAllSucessStories && viewAllSucessStories.addEventListener("click", function () {
    logevent("click_ViewAll_Success_Stories", "index.php");
    window.location.href = url+"/adults/testimonials";
}) ;   

const requestDemo = document.getElementById("Request-Demo");
function closeElement() {
    localStorage.setItem("isDownloadHide", !0);
    var e = document.getElementById("closeableElement");
    if(e){
        (e.style.display = "none"), e.classList.remove("display_df_none");
    }
    var t = document.getElementById("scrollTopArrow");
    if(t){
        "Desktop" == type ? t.classList.remove("mb15px") : t.classList.remove("mb-8rem");
    }
}

requestDemo &&
    requestDemo.addEventListener("click", () => {
        var e = window.location.href;
        e.includes("work.php") && logevent("click_Request_a_demo", "work.php"),
            e.includes("healthcare.php") && logevent("click_Request_a_demo", "healthcare.php"),
            e.includes("education.php") && logevent("click_Request_a_demo", "education.php");
        const t = document.getElementById("email").value,
            n = document.getElementById("name").value,
            o = document.getElementById("company").value,
            a = document.getElementById("country").value;
        if (!(t && n && o && a && "" != n && "" != t && "" != o && "" != a)) return alert("All fields must be filled out"), !1;
        if(!validateEmail(t)){
            return alert("Please enter valid email"), !1;
        }
        const i = { Email_Id: "team@happierme.app", Subject: "Request a demo", Body: `Name : ${n} Company: ${o} Country :${a}  Email :${t}` };
        fetch("https://humanwisdom.info/api/SendMail", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(i) })
            .then((e) => e.json())
            .then((e) => {
                console.log("Success:", e),
                    (document.getElementById("email").value = ""),
                    (document.getElementById("name").value = ""),
                    (document.getElementById("company").value = ""),
                    (document.getElementById("country").value = ""),
                    alert("Form submitted successfully!");
            })
            .catch((e) => {
                console.error("Error:", e), alert("An error occurred. Please try again.");
            });
    });
const nfsnContactForm = document.getElementById("nfsn-contact-form");
nfsnContactForm &&
    nfsnContactForm.addEventListener("click", () => {
        const e = document.getElementById("nfsn-message").value,
            t = document.getElementById("nfsn-email").value,
            n = document.getElementById("nfsn-name").value;
        if (!t || !n || !e || "" == n || "" == t || "" == e) return alert("All fields must be filled out"), !1;
        const o = { Email_Id: "team@happierme.app", Subject: "NFSN-Get in touch", Body: `Name : ${n} Work Email : ${t} Message :${e}` };
        fetch("https://humanwisdom.info/api/SendMail", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) })
            .then((e) => e.json())
            .then((e) => {
                console.log("Success:", e), (document.getElementById("nfsn-message").value = ""), (document.getElementById("nfsn-email").value = ""), (document.getElementById("nfsn-name").value = ""), alert("Form submitted successfully!");
            })
            .catch((e) => {
                console.error("Error:", e), alert("An error occurred. Please try again.");
            });
    }),
    setTimeout(() => {
        const e = document.getElementById("vid");
        e &&
            e.addEventListener("play", function () {
                logevent("click_play_app_preview_video", "index.php"), console.log("Video play button was clicked");
            });
        const t = document.getElementById("homeVideo");
        t &&
            t.addEventListener("play", function () {
                logevent("click_play_video_home", "index.php"), console.log("Video play button was clicked");
            });
        const n = document.getElementById("teenagerVideo");
        n &&
            n.addEventListener("play", function () {
                logevent("click_Video_play_teenagers", "teenagers.php"), console.log("Video play button was clicked");
            });
        var o = document.getElementById("viewAllBlogs");
        o &&
            o.addEventListener(
                "click",
                function (e) {
                    logevent("click_View_All_Blogs_web", "index.php"), (window.location.href = url+"/adults/blogs");
                },
                !1
            );
        ["feelbetterNow", "pathWay", "journal", "podcast", "community","partnership",
             "HapinessScore","adultsWeb","teensWeb","freeTrialMenu","freeTrialNow","openInApp1_1","openInApp1_2","openInApp2_1","openInApp2_2","openInApp3_1","openInApp3_2",
             "continueWeb","exploreAppWeb","ourStory","testimonialFooter","contactUsFooter",
             "partnershipfooter" ,"view-all-coaches","whywecreatedvideo","findoutMore","youtubeIntro","appleStore","googlePlayStore"
            ].forEach((e) => {
            const t = document.getElementById(e);
            t &&
                t.addEventListener("click", function (t) {
                         "feelbetterNow" == e? logevent("click_Feel_Better_Now_web", "index.php")
                        : "pathWay" == e ? logevent("click_Pathway_web", "index.php")
                        : "journal" == e ? logevent("click_Journal_web", "index.php")
                        : "HapinessScore" == e ? logevent("click_Happiness_Score_web", "index.php")
                        : "podcast" == e ? logevent("click_Podcast_web", "index.php")
                        : "appleStore"== e ? (logevent("click_apple_store_web", "index.php") ,(window.location.href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567"))
                        : "googlePlayStore" == e ? (logevent("click_google_play_store_web", "index.php") ,(window.location.href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US"))
                        : "community" == e ? logevent("click_Community_web", "index.php")
                        : "youtubeIntro" == e ? logevent("click_youtube_intro_web", "index.php")
                        :  "adultsWeb"==e ? (logevent("click_happierme_for_adults_web", "index.php") , (window.location.href="https://happierme.app/adults/intro/intro-carousel"))
                        : "teensWeb" == e ? (logevent("click_happierme_for_teens_web", "index.php") ,(window.location.href="https://happierme.app/teenagers/intro-carousel"))
                        : "findoutMore" == e ? (logevent("click_find_out_More_web", "index.php") ,(window.location.href="../pages/teenagers.php"))
                        : "partnership" == e ? (logevent("click_partnership_web", "index.php") ,(window.location.href="../pages/partnership.php"))
                        : "whywecreatedvideo" == e ? (logevent("whywecreatedvideo", "index.php"))
                        :"partnershipfooter" == e ? (logevent("click_partnership_footer_web", "index.php") ,(window.location.href="../pages/partnership.php"))
                         :"view-all-coaches" == e ? (logevent("click_view_all_coaches", "index.php") ,(window.location.href="https://happierme.app/adults/coach"))
                        : "openInApp1_1" == e || "openInApp1_2" == e ? (logevent("click_open_in_app_web", "index.php") ,(window.location.href="https://happierme.app/adults/curated/overcome-stress-anxiety"))
                        : "openInApp2_1" == e || "openInApp2_2" == e ? (logevent("click_open_in_app_web", "index.php") , (window.location.href="https://happierme.app/adults/curated/have-fulfilling-relationships"))
                        : "openInApp3_1" == e  || "openInApp3_2" == e ? (logevent("click_open_in_app_web", "index.php") , (window.location.href="https://happierme.app/adults/curated/wisdom-for-workplace"))
                        : "exploreAppWeb" == e ? (logevent("click_explore_on_app_web", "index.php") , ( window.location.href="https://happierme.app/adults/feel-better-now"))
                        : "ourStory" == e ? (logevent("click_our_story_footer_web", "index.php") ,   (window.location.href = "../pages/about_us.php") )
                        : "testimonialFooter" == e ? (logevent("click_testimonial_footer_web", "index.php") , (window.location.href = "https://happierme.app/adults/testimonials"))
                        : "contactUsFooter" == e ? (logevent("click_contact_us_footer_web", "index.php") , (window.location.href="https://happierme.app/adults/contact-us")) : ''
                        
                });
        });
    }, 200),
    fetchData();
var countryCode = "",
    pricingModel = "",
    defaultCurrencySymbol = "";
async function fetchData() {
    localStorage.setItem("programType",9)
    const e = await fetch("https://ipapi.co/json");
    if (!e.ok) throw new Error("Network response was not ok " + e.statusText);
    const t = await e.json();
    console.log(t), t.in_eu ? (this.countryCode = "EUR") : (this.countryCode = t.country_code_iso3);
    const n = await fetch(`https://www.humanwisdom.info/api/CountryRates/${this.countryCode}`);
    if (!n.ok) throw new Error("Network response was not ok " + n.statusText);
    {
        const e = await n.json();
        (this.pricingModel = e.filter((e) => e.ProgID == parseInt(localStorage.getItem("programType")))[0]),
            (this.defaultCurrencySymbol = pricingModel.ISOCode),
            (this.pricingModel.PerMonthAmountOnAnnual = this.formatToDecimal(this.pricingModel.Annual / 12)),
            console.log(this.pricingModel.PerMonthAmountOnAnnual),
            console.log(this.pricingModel);
        const t = document.getElementById("annualPricingModelHeading"),
            o = document.getElementById("strikeOutAnnualPricingModelHeading"),
            a = document.getElementById("totalAnnualPricingModelHeading"),
            i = document.getElementById("monthlyPricingModelHeading"),
            c = document.getElementById("spanAnnualLabel");
        o && (o.textContent = `${pricingModel.CurSymbol + pricingModel.Annual_UpperRate + getIsoCode()}/yr`),
            (t.textContent = `${pricingModel.CurSymbol + pricingModel.Annual + getIsoCode()}/yr`),
            (function () {
                c.textContent = `${this.pricingModel.CurSymbol}${this.pricingModel.PerMonthAmountOnAnnual}/mo`;
            })(),
            (i.textContent = pricingModel.CurSymbol + pricingModel.Monthly + getIsoCode() + "/mo"),
            (a.textContent = `After your free trial, the yearly subscription is ${t.textContent} and automatically renews each year until cancelled.`);
    }
}
function formatToDecimal(e) {
    return Number.isInteger(e) ? `${e}.00` : e.toFixed(2);
}
function getIsoCode() {
    return "$" == this.pricingModel.CurSymbol ? ` (${this.pricingModel.ISOCode})` : "";
}

const newsLetterForm = document.getElementById("news-contact-form");
newsLetterForm && newsLetterForm.addEventListener("click", () => {
          if(document.getElementById('closebtn')){
            document.getElementById('closebtn').click();
          }
          const  email = document.getElementById("news-email").value;
          const  name = document.getElementById("news-name").value;
            const o = { Name: name, EmailID: email };
          
            if (!(email && name && "" != email && "" != name)) return alert("All fields must be filled out"), !1;
            if(!validateEmail(email)){
                return alert("Please enter valid email"), !1;
            }
            fetch("https://www.humanwisdom.info/api/subscribe_newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) })
                .then((e) => e.json())
                .then((e) => {
                    (document.getElementById("news-email").value = ""), (document.getElementById("news-name").value = ""),alert( e?.Message ? e.Message : e );
                    
                    // Close modal and clean up backdrop
                    const modal = document.getElementById('product_view');
                    if (modal) {
                        const bsModal = new bootstrap.Modal(modal);
                        bsModal.hide();
                        cleanupModalBackdrop();
                    }
                })
                .catch((e) => {
                    let content = e['error']['Message'];
                    console.error("Error:", e), alert(content);
                });
    })

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
    // Convert existing accordion to Bootstrap 5.3
    convertAccordionToBootstrap53();
    
    // Initialize FAQ functionality
    initializeFAQTabs();
    initializeFAQAccordion();
    
    // Add modal hidden event listener for backdrop cleanup
    const modal = document.getElementById('product_view');
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function () {
            cleanupModalBackdrop();
        });
    }
    
    // Initialize tool tabs separately
    initializeToolTabs();
    
    // const e = document.getElementById("AnnualType");
    // e?.addEventListener("click", () => {
    //     window.location.href = url+"/adults/subscription/start-your-free-trial";
    // });
    // const t = document.getElementById("teenagers-AnnualType");
    // t?.addEventListener("click", () => {
    //     window.location.href = url+"/teenagers/subscription/start-your-free-trial";
    // });
});

$(document).ready(function(){
  
    $('.popup-btn').on('click', function(){
      $('.video-popup').fadeIn('slow');
      return false;
    });
    
    $('.popup-bg').on('click', function(){
      $('.video-popup').slideUp('slow');
      return false;
    });
    
     $('.close-btn').on('click', function(){
       $('.video-popup').fadeOut('slow');
        return false;
     });
    
    // Convert existing accordion to Bootstrap 5.3
    convertAccordionToBootstrap53();
    
    // Initialize FAQ functionality
    initializeFAQTabs();
    initializeFAQAccordion();
    
    // Initialize tool tabs separately to avoid conflicts
    initializeToolTabs();
    
    // Add modal hidden event listener for backdrop cleanup
    const modal = document.getElementById('product_view');
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function () {
            cleanupModalBackdrop();
        });
    }
    
    // Initialize Bootstrap tabs with conflict resolution
    function initializeTabs() {
        console.log('Initializing tabs...');
        
        // Remove any existing event handlers to prevent conflicts
        $('a[data-toggle="tab"]').off('click');
        $('.nav-tabs a').off('click');
        
        // Initialize Bootstrap 5.3 tabs for FAQ tabs only
        $('.tab_faqs a[data-bs-toggle="tab"]').on('click', function (e) {
            e.preventDefault();
            console.log('FAQ Tab clicked:', $(this).attr('href'));
            const target = $(this).attr('href');
            const tab = new bootstrap.Tab(this);
            tab.show();
        });
        
        // Ensure FAQ tabs work on page load
        $('.tab_faqs a').on('click', function (e) {
            e.preventDefault();
            console.log('FAQ Nav tab clicked:', $(this).attr('href'));
            const target = $(this).attr('href');
            const tab = new bootstrap.Tab(this);
            tab.show();
        });
        
        // Initialize FAQ tabs with proper state management
        $('.tab_faqs a[data-toggle="tab"], .tab_faqs a[data-bs-toggle="tab"]').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                console.log('FAQ Tab clicked:', target);
                
                // Update active states for FAQ tabs only
                $('.tab_faqs li').removeClass('active');
                $(this).parent().addClass('active');
                
                // Show the target FAQ tab content
                $('.tc_faqs .tab-pane').removeClass('show active');
                $(target).addClass('show active');
                
                // Trigger Bootstrap 5.3 tab show
                const tab = new bootstrap.Tab(this);
                tab.show();
                
                console.log('FAQ Tab activated:', target);
            });
        });
        
        console.log('FAQ Tabs initialized successfully');
    }
    
    // Initialize tabs immediately
    initializeTabs();
    
    // Re-initialize tabs after a short delay to handle any loading issues
    setTimeout(function() {
        initializeTabs();
    }, 500);
    
    // Add click event listeners for debugging
    $('.tab_faqs a').on('click', function() {
        console.log('FAQ Tab clicked via direct listener:', $(this).attr('href'));
    });
    
    // Newsletter popup test button
    const testNewsPopupBtn = document.getElementById('testNewsPopup');
    if (testNewsPopupBtn) {
        testNewsPopupBtn.addEventListener('click', function() {
            console.log('Manual newsletter popup trigger clicked');
            sessionStorage.removeItem('newsLetterOpened'); // Reset for testing
            
            const newsPopupBtn = document.getElementById('newsPopup');
            if (newsPopupBtn) {
                newsPopupBtn.click();
            } else {
                // Fallback: show modal directly using Bootstrap 5.3
                const modal = document.getElementById('product_view');
                if (modal) {
                    console.log('Showing modal directly...');
                    const bsModal = new bootstrap.Modal(modal);
                    bsModal.show();
                }
            }
        });
    }
    
    // Ensure Bootstrap 5.3 modal functionality works
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-bs-toggle="modal"]')) {
            const target = e.target.getAttribute('data-bs-target');
            if (target) {
                const modal = document.querySelector(target);
                if (modal) {
                    const bsModal = new bootstrap.Modal(modal);
                    bsModal.show();
                }
            }
        }
    });
    
});