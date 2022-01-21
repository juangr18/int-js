/**
 * 1- pedir al usuario el nombre por boton el boton
 * 2- Desde el prompt pedir edad, direccion,
 * documento, telefono
 * 3- En alert concatenado el siguiente mensaje:
 * "Hola, mi nombre es: nombre, tengo: edad años, vivo en: direccion y tu documento es
 */

function pedir() {
  let nombre = prompt("Ingresa tu nombre: ");
  let edad = prompt("Ingresa tu edad: ");
  let direccion = prompt("Ingresa tu direccion: ");
  let telefono = prompt("Ingresa tu telefono: ");
  let documento = prompt("Ingresa tu documento: ");
  alert("Hola tu nombre es: "+nombre+", tienes: "+edad+" años, tu direccion es: "+direccion+", tu telefono es: "+telefono+" y tu documento es: "+documento);
}

const pedir2=()=>{
    let nombre = prompt("Ingresa tu nombre: ");
    let edad = prompt("Ingresa tu edad: ");
    let direccion = prompt("Ingresa tu direccion: ");
    let telefono = prompt("Ingresa tu telefono: ");
    let documento = prompt("Ingresa tu documento: ");
    alert("Hola tu nombre es: "+nombre+"\ntienes: "+edad+"\naños, tu direccion es: "+direccion+"\ntu telefono es: "+telefono+"\ntu documento es: "+documento);
};

document.getElementById("btn").addEventListener("click",pedir2);
