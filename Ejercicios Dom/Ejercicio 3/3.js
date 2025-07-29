// 1.1 Crea una lista ul > li con los paises
const countries = ['Japon', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countryList = document.createElement('ul');
for (const country of countries) {
  const li = document.createElement('li');
  li.textContent = country;
  countryList.appendChild(li);
}
document.body.appendChild(countryList);

// 1.2 Elimina el elemento con la clase .fn-remove-me
const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();

// 1.3 Crea una lista ul > li de coches en el div con data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const carList = document.createElement('ul');
for (const car of cars) {
  const li = document.createElement('li');
  li.textContent = car;
  carList.appendChild(li);
}
printHereDiv.appendChild(carList);

// 1.4 Crea divs con h4 e img a partir del array.
const countriesWithImages = [
	{title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const container = document.createElement('div');
for (const country of countriesWithImages) {
  const countryDiv = document.createElement('div');
  countryDiv.className = 'country-item';
  const title = document.createElement('h4');
  title.textContent = country.title;
  const img = document.createElement('img');
  img.src = country.imgUrl;
  
  countryDiv.appendChild(title);
  countryDiv.appendChild(img);
  container.appendChild(countryDiv);
}
document.body.appendChild(container);

// 1.5 Crea un boton que elimine el ultimo elemento de la serie de divs.
const removeLastButton = document.createElement('button');
removeLastButton.textContent = 'Eliminar el ultimo';
removeLastButton.addEventListener('click', () => {
  const allCountryDivs = document.querySelectorAll('.country-item');
  if (allCountryDivs.length > 0) {
    allCountryDivs[allCountryDivs.length - 1].remove();
  }
});
document.body.appendChild(removeLastButton);

// 1.6 Crea un boton para cada uno de los divs que elimine ese mismo elemento.
const allCountryDivsForDeletion = document.querySelectorAll('.country-item');
allCountryDivsForDeletion.forEach(div => {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar este';
  deleteBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });
  div.appendChild(deleteBtn);
});