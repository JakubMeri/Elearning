<?php
$server = "localhost";
$username = "root";
$pwd = "";
$dbname = "elearning";
$conn = mysqli_connect($server, $username, $pwd, $dbname);
mysqli_set_charset($conn, "utf8"); 

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
else '<script>alert("funguje")</script>';
?>
