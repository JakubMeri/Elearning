<?php
require "../conn.php";
session_start();

if(isset($_POST['kruzok'], $_POST['email'], $_POST['typ'])){
       
    $kruzok = $_POST['kruzok'];
    $email = $_POST['email'];
    $typ = $_POST['typ'];
    echo $kruzok . $email . $typ;

      
            $query = "UPDATE uzivatelia SET  kruzok = $kruzok, typ_uzivatela= '$typ' WHERE email =  '$email'";
            
            if(mysqli_query($conn, $query)){
        
            } else {
              echo 'ERROR: '. mysqli_error($conn);
            } 
      } 
