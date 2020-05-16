<?php 

require "../conn.php";
session_start();

    if(isset($_POST['reset'])){

        $query = "UPDATE zadania SET priradene = NULL";
        $query2 = "UPDATE uzivatelia SET odovzdane = 0";
      
        if(mysqli_query($conn, $query)){
    
        } 
        else {
          echo 'ERROR: '. mysqli_error($conn);
        }
       
      if(mysqli_query($conn, $query2)){
    
      } 
      else {
        echo 'ERROR: '. mysqli_error($conn);
      }
    } 