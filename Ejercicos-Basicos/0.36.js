// Ejercicio 36
const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
];

function calculateActorsAges(actorList) {
  const currentYear = new Date().getFullYear();
  const actorsWithAge = [];
  for (const actor of actorList) {
    const age = currentYear - actor.born;
    actorsWithAge.push({ name: actor.name, age: age });
  }
  return actorsWithAge;
}
console.log("\n--- Ejercicio 36 ---");
console.log(calculateActorsAges(actors));