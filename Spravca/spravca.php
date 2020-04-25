<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPRAVCA</title>
    <link rel="shortcut icon" type="image/png" href="/Elearning/icon.png"/>
    <script src="https://kit.fontawesome.com/5cfe4f03a7.js"></script>
    <link rel="stylesheet" href="spravca.css?version=1">
</head>
<body>
    <div class="container">
        <button class="logout"><i class="fas fa-power-off"></i></button>
        <div id="load"></div>
        <h1>Správa užívateľov</h1>
        <table class="tabulkaSL">
        <!-- Sem sa nacitaju data z databazy -->
        </table>
       <div class="overlay">
           <h1>Vitaj správca<span class="ping">|</span></h1>
       </div>
       <div class="module">
           <button class="close-module"><i class="fa fa-times"></i></button>
           <div class="pouzivatel-udaje"><p class="meno"></p><p class="priezvisko"></p></div>
           <p>Krúžok</p>
            <input class="kruzok" type="text">
            <p class="email"></p>
            <p>Typ užívateľa</p>
            <select class="typU">
                <option value="admin">Učíteľ</option>
                <option value="user">Žiak</option>
                <option value="spravca">Správca</option>
            </select>
            <button class="set-data">Nastaviť</button>
        </div>
    </div>
<script src="spravca.js"></script>
</body>
</html>