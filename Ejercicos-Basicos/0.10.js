// Ejercicio 10
const numbersToAverage = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  const sum = sumNumbers(numberList);
  return sum / numberList.length;
}
console.log("\n--- Ejercicio 10 ---");
console.log(average(numbersToAverage));
