<?php
require "../conn.php";
session_start();

if(isset($_POST['idO'], $_POST['poleO'], $_POST['poleS'])){
       
        $arrayC = json_decode($_POST['idO']);
        $arrayQ = json_decode($_POST['poleO']);
        $arrayA = json_decode($_POST['poleS']);
      
        for ($i=0; $i < count($arrayQ) ; $i++){ 
            $query2 = "UPDATE skuskaod SET nazov = '$arrayQ[$i]', spravna= $arrayA[$i] WHERE id =  $arrayC[$i]";
            
            if(mysqli_query($conn, $query2)){
        
            } else {
              echo 'ERROR: '. mysqli_error($conn);
            } 
      } 
    }

