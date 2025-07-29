/*
Proyecto 2: Katas JavaScript
Bloque 1: Ejercicios Básicos y Avanzados
*/

// Ejercicio 1
const miSuperheroeFavorito = "Hulk";
const numeroFavorito = 50;
const altura = 5;
const longitud = 10;
const suma = altura + longitud;

console.log("Mi superhéroe favorito:", miSuperheroeFavorito);
console.log("Mi número favorito:", numeroFavorito);
console.log("Altura:", altura);
console.log("Longitud:", longitud);
console.log("Suma de altura y longitud:", suma);

// ------

// Ejercicio 2
// 2.1
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;
console.log("Nueva edad de Luke:", jedi.edad);

// 2.2
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;
const presentacion = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";
console.log(presentacion);

// 2.3
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
const precioTotalSables = sable1.precio + sable2.precio;
console.log("Precio total de sables de luz:", precioTotalSables);

// 2.4
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 0 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 0 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Precio final de Ala-X:", nave1.precioFinal);
console.log("Precio final de Halcón Milenario:", nave2.precioFinal);

// ------

// Ejercicio 3
// 3.1
console.log(10 * 5);
// 3.2
console.log(10 / 2);
// 3.3
console.log(15 % 9);
// 3.4
const p = 10;
const j = 5;
const o = p + j;
console.log(o);
// 3.5
const c = 10;
const m = 5;
const i_ej3 = c * m; 
console.log(i_ej3);


// ------

// Ejercicio 4
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
// 4.1
console.log(aldeanos[3]);
// 4.2
aldeanos.push("Cervasio");
// 4.3
aldeanos[0] = "Bambina";
// 4.4
aldeanos.reverse();
// 4.5
const indice = aldeanos.indexOf("Narciso");
aldeanos.splice(indice, 1, "Canela");
// 4.6
console.log(aldeanos[aldeanos.length - 1]);
console.log(aldeanos);

// ------

// Ejercicio 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}
if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}
if (number3 !== number1) {
  console.log("number3 es distinto number1");
}
if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}
if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}
if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// ------

// Ejercicio 6
// 1.1
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 1.2
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 1.3
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir");
  }
}

// ------

// Ejercicio 7
function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}
greaterNumber(8, 20);

// ------

// Ejercicio 8
const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];
function findLongestWord(stringList) {
  let longestWord = "";
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers));

// ------

// Ejercicio 9
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(numberList) {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }
  return sum;
}
console.log(sumNumbers(numbers));

// ------

// Ejercicio 10
const numbersToAverage = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  const sum = sumNumbers(numberList); 
  return sum / numberList.length;
}
console.log(average(numbersToAverage));

// ------

// Ejercicio 11
const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];
function averageWord(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      sum += list[i];
    } else {
      sum += list[i].length;
    }
  }
  return sum / list.length;
}
console.log(averageWord(mixedElements));

// ------

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
console.log(removeDuplicates(duplicates));

// ------

// Ejercicio 13
const names = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];
function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);
  if (index !== -1) {
    return [true, index];
  } else {
    return false;
  }
}
console.log(nameFinder(names, "Natasha"));
console.log(nameFinder(names, "Antman"));


// ------

// Ejercicio 14
const words = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'sleep', 'code'];
function repeatCounter(list) {
  const counter = {};
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }
  return counter;
}
console.log(repeatCounter(words));

// ------

// Ejercicio 15
const products = ["Camiseta de Metallica", "Pantalón vaquero", "Gorra de beisbol", "Camiseta de Basket", "Cinturón de Orión", "AC/DC Camiseta"];
for (const product of products) {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
}

// ------

// Ejercicio 16
const placesToTravel = ["Japon", "Venecia", "Murcia", "Santander", "Filipinas", "Madagascar"];
for (const place of placesToTravel) {
  console.log(place);
}

// ------

// Ejercicio 17
const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};
for (const key in alien) {
  console.log("La propiedad " + key + " tiene cómo valor: " + alien[key]);
}

// ------

// Ejercicio 18
const placesToTravelWithId = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const placesFinal = [];
for(const place of placesToTravelWithId) {
    if(place.id !== 11 && place.id !== 40) {
        placesFinal.push(place);
    }
}
console.log(placesFinal);

// ------

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
console.log(toysNoCat);

// ------

// Ejercicio 20
const popularToys = [];
const toysList = [
  { id: 101, name: 'Super Soaker', sellCount: 15 },
  { id: 102, name: 'Tamagotchi', sellCount: 22 },
  { id: 103, name: 'Polly Pocket', sellCount: 8 },
  { id: 104, name: 'Yo-yo', sellCount: 33 },
  { id: 105, name: 'Pikachu plush toy', sellCount: 19 }
];

for (const toy of toysList) {
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}
console.log(popularToys);

// ------

// Ejercicio 21
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const usuariosMenores = [];
const usuariosMayores = [];

for(const user of users){
    if(user.years < 18){
        usuariosMenores.push(user.name);
    } else {
        usuariosMayores.push(user.name);
    }
}
console.log("Usuarios menores de edad:", usuariosMenores.join(", "));
console.log("Usuarios mayores de edad:", usuariosMayores.join(", "));

// ------

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
    if (!food.isVegan) {
        food.name = fruits[fruitIndex];
        food.isVegan = true;
        fruitIndex++;
    }
}
console.log(foodSchedule);

// ------

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
console.log("Películas Pequeñas:", peliculasPequenas);
console.log("Películas Medianas:", peliculasMedianas);
console.log("Películas Grandes:", peliculasGrandes);

// ------

// Ejercicio 24
const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' }
];

