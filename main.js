
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
function dibujarJugador(){
    fabric.Image.fromURL("player.png", function(img){
        jugador = img
        jugador.scaleToWidth(150);
        jugador.scaleToHeight(140);
        jugador.set({top:y , left:X})
        Canvas.add(jugador);

    })
}
window.addEventListener("keydown" , teclaPulsada);






// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function nuevoBloque(imagen){
    fabric.Image.fromURL(imagen, function(img){
        
        bloque = img
        bloque.scaleToWidth(medida);
        bloque.scaleToHeight(medida);
        bloque.set({top:y , left:X})
        Canvas.add( bloque);
    })
}

function teclaPulsada(e){
    tecla = e.KeyCode
    if(tecla == "39"){
        X = X + medida
        dibujarJugador();
        console.log("hola")
    }
    if(tecla == "49"){ 
nuevoBloque("ground.png")
    }

}