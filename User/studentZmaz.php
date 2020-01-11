<?php

require "../conn.php";



if(isset($_POST['username'])){
    $meno = mysqli_real_escape_string($conn, $_POST['username']);

  
    $query = "DELETE FROM uzivatelia WHERE meno = '$meno'";
  
    if(mysqli_query($conn, $query)){

    } else {
      echo 'ERROR: '. mysqli_error($conn);
    }
  }
?>


