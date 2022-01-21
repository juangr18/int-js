/**
 * Local Storage
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
   localStorage.setItem("nombre", name);
 };
 
 if(localStorage.getItem("nombre")){
     nombreUsuario.innerHTML ="Bienvenido/a "+localStorage.getItem("nombre");
 }

 //Eventos
 ejecutar.onclick = () => {
   cambiarNombre();
 };
 