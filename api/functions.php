<?php

require '../vendor/autoload.php';
error_reporting(0);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$mail = new PHPMailer;

$mail->SMTPDebug = 0;

$mail->isSMTP();

$mail->Host = "smtp.gmail.com";

$mail->SMTPAuth = true;

$mail->Username = "gopi.smiksystems@gmail.com";
$mail->Password = "mvov xtll vhbz uqzi";

$mail->SMTPSecure = "tls";

$mail->Port = 587;

$mail->From = "gopi.smiksystems@gmail.com";
$mail->FromName = "Yuva Sakthi Academy";

function sendEmail($toEmail, $toName, $subject, $body, $isHtml)
{

    global $mail;
    $mail->addAddress($toEmail, $toName);
    $mail->Subject = $subject;
    if ($isHtml)
        $mail->isHTML(true);
    else
        $mail->isHTML(false);
    $mail->Body = $body;

    // Alternative plain text version for non-HTML mail clients
    // $mail->AltBody = "Name: $f_name $l_name\nEmail: $email\nPhone: $ph_no\nAddress: $add\nEnquiry Date: $enq_date\nLocation: $loc";

    if (!$mail->send()) {
        return false;
    } else {
        return true;
    }
}


?>
