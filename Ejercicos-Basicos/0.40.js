
// Ejercicio 40
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

const mainCharacters_2 = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey"];

function removeItem(array, text) {
  const newArray = [...array];
  const index = findArrayIndex(newArray, text);
  if (index !== -1) {
    newArray.splice(index, 1);
  }
  return newArray;
}
console.log("\n--- Ejercicio 40 ---");
console.log(removeItem(mainCharacters_2, "Han Solo"));
