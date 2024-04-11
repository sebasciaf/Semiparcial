// Definimos una función para calcular el precio total
function calcularPrecioTotal(cantidad, precioUnitario) {
    // Calculamos el precio total sin descuento
    var precioSinDescuento = cantidad * precioUnitario;
    
    // Verificamos si se cumple la condición para aplicar el descuento
    if (cantidad > 10 && precioUnitario > 40) {
        // Calculamos el descuento del 15%
        var descuento = precioSinDescuento * 0.15;
        // Restamos el descuento al precio total
        var precioConDescuento = precioSinDescuento - descuento;
        return precioConDescuento;
    } else {
        // Si no se cumple la condición, devolvemos el precio sin descuento
        return precioSinDescuento;
    }
}

// Ejemplo de uso
var cantidadArticulos = 20;
var precioPorArticulo = 10;
var precioFinal = calcularPrecioTotal(cantidadArticulos, precioPorArticulo);

console.log("El precio total a pagar es: " + precioFinal + " dólares.");

