// Ejercicio 18
const placesToTravelWithId_2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const placesFinal = [];
for(const place of placesToTravelWithId_2) {
    if(place.id !== 11 && place.id !== 40) {
        placesFinal.push(place);
    }
}
console.log("\n--- Ejercicio 18 ---");
console.log(placesFinal);
