<?php
session_start();
require "../conn.php";

if(isset($_POST['reset'])){

$email = $_POST['email'];
$heslo = "UIES";
$hashovanieHesla = password_hash($heslo, PASSWORD_DEFAULT);



        $query = ("UPDATE uzivatelia SET heslo = '".$hashovanieHesla."' WHERE email = '$email'");
      
        if(mysqli_query($conn, $query)){
            header("Location: /Elearning/Login/login.php?heslo=UIES");
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }

}
else{
    header("Location: ./Elearning/Main/Main.html");
}
?>