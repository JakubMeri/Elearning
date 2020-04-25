<?php
if(isset($_POST["login"])){
require "../conn.php";

$email = $_POST['email'];
$heslo = $_POST['heslo'];

if(empty($email) || empty($heslo)){
    header("Location: login.php?error=prazdne_polia");
    exit();
}
else{
    $sql = "SELECT * FROM uzivatelia WHERE email = ?";
    $stmt = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($stmt, $sql)){
    header("Location: login.php?error=sql_error");
    exit();    
    }
    else{
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if($row = mysqli_fetch_assoc($result)){
            $overenieHesla = password_verify($heslo, $row['heslo']);
            if($overenieHesla == false){
                header("Location: login.php?nespravne_heslo");
                exit();     
            }
            else if($overenieHesla == true){
                session_start();
                $_SESSION['meno'] = $row['meno'];
                $_SESSION['uzivatel'] = $row['email'];
                $_SESSION['typ'] = $row['typ_uzivatela'];
                $_SESSION['priezvisko'] = $row['priezvisko'];
                if($row['typ_uzivatela'] == "admin"){
                    header("Location: /Elearning/Admin/AdminPage.php?prihlaseny");
                    $query = "UPDATE uzivatelia SET onlineU = 1 WHERE email = '".$_SESSION['uzivatel']."'";

                    if(mysqli_query($conn, $query)){
    
                    } else {
                     echo 'ERROR: '. mysqli_error($conn);
                    }
                    exit();  
                }
                else if($row['typ_uzivatela'] == "user"){
                    header("Location: /Elearning/User/User.php?prihlaseny");
                    $query = "UPDATE uzivatelia SET onlineU = 1 WHERE email = '".$_SESSION['uzivatel']."'";

                    if(mysqli_query($conn, $query)){
    
                    } else {
                     echo 'ERROR: '. mysqli_error($conn);
                    }
                    exit();  
                } 
                else if($row['typ_uzivatela'] == "spravca"){
                    header("Location: /Elearning/Spravca/Spravca.php");
                    $query = "UPDATE uzivatelia SET onlineU = 1 WHERE email = '".$_SESSION['uzivatel']."'";

                    if(mysqli_query($conn, $query)){
    
                    } else {
                     echo 'ERROR: '. mysqli_error($conn);
                    }
                    exit();  
                } 
            }
            else{
                header("Location: login.php?nespravne_heslo");
                exit();   
            }
        }
        else{
            header("Location: login.php?Nespravny_email_alebo_heslo");
            exit();    
        }

    }
}
}
?>