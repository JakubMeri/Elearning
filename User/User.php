<?php
require "../conn.php";
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
    <title>User</title>
    <link rel="stylesheet" href="User.css?version=59">
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
        <div id="load"></div>
        <nav>
            <a class="logo" href="/Elearning/Main page/Main.html">UIES</a>
            <button class="back"><i class="back fas fa-times"></i></button>
            <button class="backChat"><i class="backChat fas fa-times"></i></button>
            <button class="backProf"><i class="backProfile fas fa-times"></i></button>
            <button class="backZadania"><i class="backZadania fas fa-times"></i></button>
            <button class="backHodnotenie"><i class="backHodnotenie fas fa-times"></i></button>
            <button class="backInfo"><i class="backInfo fas fa-times"></i></button>
            <button class="backTbl1"><i class="backTbl1 fas fa-times"></i></button>
            <button class="backTbl2"><i class="backTbl2 fas fa-times"></i></button>
            <button class="odovzdatMZ"><i class="odovzdatMZ fas fa-times"></i></button>
            <button class="vybratbackMZ"><i class="vybratbackMZ fas fa-times"></i></button>
            <ul class="mainNav">
                <li class="main-item"> <a class="link link1" href="/Elearning/User/User.php">Hlavná stránka</a></li>
                <li class="main-item"> <a class="link link1" href="/Elearning/Data/Prednasky.php">Prednášky</a></li>
                <li class="main-item"> <button class="link link1 logout" >Logout</button></li>
            </ul>
        </nav>
        <aside>
        <ul class="sideMenu">
            <li class="side-item"> <button class="link link2" id="showHodnotenie">Hodnotenie</button></li>
            <li class="side-item"> <button class="showZadania link link2">Zadania</button></li>
            <li class="side-item"> <button id="showChat" class="link link2">Online chat</button></li>
            <li class="side-item"> <button id="showProfile" class="link link2">Profil</button></li>
        </ul>
        </aside>
        <!-- TEST1 -->
    <div class="testBOX" style="display: none">
        <p class="timer">00:00:00</p>
        <div class="mobileCont">
        <div class="otazka1"></div>
        <div class="otazka2"></div>
        <div class="otazka3"></div>
        <div class="otazka4"></div> 
        <button id="test1" type="submit" class="test-btn">Odoslať</button>
        </div>
    </div>
        <main>
        <div class="hlavnaStranka">
<!-- Moje zadanie -->        
        <div class="vybratZadanie">
        <h1>Popis zadania:</h1><br>
             <p class="zadanie"></p>
             <p class="datumOdov"></p>
        </div>
<!-- TESTY -->
        <div class="test">
            <h1 class="notest">dostupné testy</h1>
            <button class="btn-test" id="prednaska1">Test 1</button>
            <button class="btn-test" id="prednaska2">Test 2</button>
            <button class="btn-test" id="prednaska3">Test 3</button>
            <button class="btn-test" id="prednaska4">Test 4</button>
            <button class="btn-test" id="prednaska5">Test 5</button>
            <button class="btn-test" id="prednaska6">Test 6</button>
            <button class="btn-test" id="prednaska7">Test 7</button>
            <button class="btn-test" id="prednaska8">Test 8</button>
            <button class="btn-test" id="skuska">Skúška</button>
        </div>
        <div class="fhi"><a target="_blank" href="https://fhi.euba.sk/"></a><div class="stranka"><p>FHI</p></div></div>
        <div class="ais"><a target="_blank" href="https://ais2.euba.sk/ais/start.do"></a><div class="stranka"><p>AIS</p></div></div>
        <div class="moodle"><a target="_blank" href="https://moodle.euba.sk/"></a><div class="stranka"><p>MOODLE</p></div></div>
        </div>
<!--Mobile menu-->
            <div class="mobilMenu">
                <button class="mobile-menu-item" id="home"><i class="fas fa-home"></i></button>
                <a class="mobile-menu-item" href="/Elearning/Data/Prednasky.php"><i class="fas fa-book-open"></i></a>
                <button class="mobile-menu-item logoutMobile"><i class="fas fa-power-off"></i></button>
            </div>
<!--Mobile sideMenu to overlay-->
            <div class="mobileOverlayMenu">
                <li class="overlayMenu-item"> <button class="linkM" id="hodnotenieM">Hodnotenie</button></li>
                <li class="overlayMenu-item"> <button class="linkM" id="showZadaniaM">Zadania</button></li>
                <li class="overlayMenu-item"> <button id="showMChat" class="linkM">Online chat</button></li>
                <li class="overlayMenu-item"> <button id="showMProfile" class="linkM">Profil</button></li>  
                <li class="overlayMenu-item"> <button id="showTest" class="linkM">dostupné testy</button></li>  
            </div>
