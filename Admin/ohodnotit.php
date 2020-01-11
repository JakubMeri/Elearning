<?php 

require "../conn.php";
session_start();

    if(isset($_POST['meno'], $_POST['kruzok'], $_POST['body'])){
        $meno =  $_POST['meno'];
        $kruzok = $_POST['kruzok'];
        $body =  $_POST['body'];

        list($one, $two) = explode(" ", $meno);
              
        $query = "UPDATE uzivatelia SET zadanie = '".$body."' WHERE meno = '".$one."' AND priezvisko= '".$two."'  AND Kruzok = '".$kruzok."'";
      
        if(mysqli_query($conn, $query)){
    
        } 
        else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      } 

