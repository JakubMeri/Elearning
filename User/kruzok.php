<?php

require "../conn.php";
session_start();

    if(isset($_POST['kruzok'])){
      
        $kruzok = mysqli_real_escape_string($conn, $_POST['kruzok']);
      
        $query = "UPDATE uzivatelia SET kruzok = '".$kruzok."' WHERE email = '".$_SESSION['uzivatel']."'";
      
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      }
