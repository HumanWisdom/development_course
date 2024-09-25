<a href="#" id="scrollTopArrow" class="scroll-top center_flex"><i class="bi bi-arrow-up-short"></i></a>

<div id="preloader"></div>

<!-- Vendor JS Files -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../assets/vendor/aos/aos.js"></script>
<script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="../assets/vendor/purecounter/purecounter_vanilla.js"></script>
<script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="../assets/vendor/php-email-form/validate.js"></script>
<script src="../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>

<!-- Template Main JS File -->
<script src="../assets/js/main.js"></script>
<script src="../scripts/index.js"></script>

<!-- <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script> -->
<script type="text/javascript" src="https:///code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="https:///code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

<script src="https://kit.fontawesome.com/e7db147a51.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></script>

<!-- subscription -->
<script>
fetchData();
var countryCode = "";
var pricingModel = ""
var defaultCurrencySymbol = "";
// Frontend JavaScript code
async function fetchData() {
    const response = await fetch('https://ipapi.co/json');

    if (!response.ok) 
    {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    
    const data = await response.json();
    
    console.log(data);
    
    if (data['in_eu']) 
    {
        this.countryCode = 'EUR'
    } 
    else 
    {
        this.countryCode = data['country_code_iso3']
    }

    const pricing = await fetch(`https://www.humanwisdom.info/api/CountryRates/${this.countryCode}`);
    
    if (!pricing.ok) 
    {
        throw new Error('Network response was not ok ' + pricing.statusText);
    } 
    else 
    {
        const pricingData = await pricing.json();
        
        this.pricingModel = pricingData.filter((d) => d["ProgID"] == localStorage.getItem('programType'))[0];
        
        this.defaultCurrencySymbol = pricingModel["ISOCode"]
        
        this.pricingModel.PerMonthAmountOnAnnual = this.formatToDecimal((this.pricingModel.Annual / 12));
        console.log(this.pricingModel.PerMonthAmountOnAnnual);
        
        
        console.log(this.pricingModel);

        const annualPricingModelHeading = document.getElementById('annualPricingModelHeading');
        
        const strikeOutAnnualPricingModelHeading  = document.getElementById('strikeOutAnnualPricingModelHeading');
        
        const totalAnnualPricingModelHeading = document.getElementById('totalAnnualPricingModelHeading');

        const monthlyPricingModelHeading = document.getElementById('monthlyPricingModelHeading');

        const spanAnnualLabel = document.getElementById('spanAnnualLabel');

        function annualPricingModelHeadingDisplay() 
        {
            annualPricingModelHeading.textContent = `${pricingModel.CurSymbol + pricingModel.Annual + getIsoCode()}/yr`;
        }

        function strikeOutAnnualPricingModelHeadingDisplay() 
        {
            if(strikeOutAnnualPricingModelHeading){
                strikeOutAnnualPricingModelHeading.textContent = `${pricingModel.CurSymbol + pricingModel.Annual_UpperRate + getIsoCode()}/yr`;
            }
        }
        
        function spanAnnualLabelDisplay() 
        {
            spanAnnualLabel.textContent =  `${this.pricingModel.CurSymbol}${this.pricingModel.PerMonthAmountOnAnnual}/mo`
        }

        function totalAnnualPricingModelHeadingDisplay() 
        {
            totalAnnualPricingModelHeading.textContent = `After your free trial, the yearly subscription is ${annualPricingModelHeading.textContent} and automatically renews each year until cancelled.`
        }

        function monthlyPricingModelHeadingDisplay() 
        {
            monthlyPricingModelHeading.textContent = pricingModel.CurSymbol + pricingModel.Monthly + getIsoCode()+'/mo';
        }

        strikeOutAnnualPricingModelHeadingDisplay();
        
        annualPricingModelHeadingDisplay();
        
        spanAnnualLabelDisplay();
        
        monthlyPricingModelHeadingDisplay();
        
        totalAnnualPricingModelHeadingDisplay();
    }
}

function formatToDecimal(value) 
{
    if (Number.isInteger(value)) 
    {
        return `${value}.00`;
    }
    return value.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    const AnnualType = document.getElementById('AnnualType');
    AnnualType?.addEventListener('click', () => {
    window.location.href="https://happierme.app/adults/subscription/try-free-and-subscribe"
    });
  
    const teenagersApp = document.getElementById('teenagers-AnnualType');
    teenagersApp?.addEventListener('click', () => {
    window.location.href="https://happierme.app/teenagers/subscription/try-free-and-subscribe"
    });


    // setTimeout(() => {
    //     const requestDemo = document.getElementById('Request-Demo');
    //     if(requestDemo){
    //         requestDemo.addEventListener('click', () => {
    //         const email = document.getElementById('email').value;
    //         const name = document.getElementById('name').value;
    //         const company = document.getElementById('company').value;
    //         const country = document.getElementById('country').value;
    //         if (!email || !name || !company || !country || name =='' || email=='' || company == '' || country == '') {
    //             alert("All fields must be filled out");
    //             return false;
    //         }
    //         // Prepare the data to be sent to the API
    //         const data = {
    //             Email_Id: 'team@happierme.app',
    //             Subject: 'Request a demo',
    //             Body: `Name :${name} Company:${company} Work Email:${email} Country:${country}`
    //         };

    //         // Send data to the API using Fetch API
    //         fetch('https://www.humanwisdom.info/api/SendMail', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Success:', data);
                
    //             // Clear the form fields
    //             document.getElementById('email').value = '';
    //             document.getElementById('name').value = '';
    //              document.getElementById('company').value='';
    //             document.getElementById('country').value = '';
    //             alert('Form submitted successfully!');
                
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //             alert('An error occurred. Please try again.');
    //         });
    // });
    //     }
       
    // }, 2000);
  

    // const MonthlyType = document.getElementById('MonthlyType');
    // MonthlyType.addEventListener('click', () => {
    //   addCountryLinks(countries);
    // });
});

