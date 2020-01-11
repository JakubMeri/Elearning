<?php 
// Create Connection
require "../../conn.php";

$sql = 'SELECT * FROM prednaska_2_otazky d JOIN prednaska_2_odpovede o ON d.cislo_otazky = o.cislo_otazky';

// Get Result
$result = mysqli_query($conn, $sql);
// Fetch Data
$test = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($test);
?>