/**
 * toLowerCase() - Podemos convertir una cadena de texto a minúsculas.
 */
let dia = prompt("Ingresa el dia de la semana: ").toLowerCase();
if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "miércoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert(dia + " es un día de la semana");
} else if (dia === "sabado" || dia === "sábado" || "domingo") {
  alert(dia + " no es un día de la semana");
} else {
  alert(
    "El valor ingresado no es un dia de la semana, por favor intente nuevamente"
  );
}
