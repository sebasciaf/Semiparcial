const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce tu renta anual: ', (rentaAnual) => {
  const renta = parseFloat(rentaAnual);

  if (isNaN(renta)) {
    console.log('Por favor, introduce un número válido.');
  } else {
    let tipoImpositivo;

    if (renta <= 15000) {
      tipoImpositivo = '5%';
    } else if (renta <= 30000) {
      tipoImpositivo = '15%';
    } else if (renta <= 60000) {
      tipoImpositivo = '25%';
    } else {
      tipoImpositivo = '35%';
    }

    console.log(`Tu renta anual es de ${rentaAnual} y tu tipo impositivo es del ${tipoImpositivo}.`);
  }

  rl.close();
});