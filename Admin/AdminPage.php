<?php
session_start();
if(isset($_SESSION['uzivatel']) && $_SESSION['typ'] == "admin"){

}
else{
    header("Location: ../Login/Login.php?Prihlas_sa");
    exit();
}
require "../conn.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AdminPage</title>
    <link rel="stylesheet" href="AdminPage.css?version=20e">
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
            <button class="BackStud"><i class="BackStud fas fa-times"></i></button>
            <button class="BackHodnotenie"><i class="BackHodnotenie fas fa-times"></i></button>
            <button class="BackZadania"><i class="BackZadania fas fa-times"></i></button>
            <ul class="mainNav">
                <li class="main-item"> <a class="link link1 active" href="/Elearning/Admin/AdminPage.php">Domov</a></li>
                <li class="main-item"> <a class="link link1" href="/Elearning/Data/Prednasky.php">Prednášky</a></li>
                <li class="main-item"> <a class="link link1" href="/Elearning/Data/upravaObsahu.php">Úprava obsahu</a></li>
                <li class="main-item"> <button class="link link1 logout" >Logout</button></li>
            </ul>
        </nav>
        <aside>
        <ul class="sideMenu">
            <li class="side-item"> <button class="link link2" id="showHodnotenie">Hodnotenie</button></li>
            <li class="side-item"> <button class="link link2" id="showZadania">Zadania</button></li>
            <li class="side-item"> <button id="showChat" class="link link2">Diskusia</button></li>
            <li class="side-item"> <button id="showStudenti" class="link link2">Študenti</button></li>
            <li class="side-item"> <button id="showTest" class="link link2">Testy</button></li>
        </ul>
        </aside>
        <main>
<!--TestBtnPanel-->
        <div class="controler">
            <div class="panel">
                <h1>testy</h1>
                <span><label class="checkboxL" id="on1">Prednáška 1</label><input class="check" type="checkbox" name="" id="testBtn1"></span>
                <span><label class="checkboxL" id="on2">Prednáška 2</label><input class="check" type="checkbox" name="" id="testBtn2"></span>
                <span><label class="checkboxL" id="on3">Prednáška 3</label><input class="check" type="checkbox" name="" id="testBtn3"></span>
                <span><label class="checkboxL" id="on4">Prednáška 4</label><input class="check" type="checkbox" name="" id="testBtn4"></span>
                <span><label class="checkboxL" id="on5">Prednáška 5</label><input class="check" type="checkbox" name="" id="testBtn5"></span>
                <span><label class="checkboxL" id="on6">Prednáška 6</label><input class="check" type="checkbox" name="" id="testBtn6"></span>
                <span><label class="checkboxL" id="on7">Prednáška 7</label><input class="check" type="checkbox" name="" id="testBtn7"></span>
                <span><label class="checkboxL" id="on8">Prednáška 8</label><input class="check"type="checkbox" name="" id="testBtn8"></span>
                <span><label class="checkboxL" id="on9">Skúška test</label><input class="check"type="checkbox" name="" id="skuskaBtn"></span>
            </div>
<!-- Termin odovzdania zadani -->
            <div class="terminZadani">
                <h1>dátum odovzdania zadaní</h1>
                <span>
                    <input class="datepicker" type="date">
                    <input class="timepicker" type="time">
                </span>
                <input class="nastavenie" type="submit" value="nastaviť">
                <h2 class="nastaveny"></h2>
            </div>
            <!-- Nastavenie hesla na skusku -->
        <div class="nastavenieHesla">
            <h1>Heslo na skúšku</h1>
            <br><br><br><br>
            <span>
                <input type="text" id="nastavHeslo">
                <button id="hesloOk">Nastaviť</button>
            </span>
            <br>
            <br>
            <h3>Aktuálne heslo: <span id="aktualneHeslo"></span></h3>
        </div>
        <!-- ODOVZDANE ZADANIA -->
        <div class="odovzdaneZadania">
            <h1>Odovzdané zadania</h1>
            <div class="containerZadania">
                
            </div>
        </div>
    </div>
    <div class="zmazatAlert">
    <h3>Chceš naozaj zmazať zadanie?</h3>
    <span>
        <button id="zmazatZadanie">Áno</button>
        <button id="nezmazatZadanie">Nie</button>
    </span>
