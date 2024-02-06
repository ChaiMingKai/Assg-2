// script.js

const dataContainer = document.getElementById('dataContainer');
const searchInput = document.getElementById('searchInput');

fetch('https://genshin.jmp.blue/characters/all')
  .then(response => response.json())
  .then(data => {
    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();
      const filteredData = data.filter(character => character.name.toLowerCase().includes(searchValue));
      renderCharacters(filteredData);
    });

    renderCharacters(data);
  })
  .catch(error => {
    console.error(error);
    dataContainer.textContent = 'Error fetching character data.';
  });

function renderCharacters(characters) {
  dataContainer.innerHTML = '';

  if (characters.length === 0) {
    dataContainer.textContent = 'No characters found.';
    return;
  }

  characters.forEach(character => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character', character.vision.toLowerCase());

    // Add an event listener to the character div
    characterDiv.addEventListener('click', () => {
      // Clear the container
      dataContainer.innerHTML = '';

      // Create and append new elements for each character detail
      const details = ['name', 'title', 'vision', 'weapon', 'gender', 'nation', 'affiliation', 'rarity', 'release', 'constellation', 'birthday', 'description'];
      details.forEach(detail => {
        const detailElement = document.createElement('p');
        detailElement.textContent = `${detail.charAt(0).toUpperCase() + detail.slice(1)}: ${character[detail]}`;
        dataContainer.appendChild(detailElement);
      });
    });

    // Rest of your code...
    const characterName = document.createElement('h2');
    characterName.textContent = character.name;

    const charactervision = document.createElement('h3')
    charactervision.textContent=character.vision

    const characterImage = document.createElement('img');
    let characterImageUrl;
    
    const exception1 = ['kamisato ayaka', 'kamisato ayato','kaedehara kazuha','sangonomiya kokomi','kujou sara'];
    const exception2 = ['raiden shogun']
    const exception3 = {
      'chevreuse': { imageUrl: 'cardimg/Chevreuse.png' },
      'navia':  {imageUrl: 'cardimg/Navia.png'},
    };
    
    if (exception1.some(name => character.name.toLowerCase().includes(name))) {
      const characterNameParts = character.name.toLowerCase().split(' ');
      const characterLastName = characterNameParts.length > 1 ? characterNameParts.slice(1).join('-') : characterNameParts[0];
      characterImageUrl = `https://genshin.jmp.blue/characters/${characterLastName}/card`;
    } else if (exception2.some(name => character.name.toLowerCase().includes(name))) {
      const characterNameParts = character.name.toLowerCase().split(' ');
      const characterFirstName = characterNameParts[0];
      characterImageUrl = `https://genshin.jmp.blue/characters/${characterFirstName}/card`;

    } else if (exception3[character.name.toLowerCase()]) {
      // Handle the third condition with specific images and titles from the object
      characterImageUrl = exception3[character.name.toLowerCase()].imageUrl;
      characterImage.setAttribute('title', exception3[character.name.toLowerCase()].title);
    } else if (character.name.toLowerCase() === 'traveler') {
    // Extract the vision from the character object
    const characterVision = character.vision.toLowerCase();
    // Construct the URL using both the name and vision
    characterImageUrl = `https://genshin.jmp.blue/characters/traveler-${characterVision}/card`;
   
    } else {
      characterImageUrl = `https://genshin.jmp.blue/characters/${character.name.toLowerCase().replace(/\s/g, '-')}/card`;
    }
    // Check if the image is available
    fetch(characterImageUrl)
      .then(response => {
        if (response.ok) {
          characterImage.src = characterImageUrl;
        } else {
          characterImage.src = 'not-available.jpg'; // Set a default image
          // Or display a message
          // characterImage.alt = 'Image not available';
        }
      })
      .catch(error => {
        console.error(error);
        // Handle the error
      });
    
    characterImage.src = characterImageUrl;

    const characterDescription = document.createElement('p');
    characterDescription.textContent = character.description;

    characterDiv.appendChild(characterName);
    characterDiv.appendChild(characterImage);
    characterDiv.appendChild(characterDescription);
    characterDiv.appendChild(charactervision);
    dataContainer.appendChild(characterDiv);
  });
}
