<?php

require "../conn.php";

$sql = "SELECT * FROM odovzdanie_zadania WHERE id = 1";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){
    $datum = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($datum);
}
else {
    echo 'ERROR: '. mysqli_error($conn);
  }