<!--Mobile chat-->
            <div class="mobile-chat">
               
                <div class="chatMobile-zone">
                    
                     
                   
                </div>
                <form class="ResetMobileChat">
                <div class="mobileMessage">
                    <input type="text" class="sendMobileMessage" placeholder="Napíš niečo..." name="mobilSprava">
                    <button type="submit" class="odoslatMobil"><i class="far fa-paper-plane" name="mobileSend"></i>  </button>
                </div>    
                </form>
            </div>
<!--Mobile Profile-->
            <div class="mobile-profile">
                <div class="avatar">
                    <i class="fas fa-user-graduate"></i>
                </div>
                <div class="mobileDesc">
                <div class="info">
                    <ul>
                        <li>Meno:</li>
                        <li>Priezvisko:</li>
                        <li>Krúžok:</li>
                        <li>Email:</li>
                    </ul>
                    </div>
                <div class="premenne2">
                    <ul>

                    </ul>
                </div>
                </div>
            </div>
<!-- Mobile Zadania -->
            <div class="mobile-zadania">
            <button class="zadaniaShowMenu">Menu</button>
                <div class="zadania-menu">
                <button class="btnZadania" id="ZMInfo">Info</button>
                <button class="btnZadania" id="ZMT1">Tabuľka 1</button>
                <button class="btnZadania" id="ZMT2">Tabuľka 2</button>
                <button class="btnZadania" id="ZVM">Vybrať zadanie</button>
<!--                 <button class="btnZadania" id="ZOM">Odovzdať zadanie</button> -->
                </div>
                <div class="tvojeZadanie">
                    <p class="tvojezadanieP">Zadanie</p>
                </div>
            <div class="zobrazZadania">
                <table class="zadaniaZoznam"></table>
            </div>
            <div class="infoZadaniaMobile">
            <h1>INFORMÁCIE K ZADANIAM PROJEKTOV</h1><hr><br>
<br>

Projekt teoretický:<br> <br>
Naštudujte si čo je expertný systém, aké miesto má v praxi, aké úlohy vieme riešiť prostredníctvom ES.<br>
Na základe naštudovaného vypracujte analýzu a návrh, kde by ste vo Vašej práci vedeli využiť ES (čo by to prinieslo, čo by to automatizovalo, aké úlohy by sa dali robiť...) Max. 5 strán. Zamerajte sa na podstatu: analyzujte činnosť, ktorú by mohol nahradiť, navrhnite ako a čo by bol prínos. Konkrétne prosím Úsmev<br><br>
Projekt praktický:<br><br>
Vyberte si jeden z problemov (uloh v tabulke), ku ktorym budete robit demo verziu programu. <br>
Napr. rozvrhovanie: tvorba rozvrhu hodin - program automaticky urobi rozvrh hodin napr. pre dva rocniky, kde v kazdom budu 2 kruzky a rocnik bude mat 3 predmety a teda 3 prednasky a 6 cviceni. Miestnosti su podla predmetov (potrebujeme prednaskovu velku miestnost, potrebujeme PC miestnost a pod.) Rozvrh urobte na dva resp. tri dni....ak viete mozete urobit aj viac alebo vseobecne generovanie rozvrhu podla podmienok, ohraniceni a podobne...<br><br>
Napr. poradny system, ktory vam na konci poradi ktore auto, mobil a pod. je pre vas na kolko (bud percenta alebo body) vyhodny (zoradi auta od najlepsieho po najhorsi napr.)<br>
Diagnostika chyb v PC resp. testovanie nejakych nedostatkov a pod. <br>
Planovanie ludskych zdrojov na projekte (automatizacia)... a pod. <br>
Možete pracovať v CLIPSE, ale ak niekto chce, tak nech sa páči: Úsmev ...aaale ako chcete Mrknutie

</p><br>
<a target="_blank" href="https://stackoverflow.com/questions/53421492/python-rule-based-engine">https://stackoverflow.com/questions/53421492/python-rule-based-engine</a>
            </div>
            <div class="TabulkaM1">
            <table>
        <tr><th>Typ úlohy</th><th>Vstup</th><th>Výstup</th><th>Znalosti</th><th>Vlastnosti</th></tr>
        <tr><td><b>Klasifikácia<b></td><td>Vlastnosti objektu</td><td>Objektové triedy</td><td>Asociácia
