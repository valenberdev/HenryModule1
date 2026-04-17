let comidas= ["Pizza", "Hamburguesa", "Tacos", "Sushi", "Ensalada"];

console.log("primera comida: " + comidas[0]);
console.log("ultima comida: " + comidas[comidas.length - 1]);
console.log("cantidad de comidas: " + comidas.length);


const animes = ["Naruto", "One Piece", "Dragon Ball", "Attack on Titan", "My Hero Academia"];

for (let i = 0; i < animes.length; i++) {
    console.log("Anime " + (i + 1) + ": " + animes[i]);
}


let numero1 = 15;

if (numero1 > 10) {
    console.log("El primer número es mayor que 10.");
} else {
    console.log("El primer número no es mayor que 10.");
}

let numero2 = 10;

if (numero2 === 10) {
    console.log("El segundo número es igual a 10.");
} else {
    console.log("El segundo número no es igual a 10.");
}


let numero3 = 5;

if (numero3 < 10) {
    console.log("El tercer número es menor que 10.");
} else {
    console.log("El tercer número no es menor que 10.");
}


Math.random() // genera un número aleatorio entre 0 y 1
Math.floor(Math.random() * 100) // genera un número aleatorio entre 0 y 99
Math.ceil(4.2) // redondea hacia arriba, resultado: 5

console.log("Número aleatorio entre 0 y 1: " + Math.random());
console.log("Número aleatorio entre 0 y 99: " + Math.floor(Math.random() * 100));


/* let numero = Math.floor(Math.random() * 10); // genera un número aleatorio entre 0 y 9
let intento = 8;

if (intento === numero) {
    console.log("¡Has adivinado el número!");
} else {
    console.log("Inténtalo de nuevo.");
}
 */

/* a partir de aca estoy haciendo un loop con intentos */
let vidas = 3;
const numero = Math.floor(Math.random() * 10);
let num = 3; // este número se puede cambiar para probar diferentes intentos

while (vidas > 0) {
    
    if (num === numero) {
        console.log("¡Has adivinado el número!");
        break; // salir del loop si adivina
    } else {
        vidas--;
        console.log("Número incorrecto. Te quedan " + vidas + " vidas.");
    }
}

if (vidas === 0) {
    console.log("¡Has perdido! El número era: " + numero);
}

/* ahora voy a hacer el mini proyecto que me dio el chat */

let nombres = ["Alice", "Bob", "Charlie", "Diana", "Eve", "puta"];
let aleatorio = Math.floor(Math.random() * nombres.length);
console.log("El nombre seleccionado al azar es: " + nombres[aleatorio]);
let letras = nombres[aleatorio].split("");
console.log("Las letras del nombre son: " + letras.join(", "));
