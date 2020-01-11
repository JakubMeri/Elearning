<?php
session_start(); 
// Create Connection
require "../../conn.php";


if(isset($_POST['body'])){

            $body = mysqli_real_escape_string($conn, $_POST['body']);
            $query = "UPDATE uzivatelia SET semester = semester + '".$body."' WHERE email = '".$_SESSION['uzivatel']."'";
          
            if(mysqli_query($conn, $query)){
        
            } else {
              echo 'ERROR: '. mysqli_error($conn);
            }
          }
?>