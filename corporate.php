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
            $mail->Body = "Your HTML content here...";

            $mail->send();

            // Send a copy to the owner/administrator
            $mail->clearAddresses();
            $mail->addAddress("muthu@smiksystems.com", "Muthu");
            $mail->Subject = "New Corporate Training Request";
            $mail->Body = "Your HTML content here...";

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
