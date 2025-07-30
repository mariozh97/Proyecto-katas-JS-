// --- Ejercicio 3: . ---

// 3.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .
const users3_1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const userNames = users3_1.map(user => user.name);
console.log("--- Ejercicio 3.1 ---");
console.log("Nombres de usuarios:", userNames);
console.log("\n");

// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const users3_2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const updatedNames = users3_2.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }
    return user.name;
});
console.log("--- Ejercicio 3.2 ---");
console.log("Nombres actualizados (Anacleto):", updatedNames);
console.log("\n");

// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];
const visitedCities = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    }
    return city.name;
});
console.log("--- Ejercicio 3.3 ---");
console.log("Ciudades con estado de visita:", visitedCities);
console.log("\n");