function getIsoCode() 
{
    if (this.pricingModel.CurSymbol == '$') 
    {
        return ` (${this.pricingModel.ISOCode})`;
    }
    return '';
}
</script>
<!-- /subscription -->

<script>
$('.owl_container .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 40,
    nav: true,
    autoWidth: true,
    dots: false,
    navText: [
        '<span class="glyphicon glyphicon glyphicon-menu-left"></span>',
        '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'
    ],
    navContainer: '.owl_container .owl-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});

$('.owl_coach .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 40,
    nav: true,
    autoWidth: true,
    dots: false,
    navText: [
        '<span class="glyphicon glyphicon glyphicon-menu-left"></span>',
        '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'
    ],
    navContainer: '.owl_coach .owl-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});

$('.owl_blog .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 40,
    nav: true,
    autoWidth: true,
    dots: false,
    navText: [
        '<span class="glyphicon glyphicon glyphicon-menu-left"></span>',
        '<span class="glyphicon glyphicon glyphicon-menu-right"></span>'
    ],
    navContainer: '.owl_blog .owl-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});
$( window ).resize( function() {
    if (window.matchMedia('(max-width: 768px)').matches)
    {
    //$('.btn_tff').attr('href','https://onelink.to/qsptex');
    // $('.btn_tff').attr('href','#div_subscription');
    $('.btn_tff').attr('href','https://happierme.app/splash_options.html');
    } else {
    // $('.btn_tff').attr('href','#div_subscription');
    $('.btn_tff').attr('href','https://happierme.app/splash_options.html');
    } 
});
$( window ).resize();

$( window ).resize( function() {
    if (window.matchMedia('(max-width: 768px)').matches)
    {
        $('.btn_tff_tn').attr('href','https://onelink.to/qsptex');
    } 
    else 
    {
        $('.btn_tff_tn').attr('href','https://happierme.app/splash_options.html');
    }
});
$( window ).resize();

/*$('.search-button').click(function () {
    $('.search-button').css({'position':'absolute', 'right':'0'});
});*/

$('.search-button').click(function () 
{
    $('.search-button').toggleClass('cp_absolute');
    $('.fc_web_search').focus();
});

jQuery(function($) 
{
    var path = window.location.href;
    $('li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active_nav');
            //$('.badge_new').addClass('bg_badge');
        }

    });
    //$('.badge_new').removeClass('bg_badge');
});

$( document ).ready(function() {   
    $('.blog_links a').click(function () {
        $('.blog_main a').css({'color':'black'});
        //alert('hi');
        // $(".blog_links").click(function (e) { 
        // $(".navbar ul li a .blog_main").addClass('active_nav');
    });  
});

/*
$( document ).ready(function() {  
    $('.teens').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();
        $('.badge_new').css({'background':'#834B66'});
        $('.teens').css({'text-decoration':'none','color':'#834B66'});
    });
});
*/


const btnColor = document.querySelector(".teens");
if(btnColor){
  btnColor.addEventListener('click', changeBtnColor);
}
const badge_new = document.querySelector(".badge_new");
if(badge_new){
    const changeBtnColor = (e) => {
    //alert('hi');
    //e.preventDefault(); 
    if(badge_new.classList.contains("bg_badge"))
    {
        badge_new.classList.remove("bg_badge");
    }
    else
    {
        e.preventDefault(); 
        badge_new.classList.add("bg_badge");
    }
  
  // or use:
  // btnColor.classList.toggle("red");
};
}

</script>