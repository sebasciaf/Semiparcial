// Función para solicitar entrada al usuario y validarla
function solicitarEntrada(mensaje) {
    let entrada = prompt(mensaje);
    // Validamos que la entrada no esté vacía y sea un número
    while (entrada === "" || isNaN(entrada)) {
        entrada = prompt("Entrada inválida. Por favor, ingrese un número válido.");
    }
    return parseInt(entrada);
}

// Función para verificar si el usuario debe tributar
function verificarTributacion(edad, ingresosMensuales) {
    // Verificamos si cumple con los requisitos para tributar
    if (edad > 16 && ingresosMensuales >= 1000) {
        return true;
    } else {
        return false;
    }
}

// Función principal
function main() {
    console.log("Bienvenido al programa de verificación de tributación.");

    // Solicitamos la edad y los ingresos mensuales al usuario
    let edad = solicitarEntrada("Por favor, ingrese su edad:");
    let ingresosMensuales = solicitarEntrada("Ingrese sus ingresos mensuales en euros:");

    // Verificamos si el usuario debe tributar
    if (verificarTributacion(edad, ingresosMensuales)) {
        console.log("Usted debe tributar.");
    } else {
        console.log("Usted no tiene que tributar.");
    }
}

// Llamamos a la función principal para iniciar el programa
main();
