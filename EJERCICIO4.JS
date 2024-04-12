const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cómo planeas viajar? (coche, tren, bicicleta, autobús): ', (answer) => {
  switch(answer.toLowerCase()) {
    case 'coche':
      console.log('¡Buen viaje en coche!');
      break;
    case 'tren':
      console.log('Recuerda llevar dinero para el billete de tren.');
      break;
    case 'bicicleta':
      console.log('¡Disfruta tu viaje en bicicleta!');
      break;
    case 'autobús':
      console.log('Recuerda llevar dinero para el billete de autobús.');
      break;
    default:
      console.log('Lo siento, opción no válida.');
  }
  
  rl.close();
});