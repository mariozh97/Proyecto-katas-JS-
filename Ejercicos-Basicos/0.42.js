// Ejercicio 42
const fantasticFour = ["La antorcha humana", "Mr. Fantástico", "La mujer invisible", "La cosa"];

function swap(array, index1, index2) {
  const newArray = [...array];
  const temp = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;
  return newArray;
}
console.log("\n--- Ejercicio 42 ---");
console.log(swap(fantasticFour, 1, 3));