<?php
if(isset($_GET["url"])){
    $url = "gamefiles/".$_GET["url"];
        readfile($url); 
        die();
    }else{
        echo"Url is not found!";
    }
?>