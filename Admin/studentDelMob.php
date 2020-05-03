<?php

require "../conn.php";



if(isset($_POST['meno'], $_POST['priezvisko'], $_POST['email'])){
    $meno = mysqli_real_escape_string($conn, $_POST['meno']);
    $priezvisko = mysqli_real_escape_string($conn, $_POST['priezvisko']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

  
    $query = "DELETE FROM uzivatelia WHERE meno= '".$meno."' AND priezvisko= '".$priezvisko."' AND email= '".$email."'";
  
    if(mysqli_query($conn, $query)){

    } else {
      echo 'ERROR: '. mysqli_error($conn);
    }
  }
?>





