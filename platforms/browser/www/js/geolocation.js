/**
 * Created by dinhthinh on 07/12/16.
 */

/*function haeLocation(lat, lng) {
    
    $.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD3PRRjN1TXyhtE3M8nTf66NNWjGNrtIGA&latlng="+lat+","+lng,
    method: "get",
    dataType: "json",
    timeout: 1000
}).done(function(data)){
        $("#map").html("");
        $("#map").append()
    }


}).fail (function () {
    $("#map").append("<p>Ei onnistuu hakea location google mapsista!</p>");
});

}*/

function teeMap(latUser, lngUser){
    var pos = {
        lat: latUser,
        lng: lngUser
    };
    var options = {
        zoom: 6,
        center: pos
    };
    var normalMap = new google.maps.Map(document.getElementById("map"),options);
    var mapMakerOptions = {
        position: pos,
        title: "Moi! näytä paikan kuva klikkamalla mua!"
    };
    var marker = new google.maps.Marker(mapMakerOptions);
    marker.setMap(normalMap);

    var streetViewOptions = {
        position: pos,
        pov: {
            heading: 34,
            pitch: 10
        }
    };
    var streetview = new google.maps.StreetViewPanorama(document.getElementById("pano"),streetViewOptions);
    normalMap.setStreetView(streetview);


    /*var service = new google.maps.PlacesService(map);
    service.getDetails(function(place, status){
        google.maps.event.addListener(marker, 'click', function () {
            alert(place.name+' '+place.formatted_address);

        })
    })*/
}

function onnistuuLocation() {
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, locationOptions);
    function geolocationSuccess(position) {
        teeMap(position.coords.latitude, position.coords.longitude);
    }

    function geolocationError(error) {
        switch (error) {
            case error.PERMISSION_DENIED:
                alert("Sinä sammutat paikannus tarkistus!");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Ei pysty ottamaan sun paikannusta!");
                break;
            case error.TIMEOUT:
                alert("Aika loppu, lataa uudestaan!");
                break;
            default:
                alert("Tuntematon virhe!");

        }
    }

    var locationOptions = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
    };

}

function onnistuuWatchLocation() {
    navigator.geolocation.watchPosition( onsuccess, onerror, watchOptions);
    function onsuccess(position) {
        teeMap(position.coords.latitude, position.coords.longitude);
    }
    function onerror(error) {
        switch(error){
            case error.PERMISSION_DENIED:
                alert("Sinä sammutit paikannus tarkistus!");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Ei pysty ottamaan sun paikannusta!");
                break;
            case error.TIMEOUT:
                alert("Aika loppu, lataa uudestaan!");
                break;
            default:
                alert("Tuntematon virhe!");

        }
    }
    var watchOptions = {
        timeout: 30000
    }
}

function yhteysKayttajaEvent() {
    $("#seuraa-sijainti").on("tap", function () {
        $("#map").css("display", "");
        onnistuuWatchLocation();
    });
    $("#lopetta-seuraus").on("tap", function () {
        $("#map").css("display", "");
        var watchId= navigator.geolocation.watchPosition(onsuccess, onerror, watchOptions);
        navigator.geolocation.clearWatch(watchId);


    });

    $("#nayta-sijainti").on("tap", function () {
        $("#map").css("display", "");
        onnistuuLocation();
    });
    $("#map").on("tap", function () {
        $("#pano").css("display", "");
        onnistuuWatchLocation();
    });
    $("#pano").on("tap", function () {
        $("yhteys header").css("display","");
    });

   /* var idTag;
    $(idtag).on("tap", function () {
        switch(idTag) {
            case "#seuraa-sijainti":
                onnistuuWatchLocation();
                break;
            case "#lopetta-seuraus":
                var watchId = navigator.geolocation.watchPosition(onsuccess, onerror, watchOptions);
                navigator.geolocation.clearWatch(watchId);
                onnistuuLocation();
                break;
            case "#nayta-sijainti":
                onnistuuLocation();
                break;
            default:
                onnistuuLocation();
        }
    });*/


}







