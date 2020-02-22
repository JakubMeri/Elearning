<?php 
if ($handle = opendir('../Upload')) {

while (false !== ($entry = readdir($handle))) {

    if ($entry != "." && $entry != "..") {

        echo $entry . ",";
    }
}

closedir($handle);
}