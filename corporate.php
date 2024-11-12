<?php

require "vendor/autoload.php";



use PHPMailer\PHPMailer\PHPMailer;

use PHPMailer\PHPMailer\Exception;



include "config.php";

global $conn;



$response = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve form data

    $name = $conn->real_escape_string($_POST["your-name"]);

    $email = $conn->real_escape_string($_POST["your-email"]);

    $mobnum = $conn->real_escape_string($_POST["your-mobnum"]);

    $company = $conn->real_escape_string($_POST["your-company"]);

    $ppl = $conn->real_escape_string($_POST["your-ppl"]);

    $course = $conn->real_escape_string($_POST["your-course"]);

    $comm = $conn->real_escape_string($_POST["your-message"]);



    // Insert data into the database

    $sql = "INSERT INTO `corporate_training`(`Name`, `Email`, `Mobile`, `Company_Name`, `No_of_People`, `Course`, `Comments`)

            VALUES ('$name','$email','$mobnum','$company','$ppl','$course','$comm')";



    $res = $conn->query($sql);



    if ($res) {

        $mail = new PHPMailer(true);



        try {

            // Server settings

            $mail->isSMTP();

            $mail->Host = "smtpout.secureserver.net";

            $mail->SMTPAuth = true;

            $mail->Username = "muthu@smiksystems.com";

            $mail->Password = 'lsikwekshdfiw#$@';

            $mail->SMTPSecure = "ssl";

            $mail->Port = 465;



            // Send email to the user

            $mail->setFrom("muthu@smiksystems.com", "Yuva Sakthi Academy");

            $mail->addAddress($email, $name);

            $mail->isHTML(true);

            $mail->Subject = "Corporate Training Request Confirmation";

            $mail->Body = "
    <html>
    <body>
        <h2>Thank you for your Corporate Training Request</h2>
        <p>Dear $name,</p>
        <p>We have received your corporate training request with the following details:</p>
        <table border='1' cellpadding='10' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
            <tr>
                <th style='text-align: left;'>Field</th>
                <th style='text-align: left;'>Details</th>
            </tr>
            <tr>
                <td><strong>Name</strong></td>
                <td>$name</td>
            </tr>
            <tr>
                <td><strong>Email</strong></td>
                <td>$email</td>
            </tr>
            <tr>
                <td><strong>Mobile Number</strong></td>
                <td>$mobnum</td>
            </tr>
            <tr>
                <td><strong>Company Name</strong></td>
                <td>$company</td>
            </tr>
            <tr>
                <td><strong>Number of People</strong></td>
                <td>$ppl</td>
            </tr>
            <tr>
                <td><strong>Course</strong></td>
                <td>$course</td>
            </tr>
            <tr>
                <td><strong>Comments</strong></td>
                <td>$comm</td>
            </tr>
        </table>
        <p>We will review your request and get back to you shortly.</p>
        <p>Best Regards,<br>Yuva Sakthi Academy</p>
    </body>
    </html>
";




            $mail->send();



            // Send a copy to the owner/administrator

            $mail->clearAddresses();

            $mail->addAddress("smiksystems@gmail.com", "Yuva Sakthi Academy");

            $mail->Subject = "New Corporate Training Request";

            $mail->Body = "
    <html>
    <body>
        <h2>New Corporate Training Request Received</h2>
        <p>Details of the request:</p>
        <table border='1' cellpadding='10' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
            <tr>
                <th style='text-align: left;'>Field</th>
                <th style='text-align: left;'>Details</th>
            </tr>
            <tr>
                <td><strong>Name</strong></td>
                <td>$name</td>
            </tr>
            <tr>
                <td><strong>Email</strong></td>
                <td>$email</td>
            </tr>
            <tr>
                <td><strong>Mobile Number</strong></td>
                <td>$mobnum</td>
            </tr>
            <tr>
                <td><strong>Company Name</strong></td>
                <td>$company</td>
            </tr>
            <tr>
                <td><strong>Number of People</strong></td>
                <td>$ppl</td>
            </tr>
            <tr>
                <td><strong>Course</strong></td>
                <td>$course</td>
            </tr>
            <tr>
                <td><strong>Comments</strong></td>
                <td>$comm</td>
            </tr>
        </table>
        <p>Please review and follow up accordingly.</p>
    </body>
    </html>
";


            $mail->send();

            $response = ['status' => 'success', 'message' => 'Your request has been submitted successfully.'];

        } catch (Exception $e) {

            $response = ['status' => 'error', 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo];

        }

    } else {

        $response = ['status' => 'error', 'message' => 'Error in saving data to the database.'];

    }

} else {

    $response = ['status' => 'error', 'message' => 'Invalid request method.'];

}



header('Content-Type: application/json');

echo json_encode($response);

exit();

?>