</div>
<!-- Pridavanie otazok skuska -->
        <div class="otazkyHandler">
            <div class="confirmDelQ">
                <h3 id="deleteQ">Naozaj chcete zmazať otázku?</h3>
                <span>
                    <button id="anoQ">Áno</button>
                    <button id="nieQ">Nie</button>
                </span>
            </div>
            <div class="upravaO upravaOtazokHide">
            <button class="btnUClose"><i class="fas fa-times"></i></button>
                <h2 id="otazka">Otazka znenie</h2>
                <span><label for="">a)</label><input class="update-input" type="text"><input class="spravnaOdpovedU" type="checkbox"></span></span>
                <span><label for="">b)</label><input class="update-input" type="text"><input class="spravnaOdpovedU" type="checkbox"></span></span>
                <span><label for="">c)</label><input class="update-input" type="text"><input class="spravnaOdpovedU" type="checkbox"></span></span>
                <span><label for="">d)</label><input class="update-input" type="text"><input class="spravnaOdpovedU" type="checkbox"></span></span>
                <button id="btnUpdateQ">UPDATE</button>
            </div>
            <button class="btnO"><i class="fas fa-times"></i></button>
            <div class="tabContainer">
                <input class="customRadio" type="radio" name="tab" id="tab1" checked>
                <input class="customRadio" type="radio" name="tab" id="tab2">
                <input class="customRadio" type="radio" name="tab" id="tab3">
            </div>
            <div class="tab1">
                <h1>Nahrávanie otázok</h1>
                <div class="formularO">
                <label>Otázka:</label>
                    <span><input type="text" class="otazkyInput"></span>
                <label>Odpoveď 1:</label>
                    <span><input type="text" class="odpovedInput"><input class="spravnaOdpoved" type="checkbox"></span>
                <label>Odpoveď 2:</label>
                    <span><input type="text" class="odpovedInput"><input class="spravnaOdpoved" type="checkbox"></span>
                <label>Odpoveď 3:</label>
                    <span><input type="text" class="odpovedInput"><input class="spravnaOdpoved" type="checkbox"></span>
                <label>Odpoveď 4:</label>
                    <span><input type="text" class="odpovedInput"><input class="spravnaOdpoved" type="checkbox"></span>
                    <button id="pridatOtazku">Pridať otázku</button>
                </div>
            </div>
            <div class="tab2">
                <h1>Úprava otázok</h1>
                    <div class="zoznamOtazok">
                        <div class="updateContainer">
                        
                        </div>
                    </div>
            </div>
            <div class="tab3">
                <h1>Zmazanie otázok</h1>
                    <div class="zoznamOtazok">
                        <div class="zoznam">
                            
                        </div>
                    </div>
            </div>
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
                <li class="overlayMenu-item"> <button class="linkM" id="showmobilezadania">Zadania</button></li>
                <li class="overlayMenu-item"> <button id="showMChat" class="linkM">Diskusia</button></li>
                <li class="overlayMenu-item"> <button id="showStudentiM" class="linkM">Študenti</button></li>  
            </div>
<!--Mobile chat-->
            <div class="mobile-chat">
               
                <div class="chatMobile-zone">

                   
                </div>
                <form class="ResetMobileChat">
                <div class="mobileMessage">
                    <input type="text" class="sendMobileMessage" placeholder="Napíš niečo...">
                    <button type="submit" class="odoslatMobil"><i class="far fa-paper-plane"></i>  </button>
                </div>    
                </form>
            </div>
<!-- Mobile studenti -->
<div class="studentiMob">
    <div class="tabulk">
<table class="tabulkaS"></table> 
    </div>
    <div class="zmazanieStudenta">
    <form class="resetMobileStudent"> 
        <input class="inputDelStud" type="text" placeholder="Zadaj meno a priezvisko...">
        <button class="studentZmaz">Zmazať</button>
    </form>
    </div>
</div>
<!-- Mobile Zadania -->

<div class="mobile-zadania">
<button class="menuZadania">MENU</button>
<div class="menu-zadanie">
        <form class="formZadaniaM">
            <input type="text" class="noveZadanieM" placeholder="Názov zadania...">
            <button class="zadanieNewM">Pridať</button> 
            <button class="zadanieDelM">Odstrániť</button> 
            <button class="kruzok1M">Krúžok 1</button>
            <button class="kruzok2M">Krúžok 2</button>
            <button class="kruzok3M">Krúžok 3</button>
            <button class="kruzok4M">Krúžok 4</button>
           
        </form>
        </div>
        <div class="zobrazZadania">
            <table class="zadaniaZoznam2">
            
            </table>
        </div>     
