<?php
require "../conn.php";
session_start();

$sql ="SELECT hodnota FROM zmena WHERE id = 1";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);

$sql2 ="SELECT od.id as cisloO, od.nazov as odpoved, od.spravna, od.cislo_otazky FROM skuskao o JOIN skuskaod od ON o.id = od.cislo_otazky WHERE o.id = $row[0]";

// Get Result
$result2 = mysqli_query($conn, $sql2);
if(mysqli_num_rows($result2) > 0){      
$odpovede = mysqli_fetch_all($result2, MYSQLI_ASSOC);

echo json_encode($odpovede);
}
else{
   $nic = "";
       echo json_encode($nic);  
    }
