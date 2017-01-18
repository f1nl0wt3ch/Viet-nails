/**
 * Created by dinhthinh on 03/12/16.
 */
/*
 *
 * @ Luodaan virheenilmoitus lista ja funktio, joka palauttaa virheita.
 *
 *
 * */
var virhelista =  {
    0: "",
    1: "Kenttään ei saa jättä tyhjänä",
    2: "Nimi pitää olla kirjaimia ja pituus on 2-30 kirjainta",
    3: "Puhelin numero alkaa + merkki ja sisältää 5-10 numeroa",
    4: "Osoite ei saa laittaa nämä merkit + ! € % & ( ) = ?" ,
    5: "Syötetty tieto ei ola sähköpostia",
    6: "Nimi on liian lyhyt"
};

function getVirhe(virheNumero) {
    if(virhelista.hasOwnProperty(virheNumero))
        return virhelista[virheNumero];
    else
        return virhelista[0];

}


/*
 *
 * @ Tarkistaa etu ja suku
 *
 *
 * */
function checkNimi(nimi){
    var reg_nimi =/^[a-zåöäA-ZÅÖÄ]{2,30}$/;
    var min = 2;
    if(nimi.trim().length == 0){
        return 1;
    } else if (nimi.length < min) {
        return 6;
    } else if (!nimi.match(reg_nimi)){
        return 2;

    }
    else {
        return 0;
    }
}

/*
 *
 * @ Tarkistaa sähköposti
 *
 *
 * */
function checkSposti(posti){

    var reg_sposti = /\w{1,30}[.]{0,1}\w{1,30}[@]\w{1,30}[.]{0,1}.[a-z]{2,4}/;
    if (sposti.trim().length == 0) {
        return 1;
    } else if (!sposti.match(reg_sposti)) {
        return 5;
    } else
        return 0;

}

/*
 *
 * @ Tarkistaa osoite
 *
 */

function checkOsoite(osoite){

    var reg_osoite = /[0-9][a-zåäöA-ZÅÖÄ]{,50}/;
    if (osoite.trim().length == 0) {
        return 1;
    } else if (!osoite.match(reg_osoite)) {
        return 4;
    } else
        return 0;
}

/*
 *
 * @ Tarkistaa puhelin numero
 *
 */

function checkPuh(puhnro){

    var reg_puh = /[+]\d{5,14}/;
    if (puhnro.trim().length == 0) {
        return 1;
    } else if (!puhnro.trim().match(reg_puh)) {
        return 3;
    } else
        return 0;
}

/*
 *
 *@ Tarkistaa kaikki kentät
 *
 * */

var main = function checkLomake() {

    try {
        var etu = $("#etu").val();
        var suku = $("#suku").val();
        var sposti = $("#sposti").val();
        var puh = $("#puhelin").val();
        var osoite = $("#osoite").val();

        var etuVirhe = checkNimi(etu);
        var sukuVirhe = checkNimi(suku);
        var spostiVirhe = checkSposti(sposti);
        var puhVirhe = checkPuh(puh);
        var osoiteVirhe = checkOsoite(osoite);

        if(etuVirhe === 1 && sukuVirhe === 1 && spostiVirhe === 1 && puhVirhe === 1 && osoiteVirhe === 1) {
            alert(getVirhe(1));
        }

        if (etuVirhe !== 0 ) {
            alert(getVirhe(checkNimi(etu)));

        }
        if (sukuVirhe !== 0 ) {
            alert(getVirhe(checkNimi(suku)));

        }
        if (osoiteVirhe !== 0) {
            alert(getVirhe(checkOsoite(osoite)));

        }
        if (puhVirhe !== 0) {
            alert(getVirhe(checkPuh(puh)));

        }
        if (spostiVirhe !== 0) {
            alert(getVirhe(checkSposti(sposti)));
        }
    } catch (e) {

    }
    return false;

};














