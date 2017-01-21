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
    }
};
app.inicio();
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
        app.inicio();
    }, false);
}
