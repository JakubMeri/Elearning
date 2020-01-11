<?php
session_start();
if($_SESSION['typ'] == "user"){
    header("Location: /Elearning/User/User.php");
    exit(); 
}
else{
    header("Location: /Elearning/Admin/AdminPage.php");
    exit();
}
?>