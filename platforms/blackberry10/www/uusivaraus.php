<?php
require "app/utility/ajanVarausUtility.php";
require "app/bean/Asiakas.php";


session_start();

if (isset($_POST["varaa"])) {
    $suku = $_POST["suku"];
    $etu = $_POST["etu"];
    $osoite = $_POST["osoite"];
    $puh = $_POST["puhelin"];
    $tieto = $_POST["lisatieto"];
    $sposti = $_POST["sposti"];
    $asiakas = new Asiakas($suku, $etu, $osoite, $sposti, $puh);
    $ajanvaraus = new ajanVarausUtility();
    $ajanvaraus->varaaAika($asiakas);
    header("location: #kotisivu");
    exit();

} elseif (isset($_POST["peruuta"])) {
    unset($_SESSION["asiakas"]);
    header("location: index.html");
    exit();

} else {
    if (isset($_SESSION["asiakas"])) {
        $asiakas = $_SESSION["asiakas"];
    } else {
        $asiakas = new Asiakas();
        $nimiVirhe = 0;
        $osoiteVirhe = 0;
        $puhVirhe = 0;
        $spostiVirhe = 0;

    }


}


