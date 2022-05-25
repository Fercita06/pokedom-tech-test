import pokemonArray from "./data/pokemon.js";
console.log (pokemonArray.length);

const container = document.querySelector(".card-container");
console.log(container);

const nameToUpperCase = (string) => {
  return string[0].toUpperCase() + string.substring(1);
}

let filteredNames = pokemonArray.filter ((pokemon =>{
  pokemonArray.includes ("name");
}))

pokemonArray.forEach(pokemon => {
  const pokemonCard = document.createElement('article'); 
  pokemonCard.classList.add('card');
  pokemonCard.innerHTML = 
   `<img src="${pokemon.sprite}" class = "card__image">
    <div class= "card__content">
      <h2 class = card__heading>${nameToUpperCase(pokemon.name)}</h2>
      <p class = "card__text">${nameToUpperCase(pokemon.name)} (#${pokemon.id}) is a ${pokemon.types} type pokemon.</P>
    </div>`
    container.appendChild(pokemonCard);
    
});
