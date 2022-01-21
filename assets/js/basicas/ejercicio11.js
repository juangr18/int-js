/**
 * DOM
 */
let ejecutar = document.getElementById("btnName");
const cambiarNombre = () => {
  let name = prompt("Ingrese su nombre");
  alert("Tú nombre es: " + name);
};

//Eventos
ejecutar.onclick = () => {
  cambiarNombre();
};
