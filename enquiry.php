<?php

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
include('config.php');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $recaptchaSecret = '6LfI4R8qAAAAAG4AYE8CDDTTgeZUO6ZYvzeG0bBz';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    // Verify reCAPTCHA response
    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}");
    $responseData = json_decode($verifyResponse);

    if ($responseData->success) {
        $f_name = $conn->real_escape_string($_POST['first-name']);
        $l_name = $conn->real_escape_string($_POST['last-name']);
        $email = $conn->real_escape_string($_POST['email']);
        $ph_no = $conn->real_escape_string($_POST['ph_no']);
        $add = $conn->real_escape_string($_POST['add']);
        $enq_date = date("Y-m-d H:i:s");

        // Insert data into the database
        $sql = "INSERT INTO `enquiry`(`firstName`, `lastName`, `emailId`, `phoneNo`, `address`, `enquiry_date`)
                VALUES ('$f_name','$l_name','$email','$ph_no','$add','$enq_date')";
        $res = $conn->query($sql);


        if ($res) {
            echo "New record created successfully";

            $mail = new PHPMailer;
            $mail->isSMTP();
            $mail->Host = 'smtpout.secureserver.net';
            $mail->SMTPAuth = true;
            $mail->Username = 'muthu@smiksystems.com';
            $mail->Password = 'lsikwekshdfiw#$@';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465; // Port for SSL
            $mail->setFrom('muthu@smiksystems.com', 'Yuva Sakthi Academy');
            $mail->addAddress($email, $f_name);
            $mail->isHTML(true);
            $mail->Subject = 'New Inquiry';

            $mail->Body = "
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
                    .container { width: 80%; margin: auto; overflow: hidden; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                    h1 { color: #0056b3; }
                    .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd; }
                    .footer p { font-size: 14px; color: #777; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <h1>Thank You for Your Inquiry!</h1>
                    <p>Dear <span style=\"font-weight:bold;\">$f_name $l_name</span>,</p>
                    <p>Thank you for reaching out to Yuva Sakthi Academy. We have received your inquiry and appreciate your interest in our programs. Here are the details of your inquiry:</p>
                    <p><strong>Name:</strong> $f_name $l_name</p>
                    <p><strong>Email:</strong> $email</p>
                    <p><strong>Phone Number:</strong> $ph_no</p>
                    <p><strong>Address:</strong> $add</p>
                    <p><strong>Inquiry Date:</strong> $enq_date</p>
                    <p>Our team will review your inquiry and get back to you shortly with more information about our programs, admission procedures, and any other queries you might have.</p>
                    <p>In the meantime, feel free to visit our website http://yuvasakthiacademy.com/ for more information about our courses and facilities.</p>
                    <p>If you have any urgent questions, you can also reach us at <strong> +91 9597684055, +91 85310 65339 </strong> or reply to this email.</p>
                    <p>Thank you once again for considering <strong> Yuva Sakthi Academy </strong>. We look forward to assisting you with your educational goals.</p>
                    <div class='footer'>
                        <p>Best regards,</p>
                        <p>Kalpana Muthukumar</p>
                        <p>Director</p>
                        <p>Yuva Sakthi Academy</p>
                        <p>SN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                        <p>+91 9597684055, +91 85310 65339</p>
                        <p>muthu@smiksystems.com, hr@smiksystems.com</p>
                    </div>
                </div>
            </body>
            </html>
        ";

        $mail->AltBody = "Dear $f_name $l_name,\n\nThank you for reaching out to Yuva Sakthi Academy. We have received your inquiry and appreciate your interest in our programs. Here are the details of your inquiry:\n\nName: $f_name $l_name\nEmail: $email\nPhone Number: $ph_no\nAddress: $add\nInquiry Date: $enq_date\n\nOur team will review your inquiry and get back to you shortly with more information about our programs, admission procedures, and any other queries you might have.\n\nIn the meantime, feel free to visit our website http://yuvasakthiacademy.com/ for more information about our courses and facilities.\n\nIf you have any urgent questions, you can also reach us at <strong> +91 9597684055, +91 85310 65339 </strong> or reply to this email.\n\nThank you once again for considering Yuva Sakthi Academy. We look forward to assisting you with your educational goals.\n\nBest regards,\nKalpana Muthukumar\nDirector\nYuva Sakthi Academy\nSN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035\n+91 9597684055, +91 85310 65339\nmuthu@smiksystems.com, hr@smiksystems.com";
               // Send the email to the user
               $mail->send();

               // Send a copy to the owner
               $mail->clearAddresses(); // Clear previous addresses
               $mail->addAddress("muthu@smiksystems.com", "Muthu"); // Owner's email
               $mail->Subject = 'New Inquiry Received';
               $mail->Body = "
               <!DOCTYPE html>
               <html>
               <head>
                   <style>
                       body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
                       .container { width: 80%; margin: auto; overflow: hidden; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                       h1 { color: #0056b3; }
                       .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd; }
                       .footer p { font-size: 14px; color: #777; }
                   </style>
               </head>

               <body>

                   <div class='container'>
                       <h1>New Inquiry Received</h1>
                       <p>Dear Muthu Kumar,</p>
                       <p>A new inquiry has been received through the website. Here are the details:</p>
                       <p><strong>Name:</strong> $f_name $l_name</p>
                       <p><strong>Email:</strong> $email</p>
                       <p><strong>Phone Number:</strong> $ph_no</p>
                       <p><strong>Address:</strong> $add</p>
                       <p><strong>Inquiry Date:</strong> $enq_date</p>
                       <div class='footer'>
                           <p>Best regards,</p>
                           <p>Kalpana Muthukumar</p>
                           <p>Director</p>
                           <p>Yuva Sakthi Academy</p>
                           <p>SN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                           <p>+91 9597684055, +91 85310 65339</p>
                           <p>muthu@smiksystems.com, hr@smiksystems.com</p>
                       </div>
                   </div>
               </body>
               </html>
           ";
           $mail->AltBody = "Dear Muthu,\n\nA new inquiry has been received through the website. Here are the details:\n\nName: $f_name $l_name\nEmail: $email\nPhone Number: $ph_no\nAddress: $add\nInquiry Date: $enq_date\n\nBest regards,\nKalpana Muthukumar\nDirector\nYuva Sakthi Academy\nSN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035\n+91 9597684055, +91 85310 65339\nmuthu@smiksystems.com, hr@smiksystems.com";

           $mail->send();
           echo "Email has been sent to the owner.";

        } else {
            echo "Error: " . $conn->error;
        }
    } else {
        echo "Robot verification failed, please try again.";
    }
    $conn->close();
}
?>