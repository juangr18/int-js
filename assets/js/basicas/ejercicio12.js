/**
 * DOM
 */
 let ejecutar = document.getElementById("btnName");
 let nombreUsuario = document.getElementById("nombreUsuario");
 //Arrow Functions
 /**
  * normal: nombre.innerHTML = nombre.innerHTML + " " + nombre;
  * abreviado: nombre.innerHTML += " " + nombre;
  */
 const cambiarNombre = () => {
   let name = prompt("Ingrese su nombre");
   nombreUsuario.innerHTML +="Bienvenido/a "+name;
 };
 
 //Eventos
 ejecutar.onclick = () => {
   cambiarNombre();
 };
 