const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para determinar si un número es negativo, positivo o cero
function determinarNumero(numero) {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}

// Pedir al usuario que ingrese un número
rl.question('Ingrese un número: ', (numero) => {
  // Convertir la entrada del usuario a un número
  numero = parseFloat(numero);
  
  // Verificar si el usuario ingresó un número válido
  if (isNaN(numero)) {
    console.log('Por favor, ingrese un número válido.');
  } else {
    // Determinar si el número es negativo, positivo o cero
    console.log(determinarNumero(numero));
  }

  rl.close();
});