<?php
session_start();
require "../conn.php";

 $sql = "SELECT * FROM uzivatelia WHERE meno =  '".$_SESSION['meno']."'";
 $result = mysqli_query($conn, $sql);
 if(mysqli_num_rows($result) > 0){      
 $uzivatel = mysqli_fetch_all($result, MYSQLI_ASSOC);

 echo json_encode($uzivatel);
 }
?>
