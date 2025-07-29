// Ejercicio 33
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return "Ese país no está en la lista.";
  }
}
console.log("\n--- Ejercicio 33 ---");
console.log(getCapital("France"));