vlastnosť - trieda</td><td>Súbor tried je pred deklarovaný</td></tr>
        <tr><td><b>Diagnóza<b></td><td>Príznaky/
Sťažnosti</td><td>Chybná trieda</td><td>Model správania sa systému</td><td>Rozličné formy výstupu</td></tr>
        <tr><td><b>Hodnotenie<b></td><td>Popis javu</td><td>Rozhodovacie triedy</td><td>Kritéria, normy</td><td>Hodnotenie je vykonané v konkrétnom čase</td></tr>
        <tr><td><b>Monitorovanie<b></td><td>Systémové údaje</td><td>Nezrovnalosť tried</td><td>Obyčajné správanie systému</td><td>Systémy sa menia postupom času</td></tr>
        <tr><td><b>Predvídanie<b></td><td>Systémové údaje</td><td>Stav systému</td><td>Model správania sa systému</td><td>Výstupom je popis systému niekedy v budúcnosti</td></tr>
    </table>
            </div>
            <div class="TabulkaM2">
            <table>
        <tr><th>Typ úlohy</th><th>Vstup</th><th>Výstup</th><th>Znalosti</th><th>Vlastnosti</th></tr>
        <tr><td><b>Navrhovanie<b></td><td>Požiadavky</td><td>Opis artefaktu</td><td>Komponenty, obmedzenia, preferencie</td><td>Možnosť zahrnúť kreatívne navrhovanie komponentov</td></tr>
        <tr><td><b>Konfiguračné navrhovanie<b></td><td>Požiadavky</td><td>Opis artefaktu</td><td>Komponenty, obmedzenia, preferencie</td><td>Podtyp navrhovania v ktorom sú všetky komponenty pred definované</td></tr>
        <tr><td><b>Priraďovanie<b></td><td>Dve sady objektov, požiadavky</td><td>Zobrazenie sada1 –– sada2</td><td>Obmedzenia, preferencie</td><td>Zobrazenie má byť jednoduché</td></tr>
        <tr><td><b>Plánovanie<b></td><td>Ciele, požiadavky</td><td>Akčný plán</td><td>Činnosti, obmedzenia, preferencie</td><td>Činnosti sú usporiadané v čase</td></tr>
        <tr><td><b>Rozvrhovanie<b></td><td>Pracovné aktivity, zdroje, časový úsek, požiadavky</td><td>Rozvrh</td><td>Obmedzenia, preferencie</td><td>Časovo orientovaný charakter odlišný od priraďovania</td></tr>
        <tr><td><b>Modelovanie<b></td><td>Požiadavky</td><td>Vzor</td><td>Základné časti modelu, Šablóna modelu,</td><td>Možnosť zahrnúť kreatívne „syntézy“</td></tr>
    </table>
            </div>
            <div class="vybratZadanieM">

            </div>
            <div class="odovzdatZadanieM">

            </div>
            </div>
<!-- Zadania large -->
    <div class="zadania">
                <div class="infoZadania">
                    <button class="closeInfo"><i class="fas fa-times"></i></button>
<h1>INFORMÁCIE K ZADANIAM PROJEKTOV</h1><hr><br>
<br>

Projekt teoretický:<br> <br>
Naštudujte si čo je expertný systém, aké miesto má v praxi, aké úlohy vieme riešiť prostredníctvom ES.<br>
Na základe naštudovaného vypracujte analýzu a návrh, kde by ste vo Vašej práci vedeli využiť ES (čo by to prinieslo, čo by to automatizovalo, aké úlohy by sa dali robiť...) Max. 5 strán. Zamerajte sa na podstatu: analyzujte činnosť, ktorú by mohol nahradiť, navrhnite ako a čo by bol prínos. Konkrétne prosím Úsmev<br><br>
Projekt praktický:<br><br>
Vyberte si jeden z problemov (uloh v tabulke), ku ktorym budete robit demo verziu programu. <br>
Napr. rozvrhovanie: tvorba rozvrhu hodin - program automaticky urobi rozvrh hodin napr. pre dva rocniky, kde v kazdom budu 2 kruzky a rocnik bude mat 3 predmety a teda 3 prednasky a 6 cviceni. Miestnosti su podla predmetov (potrebujeme prednaskovu velku miestnost, potrebujeme PC miestnost a pod.) Rozvrh urobte na dva resp. tri dni....ak viete mozete urobit aj viac alebo vseobecne generovanie rozvrhu podla podmienok, ohraniceni a podobne...<br><br>
Napr. poradny system, ktory vam na konci poradi ktore auto, mobil a pod. je pre vas na kolko (bud percenta alebo body) vyhodny (zoradi auta od najlepsieho po najhorsi napr.)<br>
Diagnostika chyb v PC resp. testovanie nejakych nedostatkov a pod. <br>
Planovanie ludskych zdrojov na projekte (automatizacia)... a pod. <br>
Možete pracovať v CLIPSE, ale ak niekto chce, tak nech sa páči: Úsmev ...aaale ako chcete Mrknutie

