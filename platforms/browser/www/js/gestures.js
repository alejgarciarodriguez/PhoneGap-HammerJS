var app = {
    ponloClaro: function () {
        document.body.className = "claro";
    },
    ponloOscuro: function () {
        document.body.className = "oscuro";
    },
    inicio: function () {
        var botonClaro = document.querySelector("#claro");
        var botonOscuro = document.querySelector("#oscuro");
        botonClaro.addEventListener("click", app.ponloClaro, false);
        botonOscuro.addEventListener("click", app.ponloOscuro, false);
    },
    iniciaHammer: function () {
        var zona_gestos = document.getElementById("zona_gestos");
        var hammer = new Hammer(zona_gestos);
        var enable = { enable: true };
        hammer.get("pinch").set(enable);
        hammer.get("rotate").set(enable);
        zona_gestos.addEventListener("webkitAnimationEnd", function () { return zona_gestos.className = ''; });
        hammer.on("tap doubletap pan swipe press pinch rotate", function (ev) { return document.querySelector("#info").innerHTML = ev.type + "!"; });
        hammer.on("doubletap", function (ev) { return zona_gestos.className = "doubletap"; });
        hammer.on("press", function (ev) { return zona_gestos.className = "press"; });
        hammer.on("swipe", function (ev) {
            if (ev.direction == 4) {
                zona_gestos.className = "swipe-derecha";
            }
            if (ev.direction == 2) {
                zona_gestos.className = "swipe-izquierda";
            }
        });
        hammer.on("rotate", function (ev) {
            var umbral = 25;
            if (ev.distance > umbral) {
                zona_gestos.className = "rotate";
            }
        });
    }
};
app.inicio();
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
        app.inicio();
    }, false);
}
