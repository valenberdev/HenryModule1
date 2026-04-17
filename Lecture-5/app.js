/* document.getElementById("cambiarBtn").addEventListener("click", function () {

    document.getElementById("parrafo").textContent = "¡Has cambiado el texto del párrafo!";
    document.getElementById("parrafo").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

});




console.log("Script loaded!"); */


/* document.getElementById("cambiarBtn").addEventListener("click", function () {

    document.getElementById("cambiarBtn").textContent = "¡Has cambiado el texto del botón!";
    document.getElementById("cambiarBtn").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

});

console.log("Script loaded!"); */

/* document.getElementById("cambiarBtn").addEventListener("click", function () {

    if (!this.dataset.clickCount) {
        this.dataset.clickCount = 0;
    }
    
    document.getElementById("parrafo").textContent = "click numero: " + (++this.dataset.clickCount);

    
    console.log("Botón clickeado " + this.dataset.clickCount + " veces.");


});
 */
    
    
    console.log("muy bien botardoo!");

    document.getElementById("cambiarBtn").addEventListener("click", function () {

    document.getElementById("divContenido").textContent = "¡Has cambiado el texto del div!";
    document.getElementById("divContenido").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    console.log("color actual: " + document.getElementById("divContenido").style.backgroundColor);}
    );


    document.getElementById("mensajeEasterEgg").style.display = "none";

    document.getElementById("otroBtn").addEventListener("click", function () {

        document.getElementById("mensajeEasterEgg").style.display = "block";
    
    console.log("¡Easter Egg revelado!");});




    document.getElementById("otroBtn2").addEventListener("click", function () {
        document.getElementById("otroBtn2").textContent = "¡Has presionado el botón mágico!";
        document.getElementById("otroBtn2").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById("otroBtn2").style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById("fondo").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log("Botón mágico presionado.");
    });

