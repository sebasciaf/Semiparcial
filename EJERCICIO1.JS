const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para verificar si un número es par o impar
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}

// Solicitar al usuario que ingrese un número
rl.question('Por favor ingrese un número: ', (numero) => {
  // Verificar si el número ingresado es válido
  if (!isNaN(numero)) {
    // Convertir el número ingresado a un número entero
    numero = parseInt(numero);
    
    // Determinar si el número es par o impar y mostrar el resultado
    console.log(verificarParImpar(numero));
  } else {
    console.log('Por favor, ingrese un número válido.');
  }

  // Cerrar la interfaz de lectura de entrada
  rl.close();
});