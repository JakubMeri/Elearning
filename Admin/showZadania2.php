<?php
session_start();
require "../conn.php";

$sql = "SELECT * FROM zadania WHERE Kruzok = '2' ORDER BY  Kruzok";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){      
    $zadania = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($zadania);
}


?>