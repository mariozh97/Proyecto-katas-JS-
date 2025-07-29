// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divWithP = document.createElement('div');
const pInDiv = document.createElement('p');
pInDiv.textContent = 'Estoy dentro de un div';
divWithP.appendChild(pInDiv);
document.body.appendChild(divWithP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWith6P = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const loopP = document.createElement('p');
  loopP.textContent = `Parrafo ${i + 1}`;
  divWith6P.appendChild(loopP);
}
document.body.appendChild(divWith6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinamico!'.
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinamico!';
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Insert = document.querySelector('.fn-insert-here');
h2Insert.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const appList = document.createElement('ul');
for (const app of apps) {
  const listItem = document.createElement('li');
  listItem.textContent = app;
  appList.appendChild(listItem);
}
document.body.appendChild(appList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
for (const element of elementsToRemove) {
  element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const allDivs = document.querySelectorAll('div');
if (allDivs.length > 1) {
    const middleP = document.createElement('p');
    middleP.textContent = 'Voy en medio!';
    document.body.insertBefore(middleP, allDivs[1]);
}

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsToInsertIn = document.querySelectorAll('div.fn-insert-here');
for (const div of divsToInsertIn) {
  const innerP = document.createElement('p');
  innerP.textContent = 'Voy dentro!';
  div.appendChild(innerP);
}