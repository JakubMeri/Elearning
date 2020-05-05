<?php
require "../conn.php";
session_start();
if(isset($_SESSION['typ'])){
    if($_SESSION['typ'] == "user"){
    header("Location: /Elearning/User/User.php"); 
    }
    else if($_SESSION['typ'] == "spravca"){
        header("Location: /Elearning/Spravca/spravca.php"); 
        }
    else{
    header("Location: /Elearning/Admin/AdminPage.php");     
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="">
    <title>Prihlásenie</title>
    <link rel="shortcut icon" type="image/png" href="/Elearning/icon.png"/>
    <link rel="stylesheet" href="login.css?version=52b">
    <script src="https://kit.fontawesome.com/5cfe4f03a7.js"></script>
</head>
<body>
    <div class="container">
            <div class="dropp-menu">
                    <a class="dropp-item" href="/Elearning/Login/login.php">prihlásenie</a>
                    <a class="dropp-item" href="/Elearning/Registracia/register.php">registrácia</a>
            </div>
       <nav>
           <a class="logo" href="/Elearning/Main%20page/Main.html">UIES</a>
           <a class="option" href="/Elearning/Login/login.php">prihlásenie</a>
           <a class="option" href="/Elearning/Registracia/register.php">registrácia</a>
           <button class="menu">|||</button>
       </nav>    
    <form class="login-form" action="logovanie.php" method="post">
        <div class="box">
        <h1>Prihlásenie</h1>
            <div class="inputs">
                <label>Email:</label>
                  <input class="vstup" type="email" placeholder="Email" autofocus name="email">
                <label>Heslo:</label>
                  <input class="vstup" type="password" placeholder="Heslo" name="heslo">
                  <input class="btn" type="Submit" value="Prihlásenie" name="login">
            </div>
                 <div class="prelink">
                     <a class="rel" href="/Elearning/Registracia/register.php">Registrácia</a>
                     <a class="rel" href="/Elearning/Reset%20hesla/reset.php">Zabudol si heslo?</a>
                 </div>
        </div>
    </form>   
    <footer>Developed in &copy;2019 by Jakub Méri</footer>   
    <div class="popup">
        <p class="popMessage"></p>
    </div>     
             
    </div>
    <script type="text/javascript" src="login.js?version=1a"></script>
</body>
</html>