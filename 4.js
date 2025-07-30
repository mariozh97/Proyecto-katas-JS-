// --- Ejercicio 4: ---

// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages4_1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages4_1.filter(age => age > 18);
console.log("--- Ejercicio 4.1 ---");
console.log("Edades mayores de 18:", adults);
console.log("\n");

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages4_2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages4_2.filter(age => age % 2 === 0);
console.log("--- Ejercicio 4.2 ---");
console.log("Edades pares:", evenAges);
console.log("\n");

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers4_3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers4_3.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log("--- Ejercicio 4.3 ---");
console.log("Streamers que juegan League of Legends:", lolStreamers);
console.log("\n");

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const streamers4_4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersWithU = streamers4_4.filter(streamer => streamer.name.includes('u'));
console.log("--- Ejercicio 4.4 ---");
console.log("Streamers con 'u' en el nombre:", streamersWithU);
console.log("\n");

// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.
const streamers4_5 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const legendsStreamers = streamers4_5.filter(streamer => streamer.gameMorePlayed.includes('Legends')).map(streamer => {
    if (streamer.age > 35) {
        return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
    }
    return streamer;
});
console.log("--- Ejercicio 4.5 ---");
console.log("Streamers con 'Legends' (game en mayúsculas si > 35):", legendsStreamers);
console.log("\n");