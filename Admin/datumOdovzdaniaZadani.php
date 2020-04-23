<?php
require "../conn.php";

$sql = "SELECT * FROM odovzdanie_zadania";
 $result = mysqli_query($conn, $sql);
 if(mysqli_num_rows($result) > 0){      
 $message = mysqli_fetch_all($result, MYSQLI_ASSOC);

 echo json_encode($message);
 }