<?php 

require "../conn.php";
session_start();

    if(isset($_POST['reset'])){

        $query = "UPDATE zadania SET priradene = NULL";
      
        if(mysqli_query($conn, $query)){
    
        } 
        else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      } 