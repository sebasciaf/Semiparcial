//Generar un código quedetermine si un numero es par o impar//
function esPar(numero) {
    return numero % 2 === 0;
}

function esImpar(numero) {
    return numero % 2 !== 0;
}
let numero = prompt("Por favor, ingresa un número:");

// Intentamos convertir el valor ingresado a un entero
try {
    const valorEntero = parseInt(numero);
    if (isNaN(valorEntero)) {
        console.log("El valor ingresado no es un número válido.");
    } else {
        if (valorEntero % 2 === 0) {
            console.log(`El número ${valorEntero} es par.`);
        } else {
            console.log(`El número ${valorEntero} es impar.`);
        }
    }
} catch (error) {
    console.log("Ocurrió un error al procesar el número ingresado.");
}


// Ejemplos de uso
const numero1 = 10;
const numero2 = 7;

console.log(`${numero1} es par: ${esPar(numero1)}`);
console.log(`${numero2} es impar: ${esImpar(numero2)}`);
