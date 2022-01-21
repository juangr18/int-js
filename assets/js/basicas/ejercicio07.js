/**
 * Funcion flecha
 * Es recomendada por equipo que soporta javascript
 * Similar a expresiones lambda
 */

 function nombreUsuario() {
    let nombre = prompt("ingresa tu nombre: ");console.log(nombre);
    alert("Tu nombre es: "+nombre);
}

const nombre =() => {
    alert("Tu nombre es: "+nombre);
    let nombre = prompt("ingresa tu nombre: ");console.log(nombre);
};