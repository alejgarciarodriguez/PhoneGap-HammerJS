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
    },
    iniciaHammer: () => {
        const zona_gestos = document.getElementById("zona_gestos");
        const hammer = new Hammer(zona_gestos);

        const enable = { enable : true }
        hammer.get("pinch").set( enable );
        hammer.get("rotate").set( enable );

        hammer.on("tap doubletap pan swipe press pinch rotate",
        (ev) => document.querySelector("#info").innerHTML= ev.type+"!");
    }
}

app.inicio();

if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',() => {
        FastClick.attach(document.body);
        app.inicio();
    }, false);
}