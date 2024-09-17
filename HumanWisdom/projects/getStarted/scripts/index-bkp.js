

const userAgent = navigator.userAgent;

type = 'Desktop';
if (/Mobi|Android/i.test(userAgent)) {
    type = "Mobile";
} else if (/Tablet|iPad|PlayBook/i.test(userAgent) || (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent))) {
    type = "Tablet";
} else {
    type = "Desktop";
}

var element = document.getElementById('scrollTopArrow');
if (element) {
    if (type == 'Desktop') {
        element.classList.add('mb15px');
    } else {
        element.classList.add('mb-8rem');
    }
}

setTimeout(() => {
    // About US
    var aboutUs = document.getElementById('AboutUs');
    if (aboutUs) {
        aboutUs.addEventListener("click", function (e) {
            localStorage.setItem('activeTab', 'aboutUs');
            window.location.href = "../pages/about_us.php";
        }, false);
    }


    // Blogs
    var blogs = document.getElementById('blogs');
    if (blogs) {
        blogs.addEventListener("click", function (e) {
            localStorage.setItem('activeTab', 'blogs');
            window.location.href = "../blogs/blog_index.php";
        }, false);
    }


    //organisation
    var organisation = document.getElementById('organisation');
    if (organisation) {
        organisation.addEventListener("click", function (e) {
        }, false);
    }


    //work
    var work = document.getElementById('work');
    if (work) {
        work.addEventListener("click", function (e) {
            localStorage.setItem('activeTab', 'org-work');
            work.classList.add('active_nav');
            window.location.href = "../pages/work.php";
        }, false);
    }


    //education
    var education = document.getElementById('education');
    if (education) {
        education.addEventListener("click", function (e) {
            localStorage.setItem('activeTab', 'org-work');
            education.classList.add('active_nav');
            window.location.href = "../pages/education.php";
        }, false);
    }


    //healthcare
    var healthcare = document.getElementById('healthcare');
    if (healthcare) {
        healthcare.addEventListener("click", function (e) {
            localStorage.setItem('activeTab', 'org-healthcare');
            work.classList.add('active_nav');
            window.location.href = "../pages/healthcare.php";
        }, false);
    }



    //pricing
    var pricing = document.getElementById('pricing');
    if (pricing) {
        pricing.addEventListener("click", function (e) {
            localStorage.setItem('activeTab', 'pricing');
            work.classList.add('active_nav');
            window.location.href = "../index.php#div_subscription";
        }, false);
    }

    // teenagersHeader 
    var teenagersHeader = document.getElementById("teenagersHeaderClick");
    if (teenagersHeader) {
        teenagersHeader.addEventListener("click", function () {
            localStorage.setItem("programType", '11');
            window.location.href = "../pages/teenagers.php";
        });
    }

    // making tab active
    var tabName = window.location.href;
    if (tabName.includes('blogs')) {
        blogs?.classList.add('active_nav');
    } if (tabName.includes('work.php')) {
        organisation?.classList.add('active_nav');
        work?.classList.add('active_nav');
    } if (tabName.includes('healthcare.php')) {
        organisation?.classList.add('active_nav');
        healthcare?.classList.add('active_nav');
    } if (tabName.includes('education.php')) {
        organisation?.classList.add('active_nav');
        education?.classList.add('active_nav');
    } if (tabName.includes('index.php#div_subscription')) {
        pricing?.classList.add('active_nav');
    } if (tabName.includes('about')) {
        aboutUs?.classList.add('active_nav');
    } if (tabName.includes('pages/teenagers.php')) {
        teenagersHeader?.classList.add('active_nav');
    }

}, 200);


if (localStorage.getItem('isDownloadHide') == 'true') {
    this.closeElement();
}

var adults = document.getElementById("adults");
if (adults) {
    adults.addEventListener("click", function () {
        // This function will be executed when the button is clicked
        window.location.href = "https://happierme.app/adults/intro/intro-carousel";
    });
}
// Add a click event listener to the button


// Get the button element by its id
var teenagers = document.getElementById("teenagers");
if (teenagers) {
    // Add a click event listener to the button
    teenagers.addEventListener("click", function () {
        // This function will be executed when the button is clicked
        window.location.href = "https://happierme.app/teenagers/intro-carousel";
    });
}

// Get the button element by its id



const requestDemo = document.getElementById('Request-Demo');
if (requestDemo) {
    requestDemo.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const company = document.getElementById('company').value;
        const country = document.getElementById('country').value;

        if (!email || !name || !company || !country || name == '' || email == '' || company == '' || country == '') {
            alert("All fields must be filled out");
            return false;
        }
        // Prepare the data to be sent to the API
        const data = {
            Email_Id: email,
            Subject: 'Request a demo',
            Body: `Name : ${name} Company: ${company} Country :${country}`
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


}


function closeElement() {
    localStorage.setItem('isDownloadHide', true);
    // Hides the element with the ID 'closeableElement'
    var closeElement = document.getElementById('closeableElement')
    closeElement.style.display = 'none';
    closeElement.classList.remove('display_df_none');
    var element = document.getElementById('scrollTopArrow');
    if (type == 'Desktop') {
        element.classList.remove('mb15px');
    } else {
        element.classList.remove('mb-8rem');
    }
}
// const MonthlyType = document.getElementById('MonthlyType');
// MonthlyType.addEventListener('click', () => {
//   addCountryLinks(countries);
// });

