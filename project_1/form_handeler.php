<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Collect form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['massage']; // Note: 'massage' matches your form's typo

// Set email headers
$to = "sudiptodas01537@gmail.com";
$headers = "From:national-institute-of-technology-nit.netlify.app \r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
mail($to, "New Form: $subject", "Name: $name\nEmail: $email\nMessage: $message", $headers);

// Redirect after submission
header("Location: contact.html"); 
exit(); // Always exit after header redirect
?>