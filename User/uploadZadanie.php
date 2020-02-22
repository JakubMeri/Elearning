<?php
require "../conn.php";
session_start();

    if ( 0 < $_FILES['file']['error'] ) {
        echo 'Error: ' . $_FILES['file']['error'];
    }
    else {
        move_uploaded_file($_FILES['file']['tmp_name'], '../Upload/' . $_FILES['file']['name']);

        $query = "UPDATE uzivatelia SET odovzdane = 1 WHERE email = '".$_SESSION['uzivatel']."'";
          
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      }


    
    

          

?>