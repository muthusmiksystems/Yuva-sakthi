<?php
error_reporting(3);
include('config.php');

global $conn;

// Retrieve form data
$name = $conn->real_escape_string($_POST['stxtenqname']);
$mob = $conn->real_escape_string($_POST['stxtenqmobile']);
$email = $conn->real_escape_string($_POST['stxtenqemail']);
// $msg = $conn->real_escape_string($_POST['content']);

// Insert data into the database
$sql = "INSERT INTO `enroll`(`Name`, `Mob`, `Email`) 
        VALUES ('$name','$mob','$email')";

$res = $conn->query($sql);

if ($res) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
