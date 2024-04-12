const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu edad? ', (age) => {
  rl.question('¿Cuáles son tus ingresos mensuales en euros? ', (income) => {
    if (age >= 16 && income >= 1000) {
      console.log('Debes tributar.');
    } else {
      console.log('No necesitas tributar.');
    }
    rl.close();
  });
});