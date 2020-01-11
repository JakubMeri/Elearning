<?php
//Student
session_start();
require "../conn.php";
$sql = "SELECT * FROM uzivatelia WHERE email = '".$_SESSION['uzivatel']."'";
    $result = mysqli_query($conn, $sql);
    while($row = $result->fetch_assoc()) { 

$sql = "SELECT * FROM zadania WHERE kruzok = '".$row['Kruzok']."' AND priradene IS NULL";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){      
    $zadania = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($zadania);
}
    }

?>