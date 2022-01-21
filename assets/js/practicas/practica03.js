/**
 * Un HTML vamos a tener los siguientes textos:
 * - Nombre:
 * - Edad:
 * - Dirección:
 * - Telefono:
 * - Documento:
 * - Botón (Ingresar datos):
 * - Prompt: Nos pide los datos de los campos.
 * - LocalStorage: Agregar los datos a LocalStorage.
 */
let btnAction = document.getElementById("btnAction");
let nombre = document.getElementById("nombreUsuario");
let edad = document.getElementById("edad");
let direccion = document.getElementById("direccion");
let telefono = document.getElementById("telefono");
let documento = document.getElementById("documento");
const imprimirHtml = () => {
  let name = prompt("Ingrese su nombre");
  localStorage.setItem("nombre", name);
  let age = prompt("Ingrese su edad");
  localStorage.setItem("edad", age);
  let address = prompt("Ingrese su dirección");
  localStorage.setItem("dirección", address);
  let phone = prompt("Ingrese su teléfono");
  localStorage.setItem("teléfono", phone);
  let documen = prompt("Ingrese su documento");
  localStorage.setItem("documento", documen);

  nombre.innerHTML = "Bienvenido/a al sistema: " + name;
  edad.innerHTML = "Tu edad es: " + age;
  direccion.innerHTML = "Tu dirección es: " + address;
  telefono.innerHTML = "Tu teléfono es: " + phone;
  documento.innerHTML = "Tu documento es: " + documen;
};

const init = () => {
    if (
        localStorage.getItem("nombre") &&
        localStorage.getItem("edad") &&
        localStorage.getItem("dirección") &&
        localStorage.getItem("teléfono") &&
        localStorage.getItem("documento")
      ) {
        nombre.innerHTML = "Bienvenido/a al sistema: " + localStorage.getItem("nombre");
        edad.innerHTML = "Tu edad es: " + localStorage.getItem("edad");
        direccion.innerHTML = "Tu dirección es: " + localStorage.getItem("dirección");
        telefono.innerHTML = "Tu teléfono es: " + localStorage.getItem("teléfono");
      
        documento.innerHTML = "Tu documento es: " + localStorage.getItem("documento");
      }
}

init();

btnAction.onclick = () => {
  imprimirHtml();
};
