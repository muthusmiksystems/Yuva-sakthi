<?php
error_reporting(3);
include('config.php');

global $conn;

// Retrieve form data
$name = $conn->real_escape_string($_POST['your-name']);
$email = $conn->real_escape_string($_POST['your-email']);
$mobnum = $conn->real_escape_string($_POST['your-mobnum']);
$company = $conn->real_escape_string($_POST['your-company']);
$ppl = $conn->real_escape_string($_POST['your-ppl']);
$course = $conn->real_escape_string($_POST['your-course']);
$comm = $conn->real_escape_string($_POST['your-message']);


// Insert data into the database
$sql = "INSERT INTO `corporate_training`(`Name`, `Email`, `Mobile`, `Company_Name`, `No_of_People`, `Training_Course`, `Comments`) 
        VALUES ('$name','$email','$mobnum','$company','$ppl','$course','$comm')";
        
$res = $conn->query($sql);


// Close the database connection
$conn->close();
?>
 