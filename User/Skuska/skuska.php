<?php
require "../../conn.php";
session_start();
if(isset($_SESSION['uzivatel']) && $_SESSION['typ'] == "user"){
    
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
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Skúška</title>
    <link rel="stylesheet" href="skuska.css?version=2d">
    <link rel="shortcut icon" type="image/png" href="/Elearning/icon.png"/>
    <script src="https://kit.fontawesome.com/5cfe4f03a7.js"></script>
    <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous">
    </script>
</head>
<body>
    <div class="container">
        <div class="start">
            <h1>Skúška z UIES</h1>
            <p>Po zadaní hesla sa spustí test s <span id="pocetOtazok"></span> otázkami a časovým limitom <span id="maxCas"></span>min.<br> V prípade ukončenia časomiery, sa test odošle na hodnotenie aj v prípade, že nemáte vyplnené všetky otázky.<br>Pre úspesné zvládnutie testu potrebujete získať viac ako polovicu bodov čo je 30,5 a viac.<br>Po skončení testu sa vám automaticky zobrazí hodnotenie.</p>
            <br><br><br><br>
            <span class="inputCont">
                <input type="password" id="heslo" placeholder="Zadaj heslo">
                <button id="zahajit">Zahájiť test</button>
            </span>
            <br>
            <p id="hlaska"></p>
        </div>
        <div class="testBox">
                <div id="timer">
                    <p id="cas">Štart</p>
                </div>
            <div class="skuskaPopis">
                <h1 id="datum"></h1>
            </div>
            <div class="navigation">

</div>
        <button id="before">Predchádzajúca</button>
        <button id="next">Nasledujúca</button>
        <button id="odoslat">Ukončiť test</button>
        <div class="popup">
            <h2>Chceš naozaj ukončiť test?</h2>
            <br><br><br>
            <span>
            <button class="ano">áno</button>
            <button class="nie">nie</button>
            </span>
        </div>
    </div>
        <div class="result">
        <h1 class="nadpis">Výsledok skúšky</h1>
                <br>
                <h1>Počet bodov</h1>
                <br>
                <h1><span id="body"></span>/60</h1>
                <br>
                <h1 class="emoji"></h1>
                <br>
                <button class="reloc">Späť do kurzu</button>
        </div>
    </div>
    <script type="text/javascript" src="skuska.js?version=3b"></script>
</body>
</html>