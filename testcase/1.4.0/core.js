function log(y) {
    var x = document.getElementsByTagName('div')[0];
    x.innerHTML = x.innerHTML + y + "<br>";
}
console.log(KISSY.Event.Gesture.move)
function a(){
    this.ab = 11;

}

a.prototype.abc = function(){
    console.log(111)
}

var k = new a();

console.log(a.prototype);
console.log(k.ab)
console.log(k.abc())



function toString(p) {
    var t = ""
    for (var i in p) {
        t = i + ": " + p[i] + "<br>";
    }
    return t;
}

navigator.geolocation.getCurrentPosition(function (p) {

    log("toString" + p.toString())
    log('getCurrentPosition success');
    log("timestamp is " + p.timestamp);
    log("latitude is " + p.coords.latitude);
    log("longitude is " + p.coords.longitude);
}, function (p) {

    log(toString(p));
})

navigator.geolocation.watchPosition(function (p) {
    log('watchPosition success');
    log("timestamp is " + p.timestamp);
    log("latitude is " + p.coords.latitude);
    log("longitude is " + p.coords.longitude);
}, function (p) {
    log(toString(p));
})

var c = document.getElementsByTagName("canvas")[0];
var cxt = c.getContext("2d");
cxt.fillStyle = "#FF0000";
cxt.fillRect(0, 0, 150, 75);


var c = document.getElementsByTagName("canvas")[1];
var cxt = c.getContext("2d");
cxt.moveTo(10, 10);
cxt.lineTo(150, 50);
cxt.lineTo(10, 50);
cxt.stroke();


var c = document.getElementsByTagName("canvas")[2];
var cxt = c.getContext("2d");
cxt.fillStyle = "#FF0000";
cxt.beginPath();
cxt.arc(70, 18, 15, 0, Math.PI * 2, true);
cxt.closePath();
cxt.fill();


var c = document.getElementsByTagName("canvas")[3];
var cxt = c.getContext("2d");
var grd = cxt.createLinearGradient(0, 0, 175, 50);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#00FF00");
cxt.fillStyle = grd;
cxt.fillRect(0, 0, 175, 50);

