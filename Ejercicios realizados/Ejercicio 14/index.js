"use strcit";

let tieneCuenta = prompt("¿Tienes una cuenta? (si/no)");


let conoceContraseña = prompt("¿Conoces la contraseña? (si/no)");


if (tieneCuenta === "si" && conoceContraseña === "si") {
    alert("Acceso concedido");
} else {
    alert("Acceso denegado");
}