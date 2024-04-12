
function determinarGrupo(nombre, sexo) {
    
    let primeraLetra = nombre.toUpperCase().charAt(0);
    

    if ((sexo == 'Mujer' && primeraLetra < 'M') || (sexo == 'Hombre' && primeraLetra > 'N')) {
        return 'A';
    } else {
        // Si no cumple las condiciones del grupo A, pertenece al grupo B
        return 'B';
    }
}


let nombre = prompt("Por favor, introduce tu nombre:");
let sexo = prompt("Por favor, introduce tu sexo (Hombre/Mujer):");


let grupo = determinarGrupo(nombre, sexo);

// Mostrar el resultado
console.log(`Hola ${nombre}, perteneces al grupo ${grupo}.`);
