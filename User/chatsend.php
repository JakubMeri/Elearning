<?php
session_start();
require "../conn.php";
$meno = $_SESSION['meno'];
$priezvisko = $_SESSION['priezvisko'];

$datumC = date('d-m-Y H:i:s', time() + 3600);
echo $datumC;

    if(isset($_POST['sprava'])){
        $sprava = mysqli_real_escape_string($conn, $_POST['sprava']);
    
      
        $query = "INSERT INTO chat (meno, priezvisko, sprava, cas) VALUES('$meno', '$priezvisko', '$sprava','$datumC')";
      
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      }

?>