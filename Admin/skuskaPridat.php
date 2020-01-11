<?php
session_start();
require "../conn.php";

    if(isset($_POST['otazka'], $_POST['odpovede'], $_POST['spravna'])){
        $otazka = mysqli_real_escape_string($conn, $_POST['otazka']);
        $arrayQ= json_decode($_POST['odpovede']);
        $arrayA= json_decode($_POST['spravna']);

        $query = "INSERT INTO skuskao (nazov) VALUES('$otazka')";
      
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }

        $sql = "SELECT MAX(id) FROM skuskao";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_row($result);

      for ($i=0; $i < count($arrayQ) ; $i++){ 
      $query2 = "INSERT INTO skuskaod (cislo_otazky, nazov, spravna) VALUES($row[0], '$arrayQ[$i]', $arrayA[$i])";
      
      if(mysqli_query($conn, $query2)){
  
      } else {
        echo 'ERROR: '. mysqli_error($conn);
      }
    } 
 }
?>