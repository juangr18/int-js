/**
 * Variables en javascript
 */

var nombre="pepa";
let numbers = [nombre,nombre,nombre, nombre];
const limit=numbers.length;

c=1;
numbers.forEach(n=>{
    console.log(n);
    document.write(c+" Objeto "+n+'</br>');
    c++;
});
console.log(limit);