<?php
if(isset($_POST['registrovat'])){

require "../conn.php";   
    
$meno = $_POST['meno'];
$priezvisko = $_POST['priezvisko'];
$email = $_POST['email'];
$heslo = $_POST['heslo'];
$overenieHesla = $_POST['overenieHesla'];
$uzivatel = "user";

    if(empty($meno) || empty($priezvisko) || empty($email) || empty($heslo) || empty($overenieHesla)){
    
    header("Location: register.php?vypln_prihlasovacie_udaje");
    exit();
    }
    else if($heslo != $overenieHesla){
    header("Location: register.php?Hesla_sa_nezhoduju");

    }
    else{
        $sql = "SELECT meno FROM uzivatelia WHERE meno = ?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: register.php?error=sqlerror");
        exit();
        }
        else{
            mysqli_stmt_bind_param($stmt, "s", $meno);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultCheck = mysqli_stmt_num_rows($stmt);
            if($resultCheck > 0){
                header("Location: register.php?error=uzivatel_uz_existuje");
                exit();
            }
            else{
                $sql = "INSERT INTO uzivatelia (meno, priezvisko, email, heslo, typ_uzivatela, semester, zadanie, Skuska, spolu) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = mysqli_stmt_init($conn);
                if(!mysqli_stmt_prepare($stmt, $sql)){
                    header("Location: register.php?error=sqlerror");
                    exit();
                }
                else{
                    $hashovanieHesla = password_hash($heslo, PASSWORD_DEFAULT);
                    $nula = 0;
                    mysqli_stmt_bind_param($stmt, "sssssssss", $meno, $priezvisko, $email, $hashovanieHesla, $uzivatel,$nula,$nula,$nula,$nula);
                    mysqli_stmt_execute($stmt);
                    header("Location: ../Login/login.php?Zaregistrovany");
                    exit();
                }
            }
        }
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);

}
?>