// --- Ejercicio 1: Destructuring ---

// 1.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const { title, gender, year } = game;
console.log("--- Ejercicio 1.1 ---");
console.log("Título:", title);
console.log("Género:", gender);
console.log("Año:", year);
console.log("\n");

// 1.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log("--- Ejercicio 1.2 ---");
console.log("Fruta 1:", fruit1);
console.log("Fruta 2:", fruit2);
console.log("Fruta 3:", fruit3);
console.log("\n");

// 1.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const { name, race } = animalFunction();
console.log("--- Ejercicio 1.3 ---");
console.log("Nombre del animal:", name);
console.log("Raza del animal:", race);
console.log("\n");

// 1.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
const { name: carName, itv } = car; // Renombramos 'name' a 'carName' para evitar conflicto
const [year1, year2, year3] = itv;
console.log("--- Ejercicio 1.4 ---");
console.log("Nombre del coche:", carName);
console.log("ITV años:", itv);
console.log("Año ITV 1:", year1);
console.log("Año ITV 2:", year2);
console.log("Año ITV 3:", year3);
console.log("\n");