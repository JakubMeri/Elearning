<?php
session_start();
require "../conn.php";

if(isset($_POST['data'])){
       
    $data = $_POST['data'];
    echo $data;
    

        $query = "UPDATE ucitel_zaznam SET obsah = '$data' WHERE id =  1";
        
        if(mysqli_query($conn, $query)){
    
        } else {
          echo 'ERROR: '. mysqli_error($conn);
        } 
}
