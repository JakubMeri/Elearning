<?php
session_start();
require "../conn.php";

$query = "SELECT * FROM skuskao";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0){      
$message = mysqli_fetch_all($result, MYSQLI_ASSOC);
   
echo json_encode($message);
}
else{
    $message ="";
    echo json_encode($message);
}


if(isset($_POST['delete'])){
 $deleteID = $_POST['delete'];
 $sql = "DELETE FROM skuskao WHERE id='$deleteID'";
 $result = mysqli_query($conn, $sql);

 $sql2 = "DELETE FROM skuskaod WHERE cislo_otazky='$deleteID'";
 $result2 = mysqli_query($conn, $sql2);
}
?>