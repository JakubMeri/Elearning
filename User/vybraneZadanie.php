<?php
require "../conn.php";
session_start();
        
$sql = "SELECT * FROM uzivatelia WHERE meno = '".$_SESSION['meno']."' AND priezvisko = '".$_SESSION['priezvisko']."'";
$result = mysqli_query($conn, $sql);
while($row = $result->fetch_assoc()) {   
$kruzok = $row['Kruzok'];
echo $kruzok;

$student = $_SESSION['meno'].' '.$_SESSION['priezvisko'];
echo $student;
    if(isset($_POST['zadanie'])){
        $zadanie = mysqli_real_escape_string($conn, $_POST['zadanie']);

        $query = ("UPDATE zadania SET priradene = '".$student."' WHERE  popiszadania =  '".$zadanie."'  AND Kruzok =  '".$kruzok."'");
      
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      }
    }
