/**
 * Created by dinhthinh on 18/11/16.
 */

/*
 * @return day object with private format
 */

var getPaivaObj = function (tanaan) {
    var paivat = new Array("su","ma","ti","ke","to","pe","la");
    var paivaObj = new Object();
    var paiva = paivat[tanaan.getDay()];
    var kuukausi = tanaan.getMonth() + 1;
    var vuosi = tanaan.getFullYear();
    var pvmStr = tanaan.getDate()+"."+kuukausi+"."+vuosi;
    paivaObj.dayStr = [paiva];
    paivaObj.dateStr = [pvmStr];
    return paivaObj;
};

/*
 * @return left all day of current year
 */

function getDaysOfYear(year) {
    var currentDate = new Date();
    var days = new Array();

    while(currentDate.getMonth() < 12 && currentDate.getYear() <= year){
        days.push(getPaivaObj(currentDate));
        currentDate.setDate(currentDate.getDate()+1);
    }
    return days;
}

console.log(getDaysOfAweek(1,getDaysOfYear(new Date().getFullYear())));


/*
 * @return show seven days a time in view
 */

function getDaysOfAweek(clickQty, daysofyear) {
    var aweek = new Array();
    if(clickQty * 7 > daysofyear.length || clickQty === 0){
        for(i=0; i < 7; i++){
            aweek.push(daysofyear[i]);
        }
    } else {
        for (var i = 7*(clickQty-1); i < clickQty*7; i++) {
            if (typeof daysofyear[i] === "object") {
                aweek.push(daysofyear[i]);
            }
        }
    }
    return aweek;
}

/*
 * @return hours of list
 */

function getTimeList(startHour, endHour){
    var tunnit = new Array();
    for(var i = startHour; i <= endHour; i++){
        tunnit.push(i+":"+"00");
        tunnit.push(i+":"+"30");
    }
    return tunnit;
}

var n = 0;
function getPlusClick(n){
   lkm += n;
    return lkm;
}
function getMinusClick(n){
    lkm += n;
    return lkm;
}


