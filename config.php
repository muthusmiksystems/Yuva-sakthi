<?php

global $webeurl;

$webeurl = 'http://localhost/';

$servername = 'localhost';

$username = 'root';

$password = '';

$dbname = 'yuva_dev';

global $conn;

$conn = new mysqli($servername, $username, $password, $dbname);



// Check connection

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

} else {

    echo "Connection successful!";

}

?>

