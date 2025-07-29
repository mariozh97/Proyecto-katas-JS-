// 1.1 Usa querySelector para mostrar por consola el boton con la clase .showme
const showmeButton = document.querySelector('.showme');
console.log(showmeButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pilladoH1 = document.querySelector('#pillado');
console.log(pilladoH1);

// 1.3 Usa querySelector para mostrar por consola todos los p
const allP = document.querySelectorAll('p');
console.log(allP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll('.pokemon');
console.log(allPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(allTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3er personaje con el atributo data-function="testMe"
const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter);