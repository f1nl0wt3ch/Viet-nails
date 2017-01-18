/**
 * Created by dinhthinh on 07/12/16.
 */

/**************@Kameran metodit*******************************/
/**************@Alku metodi*******************************/
var pictureSource;
var destinationType;

document.addEventListener( "deviceready", function () {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
        palauteKayttajaEvent();
        otaLaitteenTiedot();

    }, false);


function otaLaitteenTiedot() {
    var model = device.model;
    var platform = device.platform;
    var version = device.version;
    var virtual = device.isVirtual;
    navigator.notification.alert("Laitteen tiedot "+model+"\n"+platform+"\n"+version+"\n"+virtual, "Tervedys");

}

function initKamera() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function palauteKayttajaEvent() {
    var idName;
    $(idname).on("tap", function () {
        try {
            switch (idname) {
                case "#kuva-kansiosta":
                    alert("Ok!");
                    otaKuvaKirjasto();
                    break;
                case "#kuva-kamerasta":
                    otaKuvaKameralla();
                    alert("Ok!");
                    break;
            }
        } catch (e) {
            alert("virhe oli "+ e.message);
        }
    });
}

function onnistuuKapaus(imageURI) {
    $("#getPhoto").append('<img src="'+imageURI+'" >');

}
function kuvaVirhe(message){
    alert("ei onnistuu koska "+message);
}

function onnistuuLatausKirjastosta(imageData) {
    $("#getPhoto").append('<img src="'+imageData+'" >');
}
function otaKuvaKirjasto(){
    navigator.camera.getPicture(onnistuuLatausKirjastosta, kuvaVirhe, options);
    var options = {
        destinationType: DestinationType.NATIVE_URI,
        sourceType: PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600,
        targetQuality: 50,
        endcodingType: EncodingType.JPEG
    };

}

function otaKuvaKameralla() {
    navigator.camera.getPicture(onnistuuKapaus, kuvaVirhe, options);
    var options = {
        destinationType: DestinationType.NATIVE_URI,
        sourceType: PictureSourceType.CAMERA,
        targetWidth: 600,
        targetHeight: 600,
        targetQuality: 30,
        encodingType: EncodingType.JPEG,
        savePhotoToAlbum: true
    };


}

