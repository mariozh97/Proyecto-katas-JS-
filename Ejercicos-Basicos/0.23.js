// Ejercicio 23
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const peliculasPequenas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculasPequenas.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    peliculasMedianas.push(movie);
  } else {
    peliculasGrandes.push(movie);
  }
}
console.log("\n--- Ejercicio 23 ---");
console.log("Películas Pequeñas:", peliculasPequenas);
console.log("Películas Medianas:", peliculasMedianas);
console.log("Películas Grandes:", peliculasGrandes);
