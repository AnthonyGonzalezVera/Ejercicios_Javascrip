"use strict";

let edadmin = 18;
let edad_usuario = prompt("¿Que edad tiene?");

if(edad_usuario >= edadmin) {
    alert("Puede votar");

} else {
    alert ("No puede votar");
}