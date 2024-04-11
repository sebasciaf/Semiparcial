// Pedimos al usuario que ingrese su renta anual
var rentaAnual = parseFloat(prompt("Ingrese su renta anual en euros:"));

// Definimos las diferentes categorías impositivas y sus límites de renta
var categoriasImpositivas = [
    { limite: 12450, tipoImpositivo: "0%" },
    { limite: 20200, tipoImpositivo: "19%" },
    { limite: 35200, tipoImpositivo: "24%" },
    { limite: 60000, tipoImpositivo: "30%" },
    { limite: Infinity, tipoImpositivo: "37%" }
];

// Función para determinar el tipo impositivo según la renta anual
function determinarTipoImpositivo(rentaAnual) {
    for (var i = 0; i < categoriasImpositivas.length; i++) {
        if (rentaAnual <= categoriasImpositivas[i].limite) {
            return categoriasImpositivas[i].tipoImpositivo;
        }
    }
}

// Determinamos el tipo impositivo correspondiente a la renta anual ingresada
var tipoImpositivo = determinarTipoImpositivo(rentaAnual);

// Mostramos el resultado al usuario
console.log("Para una renta anual de " + rentaAnual + " euros, el tipo impositivo correspondiente es: " + tipoImpositivo);
