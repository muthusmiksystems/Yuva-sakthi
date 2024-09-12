<?php

// error_reporting(0);
include('config.php');
include('functions.php');
global $adminName;
global $adminEmail;
// Retrieve form data

$f_name = $_POST['first-name'];
$l_name = $_POST['last-name'];
$email = $_POST['email'];
$ph_no = $_POST['ph_no'];
$add = $_POST['add'];
$dob = $_POST['enq_date'];
$loc = $_POST['loc'];
$enq_date = date("Y-m-d H:i:s");
try {
    global $connection;
    $findQuery = "SELECT COUNT(*) as existRequest FROM Enquiries WHERE phone_no = :phone_no OR email_id = :email";
    $findRequest = $connection->prepare($findQuery);
    $findRequest->bindValue(":phone_no", $ph_no);
    $findRequest->bindValue(":email", $email);
    $findRequest->execute();
    $result = $findRequest->fetchAll(PDO::FETCH_ASSOC);

    $noOfRequest = !empty($result) ? $result[0]['existRequest'] : 0;
    if ($noOfRequest > 0) {
        echo json_encode(['status' => 400, 'message' => "You are already Raise the request.!!"]);
        exit();
    }

    $query = "INSERT INTO Enquiries (first_name, last_name,email_id,phone_no,address,location) VALUES ('$f_name', '$l_name','$email','$ph_no','$add','$loc')";
    $statement = $connection->query($query);

    $messageBody = "
        <p><b>Name:</b> $f_name $l_name</p>
        <p><b>Email:</b> $email</p>
        <p><b>Phone:</b> $ph_no</p>
        <p><b>Address:</b> $add</p>
        <p><b>Enquiry Date:</b> $enq_date</p>
        <p><b>Location:</b> $loc</p> ";

    $emailToAdmin=sendEmail($adminEmail, $adminName, "New Enquiry", $messageBody,true);
    echo json_encode(['status' => 201, 'message' => "Your Request Submitted SuccessFully.!!"]);
    exit();
} catch (PDOException $e) {
    echo json_encode(['status' => 400, 'message' => $e->getMessage()]);
    exit();
}





?>

<!-- $query = "INSERT INTO enquiries (first_name, last_name, email_id, phone_no, address, location) VALUES (:f_name, :l_name, :email, :ph_no, :add, :loc)";
$statement = $connection->prepare($query);
$statement->bindValue(":f_name", $f_name);
$statement->bindValue(":l_name", $l_name);
$statement->bindValue(":email", $email);
$statement->bindValue(":ph_no", $ph_no);
$statement->bindValue(":add", $add);
$statement->bindValue(":loc", $loc);
$statement->execute();

$affectedRows = $statement->rowCount();

// $affectedRows now contains the number of affected rows -->
