// --- Ejercicio 2: Spread Operators ---

// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log("--- Ejercicio 2.1 ---");
console.log("Copia del array de puntos:", pointsListCopy);
console.log("\n");

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = { ...toy };
console.log("--- Ejercicio 2.2 ---");
console.log("Copia del juguete:", toyCopy);
console.log("\n");

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList2_3 = [32, 54, 21, 64, 75, 43];
const pointsLis2_3_2 = [54,87,99,65,32];
const combinedPoints = [...pointsList2_3, ...pointsLis2_3_2];
console.log("--- Ejercicio 2.3 ---");
console.log("Arrays de puntos combinados:", combinedPoints);
console.log("\n");

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toy2_4 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = { ...toy2_4, ...toyUpdate };
console.log("--- Ejercicio 2.4 ---");
console.log("Objetos de juguete fusionados:", mergedToy);
console.log("\n");

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
// Para eliminar la posición 2 (índice 2, que es 'amarillo')
const newColors = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("--- Ejercicio 2.5 ---");
console.log("Array de colores original:", colors);
console.log("Nuevo array de colores (sin posición 2):", newColors);
console.log("\n");