const humanCharacters = [];
for (const character of characters) {
  if (character.species === 'Human') {
    humanCharacters.push(character);
  }
}
console.log(humanCharacters);


// ------

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
console.log("Películas de antes del 2000:", antesDel2000);
console.log("Películas posteriores al 2000:", despuesDel2000);

// ------

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
console.log(rockPlaylist);

// ------

// Ejercicio 27
const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let oldestCartoonName = '';
let oldestDebutYear = Infinity;

for (let i = 0; i < cartoons.length; i++) {
  if (cartoons[i].debut < oldestDebutYear) {
    oldestDebutYear = cartoons[i].debut;
    oldestCartoonName = cartoons[i].name;
  }
}

console.log("--- Ejercicio 27 ---");
console.log("La serie de dibujos animados más antigua es:", oldestCartoonName);
console.log("\n");

// ------

// Ejercicio 28
const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

let totalRockDuration = 0;

for (let i = 0; i < albums.length; i++) {
  if (albums[i].genre === 'Rock') {
    totalRockDuration += albums[i].duration;
  }
}

console.log("--- Ejercicio 28 ---");
console.log("La duración total de los álbumes de Rock es:", totalRockDuration.toFixed(2), "minutos.");
console.log("\n");

// ------

// Ejercicio 29
const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const moviesByDecade = {};

for (let i = 0; i < starWarsMovies.length; i++) {
  const movie = starWarsMovies[i];
  const decade = Math.floor(movie.releaseYear / 10) * 10;
  if (!moviesByDecade[decade]) {
    moviesByDecade[decade] = [];
  }
  moviesByDecade[decade].push(movie.title);
}

console.log("--- Ejercicio 29 ---");
console.log("Películas de Star Wars agrupadas por década:", moviesByDecade);
console.log("\n");

// ------

// Ejercicio 30
const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const songsByGenre = {};

for (let i = 0; i < tracks.length; i++) {
  const track = tracks[i];
  if (!songsByGenre[track.genre]) {
    songsByGenre[track.genre] = [];
  }
  songsByGenre[track.genre].push(track.title);
}

console.log("--- Ejercicio 30 ---");
console.log("Canciones clasificadas por género:", songsByGenre);
console.log("\n");

// ------

// Ejercicio 31
const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

console.log("--- Ejercicio 31 ---");
for (let i = 0; i < artists.length; i++) {
  const artist = artists[i];
  console.log(`Artista: ${artist.name}`);
  for (let j = 0; j < artist.influences.length; j++) {
    console.log(`  Influencia: ${artist.influences[j]}`);
  }
}

// ------

// Ejercicio 32 
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
];

function findOldestXMen(xMenList) {
  let oldest = xMenList[0];
  for (let i = 1; i < xMenList.length; i++) {
    if (xMenList[i].year < oldest.year) {
      oldest = xMenList[i];
    }
  }
  return oldest;
}
console.log(findOldestXMen(xMen));

// ------

// Ejercicio 33
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return "Ese país no está en la lista.";
  }
}
console.log(getCapital("France"));

// ------

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
console.log(averageMovieDuration(durationMovies));

// ------

// Ejercicio 35
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Mystique', power: 'shape-shifting' },
];

function findMutantByPower(mutantList, power) {
    let found = false;
    for(const mutant of mutantList){
        if(mutant.power === power){
            found = true;
            break; 
        }
    }

    if(found){
        return "Se encontró al menos un mutante con ese poder.";
    } else {
        return "No se encontró ningún mutante con ese poder.";
    }
}
console.log(findMutantByPower(mutants, 'magnetism'));
console.log(findMutantByPower(mutants, 'invisibility'));

// ------

// Ejercicio 36
const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
];

function calculateActorsAges(actorList) {
  const currentYear = new Date().getFullYear();
  const actorsWithAge = [];
  for (const actor of actorList) {
    const age = currentYear - actor.born;
    actorsWithAge.push({ name: actor.name, age: age });
  }
  return actorsWithAge;
}
console.log(calculateActorsAges(actors));

// ------

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
console.log(categories);

// ------

// Ejercicio 38
const usersWithSounds = [
  { name: "Alberto", favoritesSounds: { waves: { volume: 50 }, rain: { volume: 60 } } },
  { name: "Antonio", favoritesSounds: { waves: { volume: 30 }, shower: { volume: 55 } } },
];

let totalVolume = 0;
let soundsCount = 0;

for(const user of usersWithSounds){
    for(const key in user.favoritesSounds){
        totalVolume += user.favoritesSounds[key].volume;
        soundsCount++;
    }
}
const averageVolume = totalVolume / soundsCount;
console.log(averageVolume);

// ------

// Ejercicio 39
const soundCounter = {};
for (const user of usersWithSounds) {
    for (const soundName in user.favoritesSounds) {
        if (soundCounter[soundName]) {
            soundCounter[soundName]++;
        } else {
            soundCounter[soundName] = 1;
        }
    }
}
console.log(soundCounter);

// ------

// Ejercicio 40
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; 
}

const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey"];

function removeItem(array, text) {
  const newArray = [...array]; 
  const index = findArrayIndex(newArray, text);
  if (index !== -1) {
    newArray.splice(index, 1);
  }
  return newArray;
}
console.log(removeItem(mainCharacters, "Han Solo"));
console.log(mainCharacters); 

// ------

// Ejercicio 41
function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}
console.log(rollDice(6));
console.log(rollDice(20));

// ------

// Ejercicio 42
const fantasticFour = ["La antorcha humana", "Mr. Fantástico", "La mujer invisible", "La cosa"];

function swap(array, index1, index2) {
  const newArray = [...array]; 
  const temp = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;
  return newArray;
}
console.log(swap(fantasticFour, 1, 3));