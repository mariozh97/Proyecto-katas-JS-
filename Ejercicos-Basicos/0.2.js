/*
Proyecto 2: Katas JavaScript
Bloque 1: Ejercicios Básicos y Avanzados
*/

// Ejercicio 2
// 2.1
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;
console.log("Nueva edad de Luke:", jedi.edad);

// 2.2
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;
const presentacion = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";
console.log(presentacion);

// 2.3
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
const precioTotalSables = sable1.precio + sable2.precio;
console.log("Precio total de sables de luz:", precioTotalSables);

// 2.4
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 0 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 0 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Precio final de Ala-X:", nave1.precioFinal);
console.log("Precio final de Halcón Milenario:", nave2.precioFinal);