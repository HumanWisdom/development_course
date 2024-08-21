var adults = document.getElementById("adults");

// Add a click event listener to the button
adults.addEventListener("click", function() {
    // This function will be executed when the button is clicked
window.location.href = "https://happierme.app/adults/intro/intro-carousel";
});

// Get the button element by its id
var teenagers = document.getElementById("teenagers");
// Add a click event listener to the button
teenagers.addEventListener("click", function() {
    // This function will be executed when the button is clicked
window.location.href = "https://happierme.app/teenagers/intro-carousel";
});


    const requestDemo = document.getElementById('Request-Demo');
    
    requestDemo.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const country = document.getElementById('country').value;

            if (!email || !name || !company || !country || name =='' || email=='' || company == '' || country == '') {
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


    function closeElement() {
        // Hides the element with the ID 'closeableElement'
       var closeElement = document.getElementById('closeableElement')
       closeElement.style.display = 'none';
       closeElement.classList.remove('display_df_none'); 
        var element = document.getElementById('scrollTopArrow');
        element.classList.remove('mb-8rem');
    }
    // const MonthlyType = document.getElementById('MonthlyType');
    // MonthlyType.addEventListener('click', () => {
    //   addCountryLinks(countries);
    // });

