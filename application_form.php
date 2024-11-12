<?php

// Include the necessary libraries
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php'; // Ensure you have PHPMailer installed via Composer
include('config.php'); // Your database connection
use Dompdf\Dompdf;
use Dompdf\Options;

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $studentName = $_POST['studentName'];
    $fatherName = $_POST['fatherName'];
    $dob = $_POST['dob'];
    $qualification = $_POST['qualification'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $contactInfo = $_POST['contactInfo'];
    $courseInfo = $_POST['courseInfo'];
    $reference = $_POST['reference'];
    $status = $_POST['status'];
    $applicationDate = $_POST['applicationDate'];

    // Handle file uploads
    $photo = $_FILES['photo']['name'];
    move_uploaded_file($_FILES['photo']['tmp_name'], 'uploads/' . $photo);
    echo "study==". $photo ;

    // Prepare SQL statement to insert data into the database
    $stmt = $conn->prepare("INSERT INTO applications (student_name, father_name, dob, qualification, address, email, contact_info, course_name, reference, status, application_date, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssss", $studentName, $fatherName, $dob, $qualification, $address, $email, $contactInfo, $courseInfo, $reference, $status, $applicationDate, $photo);

    // Execute the statement
    if ($stmt->execute()) {

        // HTML content for the PDF
        $html = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Form</title>
    <style>
        h5 { margin-top: 5px; }
        .container { width: 90%; margin: auto; }

        .row{display: flex;flex-wrap: wrap;}
        .col-8{flex: 0 0 66.67%;}
        .col-4{flex: 0 0 33.33%;}
        .col-3{flex: 0 0 25%}
        .col-6{flex: 0 0 50%;}
        .col-12 {flex: 0 0 100%; /* Full-width column */}
    </style>
</head>
<body>
    <div class="container">
        <div class="row" style="border:1px solid red">
            <div class="col-8" style="text-align:center;border:1px solid red">
                <h1>YUVA SAKTHI ACADEMY</h1>
                <h2>COMPUTER SOFTWARE TRAINING</h2>
                <h3>APPLICATION FORM</h3>
            </div>
            <div class="col-3" style="border:1px solid yellow">
                <img src="./uploads/' . $photo . '" alt="404" style="width: 170px; height: 220px;"><br>
                <h6>DATE: ' . date("d.m.Y") . '</h6>
            </div>
        </div>
        <table>
            <tr>
                <th>Name of the Student</th>
                <td>' . $studentName . '</td>
            </tr>
            <tr>
                <th>Father Name</th>
                <td>' . $fatherName . '</td>
            </tr>
            <tr>
                <th>Date of Birth</th>
                <td>' . $dob . '</td>
            </tr>
            <tr>
                <th>Qualification</th>
                <td>' . $qualification . '</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>' . $address . '</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>' . $email . '</td>
            </tr>
            <tr>
                <th>Contact Info</th>
                <td>' . $contactInfo . '</td>
            </tr>
            <tr>
                <th>Course Name</th>
                <td>' . $courseInfo . '</td>
            </tr>
            <tr>
                <th>Reference</th>
                <td>' . $reference . '</td>
            </tr>
            <tr>
                <th>Status</th>
                <td>' . $status . '</td>
            </tr>
        </table>
    </div>
</body>
</html>
';

        // Create PDF using Dompdf
        $options = new Options();
        $options->set('isHtml5ParserEnabled', true);
        $options->set('isRemoteEnabled', true);
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        // Save the PDF to a file
        $pdfFileName = 'application_' . time() . '.pdf';
        $output = $dompdf->output();
        file_put_contents('pdfs/' . $pdfFileName, $output);

        // Sending Email with the generated PDF as attachment
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->isSMTP();
            $mail->Host = 'smtpout.secureserver.net';
            $mail->SMTPAuth = true;
            $mail->Username = 'muthu@smiksystems.com'; // Update with your email
            $mail->Password = 'lsikwekshdfiw#$@'; // Update with your password
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465; // Port for SSL
            $mail->setFrom('muthu@smiksystems.com', 'Yuva Sakthi Academy');
            $mail->addAddress("hari.smiksystems@gmail.com", $studentName); // Email recipient
            $mail->isHTML(true);
            $mail->Subject = 'Your Application Form';
            $mail->Body = 'Thank you for your application. Please find the attached PDF of your application form.';
            $mail->addAttachment('pdfs/' . $pdfFileName); // Attach the PDF

            // Send the email
            $mail->send();
            echo 'Email has been sent with the application form.';
        } catch (Exception $e) {
            echo 'Email could not be sent. Mailer Error: ' . $mail->ErrorInfo;
        }
    } else {
        echo 'Error saving data: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
