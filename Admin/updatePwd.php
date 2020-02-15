<?php 

require "../conn.php";
session_start();

    if(isset($_POST['heslo'])){
        $heslo =  $_POST['heslo'];

              
        $query = "UPDATE skuska_heslo SET heslo = '".$heslo."'";
      
        if(mysqli_query($conn, $query)){
    
        } 
        else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      } 
