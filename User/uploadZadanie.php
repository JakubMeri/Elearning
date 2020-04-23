<?php
require "../conn.php";
session_start();

    if ( 0 < $_FILES['file']['error'] ) {
        echo 'Error: ' . $_FILES['file']['error'];
    }
    else {
      if(file_exists('../Upload/' . $_FILES['file']['name'])){
        echo 0;
      }
      else{
        if(strtolower(pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION)) != "pdf"){
          echo 1;
        }
        else{
          echo 2;
          move_uploaded_file($_FILES['file']['tmp_name'], '../Upload/' . $_FILES['file']['name']);

          $query = "UPDATE uzivatelia SET odovzdane = 1 WHERE email = '".$_SESSION['uzivatel']."'";
            
          if(mysqli_query($conn, $query)){
      
          } else {
            echo 'ERROR: '. mysqli_error($conn);
          }
        }
      }
      }


    
    

          

?>