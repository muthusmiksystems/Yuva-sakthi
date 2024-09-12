<?php
// error_reporting(0);
global $webeurl;
global $connection;
global $adminEmail;
global $adminName;
$webeurl = 'https://smiklearn.com/';
$adminEmail='rlm.muthukumar@gmail.com';
$adminName='Muthu Kumar';
try {
    $server = '103.159.85.130';
    $database = 'yuva_dev';
    $username = 'root';
    $password = '';

    $connection = new PDO("sqlsrv:server=$server;Database=$database", $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>
