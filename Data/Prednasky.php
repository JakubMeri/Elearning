<?php
session_start();
if(isset($_SESSION['uzivatel'])){
    
    
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
    <title>Prednášky</title>
    <link rel="stylesheet" href="Prednasky.css?v=5a">
    <link rel="shortcut icon" type="image/png" href="/Elearning/icon.png"/>
    <script src="https://kit.fontawesome.com/5cfe4f03a7.js"></script>
</head>
<body>
    <div class="container">
    <div id="load"></div>
    <?php
                if(isset($_SESSION['uzivatel']) && $_SESSION['typ'] == "admin"){
                echo '
                <nav>
                <a class="logo" href="/Elearning/Main page/Main.html">UIES</a>
                <a class="home" href="/Elearning/home.php"><i class="home fas fa-home"></i></a>
                    <ul class="mainNav" style="width: 45% !important">
                        <li class="main-item"> <a class="link link1" href="/Elearning/home.php">Hlavná stránka</a></li>
                        <li class="main-item"> <a class="link link1" href="/Elearning/Data/Prednasky.php">Prednášky</a></li>
                        <li class="main-item"> <a class="link link1" href="/Elearning/Data/upravaObsahu.php">Úprava obsahu</a></li>
                        <li class="main-item"> <button class="logout link link1" href="#">Logout</button></li>
                    </ul>
            </nav>';
                }
                else{
                echo '<nav>
                    <a class="logo" href="/Elearning/Main page/Main.html">UIES</a>
                    <a class="home" href="/Elearning/home.php"><i class="home fas fa-home"></i></a>
                    <ul class="mainNav" style="width: 30% !important">
                        <li class="main-item"> <a class="link link1" href="/Elearning/home.php">Hlavná stránka</a></li>
                        <li class="main-item"> <a class="link link1" href="/Elearning/Data/Prednasky.php">Prednášky</a></li>
                        <li class="main-item"> <button class="logout link link1" href="#">Logout</button></li>
                    </ul>
                 </nav>';
                }
        ?>
        <aside>
        <ul class="sideMenu">
            <li class="side-item"> <button class="pred1 link link2">Prednáška č.1</button></li>
            <li class="side-item"> <button class="pred2 link link2">Prednáška č.2</button></li>
            <li class="side-item"> <button class="pred3 link link2">Prednáška č.3</button></li>
            <li class="side-item"> <button class="pred4 link link2">Prednáška č.4</button></li>
            <li class="side-item"> <button class="pred5 link link2">Prednáška č.5</button></li>
            <li class="side-item"> <button class="pred6 link link2">Prednáška č.6</button></li>
            <li class="side-item"> <button class="pred7 link link2">Prednáška č.7</button></li>
            <li class="side-item"> <button class="pred8 link link2">Prednáška č.8</button></li>
            
        </ul>
        </aside>
        <main>
        <div class="predcontainer">
            <div class="teacher-content">
                <h3 class="dopln-info">Doplňujúce informácie k predmetu</h3>
            <div class="show-teacher-data">
    
    </div>
            </div>
        <div class="prednaskyBox">
            <a target="_blank" href="/Elearning/Data/Download/1.pdf">Prednáška 1</a>
            <a target="_blank" href="/Elearning/Data/Download/2.pdf">Prednáška 2</a>
            <a target="_blank" href="/Elearning/Data/Download/3.pdf">Prednáška 3</a>
            <a target="_blank" href="/Elearning/Data/Download/4.pdf">Prednáška 4</a>
            <a target="_blank" href="/Elearning/Data/Download/5.pdf">Prednáška 5</a>
            <a target="_blank" href="/Elearning/Data/Download/6.pdf">Prednáška 6</a>
            <a target="_blank" href="/Elearning/Data/Download/7.pdf">Prednáška 7</a>
            <a target="_blank" href="/Elearning/Data/Download/8.pdf">Prednáška 8</a>
        </div>
    </div>
            <div class="mobileMenu">
               <li><button class="predM1 mobile-menu-item">Prednáška 1</button></li>
               <li><button class="predM2 mobile-menu-item">Prednáška 2</button></li>
               <li><button class="predM3 mobile-menu-item">Prednáška 3</button></li>
               <li><button class="predM4 mobile-menu-item">Prednáška 4</button></li>
               <li><button class="predM5 mobile-menu-item">Prednáška 5</button></li>
               <li><button class="predM6 mobile-menu-item">Prednáška 6</button></li>
               <li><button class="predM7 mobile-menu-item">Prednáška 7</button></li>
               <li><button class="predM8 mobile-menu-item">Prednáška 8</button></li>
            </div>
            <div class="prednaska1">
                <div class="header"><h1>Prednáška 1</h1><button class="pre-1-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider">
                  
                </div>
            </div>
            <div class="prednaska2">
                <div class="header2"><h1>Prednáška 2</h1><button class="pre-2-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider2">

                </div>
            </div>
            <div class="prednaska3">
                <div class="header3"><h1>Prednáška 3</h1><button class="pre-3-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider3">
            
                </div>
            </div>
            <div class="prednaska4">
                <div class="header4"><h1>Prednáška 4</h1><button class="pre-4-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider4">
                    
                </div>
            </div>
            <div class="prednaska5">
                <div class="header5"><h1>Prednáška 5</h1><button class="pre-5-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider5">
                   
                </div>
            </div>
            <div class="prednaska6">
                <div class="header6"><h1>Prednáška 6</h1><button class="pre-6-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider6">
                   
                </div>
            </div>
            <div class="prednaska7">
                <div class="header7"><h1>Prednáška 7</h1><button class="pre-7-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider7">
                    
                </div>
            </div>
            <div class="prednaska8">
                <div class="header8"><h1>Prednáška 8</h1><button class="pre-8-back"><i class="fas fa-chevron-left"></i></button></div>
                <div class="slider8">
                  
                </div>
            </div>
          <div class="box">
            <button class="btn"><i class="fas fa-times"></i></button> 
            <!--<button class="btnMin"><i class="fas fa-window-minimize"></i></button> -->
            <!-- <button class="btnMax"><i class="fas fa-window-maximize"></i></button>  -->
             <div class="slide">
            </div>
         <div class="btn-group">
            <button class="btn1">&lt;</button>
            <button class="btn2">&gt;</button>
         </div>
          </div>
        </main>
    </div>
    <script type="text/javascript" src="Prednasky.js?v=3"></script>
</body>
</html>