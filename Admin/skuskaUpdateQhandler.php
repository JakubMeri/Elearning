<?php
require "../conn.php";
session_start();

if(isset($_POST['otazka'])){
    $otazka = $_POST['otazka'];
    $int = (int)$otazka;
    $query = "UPDATE zmena SET hodnota = $int WHERE id = 1";
      
    if(mysqli_query($conn, $query)){

    } 
    else {
      echo 'ERROR: '. mysqli_error($conn);
    }
  }
