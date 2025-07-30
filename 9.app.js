document.addEventListener('DOMContentLoaded', () => {
    const pokemonImage = document.querySelector('.random-pokemon-image');

     function getRandomPokemonId() {
        return Math.floor(Math.random() * 151) + 1;
    }

     async function fetchRandomPokemonImage() {
        const pokemonId = getRandomPokemonId();
        const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const imageUrl = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;
            const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1); 

            if (imageUrl) {
                pokemonImage.src = imageUrl;
                pokemonImage.alt = `Imagen de ${pokemonName}`;
                console.log(`Mostrando a: ${pokemonName} (ID: ${pokemonId})`);
            } else {
                pokemonImage.src = ""; 
                pokemonImage.alt = "No se encontró imagen para este Pokémon";
                console.warn(`No se encontró imagen para ${pokemonName} (ID: ${pokemonId})`);
            }

        } catch (error) {
            console.error("Error al obtener el Pokémon:", error);
            pokemonImage.src = "";
            pokemonImage.alt = "Error al cargar el Pokémon";
        }
    }
     fetchRandomPokemonImage();
});