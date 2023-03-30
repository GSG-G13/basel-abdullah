const searchBtn = document.querySelector('.search');
const cards = document.querySelector('.cards');

const showPokemon = (pokemon) => {
  cards.innerHTML = '';
  console.log(pokemon)
  const card = document.createElement('div');
  card.className = 'card';
  const img = document.createElement('img');
  img.src = pokemon.sprites.other['official-artwork'].front_shiny;
  card.appendChild(img);
  const info = document.createElement('div');
  info.className = 'info';
  const span = document.createElement('span');
  span.textContent = pokemon.types[0].type.name;
  const h3 = document.createElement('h3');
  h3.textContent = pokemon.species.name;
  const abilities = document.createElement('div');
  abilities.className = 'abilities';
  pokemon.abilities.forEach((ab) => {
    const abSpan = document.createElement('span');
    abSpan.textContent = ab.ability.name;
    abilities.appendChild(abSpan);
  });
  info.appendChild(span);
  info.appendChild(h3);
  info.appendChild(abilities);
  card.appendChild(info);
  cards.appendChild(card);
};

searchBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    fetch(`/search/${document.querySelector('.search').value}`)
      .then((response) => response.json())
      .then((data) => showPokemon(data))
      .catch((err) => console.log('no data from the api'));
  }
});