</div>
<!-- Zadania large -->
<div class="zadania">
    <button class="btnZ"><i class="fas fa-times"></i></button> 
        <form class="formZadania">
            <button class="kruzok1">Krúžok 1</button>
            <button class="kruzok2">Krúžok 2</button>
            <button class="kruzok3">Krúžok 3</button>
            <button class="kruzok4">Krúžok 4</button>
            <input type="text" class="noveZadanie" placeholder="Názov zadania...">
            <button class="zadanieNew">Pridať</button> 
            <button class="zadanieDel">Odstrániť</button> 
            <button class="resetZadania"><i class="fas fa-sync"></i></button> 
        </form>
        <div class="zobrazZadania">
            <table class="zadaniaZoznam">
            
            </table>
        </div>
</div>
<!--Large chat-->
          <div class="box">
<!--heading-->
             <button class="btn"><i class="fas fa-times"></i></button> 
             <button class="btnMin"><i class="fas fa-window-minimize"></i></button> 
             <button class="btnMax"><i class="fas fa-window-maximize"></i></button> 
             <button class="chatDelete"><i class="fas fa-trash"></i></button>
 <!--Oblast pre chat-->
             <div class="chat-area">
              <div class="message-window">
                    <form class="ResetLargeChat">
                <div class="send-message">
                    <input class="largechatInput" type="text" placeholder="Napíš niečo...">
                    <button type="submit" class="largechatBtn">
                        <i class="far fa-paper-plane"></i>    
                    </button>
                    </form>     
                </div>
                <div class="view-message">
<!-- sem pojde sprava z chatu -->
                </div>
              </div>
              <div class="online">
                <div class="onlineScroll">
                <?php
                    
                    $sql = "SELECT * FROM uzivatelia WHERE typ_uzivatela='user' OR typ_uzivatela='admin' ORDER BY onlineU DESC";
                    $result = mysqli_query($conn, $sql);
                    if(mysqli_num_rows($result) > 0){
                        while($row = $result->fetch_assoc()) {
                        if($row['onlineU'] == 1){
                        echo "<li class='person'>";
                        echo "<i class='online far fa-dot-circle'></i>";
                        echo $row['meno']. " ".$row['priezvisko'];
                        echo "</li>";
                         }
                        else{
                            echo "<li class='person'>";
                            echo "<i class='offline far fa-dot-circle'></i>";
                            echo $row['meno']. " ".$row['priezvisko'];
                            echo "</li>";  
                        }
                        }
                    }

                    ?>
                </div>
              </div>
             </div>
          </div>
          <!-- Studenti -->
          <div class="studenti">
             <button class="btnStudenti"><i class="fas fa-times"></i></button> 
                 

              <div class="zobrazStudentov">
                    <table class="tabulkaSL">
                        <!-- Nacitane data -->
                    </table>
              </div>
              <div class="uprava">
              <form class="StudentReset">
                <input type="text" name="menoStudenta" class="delUname" placeholder="Meno a priezvisko používateľa...">
                <input type="submit" value="zmazať" class="subDel" name="zmazstudenta">
              </form>
              </div>
          </div>


        <!--HODNOTENIE-->
        <div class="hodnotenie">
       <div class="alert1">
            <p>Vyber študenta!</p>
       </div>
       <div class="alert2">
            <p>Zadaj body!</p>
       </div>
       <div class="alert3">
            <p>Maximum je 24 bodov!</p>
       </div>
                <button class="btnHodnotenie"><i class="fas fa-times"></i></button> 
        <div class="studentiHodnotenie">    
            <table class="zobrazenieHodnotenia">
            
            </table>
        </div>
        <div class="vyberStudenta">
            <p class="zobrazenieMena">Študent</p>
            <p class="zobrazenieKruzku">Krúžok</p>
            <input class="studentInput" type="text" placeholder="Zadaj počet bodov...">
            <button class="studentBtn">Uložiť hodnotenie</button>
        </div>
        </div> 
        
        <!-- Hodnotenie Mobil -->
        <div class="hodnotenieM">
   
            <table class="zobrazenieHodnotenia2">
            
            </table>
        </div>   
        </main>



        
<!--small chat-->
        <div class="chat-box">
            <div class="chat-nav"><button class="closeChat"><i class="fas fa-times"></i></button></div>
                <div class="chat-input">
                <form class="SmallChatReset">
                        <input class="input" type="text" formtarget placeholder="Napíš sem niečo....">
                        <button type="submit" class="send"><i class="fas fa-paper-plane"></i></button>
                </form>
                </div>
            <div class="chat-room">
                
         
            </div>
        </div>
        <button class="chat"><i class="fas fa-envelope"></i>Diskusia</button>
       
    </div>
    <script type="text/javascript" src="Admin.js?v=15h"></script>


</body>
</html>