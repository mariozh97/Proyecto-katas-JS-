// Ejercicio 34
const durationMovies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
];

function averageMovieDuration(movieList) {
  let totalDuration = 0;
  for (const movie of movieList) {
    totalDuration += movie.duration;
  }
  return totalDuration / movieList.length;
}
console.log("\n--- Ejercicio 34 ---");
console.log(averageMovieDuration(durationMovies));