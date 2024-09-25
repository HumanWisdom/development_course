const userAgent = navigator.userAgent;
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-1WBHRGL7VH");
function logevent(eventname, ScreenName) {
    gtag("event", eventname, { screen_name: ScreenName });
}
type = "Desktop";
if (/Mobi|Android/i.test(userAgent)) {
    type = "Mobile";
} else if (/Tablet|iPad|PlayBook/i.test(userAgent) || (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent))) {
    type = "Tablet";
} else {
    type = "Desktop";
}
var element = document.getElementById("scrollTopArrow");
if (element) {
    if (type == "Desktop") {
        element.classList.add("mb15px");
    } else {
        element.classList.add("mb-8rem");
    }
}
const requestDemoForWork = document.getElementById("requestDemoForWork");
if (requestDemoForWork) {
    requestDemoForWork.addEventListener("click", function (e) {
        logevent("click_Request_a_demo", "work.php");
    });
}
setTimeout(() => {
    var aboutUs = document.getElementById("AboutUs");
    if (aboutUs) {
        aboutUs.addEventListener(
            "click",
            function (e) {
                localStorage.setItem("activeTab", "aboutUs");
                window.location.href = "../pages/about_us.php";
            },
            !1
        );
    }
    var blogs = document.getElementById("blogs");
    if (blogs) {
        blogs.addEventListener(
            "click",
            function (e) {
                localStorage.setItem("activeTab", "blogs");
                window.location.href = "../blogs/blog_index.php";
            },
            !1
        );
    }

    var viewAllBlogs = document.getElementById("viewAllBlogs");
    if (viewAllBlogs) {
        viewAllBlogs.addEventListener(
            "click",
            function (e) {
                logevent("click_View_All_Blogs_web", "index.php");
                window.location.href = "https://happierme.app/adults/blogs";
            },
            !1
        );
    }

    var organisation = document.getElementById("organisation");
    if (organisation) {
        organisation.addEventListener("click", function (e) { }, !1);
    }
    var work = document.getElementById("work");
    if (work) {
        work.addEventListener(
            "click",
            function (e) {
                localStorage.setItem("activeTab", "org-work");
                work.classList.add("active_nav");
                window.location.href = "../pages/work.php";
            },
            !1
        );
    }
    var education = document.getElementById("education");
    if (education) {
        education.addEventListener(
            "click",
            function (e) {
                localStorage.setItem("activeTab", "org-work");
                education.classList.add("active_nav");
                window.location.href = "../pages/education.php";
            },
            !1
        );
    }
    var healthcare = document.getElementById("healthcare");
    if (healthcare) {
        healthcare.addEventListener(
            "click",
            function (e) {
                localStorage.setItem("activeTab", "org-healthcare");
                work.classList.add("active_nav");
                window.location.href = "../pages/healthcare.php";
            },
        );
    }
    var pricing = document.getElementById("pricing");
    if (pricing) {
        pricing.addEventListener(
            "click",
            function (e) {
                localStorage.setItem("activeTab", "pricing");
                work.classList.add("active_nav");
                logevent("Click_Pricing", "index.php#div_subscription");
                window.location.href = "../index.php#div_subscription";
            },
            !1
        );
    }
    var teenagersHeader = document.getElementById("teenagersHeaderClick");
    if (teenagersHeader) {
        teenagersHeader.addEventListener("click", function () {
            localStorage.setItem("programType", "11");
            window.location.href = "../pages/teenagers.php";
        });
    }
    var tabName = window.location.href;
    if (tabName.includes("blogs")) {
        blogs?.classList.add("active_nav");
    }
    if (tabName.includes("work.php")) {
        organisation?.classList.add("active_nav");
        work?.classList.add("active_nav");
    }
    if (tabName.includes("healthcare.php")) {
        organisation?.classList.add("active_nav");
        healthcare?.classList.add("active_nav");
    }
    if (tabName.includes("education.php")) {
        organisation?.classList.add("active_nav");
        education?.classList.add("active_nav");
    }
    if (tabName.includes("index.php#div_subscription")) {
        pricing?.classList.add("active_nav");
    }
    if (tabName.includes("about")) {
        aboutUs?.classList.add("active_nav");
    }
    if (tabName.includes("pages/teenagers.php")) {
        teenagersHeader?.classList.add("active_nav");
    }
}, 200);
if (localStorage.getItem("isDownloadHide") == "true") {
    this.closeElement();
}
var adults = document.getElementById("adults");
if (adults) {
    adults.addEventListener("click", function () {
        window.location.href = "https://happierme.app/adults/intro/intro-carousel";
    });
}
var teenagers = document.getElementById("teenagers");
if (teenagers) {
    teenagers.addEventListener("click", function () {
        window.location.href = "https://happierme.app/teenagers/intro-carousel";
    });
}
const requestDemo = document.getElementById("Request-Demo");
if (requestDemo) {
    requestDemo.addEventListener("click", () => {
        var tabName = window.location.href;
        if (tabName.includes("work.php")) {
            logevent("click_Request_a_demo", "work.php");
        }
        if (tabName.includes("healthcare.php")) {
            logevent("click_Request_a_demo", "healthcare.php");
        }
        if (tabName.includes("education.php")) {
            logevent("click_Request_a_demo", "education.php");
        }
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const company = document.getElementById("company").value;
        const country = document.getElementById("country").value;
        if (!email || !name || !company || !country || name == "" || email == "" || company == "" || country == "") {
            alert("All fields must be filled out");
            return !1;
        }
        const data = { Email_Id: 'team@happierme.app', Subject: "Request a demo", Body: `Name : ${name} Company: ${company} Country :${country}` };
        fetch("https://humanwisdom.info/api/SendMail", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Form submitted successfully!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
    });
}
function closeElement() {
    localStorage.setItem("isDownloadHide", !0);
    var closeElement = document.getElementById("closeableElement");
    closeElement.style.display = "none";
    closeElement.classList.remove("display_df_none");
    var element = document.getElementById("scrollTopArrow");
    if (type == "Desktop") {
        element.classList.remove("mb15px");
    } else {
        element.classList.remove("mb-8rem");
    }
}


const nfsnContactForm = document.getElementById('nfsn-contact-form');
if (nfsnContactForm) {
    nfsnContactForm.addEventListener('click', () => {
        const message = document.getElementById('nfsn-message').value;
        const email = document.getElementById('nfsn-email').value;
        const name = document.getElementById('nfsn-name').value;

        if (!email || !name || !message || name == '' || email == '' || message == '') {
            alert("All fields must be filled out");
            return false;
        }
        // Prepare the data to be sent to the API
        const data = {
            Email_Id: 'team@happierme.app',
            Subject: 'NFSN-Get in touch',
            Body: `Name : ${name} Work Email : ${email} Message :${message}`
        };

        // Send data to the API using Fetch API
        fetch('https://humanwisdom.info/api/SendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    });

    const videoElement = document.getElementById('vid');
    if (videoElement) {
        // Add an event listener for the 'play' event
        videoElement.addEventListener('play', function () {
            logevent('click_play_app_preview_video', 'index.php')
            console.log('Video play button was clicked');
        });
    }

    const homeVideo = document.getElementById('homeVideo');
    if (homeVideo) {
        // Add an event listener for the 'play' event
        homeVideo.addEventListener('play', function () {
            logevent('click_play_video_home', 'index.php')
            console.log('Video play button was clicked');
        });
    }

    const teenagerVideo = document.getElementById('teenagerVideo');
    if (teenagerVideo) {
        // Add an event listener for the 'play' event
        teenagerVideo.addEventListener('play', function () {
            logevent('click_Video_play_teenagers', 'teenagers.php')
            console.log('Video play button was clicked');
        });
    }
    
    const tabIds = ['feelbetterNow', 'pathWay', 'journal', 'podcast', 'community', 'HapinessScore'];
    tabIds.forEach(id => {
        const tabElement = document.getElementById(id);
        if (tabElement) {
            tabElement.addEventListener('click', function (event) {
                if (id == 'feelbetterNow') {
                    logevent('click_Feel_Better_Now_web', 'index.php')
                } else if (id == 'pathWay') {
                    logevent('click_Pathway_web', 'index.php')
                } else if (id == 'journal') {
                    logevent('click_Journal_web', 'index.php')
                }
                else if (id == 'HapinessScore') {
                    logevent('click_Happiness_Score_web', 'index.php')
                }
                else if (id == 'podcast') {
                    logevent('click_Podcast_web', 'index.php')
                }
                else if (id == 'community') {
                    logevent('click_Community_web', 'index.php')
                }
            });
        }
    });
}