const userAgent = navigator.userAgent;
const isLoggedIn = localStorage.getItem('isloggedin') == 'T';
const url = "https://happierme.app";
//const url ="https://staging.happierme.app"
//const url ="http://localhost:4200"
function gtag() {
    dataLayer.push(arguments);
}
function logevent(e, t) {
    gtag("event", e, { screen_name: t });
}


const loginClick = document.getElementById('loginClick');
if (loginClick) {
    // Add an event listener for the 'play' event
    loginClick.addEventListener('click', function () {
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        window.location.href = "../pages/splash_options.php";
    });
}

const happiermeTryForFree =  document.getElementById('happiermeTryForFree');
if (happiermeTryForFree) {
    // Add an event listener for the 'play' event
    happiermeTryForFree.addEventListener('click', function () {
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        logevent("click_start_your_free_trial_now", "index.php")
        window.location.href = "../pages/splash_options.php";
    });
}

const tryhappiermeClick = document.getElementsByClassName('tryhappiermeClick');
if (tryhappiermeClick[0]) {
    // Add an event listener for the 'play' event
    tryhappiermeClick[0].addEventListener('click', function () {
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        window.location.href = "../pages/splash_options.php";
    });
}

const pricingSelectBtn = document.getElementById('PricingSelectBtn');
if (pricingSelectBtn) {
    // Add an event listener for the 'play' event
    pricingSelectBtn.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        logevent("click_continue_web", "index.php");
        window.location.href = "../pages/splash_options.php";
    });
}

const discoverSectionPricingClick = document.getElementById('discoverSectionPricingClick');
if (discoverSectionPricingClick) {
    // Add an event listener for the 'play' event
    discoverSectionPricingClick.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        window.location.href = "../pages/splash_options.php";
    });
}

const teenagersLogin = document.getElementById('teenagersLogin');
if (teenagersLogin) {
    teenagersLogin.addEventListener('click', function () {
        window.location.href = url+"/teenagers/onboarding/login";
    });
}

const teenagersPricing = document.getElementById('teenagersPricing');
if (teenagersPricing) {
    teenagersPricing.addEventListener('click', function () {
        window.location.href = url+"/teenagers/subscription/start-your-free-trial";
    });
}

const teenagersClick = document.getElementById('teenagersClick');
if (teenagersClick) {
    // Add an event listener for the 'play' event
    teenagersClick.addEventListener('click', function () {
        if(localStorage.getItem('pricing')=='true'){
           window.location.href = url+"/teenagers/subscription/start-your-free-trial";
        }
        else if(localStorage.getItem('login')=='true'){
           window.location.href = url+"/teenagers/onboarding/login";
        }
        else {
            window.location.href = url + "/teenagers/onboarding/login";
        }
    });
}

const teenagerCoverClick = document.getElementById('teenagerCoverClick');
if (teenagerCoverClick) {
    // Add an event listener for the 'play' event
    teenagerCoverClick.addEventListener('click', function () {
           window.location.href = url+"/teenagers/onboarding/login/";
    });
}

const adultsClick = document.getElementById('adultsClick');
if (adultsClick) {
    // Add an event listener for the 'play' event
    adultsClick.addEventListener('click', function () {
        if(localStorage.getItem('pricing')=='true'){
            localStorage.setItem('pricing',false);
           window.location.href = url+"/adults/subscription/start-your-free-trial";
        }
        else if(localStorage.getItem('login')=='true'){
            localStorage.setItem('login',false);
           window.location.href = url+"/adults/onboarding/login";
        } else {
            window.location.href = url + "/adults/onboarding/login";
        }
    });
}

