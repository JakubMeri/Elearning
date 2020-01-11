<?php
session_start();
require "../conn.php";

if(isset($_POST['delete'])){
 $sql = "DELETE FROM chat";
 $result = mysqli_query($conn, $sql);
}
?>