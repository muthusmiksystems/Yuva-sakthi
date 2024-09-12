<?php
require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
include "config.php";
global $conn;

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $full_name = $conn->real_escape_string($_POST['full-name']);
    $e_mail = $conn->real_escape_string($_POST['e-mail']);
    $mobile = $conn->real_escape_string($_POST['mobile-number']);
    $pass_word = $conn->real_escape_string($_POST['pass-word']);
    $enq_date = date("Y-m-d H:i:s");

    $sql = "INSERT INTO `signup`(`fullName`, `emailId`, `phoneNo`, `password`, `enquiry_date`) VALUES ('$full_name', '$e_mail', '$mobile', '$pass_word', '$enq_date')";
    $res = $conn->query($sql);

    if ($res) {
        $response = [
            'status' => 'success',
            'message' => 'New Record inserted Successfully'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Error: ' . $conn->error
        ];
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
