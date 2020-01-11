<?php
session_start();
session_unset();
session_destroy();
header("Location: /Elearning/Main page/Main.html?Odhlaseny");
?>