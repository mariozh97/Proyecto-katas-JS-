// Ejercicio 13
const names = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];
function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);
  if (index !== -1) {
    return [true, index];
  } else {
    return false;
  }
}
console.log("\n--- Ejercicio 13 ---");
console.log(nameFinder(names, "Natasha"));
console.log(nameFinder(names, "Antman"));