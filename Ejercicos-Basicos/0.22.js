// Ejercicio 22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;
for (const food of foodSchedule) {
    if (!food.isVegan && fruitIndex < fruits.length) {
        food.name = fruits[fruitIndex];
        food.isVegan = true;
        fruitIndex++;
    }
}
console.log("\n--- Ejercicio 22 ---");
console.log(foodSchedule);