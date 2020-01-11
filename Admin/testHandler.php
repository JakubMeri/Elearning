<?php 

require "../conn.php";
session_start();

    if(isset($_POST['nazovTestu'], $_POST['zapnutie'])){
        $nazovTestu =  $_POST['nazovTestu'];
        $zapnutie = $_POST['zapnutie'];

              
        $query = "UPDATE test_panel SET zapnutie = '".$zapnutie."' WHERE nazovTestu = '".$nazovTestu."'";
      
        if(mysqli_query($conn, $query)){
    
        } 
        else {
          echo 'ERROR: '. mysqli_error($conn);
        }
      } 

