// Ejercicio 37
const moviesWithCategories = [
  { title: "Bracula: Condemor II", categories: ["comedia", "aventura"] },
  { title: "Spider-Man: No Way Home", categories: ["aventura", "acción"] },
  { title: "Shrek", categories: ["comedia", "aventura", "animación"] },
];

const categories = [];
for (const movie of moviesWithCategories) {
  for (const category of movie.categories) {
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }
}
console.log("\n--- Ejercicio 37 ---");
console.log(categories);