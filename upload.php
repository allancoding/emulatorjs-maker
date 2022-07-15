<?php
$data = json_decode(file_get_contents('php://input'), true);
$target_dir = "gamefiles/";
$imageFileType = strtolower(pathinfo($data['fileName'],PATHINFO_EXTENSION));
$newnamef = generateRandomString() . ".".$imageFileType;
$myfile = fopen($target_dir.$newnamef, "w") or die("Unable to open file!");
fwrite($myfile, $data['data']);
fclose($myfile);
echo $newnamef;
function generateRandomString($length = 30) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
?>