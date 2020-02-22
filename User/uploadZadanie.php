<?php
    if ( 0 < $_FILES['file']['error'] ) {
        echo 'Error: ' . $_FILES['file']['error'];
    }
    else {
        move_uploaded_file($_FILES['file']['tmp_name'], '../Upload/' . $_FILES['file']['name']);
    }
?>