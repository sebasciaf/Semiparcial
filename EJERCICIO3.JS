function calcularDiferencia(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

// Ejemplo de uso:
console.log(calcularDiferencia(10, 5));  // Devuelve 5
console.log(calcularDiferencia(7, 15));  // Devuelve 8
