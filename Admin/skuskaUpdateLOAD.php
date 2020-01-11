<?php

require "../conn.php";
session_start();

$sql = 'SELECT id, nazov FROM skuskao';

// Get Result
$result = mysqli_query($conn, $sql);
// Fetch Data
$test = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($test);


