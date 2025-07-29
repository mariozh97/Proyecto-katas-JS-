// Ejercicio 20
const popularToys = [];
const toysList = [
  { id: 101, name: 'Super Soaker', sellCount: 15 },
  { id: 102, name: 'Tamagotchi', sellCount: 22 },
  { id: 103, name: 'Polly Pocket', sellCount: 8 },
  { id: 104, name: 'Yo-yo', sellCount: 33 },
  { id: 105, name: 'Pikachu plush toy', sellCount: 19 }
];

for (const toy of toysList) {
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}
console.log("\n--- Ejercicio 20 ---");
console.log(popularToys);
