<?php

include_once("./config.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $user = $data["name"];
    $score = $data["score"];
    $state = $data["state"];
    $fileName = "./data/scores.csv";

    $myfile = fopen($fileName, "a") or die("Unable to open file!");
    fwrite($myfile, $user.",".$score.",".$state.",".date('Y-m-d-H:i')."\n");
    fclose($myfile);
}

?>
