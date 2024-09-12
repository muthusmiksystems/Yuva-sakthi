<?php
require 'vendor/autoload.php';
error_reporting(E_ALL);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include('config.php');

global $conn;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve and validate form data
    $errors = [];

    // Helper function to validate input
    function validate_input($data) {
        return trim(htmlspecialchars($data));
    }

    $job_title = validate_input($_POST['JobTitle']);
    $vacancies = validate_input($_POST['NumberofVacancies']);
    $job_desc = validate_input($_POST['JobDescription']);
    $key_skills = validate_input($_POST['KeySkills']);
    $work_exp = validate_input($_POST['WorkExperience']);
    $location = validate_input($_POST['Location']);
    $company_name = validate_input($_POST['CompanyName']);
    $first_name = validate_input($_POST['FirstName']);
    $mobile = validate_input($_POST['MobileNumber']);
    $email = validate_input($_POST['EmailAddress']);
    $company_url = validate_input($_POST['company-url']);
    $enq_date = date("Y-m-d H:i:s");

    // Validate each input
    if (empty($job_title)) $errors['JobTitle'] = "Job Title is required.";
    if (empty($vacancies) || !is_numeric($vacancies)) $errors['NumberofVacancies'] = "Number of Vacancies is required and should be a number.";
    if (empty($job_desc)) $errors['JobDescription'] = "Job Description is required.";
    if (empty($key_skills)) $errors['KeySkills'] = "Key Skills are required.";
    if (empty($work_exp)) $errors['WorkExperience'] = "Work Experience is required.";
    if (empty($location)) $errors['Location'] = "Location is required.";
    if (empty($company_name)) $errors['CompanyName'] = "Company Name is required.";
    if (empty($first_name)) $errors['FirstName'] = "First Name is required.";
    if (empty($mobile)) $errors['MobileNumber'] = "Mobile Number is required.";
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['EmailAddress'] = "Valid Email Address is required.";

    // Verify reCAPTCHA
    $recaptcha_secret = '6LfI4R8qAAAAAG4AYE8CDDTTgeZUO6ZYvzeG0bBz'; // Replace with your actual secret key
    $recaptcha_response = $_POST['g-recaptcha-response'];

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
    $response_keys = json_decode($response, true);

    if (intval($response_keys["success"]) !== 1) {
        $errors['recaptcha'] = "Please complete the CAPTCHA.";
    }

    // Proceed if no errors
    if (empty($errors)) {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO `hiretalent` (`jobTitle`, `numberOfVacancies`, `jobDescription`, `keySkills`, `workExperience`, `location`, `companyName`, `firstName`, `mobileNumber`, `emailAddress`, `companyUrl`, `enquiry_date`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param('ssssssssssss', $job_title, $vacancies, $job_desc, $key_skills, $work_exp, $location, $company_name, $first_name, $mobile, $email, $company_url, $enq_date);

        if ($stmt->execute()) {
            // Sending Email
            $mail = new PHPMailer(true);
            try {
                //Server settings
                $mail = new PHPMailer;
            $mail->isSMTP();
            $mail->Host = 'smtpout.secureserver.net';
            $mail->SMTPAuth = true;
            $mail->Username = 'muthu@smiksystems.com';
            $mail->Password = 'lsikwekshdfiw#$@';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465; // Port for SSL
            $mail->setFrom('muthu@smiksystems.com', 'Yuva Sakthi Academy');
            $mail->addAddress($email, $company_name);
            $mail->isHTML(true);


                // Content

                $mail->Subject = 'New Job Post';

                $mail->Body = "
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            color: #333;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                        }
                        .container {
                            width: 100%;
                            padding: 20px;
                            background-color: #ffffff;
                            margin: 0 auto;
                            max-width: 700px;
                            border: 1px solid #dddddd;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background-color: #0044cc;
                            color: #ffffff;
                            padding: 20px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                            font-size: 24px;
                            font-weight: bold;
                        }
                        .content {
                            padding: 20px;
                            font-size: 16px;
                            line-height: 1.5;
                        }
                        .content p {
                            margin: 0 0 15px 0;
                        }
                        .footer {
                            text-align: center;
                            padding: 15px;
                            background-color: #f4f4f4;
                            border-top: 1px solid #dddddd;
                            border-radius: 0 0 8px 8px;
                            font-size: 12px;
                            color: #777777;
                        }
                        .footer a {
                            color: #0044cc;
                            text-decoration: none;
                        }
                    </style>
                </head>

                <body>

                    <div class='container'>
                        <div class='header'>
                            Job Posting Confirmation
                        </div>
                        <div class='content'>
                            <p>Dear $first_name,</p>
                            <p>Thank you for submitting the job posting request. We have received the following details:</p>

                            <p><b>Job Title:</b> $job_title</p>
                            <p><b>Number of Vacancies:</b> $vacancies</p>
                            <p><b>Job Description:</b> $job_desc</p>
                            <p><b>Key Skills:</b> $key_skills</p>
                            <p><b>Work Experience:</b> $work_exp</p>
                            <p><b>Location:</b> $location</p>
                            <p><b>Company Name:</b> $company_name</p>
                            <p><b>Contact Person:</b> $first_name</p>
                            <p><b>Mobile Number:</b> $mobile</p>
                            <p><b>Email Address:</b> $email</p>
                            <p><b>Company URL:</b> <a href='$company_url'>$company_url</a></p>
                            <p><b>Enquiry Date:</b> $enq_date</p>

                            <p>Our team will review your request and get back to you shortly with available resources.</p>

                            <p>Thank you for choosing us.</p>

                            <p>Best regards,<br>Yuva Sakthi Academy</p>
                        </div>
                        <div class='footer'>
                            <p>If you have any questions, please contact us at <a href='mailto:muthu@smiksystems.com'>muthu@smiksystems.com</a>.</p>
                            <p>&copy; 2024 Yuva Sakthi Academy. All rights reserved.<br>SN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                        </div>
                    </div>
                </body>
                </html>
                ";

                $mail->AltBody = "
                Job Posting Confirmation

                Dear $first_name,

                Thank you for submitting the job posting request. We have received the following details:

                Job Title: $job_title
                Number of Vacancies: $vacancies
                Job Description: $job_desc
                Key Skills: $key_skills
                Work Experience: $work_exp
                Location: $location
                Company Name: $company_name
                Contact Person: $first_name
                Mobile Number: $mobile
                Email Address: $email
                Company URL: $company_url
                Enquiry Date: $enq_date

                Our team will review your request and get back to you shortly with available resources.

                Thank you for choosing us.

                Best regards,
                Yuva Sakthi Academy

                If you have any questions, please contact us at muthu@smiksystems.com.
                &copy; 2024 Your Company Name. All rights reserved.
                SN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035
                ";
               $mail->send();
                                // Email to the Owner
                $mail->clearAddresses(); // Clear previous recipient
                $mail->addAddress('muthu@smiksystems.com', 'Muthu'); // Owner email address

                $mail->Subject = "New Job Posting Request";

                $mail->Body = "
                    <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                color: #333;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                            }
                            .container {
                                width: 100%;
                                padding: 20px;
                                background-color: #ffffff;
                                margin: 0 auto;
                                max-width: 700px;
                                border: 1px solid #dddddd;
                                border-radius: 8px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                            .header {
                                background-color: #0044cc;
                                color: #ffffff;
                                padding: 20px;
                                text-align: center;
                                border-radius: 8px 8px 0 0;
                                font-size: 24px;
                                font-weight: bold;
                            }
                            .content {
                                padding: 20px;
                                font-size: 16px;
                                line-height: 1.5;
                            }
                            .content p {
                                margin: 0 0 15px 0;
                            }
                            .footer {
                                text-align: center;
                                padding: 15px;
                                background-color: #f4f4f4;
                                border-top: 1px solid #dddddd;
                                border-radius: 0 0 8px 8px;
                                font-size: 12px;
                                color: #777777;
                            }
                            .footer a {
                                color: #0044cc;
                                text-decoration: none;
                            }
                        </style>
                    </head>

                    <body>

                        <div class='container'>
                            <div class='header'>
                                New Job Posting Request
                            </div>
                            <div class='content'>
                                <p>Dear Muthu,</p>
                                <p>A new job posting request has been submitted with the following details:</p>

                                <p><b>Job Title:</b> $job_title</p>
                                <p><b>Number of Vacancies:</b> $vacancies</p>
                                <p><b>Job Description:</b> $job_desc</p>
                                <p><b>Key Skills:</b> $key_skills</p>
                                <p><b>Work Experience:</b> $work_exp</p>
                                <p><b>Location:</b> $location</p>
                                <p><b>Company Name:</b> $company_name</p>
                                <p><b>Contact Person:</b> $first_name</p>
                                <p><b>Mobile Number:</b> $mobile</p>
                                <p><b>Email Address:</b> $email</p>
                                <p><b>Company URL:</b> <a href='$company_url'>$company_url</a></p>
                                <p><b>Enquiry Date:</b> $enq_date</p>

                                <p>Please review the request and determine the appropriate action. If resources are available, you can proceed to contact the requester.</p>

                                <p>Thank you for your attention to this matter.</p>

                                <p>Best regards,<br>Yuva Sakthi Academy</p>
                            </div>
                            <div class='footer'>
                                <p>If you have any questions, please contact us at <a href='mailto:muthu@smiksystems.com'>muthu@smiksystems.com</a>.</p>
                                <p>&copy; 2024 Yuva Sakthi Academy. All rights reserved.<br>SN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                            </div>
                        </div>
                    </body>
                    </html>
                ";

                $mail->AltBody = "
                    New Job Posting Request

                    Dear Muthu,

                    A new job posting request has been submitted with the following details:

                    Job Title: $job_title
                    Number of Vacancies: $vacancies
                    Job Description: $job_desc
                    Key Skills: $key_skills
                    Work Experience: $work_exp
                    Location: $location
                    Company Name: $company_name
                    Contact Person: $first_name
                    Mobile Number: $mobile
                    Email Address: $email
                    Company URL: $company_url
                    Enquiry Date: $enq_date

                    Please review the request and determine the appropriate action. If resources are available, you can proceed to contact the requester.

                    Thank you for your attention to this matter.

                    Best regards,
                    Yuva Sakthi Academy

                    If you have any questions, please contact us at muthu@smiksystems.com.
                    &copy; 2024 Yuva Sakthi Academy. All rights reserved.
                    SN Complex, 95/1 G, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035
                ";
                $mail->send();
                echo 'Message has been sent successfully';
            } catch (Exception $e) {
                echo "Mailer Error: {$mail->ErrorInfo}";
            }
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
    }

    $conn->close();
}
?>
