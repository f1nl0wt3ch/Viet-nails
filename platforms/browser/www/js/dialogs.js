/**
 * Created by dinhthinh on 09/12/16.
 */

function annaTervedys() {
    var tanaan = new Date();
     var tunti = tanaan.getHours();
     if (0 < tunti && tunti < 10) {
     alert("Hyvää huomenta! Miten mene?");
     if (10 <= tunti && tunti <= 16) {
     alert("Hyvää päivää! Miten mene?");
     }
     }
     if (16 < tunti&& tunti < 24) {
     alert("Hyvää iltaa! Miten mene?");
     }
     $.extend($mobile, {
     pageLoadErrorMessage: "Sivua lataus virhe!"
     });
}

function siirraKotisivu() {
    $.mobile.changePage("http://localhost:63342/Nails/www/index.html");
}