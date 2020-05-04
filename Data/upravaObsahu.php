<?php
session_start();
require "../conn.php";
if(isset($_SESSION['uzivatel']) && $_SESSION['typ'] == "admin"){

}
else{
    header("Location: ../Login/Login.php?Prihlas_sa");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uprava Obsahu</title>
    <link rel="stylesheet" href="../Admin/AdminPage.css?version=1b">
    <link rel="stylesheet" href="editor.css?version=1c">
    <link rel="shortcut icon" type="image/png" href="/Elearning/icon.png"/>
    <script src="https://kit.fontawesome.com/5cfe4f03a7.js"></script>
    <script type="text/javascript" src="./ckeditor/ckeditor.js" charset="utf-8"></script>
</head>
<body>
<div id="load"></div>
<nav>
            <a class="logo" href="/Elearning/Main page/Main.html">UIES</a>
            <button class="back"><i class="back fas fa-times"></i></button>
            <button class="backChat"><i class="backChat fas fa-times"></i></button>
            <button class="BackStud"><i class="BackStud fas fa-times"></i></button>
            <button class="BackHodnotenie"><i class="BackHodnotenie fas fa-times"></i></button>
            <button class="BackZadania"><i class="BackZadania fas fa-times"></i></button>
            <ul class="mainNav">
                <li class="main-item"> <a class="link link1" href="/Elearning/Admin/AdminPage.php">Domov</a></li>
                <li class="main-item"> <a class="link link1" href="/Elearning/Data/Prednasky.php">Prednášky</a></li>
                <li class="main-item"> <a class="link link1 active" href="/Elearning/Data/upravaObsahu.php">Úprava obsahu</a></li>
                <li class="main-item"> <button class="link link1 logout" >Logout</button></li>
            </ul>
</nav>
<div class="container">
<div class="overlay">
</div>
<div class="teacher-content">
<div class="show-teacher-data">
    
</div>
    <div class="controler-teacher">
    <button class="set"><i class="fa fa-cog"></i></button>
    <button class="close-prew"><i class="fa fa-times"></i></button>
    </div>
</div>
<form class="editovanie">
    <button class="show-prew">ZOBRAZ NÁHĽAD</button>
    <textarea name="EDITOR" id="EDITOR"></textarea>
    <button id="edit-data">PRIDAJ</button>
</form>

</div>
<script>
    CKEDITOR.replace( "EDITOR" );
</script>
<script src="editor.js?ver=1"></script>
</body>
</html>