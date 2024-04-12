function verificarVelocidad(distancia, tiempo) {
    var velocidad = distancia / tiempo;

    if (velocidad >= 40 && velocidad <= 60) {
        return "El conductor pasa la prueba.";
    } else {
        return "El conductor es descalificado.";
    }
}

// Ejemplo de uso:
console.log(verificarVelocidad(100, 4));  // Devuelve "El conductor es descalificado."
console.log(verificarVelocidad(200, 3));  // Devuelve "El conductor pasa la prueba."
