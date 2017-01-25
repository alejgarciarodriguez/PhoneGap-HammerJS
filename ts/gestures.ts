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

        zona_gestos.addEventListener("webkitAnimationEnd", 
        () => zona_gestos.className='');

        hammer.on("tap doubletap pan swipe press pinch rotate",
        (ev) => document.querySelector("#info").innerHTML= ev.type+"!");

        hammer.on("doubletap", (ev) => zona_gestos.className="doubletap");
        
        hammer.on("press", (ev) => zona_gestos.className="press");

        hammer.on("swipe", (ev) => {
            if(ev.direction==4){ zona_gestos.className="swipe-derecha"; }
            if(ev.direction==2){ zona_gestos.className="swipe-izquierda"; }
        });

        hammer.on("rotate", (ev) => {
            const umbral = 25;
            if(ev.distance > umbral){
                zona_gestos.className="rotate";
            }
        });
    }
}

app.inicio();
app.iniciaHammer();
if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',() => {
        FastClick.attach(document.body);
        app.inicio();
    }, false);
}