<?php
session_start();
require "../conn.php";

if(isset($_POST['heslo'])){

$heslo = $_POST['heslo'];
$hashovanieHesla = password_hash($heslo, PASSWORD_DEFAULT);
echo $heslo;



        $query = ("UPDATE uzivatelia SET heslo = '".$hashovanieHesla."' WHERE email = '".$_SESSION['uzivatel']."'");
      
        if(mysqli_query($conn, $query)){

        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }

}
?>