</p><br>
<a target="_blank" href="https://stackoverflow.com/questions/53421492/python-rule-based-engine">https://stackoverflow.com/questions/53421492/python-rule-based-engine</a>
                </div>
<div class="tabulka1">

                    <button class="closeTabulka1"><i class="fas fa-times"></i></button>
<table>
        <tr><th>Typ úlohy</th><th>Vstup</th><th>Výstup</th><th>Znalosti</th><th>Vlastnosti</th></tr>
        <tr><td><b>Klasifikácia<b></td><td>Vlastnosti objektu</td><td>Objektové triedy</td><td>Asociácia
vlastnosť - trieda</td><td>Súbor tried je pred deklarovaný</td></tr>
        <tr><td><b>Diagnóza<b></td><td>Príznaky/
Sťažnosti</td><td>Chybná trieda</td><td>Model správania sa systému</td><td>Rozličné formy výstupu</td></tr>
        <tr><td><b>Hodnotenie<b></td><td>Popis javu</td><td>Rozhodovacie triedy</td><td>Kritéria, normy</td><td>Hodnotenie je vykonané v konkrétnom čase</td></tr>
        <tr><td><b>Monitorovanie<b></td><td>Systémové údaje</td><td>Nezrovnalosť tried</td><td>Obyčajné správanie systému</td><td>Systémy sa menia postupom času</td></tr>
        <tr><td><b>Predvídanie<b></td><td>Systémové údaje</td><td>Stav systému</td><td>Model správania sa systému</td><td>Výstupom je popis systému niekedy v budúcnosti</td></tr>
    </table>
</div>
<div class="tabulka2">
<button class="closeTabulka2"><i class="fas fa-times"></i></button>
<table>
        <tr><th>Typ úlohy</th><th>Vstup</th><th>Výstup</th><th>Znalosti</th><th>Vlastnosti</th></tr>
        <tr><td><b>Navrhovanie<b></td><td>Požiadavky</td><td>Opis artefaktu</td><td>Komponenty, obmedzenia, preferencie</td><td>Možnosť zahrnúť kreatívne navrhovanie komponentov</td></tr>
        <tr><td><b>Konfiguračné navrhovanie<b></td><td>Požiadavky</td><td>Opis artefaktu</td><td>Komponenty, obmedzenia, preferencie</td><td>Podtyp navrhovania v ktorom sú všetky komponenty pred definované</td></tr>
        <tr><td><b>Priraďovanie<b></td><td>Dve sady objektov, požiadavky</td><td>Zobrazenie sada1 –– sada2</td><td>Obmedzenia, preferencie</td><td>Zobrazenie má byť jednoduché</td></tr>
        <tr><td><b>Plánovanie<b></td><td>Ciele, požiadavky</td><td>Akčný plán</td><td>Činnosti, obmedzenia, preferencie</td><td>Činnosti sú usporiadané v čase</td></tr>
        <tr><td><b>Rozvrhovanie<b></td><td>Pracovné aktivity, zdroje, časový úsek, požiadavky</td><td>Rozvrh</td><td>Obmedzenia, preferencie</td><td>Časovo orientovaný charakter odlišný od priraďovania</td></tr>
        <tr><td><b>Modelovanie<b></td><td>Požiadavky</td><td>Vzor</td><td>Základné časti modelu, Šablóna modelu,</td><td>Možnosť zahrnúť kreatívne „syntézy“</td></tr>
    </table>
</div>

<div class="odovzdatZadanie">
<form action="" enctype="multipart/form-data" id="file-form">
<button class="closeOdovzdanie"><i class="fas fa-times"></i></button>
    <label id="sprievodnyText" for="file">Sem vlož zadanie:</label><input type="file" name="file" id="odovzdaneZadanie">
    <br>
    <button name="upload" id="upload">Nahrať</button>
    <p class="hlaska"></p>
