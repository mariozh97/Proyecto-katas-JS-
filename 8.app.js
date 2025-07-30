document.addEventListener('DOMContentLoaded', () => {
    const characterListSelect = document.getElementById('character-list');
    const characterImage = document.querySelector('.character-image');
    const API_URL = 'https://thronesapi.com/api/v2/Characters';

    
    async function fetchCharacters() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const characters = await response.json();

            characters.forEach(character => {
                const option = document.createElement('option');
                option.value = character.imageUrl; 
                option.textContent = character.fullName; 
                characterListSelect.appendChild(option);
            });

        } catch (error) {
            console.error("Error al obtener los personajes:", error);
             const optionError = document.createElement('option');
            optionError.textContent = 'Error al cargar personajes';
            optionError.disabled = true;
            characterListSelect.appendChild(optionError);
        }
    }

    
    fetchCharacters();

   
    characterListSelect.addEventListener('change', (event) => {
        const selectedImageUrl = event.target.value;
        if (selectedImageUrl) {
            characterImage.src = selectedImageUrl;
            characterImage.alt = `Imagen de ${event.target.options[event.target.selectedIndex].textContent}`;
        } else {
             characterImage.alt = "Imagen del personaje";
        }
    });
});