<?php
require "../conn.php";
session_start();

    if(isset($_POST['zadanie'])){
        $zadanie = mysqli_real_escape_string($conn, $_POST['zadanie']);
    
        for($i; $i<= 4; $i++){
            $query = "DELETE FROM zadania WHERE popiszadania = '".$zadanie."' AND Kruzok = '".$i."'";
      
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      }
      }





?>
