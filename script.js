
const prompt = require("prompt-sync")();

let celsius;
let entradaValida = false;

while (!entradaValida) {
    const entrada = prompt("Ingresa la temperatura en grados Celsius: ");

    if (entrada.trim() !== "" && Number.isFinite(Number(entrada))) {
        celsius = Number(entrada);
        entradaValida = true;
    } else {
        console.log("Error: debes ingresar un número válido. Inténtalo de nuevo.\n");
    }
}

const kelvin = celsius + 273.15;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log("Grados Kelvin: " + Number(kelvin.toFixed(2)));
console.log("Grados Fahrenheit: " + Number(fahrenheit.toFixed(2)));
