<?php
require "conn.php";
session_start();
$query = "UPDATE uzivatelia SET onlineU = 0 WHERE email = '".$_SESSION['uzivatel']."'";

if(mysqli_query($conn, $query)){
    
} else {
  echo 'ERROR: '. mysqli_error($conn);
}
session_unset();
session_destroy();
header("Location: /Elearning/Main page/Main.html?Odhlaseny");
?>