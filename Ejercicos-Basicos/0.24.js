// Ejercicio 24
const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' }
];

const humanCharacters = [];
for (const character of characters) {
  if (character.species === 'Human') {
    humanCharacters.push(character);
  }
}
console.log("\n--- Ejercicio 24 ---");
console.log(humanCharacters);