(window.dataLayer = window.dataLayer || []),
    gtag("js", new Date()),
    gtag("config", "G-1WBHRGL7VH"),
    (type = "Desktop"),
    /Mobi|Android/i.test(userAgent) ? (type = "Mobile") : /Tablet|iPad|PlayBook/i.test(userAgent) || (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) ? (type = "Tablet") : (type = "Desktop");
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
                    localStorage.setItem("activeTab", "aboutUs"), (window.location.href = "../pages/about_us.php");
                },
                !1
            );
        var t = document.getElementById("blogs");
        t &&
            t.addEventListener(
                "click",
                function (e) {
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
                    localStorage.setItem("activeTab", "org-work"), o.classList.add("active_nav"), (window.location.href = "../pages/work.php");
                },
                !1
            );
        var a = document.getElementById("education");
        a &&
            a.addEventListener(
                "click",
                function (e) {
                    localStorage.setItem("activeTab", "org-work"), a.classList.add("active_nav"), (window.location.href = "../pages/education.php");
                },
                !1
            );
        var i = document.getElementById("healthcare");
        i &&
            i.addEventListener("click", function (e) {
                localStorage.setItem("activeTab", "org-healthcare"), o.classList.add("active_nav"), (window.location.href = "../pages/healthcare.php");
            });
        var c = document.getElementById("pricing");
        c &&
            c.addEventListener(
                "click",
                function (e) {
                    localStorage.setItem("activeTab", "pricing"), o.classList.add("active_nav"), logevent("Click_Pricing", "index.php#div_subscription"), (window.location.href = "../index.php#div_subscription");
                },
                !1
            );
        var l = document.getElementById("teenagersHeaderClick");
        l &&
            l.addEventListener("click", function () {
                localStorage.setItem("programType", "11"), (window.location.href = "../pages/teenagers.php");
            });
        var s = window.location.href;
        s.includes("blogs") && t?.classList.add("active_nav"),
            s.includes("work.php") && (n?.classList.add("active_nav"), o?.classList.add("active_nav")),
            s.includes("healthcare.php") && (n?.classList.add("active_nav"), i?.classList.add("active_nav")),
            s.includes("education.php") && (n?.classList.add("active_nav"), a?.classList.add("active_nav")),
            s.includes("index.php#div_subscription") && c?.classList.add("active_nav"),
            s.includes("about") && e?.classList.add("active_nav"),
            s.includes("pages/teenagers.php") && l?.classList.add("active_nav");
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
        ["feelbetterNow", "pathWay", "journal", "podcast", "community",
             "HapinessScore","adultsWeb","teensWeb","freeTrialMenu","freeTrialNow","openInApp",
             "continueWeb","exploreAppWeb","ourStory","testimonialFooter","contactUsFooter"].forEach((e) => {
            const t = document.getElementById(e);
            t &&
                t.addEventListener("click", function (t) {
                         "feelbetterNow" == e? logevent("click_Feel_Better_Now_web", "index.php")
                        : "pathWay" == e ? logevent("click_Pathway_web", "index.php")
                        : "journal" == e ? logevent("click_Journal_web", "index.php")
                        : "HapinessScore" == e ? logevent("click_Happiness_Score_web", "index.php")
                        : "podcast" == e ? logevent("click_Podcast_web", "index.php")
                        : "community" == e ? logevent("click_Community_web", "index.php")
                        :  "adultsWeb"==e ? (logevent("click_happierme_for_adults_web", "index.php") , (window.location.href="https://happierme.app/adults/intro/intro-carousel"))
                        : "teensWeb" == e ? (logevent("click_happierme_for_teens_web", "index.php") ,(window.location.href="https://happierme.app/teenagers/intro-carousel"))
                        : "openInApp1" == e ? (logevent("click_open_in_app_web", "index.php") ,(window.location.href="https://happierme.app/adults/curated/overcome-stress-anxiety"))
                        : "openInApp2" == e ? (logevent("click_open_in_app_web", "index.php") , (window.location.href="https://happierme.app/adults/curated/have-fulfilling-relationships"))
                        : "openInApp3" == e ? (logevent("click_open_in_app_web", "index.php") , (window.location.href="https://happierme.app/adults/curated/wisdom-for-workplace"))
                        : "exploreAppWeb" == e ? (logevent("click_explore_on_app_web", "index.php") , ( window.location.href="https://happierme.app/adults/feel-better-now"))
                        : "ourStory" == e ? (logevent("click_our_story_footer_web", "index.php") ,   (window.location.href = "../pages/about_us.php") )
                        : "testimonialFooter" == e ? (logevent("click_testimonial_footer_web", "index.php") , (window.location.href = "https://happierme.app/adults/testimonials"))
                        : "contactUsFooter" == e ? (logevent("click_contact_us_footer_web", "index.php") , (window.location.href="https://happierme.app/adults/contact-us")) : ''
                });
        });
    }, 1e3),
    fetchData();
var countryCode = "",
    pricingModel = "",
    defaultCurrencySymbol = "";
async function fetchData() {
    const e = await fetch("https://ipapi.co/json");
    if (!e.ok) throw new Error("Network response was not ok " + e.statusText);
    const t = await e.json();
    console.log(t), t.in_eu ? (this.countryCode = "EUR") : (this.countryCode = t.country_code_iso3);
    const n = await fetch(`https://www.humanwisdom.info/api/CountryRates/${this.countryCode}`);
    if (!n.ok) throw new Error("Network response was not ok " + n.statusText);
    {
        const e = await n.json();
        (this.pricingModel = e.filter((e) => e.ProgID == localStorage.getItem("programType"))[0]),
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
newsLetterForm.addEventListener("click", () => {
          const  email = document.getElementById("news-email").value;
          const  name = document.getElementById("news-name").value;
            const o = { Name: name, EmailID: email };
          
            if (!(email && name && "" != email && "" != name)) return alert("All fields must be filled out"), !1;
            if(!validateEmail(email)){
                return alert("Please enter valid email"), !1;
            }
            fetch("https://staging.humanwisdom.info/api/subscribe_newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) })
                .then((e) => e.json())
                .then((e) => {
                    (document.getElementById("news-email").value = ""), (document.getElementById("news-name").value = ""),alert( e?.Message ? e.Message : e );
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
    // const e = document.getElementById("AnnualType");
    // e?.addEventListener("click", () => {
    //     window.location.href = url+"/adults/subscription/start-your-free-trial";
    // });
    // const t = document.getElementById("teenagers-AnnualType");
    // t?.addEventListener("click", () => {
    //     window.location.href = url+"/teenagers/subscription/start-your-free-trial";
    // });
});
