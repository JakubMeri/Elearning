<?php
require "../conn.php";

if(isset($_POST['den'], $_POST['mesiac'], $_POST['rok'], $_POST['cas'], $_POST['zobraz'])){
    $den = $_POST['den'];
    $mesiac = $_POST['mesiac'];
    $rok = $_POST['rok'];
    $cas = $_POST['cas'];
    $zobraz = $_POST['zobraz'];

    $sql = "UPDATE odovzdanie_zadania SET den = $den, mesiac= $mesiac, rok = $rok, cas = '$cas', zobraz = $zobraz WHERE id =  1";
    if(mysqli_query($conn, $sql)){
        
    } else {
      echo 'ERROR: '. mysqli_error($conn);
    } 
  } 