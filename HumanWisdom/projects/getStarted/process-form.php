<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $country = $_POST['country'];

    // Validate the inputs (optional, but recommended)
    if (empty($name) || empty($company) || empty($country)) {
        echo "Please fill out all fields.";
        exit;
    }

    $to = "pavish@gmail.com";
    $subject = "Form Submission";
    $message = "Name: " . htmlspecialchars($name) . "\n" .
               "Company Name: " . htmlspecialchars($company) . "\n" .
               "Country: " . htmlspecialchars($country);
    $headers = "From: no-reply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email successfully sent to $to...";
    } else {
        echo "Email sending failed...";
    }
}
?>
