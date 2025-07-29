// Ejercicio 25
const movieList = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
];

let antesDel2000 = 0;
let despuesDel2000 = 0;

for (const movie of movieList) {
  if (movie.releaseYear < 2000) {
    antesDel2000++;
  } else {
    despuesDel2000++;
  }
}
console.log("\n--- Ejercicio 25 ---");
console.log("Películas de antes del 2000:", antesDel2000);
console.log("Películas posteriores al 2000:", despuesDel2000);