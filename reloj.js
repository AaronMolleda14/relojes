function digital(id){
    fecha = new Date;
    var f;
    h = fecha.getHours();
    if(h<10){
        h = "0" + h;
    }
    m = fecha.getMinutes();
    if(m<10){
        m = "0" + m;
    }
    s = fecha.getSeconds();
    if(s<10){
        s = "0" + s;
    }

    f = h + ":" + m + ":" + s;
    document.getElementById("fecha").innerHTML = f;
    setTimeout('digital("'+"s"+'");','1000');
    return true;
}
window.onload = digital('s');

var segundos = document.getElementById('segundo');
var minutos = document.getElementById('minuto');
var horas = document.getElementById('hora');

setInterval(function(){
    hoy = new Date();

    var seg = hoy.getSeconds();
    var grados = 180 + seg * 6;
    segundos.style.transform = 'translateX(-50%) rotate('+grados+'deg)';

    var min = hoy.getMinutes();
    var grados = 180 + min * 6;
    minutos.style.transform = 'translateX(-50%) rotate('+grados+'deg)';

    var hr = hoy.getHours();
    if(hr >= 12)
    hr = hr - 12;
    var grados = 180 + hr * 30;
    horas.style.transform = 'translateX(-50%) rotate('+grados+'deg)';
})
