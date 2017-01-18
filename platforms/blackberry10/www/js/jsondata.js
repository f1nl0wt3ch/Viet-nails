/**
 * Created by dinhthinh on 26/11/16.
 */

$(document).ready( function() {
    /*
     *
     * @ OTA KAIKKI KATEGORIAT TIETOKANNASTA
     */

    $.ajax({
        url: "http://proto387.haaga-helia.fi/~a1602549/app/json/kategoriajson.php",
        method: "get",
        dataType: "json",
        timeout: 5000
    }).done(function (data) {
        $("#ul-kategoria").html("");
        /*
         for(var i=0; i < data.length; i++){
         $("#ul_kategoria").append('<li><img src="'+data[i].Kategoriakuva+'"><br><h2>'+data[i].Kategorianimi+'</h2></li>');
         }*/
        var grid = "ui-grid-d";
        var block = "ui-block-";
        var array = ["a", "b", "c", "d", "e"];
        $("#ul-kategoria").attr("class", grid);

        for (var j = 0; j < data.length; j++) {
            var uiblock = block + array[j];
            $("#ul-kategoria").append('<div class="' + block + uiblock + '"></div><li><img src="' + data[j].Kategoriakuva + '"><h2>' + data[j].Kategorianimi + '</h2></li></div>');

        }
    }).fail(function () {
        $("#ul-kategoria").html("lista ei voi tehdä");
    });

    /*
     *
     * @ OTA KAIKKI PALVELUT TIETOKANNASTA
     */

    $.ajax({
        url: "http://proto387.haaga-helia.fi/~a1602549/app/json/palvelujson.php",
        method: "get",
        dataType: "json",
        timeout: 5000
    }).done(function (data) {
        var ulpal = "#ul-palvelu";
        $("#select-palvelu").html("");
        for (var i = 0; i < data.length; i++) {
            var header = data[i].Palvelunimi;
            var content = data[i].Palvelutieto;
            $(ulpal).append('<li data-role="' + 'list-divider' + '">' + data[i].Palvelunimi + '</li>'
                +'<li><a href="'+'#palvelu-item'+'" data-rel="'+'popup'+'" data-position-to="'+'window'+'">'
                + '<img src="' +data[i].Palvelukuva + '">'
                +'<div data-role="'+'popup'+'" id="'+'palvelu-item">'
                +'<h2>'+data[i].Palvelunimi+'</h2>'
                +'<img src="'+data[i].Palvelukuva+'" style="'+'height: 250px;width: 100%'+'" />'
                +'</div>'
                + '<strong class="' + 'ui-li-aside' + '">'
                + data[i].Palveluhinta + '€</strong></a></li>');

            $("#select-palvelu").append('<option value="' + data[i].Palveluid + '">' + data[i].Palvelunimi + ': ' + data[i].Palveluhinta + '€</option>');
        }

    }).fail(function () {
        $("#select-palvelu").html("lista ei voi tehdä");
    });

    /*
     *
     * @ OTA KAIKKI TYÖNTEKIJÄT TIETOKANNASTA
     */

    $.ajax({
        url: "http://proto387.haaga-helia.fi/~a1602549/app/json/tyontekijajson.php",
        method: "get",
        dataType: "json",
        timeout: 5000
    }).done(function (data) {
        $("#").html("");
        for (var i = 0; i < data.length; i++) {

            $("#ul-tyontekija").append('<li id="' + data[i].Tyontekijaid + '"><a href="' + '#"><img src="' + data[i].Tyontekijakuva + '"><h2>'
                + data[i].Tyontekijasuku + ' ' + data[i].Tyontekijaetu + '</h2><p>Puhelin: ' + data[i].Tyontekijapuh + '</p></a></li>');

        }

    }).fail(function () {
        $("#ul-tyontekija").html("lista ei voi tehdä");
    });

    $.getJSON("https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyDnHXVOF4kFftk6Igf5ivcrSn0sz0yFu5E", function(result) {
        $("#tyontekija").html("");
        $.each (result, function(field){
            $("#tyontekija").append("<p>"+field.Tyontekijaid + "</p>");
            $("#tyontekija").append("<p>"+field.Tyontekijasuku + "</p> ");
            $("#tyontekija").append("<p>"+field.Tyontekijaetu + "</p>");

        }).fail (function () {
            $("#tyontekija").append("Autot ei saatu haettua");
        });
    });

});