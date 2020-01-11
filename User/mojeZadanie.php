<?php
session_start();
require "../conn.php";
$student = $_SESSION['meno'].' '.$_SESSION['priezvisko'];

 $sql = "SELECT * FROM zadania WHERE priradene =  '".$student."'";
 $result = mysqli_query($conn, $sql);
 if(mysqli_num_rows($result) > 0){      
 $mojeZadanie = mysqli_fetch_all($result, MYSQLI_ASSOC);

 echo json_encode($mojeZadanie);
 }
 else{
$nic = "";
    echo json_encode($nic);  
 }
?>