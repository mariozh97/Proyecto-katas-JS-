// Ejercicio 11
const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];
function averageWord(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      sum += list[i];
    } else {
      sum += list[i].length;
    }
  }
  return sum / list.length;
}
console.log("\n--- Ejercicio 11 ---");
console.log(averageWord(mixedElements));
