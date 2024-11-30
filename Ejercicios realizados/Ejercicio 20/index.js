"use strict";
const calcularIVA = (precio) => {
    let iva = precio * 0.12;  
    let precioTotal = precio + iva;  
    alert("El precio total con IVA es: " + precioTotal);  
};


calcularIVA(100);  