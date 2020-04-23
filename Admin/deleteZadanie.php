<?php
if(isset($_POST["zmaz"])){
    unlink("../Upload/".$_POST["zmaz"]);
}