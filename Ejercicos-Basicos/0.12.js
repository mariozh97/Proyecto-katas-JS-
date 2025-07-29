// Ejercicio 12
const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];
function removeDuplicates(list) {
  const noDuplicates = [];
  for (let i = 0; i < list.length; i++) {
    if (!noDuplicates.includes(list[i])) {
      noDuplicates.push(list[i]);
    }
  }
  return noDuplicates;
}
console.log("\n--- Ejercicio 12 ---");
console.log(removeDuplicates(duplicates));
