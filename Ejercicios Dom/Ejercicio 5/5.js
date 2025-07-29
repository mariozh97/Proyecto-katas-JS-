// Basandote en el array, crea una lista ul > li dinamicamente.
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumList = document.createElement('ul');
for (const album of albums) {
  const li = document.createElement('li');
  li.textContent = album;
  albumList.appendChild(li);
}

document.body.appendChild(albumList);