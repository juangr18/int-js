/**
 * El usuario escribe uno de los 5 departamentos definidos
 * Luego el usuario escribe una de las 5 ciudades definidas del departamento seleccionado
 * Al final mostrar un alert con un mensaje referido a la ciudad seleccionada
 */

let dep = prompt(
  "Digite el numero del departamento: \n 1. Antioquia \n 2. Caldas \n 3. Cundinamarca \n 4. Valle del Cauca \n 5. Narino"
);

function noValidate() {
  alert("Fuera del rango, por favor intente nuevamente.");
}

function isValid() {
  if (dep === "1") {
    ciudadDep1();
  } else if (dep === "2") {
    ciudadDep2();
  } else if (dep === "3") {
    ciudadDep3();
  } else if (dep === "4") {
    ciudadDep4();
  } else if (dep === "5") {
    ciudadDep5();
  } else {
    noValidate();
  }
}

//Antioquia
function ciudadDep1() {
  let cid = prompt(
    "Seleccione la ciudad del departamento de Antioquia \n 1. Medellin \n 2. Santa Fe de Antioquia \n 3. Apartado  \n 4. Envigado \n 5. Itagui"
  );
  if (cid === "1") {
      alert("La altitud de Medellin es: 1538 m");
  } else if (cid === "2") {
      alert("La altitud de Santa Fe de Antioquia es: 500 m");
  } else if (cid === "3") {
      alert("La altitud de Apartado es: 30 m");
  } else if (cid === "4") {
      alert("La altitud de Envigado es: 1575 m");
  } else if (cid === "5") {
      alert("La altitud de Itagui es: 1550 m");
  } else {
    noValidate();
  }
}

//Caldas
function ciudadDep2() {
  let cid = prompt(
    "Seleccione la ciudad del departamento de Caldas \n 1. Manizales \n 2. Risaralda \n 3. La Dorada \n 4. Rio sucio \n 5. Manzanares"
  );
  if (cid === "1") {
      alert("La altitud de Manizales es: 2160 m");
  } else if (cid === "2") {
      alert("La altitud de Risaralda es: 1743 m");
  } else if (cid === "3") {
      alert("La altitud de La Dorada es: 190 m");
  } else if (cid === "4") {
      alert("La altitud de Rio sucio es: 1783 m");
  } else if (cid === "5") {
      alert("La altitud de Manzanares es: 1871 m");
  } else {
    noValidate();
  }
}

//Huila
function ciudadDep3() {
  let cid = prompt(
    "Seleccione la ciudad del departamento de Cundinamarca \n 1. Neiva \n 2. Pitalito \n 3. Garzon \n 4. Gigante  \n 5. Timana"
  );
  if (cid === "1") {
      alert("La altitud de Neiva es: 442 m");
  } else if (cid === "2") {
      alert("La altitud de Pitalito es: 1318 m");
  } else if (cid === "3") {
      alert("La altitud de Garzon es: 828 m");
  } else if (cid === "4") {
      alert("La altitud de Gigante es: 860 m");
  } else if (cid === "5") {
      alert("La altitud de Timana es: 1100 m");
  } else {
    noValidate();
  }
}

//Valle del cauca
function ciudadDep4() {
  let cid = prompt(
    "Seleccione la ciudad del departamento de Valle del cauca \n 1. Santiago de Cali \n 2. Cartago \n 3. Buga  \n 4. Yumbo  \n 5. Jamundi"
  );
  if (cid === "1") {
      alert("La altitud de Santiago de Cali es: 995 m");
  } else if (cid === "2") {
      alert("La altitud de Cartago es: 917 m");
  } else if (cid === "3") {
      alert("La altitud de Buga es: 969 m");
  } else if (cid === "4") {
      alert("La altitud de Yumbo es: 1021 m");
  } else if (cid === "5") {
      alert("La altitud de Jamundi es: 975 m");
  } else {
    noValidate();
  }
}

//Narino
function ciudadDep5() {
  let cid = prompt(
    "Seleccione la ciudad del departamento de Narino \n 1. San Juan de Pasto \n 2. Ipiales \n 3. Tumaco \n 4. Samaniego \n 5. Chachagui"
  );
  if (cid === "1") {
      alert("La altitud de San Juan de Pasto es: 2527 m");
  } else if (cid === "2") {
      alert("La altitud de Ipiales es: 2898 m");
  } else if (cid === "3") {
      alert("La altitud de Tumaco es: 2 m");
  } else if (cid === "4") {
      alert("La altitud de Samaniego es: 1470 m");
  } else if (cid === "5") {
      alert("La altitud de Chachagui es: 1950 m");
  } else {
    noValidate();
  }
}

isValid();
