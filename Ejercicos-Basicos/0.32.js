// Ejercicio 32
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
];

function findOldestXMen(xMenList) {
  let oldest = xMenList[0];
  for (let i = 1; i < xMenList.length; i++) {
    if (xMenList[i].year < oldest.year) {
      oldest = xMenList[i];
    }
  }
  return oldest;
}
console.log("\n--- Ejercicio 32 ---");
console.log(findOldestXMen(xMen));
