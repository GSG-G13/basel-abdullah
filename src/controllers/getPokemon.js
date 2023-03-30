const getPokemon = (req, res) => {
  const value = req.params.pokName;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then((response) => response.json())
    .then((data) => res.send(data))
    // eslint-disable-next-line no-console
    .catch(console.log);
};

module.exports = getPokemon;
