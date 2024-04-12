function calcularNotaPromedio(nota1, nota2, nota3) {
    var promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio < 5) {
        return "Suspenso";
    } else if (promedio >= 5 && promedio < 7) {
        return "Aprobado";
    } else {
        return "Notable";
    }
}

// Ejemplo de uso:
console.log(calcularNotaPromedio(6, 8, 10));  // Devuelve "Notable"
console.log(calcularNotaPromedio(4, 5, 6));   // Devuelve "Aprobado"
console.log(calcularNotaPromedio(2, 3, 4));   // Devuelve "Suspenso"
