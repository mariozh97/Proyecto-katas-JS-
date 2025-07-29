// Ejercicio 26
const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
];

const rockPlaylist = [];
for (const song of songs) {
  if (song.genre === 'Rock' && song.duration > 5) {
    rockPlaylist.push(song);
  }
}
console.log("\n--- Ejercicio 26 ---");
console.log(rockPlaylist);
