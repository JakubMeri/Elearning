<?php
session_start();
require "../conn.php";

 $sql = "SELECT * FROM chat ORDER BY cas DESC";
 $result = mysqli_query($conn, $sql);
 if(mysqli_num_rows($result) > 0){      
 $message = mysqli_fetch_all($result, MYSQLI_ASSOC);

 echo json_encode($message);
 }
 else{
    $nic = "";
        echo json_encode($nic);  
     }
?>
