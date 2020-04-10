<?php
session_start();
require "../conn.php";
$meno = $_SESSION['meno'];
$datumC = date('d-m-Y H:i:s', time() + 7200);
$priezvisko = $_SESSION['priezvisko'];

    if(isset($_POST['sprava'])){
        $sprava = mysqli_real_escape_string($conn, $_POST['sprava']);
    
      
        $query = "INSERT INTO chat (meno, priezvisko, sprava, cas) VALUES('$meno', '$priezvisko', '$sprava','$datumC')";
      
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      }

?>
