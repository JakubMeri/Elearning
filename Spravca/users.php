<?php 
// Create Connection
require "../conn.php";

$sql = 'SELECT * FROM uzivatelia';

// Get Result
$result = mysqli_query($conn, $sql);

// Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);

?>
