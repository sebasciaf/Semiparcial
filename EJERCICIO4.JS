// Definimos una función para preguntar al usuario y darle una recomendación
function recomendarViaje() {
    // Pedimos al usuario que introduzca su medio de transporte
    let medioTransporte = prompt("¿Cómo vas a viajar? (coche, tren, bicicleta, autobús)");

    // Convertimos la entrada del usuario a minúsculas para hacer la comparación más fácil
    medioTransporte = medioTransporte.toLowerCase();

    // Comprobamos qué medio de transporte ha elegido el usuario y damos la recomendación apropiada
    switch (medioTransporte) {
        case "tren":
        case "autobús":
            alert("Recuerda llevar dinero para el billete.");
            break;
        case "coche":
            alert("¡Buen viaje en coche!");
            break;
        case "bicicleta":
            alert("Disfruta del viaje en bicicleta.");
            break;
        default:
            alert("Lo siento, no entendí ese medio de transporte.");
    }
}

// Llamamos a la función para que se ejecute
recomendarViaje();
