<?php

require "../conn.php";



if(isset($_POST['meno'], $_POST['priezvisko'])){
    $meno = mysqli_real_escape_string($conn, $_POST['meno']);
    $priezvisko = mysqli_real_escape_string($conn, $_POST['priezvisko']);

  
    $query = "DELETE FROM uzivatelia WHERE meno= '".$meno."' AND priezvisko= '".$priezvisko."'";
  
    if(mysqli_query($conn, $query)){

    } else {
      echo 'ERROR: '. mysqli_error($conn);
    }
  }
?>


