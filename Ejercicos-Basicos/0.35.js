// Ejercicio 35
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
];

function findMutantByPower(mutantList, power) {
  for (const mutant of mutantList) {
    if (mutant.power === power) {
      return "Se encontró al menos un mutante con ese poder.";
    }
  }
  return "No se encontró ningún mutante con ese poder.";
}
console.log("\n--- Ejercicio 35 ---");
console.log(findMutantByPower(mutants, 'magnetism'));