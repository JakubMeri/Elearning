<?php
require "../conn.php";

if(isset($_POST['zobraz'])){
    $zobraz = $_POST['zobraz'];

    $zobraz = $_POST['zobraz'];

    $sql = "UPDATE odovzdanie_zadania SET zobraz = $zobraz WHERE id =  1";
    if(mysqli_query($conn, $sql)){
        
    } else {
      echo 'ERROR: '. mysqli_error($conn);
    } 
  } 