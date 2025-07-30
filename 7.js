// --- Ejercicio 7: ---

console.log("--- Ejercicio 7.1 ---");
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

const rpgGames = videogames.filter(game => game.genders.includes('RPG'));
const totalRpgScore = rpgGames.reduce((acc, game) => acc + game.score, 0);
const averageRpgScore = rpgGames.length > 0 ? totalRpgScore / rpgGames.length : 0;

console.log("Videojuegos RPG:", rpgGames);
console.log("Media de las notas de videojuegos RPG:", averageRpgScore.toFixed(2));
console.log("\n");