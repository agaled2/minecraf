var Canvas = new fabric.Canvas("myCanvas");

//Define el ancho inicial y el alto del cloque de imágenes 
var medida = 30;

//Define el inicio de las coordenadas X y Y del jugador 
var X = 50;
var y = 50;


// Define una variable llamada player_object para almacenar la imagen del jugador
var jugador = "";
var bloque = "";


// Agrega una función llamada player_update() para agregar la imagen del jugador 
function dibujarJugador() {
    fabric.Image.fromURL("player.png", function (img) {
        jugador = img
        jugador.scaleToWidth(150);
        jugador.scaleToHeight(140);
        jugador.set({ top: y, left: X })
        Canvas.add(jugador);

    })
}
window.addEventListener("keydown", teclaPulsada);






// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function nuevoBloque(imagen) {
    fabric.Image.fromURL(imagen, function (img) {

        bloque = img
        bloque.scaleToWidth(medida);
        bloque.scaleToHeight(medida);
        bloque.set({ top: y, left: X })
        Canvas.add(bloque);
    })
}

function teclaPulsada(e) {
    tecla = e.keyCode
    if (tecla == "39" && X < 855) {
        X = X + medida
        Canvas.remove(jugador)
        dibujarJugador();


    }
    if (tecla == "37" && X > 0) {
        X = X - medida
        Canvas.remove(jugador)
        dibujarJugador();
    }

    if (tecla == "40" && y < 600) {
        y = y + medida
        Canvas.remove(jugador)
        dibujarJugador();
    }
    if (tecla == "38" && y > 0) {
        y = y - medida
        Canvas.remove(jugador)
        dibujarJugador();
    }

    if (e.shiftKey &&tecla == "187") {
        medida = medida + 10;
        document.getElementById("ancho").innerHTML = medida
        document.getElementById("alto").innerHTML = medida

        
    }
    if (e.shiftKey &&tecla == "189") {
        medida = medida - 10;
        document.getElementById("ancho").innerHTML = medida
        document.getElementById("alto").innerHTML = medida
    }
    if (tecla == "32") {
        nuevoBloque("trunk.jpg")
    }
    if (tecla == "8") {
        Canvas.remove(Canvas.getActiveObject())
    }
}
