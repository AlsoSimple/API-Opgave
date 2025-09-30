
const apiUrl = "https://rickandmortyapi.com/api/character";
let allCharacters = null;


fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Parsed data:", data);
    
    allCharacters = data.results;
    buildCharacterCards(allCharacters);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });



function buildCharacterCards(characters) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; 
  if (!characters) {
    outputDiv.innerHTML = "<p>No characters found :(</p>";
    return;
  }

  characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = "characterCard";
    card.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}" />
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>
      <p>Origin: ${character.origin.name}</p>
    `;
    outputDiv.appendChild(card);
  });
}