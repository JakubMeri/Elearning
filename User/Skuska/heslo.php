<?php
require "../../conn.php";

$sql = "SELECT heslo FROM skuska_heslo";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){      
$message = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($message);
}
else{
   $nic = "";
       echo json_encode($nic);  
    }
