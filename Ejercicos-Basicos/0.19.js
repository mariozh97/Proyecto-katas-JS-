// Ejercicio 19
const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
];

const toysNoCat = [];
for (const toy of toys) {
  if (!toy.name.includes("gato")) {
    toysNoCat.push(toy);
  }
}
console.log("\n--- Ejercicio 19 ---");
console.log(toysNoCat);