</form>
</div>
            <button class="btnZ"><i class="fas fa-times"></i></button> 
            <button class="zadania-info">Info</button>
            <button class="zadania-tab1">Tabuľka 1</button>
            <button class="zadania-tab2">Tabuľka 2</button>
            <button class="zadania-vyber">Vybrať zadanie</button>
            <button class="odovzdat-zadanie">Odovzdať zadanie</button>

            <div class="zobrazZadania">
                <table class="zadaniaZoznam2"></table>
            </div>
    </div>
<!--Large chat-->
          <div class="box">
<!--heading-->
             <button class="btn"><i class="fas fa-times"></i></button> 
             <button class="btnMin"><i class="fas fa-window-minimize"></i></button> 
             <button class="btnMax"><i class="fas fa-window-maximize"></i></button> 
 <!--Oblast pre chat-->
             <div class="chat-area">
              <div class="message-window">
                    <form class="ResetLargeChat">
                <div class="send-message">
                    <input class="largechatInput" type="text" placeholder="Napíš niečo..." name=sprava>
                    <button type="submit" class="largechatBtn" name=odoslanieSpravy>
                        <i class="far fa-paper-plane"></i>    
                    </button>
                    </form>     
                </div>
                <div class="view-message">
               
                </div>
              </div>
              <div class="online">
                <div class="onlineScroll">
                    <?php
                    
                    $sql = "SELECT * FROM chat";
                    $result = mysqli_query($conn, $sql);
                    if(mysqli_num_rows($result) > 0){
                    $row = mysqli_fetch_assoc($result);
                    }
                    echo "<li class='person'>";
                    echo "<i class='online far fa-dot-circle'></i>";
                    echo $_SESSION['meno'];
                    echo "</li>";
                    ?>
                </div>
              </div>
             </div>
          </div>
<!--Profil a nastavenia profilu-->          
        <div class="profile">
            <button class="btnProf"><i class="fas fa-times"></i></button> 
            <div class="profileboard">
                <div class="photo">
                    <div class="profile-image">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                </div>
                <div class="desc">
                    <div class="info">
                    <ul>
                        <li>Meno:</li>
                        <li>Priezvisko:</li>
                        <li>Krúžok:</li>
                        <li>Email:</li>
                    </ul>
                    </div>
                <div class="premenne">
                    <ul>

                    </ul>
                </div>
                </div>
            </div>
        </div>
        <!-- Hodnotenie -->
        <div class="hodnotenie">
            <button class="hideHodnotenie"><i class="fas fa-times"></i></button>
            <h1>HODNOTENIE</h1>
            <table class="hodnotenieZobraz">

            </table>
        </div>
        <!-- Hodnotenie  mobile-->
        <div class="hodnotenieMobile">
            <h1>HODNOTENIE</h1>
            <table class="hodnotenieZobrazM">

            </table>
        </div>


        </main>
        <!-- KRUZOK -->
        <div class="kruzok">
            <div class="textkruzok">
                <h1>Vitaj v kurze UIES</h1>
                <p>Pre pokračovanie do kurzu, zadaj číslo svojho krúžku.</p>
            </div>
        <form id="zadanieKruzku">
        <h2>ZADAJ ČÍSLO SVOJHO KRÚŽKU</h2>
        <input type="text" class="cislokruzku" placeholder="Zadaj číslo krúžku..."><button class="zadatKruzok">Nastaviť</button>
        </form>
        </div>

        
<!--small chat-->
        <div class="chat-box">
            <div class="chat-nav"><button class="closeChat"><i class="fas fa-times"></i></button></div>
                <div class="chat-input">
                <form class="SmallChatReset">
                        <input class="input" type="text" formtarget placeholder="Napíš sem niečo...." name="message">
                        <button type="submit" class="send"><i class="fas fa-paper-plane" name="minSub"></i></button>
                </form>
                </div>
            <div class="chat-room">
                
          
            </div>
        </div>
        <button class="chat"><i class="fas fa-envelope"></i>Chat</button>
       
    </div>
    <script type="text/javascript" src="User.js?v=6d"></script>
    <script type="text/javascript" src="jQuery.js?v=1"></script>
    <?php



    $sql = "SELECT * FROM uzivatelia WHERE email = '".$_SESSION['uzivatel']."'";
    $result = mysqli_query($conn, $sql);
    while($row = $result->fetch_assoc()) {     
    if($row['Kruzok'] == null){
        echo "<script>";
        echo "document.querySelector('.kruzok').style.display = 'flex';";
        echo "</script>";
    }
    else{

    }
}

    ?>
</body>
</html>