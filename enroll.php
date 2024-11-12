<?php
require 'vendor/autoload.php'; // Load PHPMailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Error reporting
ini_set('display_errors', 1); // Display errors on screen

include('config.php');

global $conn;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $conn->real_escape_string($_POST['stxtenqname']);
    $mob = $conn->real_escape_string($_POST['stxtenqmobile']);
    $email = $conn->real_escape_string($_POST['stxtenqemail']);

    // Validation
    $errors = [];

    if (empty($name) || strlen($name) < 3 || strlen($name) > 30) {
        $errors[] = "Please enter a valid name (3-30 characters).";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    if (!preg_match("/^[6-9][0-9]{9}$/", $mob)) {
        $errors[] = "Please enter a valid 10-digit mobile number starting with 6-9.";
    }

    if (empty($errors)) {
        // Insert data into the database
        $sql = "INSERT INTO `enroll`(`Name`, `Mob`, `Email`) VALUES ('$name', '$mob', '$email')";

        if ($conn->query($sql) === TRUE) {
            $message = "Data inserted successfully!";
            $redirectUrl = "form_page.php"; // Replace with the URL of your form page

            $mail = new PHPMailer(true);
            try {
                // Server settings
                $mail->isSMTP();
                $mail->Host       = 'smtpout.secureserver.net'; // Replace with your SMTP host
                $mail->SMTPAuth   = true;
                $mail->Username   = 'muthu@smiksystems.com'; // Replace with your SMTP username
                $mail->Password   = 'lsikwekshdfiw#$@'; // Replace with your SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable SSL encryption
                $mail->Port       = 465;

                // Send email to the user
                $mail->setFrom('muthu@smiksystems.com', 'Muthu'); // Replace with your from address
                $mail->addAddress($email, $name); // Add the user's email address

                // User email content
                $mail->isHTML(true);
                $mail->Subject = 'Thank you for your enrollment';
                $mail->Body    = "Dear $name,<br><br>Thank you for enrolling with us. We will contact you shortly.<br><br>Regards,<br>Your Company Name";

                $mail->send();

                // Send a copy to the owner/administrator
                $mail->clearAddresses(); // Clear the recipient list to send a new email
                $mail->addAddress('muthu@smiksystems.com', 'Owner'); // Replace with the owner's email address

                // Owner email content
                $mail->Subject = 'New Enrollment Received';
                $mail->Body    = "A new enrollment has been received:<br><br>Name: $name<br>Email: $email<br>Mobile: $mob";

                $mail->send();

                $message = "Confirmation email has been sent successfully.";
            } catch (Exception $e) {
                $message = "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
        } else {
            $message = "Error: " . $conn->error;
        }
    } else {
        $message = implode(" ", $errors);
    }

    // Close the database connection
    $conn->close();

    // Redirect back to the form page with a message
    echo "<script>
        alert('$message');
        window.location.href = history.back();;
    </script>";
}
?>
