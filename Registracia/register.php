<?php
require "../conn.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registrácia</title>
    <link rel="shortcut icon" type="image/png" href="/Elearning/icon.png"/>
    <link rel="stylesheet" href="registracia.css?version=1a">
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
    <form class="register-form" action="registrovanieSa.php" method="post">
        <div class="box">
            <h1>REGISTRÁCIA</h1>
            <div class="inputs">
            <label>Meno:</label>
            <input class="vstup" type="text" placeholder="Meno" autofocus name="meno"> 
            <label>Priezvisko:</label>
            <input class="vstup" type="text" placeholder="Priezvisko" name="priezvisko"> 
            <label>Email:</label>
            <input class="vstup" type="email" placeholder="Email" name="email">
            <label>Heslo:</label>
            <input class="vstup" type="password" placeholder="Heslo" name="heslo">
            <label>Kontrola Hesla:</label>
            <input class="vstup" type="password" placeholder="Heslo" name="overenieHesla">
            <input class="btn" type="submit" value="Registrovať" name="registrovat">
            </div>
            <div class="prelink">
            <a class="rel" href="/Elearning/Login/login.php">Prihlásenie</a>
            <a class="rel" href="/Elearning/Reset%20hesla/reset.php">Zabudol si heslo?</a>
            </div>
        </div>
    </form>   
    <div class="popup">
        <p class="popMessage"></p>
    </div> 
    <footer>Developed in &copy;2019 by Jakub Méri</footer>   
         
          
           
            
             
              
               
                
                 
                   
    </div>
    <script type="text/javascript" src="registracia.js?version=1"></script>
</body>
</html>