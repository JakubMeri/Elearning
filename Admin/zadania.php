<?php
require "../conn.php";
session_start();

    if(isset($_POST['zadanie'])){
        $zadanie = mysqli_real_escape_string($conn, $_POST['zadanie']);
    
        for($i; $i<= 4; $i++){
        $query = "INSERT INTO zadania (popiszadania, priradene, Kruzok) VALUES('$zadanie', NULL, '$i')";
      
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      }
      }

?>


