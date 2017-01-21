const app = {
    ponloClaro: () => {
       document.body.className = "claro";
    },
    ponloOscuro: () => {
        document.body.className = "oscuro";
    },
    inicio: () => {
       const botonClaro = document.querySelector("#claro");
       const botonOscuro = document.querySelector("#oscuro");
       botonClaro.addEventListener("click",app.ponloClaro,false);
       botonOscuro.addEventListener("click",app.ponloOscuro,false);
    }
}

app.inicio();


if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',() => {
        FastClick.attach(document.body);
        app.inicio();
    }, false);
}