const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su sexo (M/F): ', (sexo) => {
    // Convertir el nombre a minúsculas para comparación
    const nombreMinusculas = nombre.toLowerCase();
    
    // Determinar el grupo según las reglas
    let grupo = '';
    if ((sexo.toLowerCase() === 'f' && nombreMinusculas < 'm') || (sexo.toLowerCase() === 'm' && nombreMinusculas > 'n')) {
      grupo = 'A';
    } else {
      grupo = 'B';
    }

    // Mostrar el grupo correspondiente
    console.log(`Usted pertenece al grupo ${grupo}`);

    rl.close();
  });
});