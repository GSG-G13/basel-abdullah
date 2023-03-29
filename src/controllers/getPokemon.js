const getPokemon = (req, res) => {
  const { q } = req.query;
  fetch(`https://pokeapi.co/api/v2/pokemon/${q}`)
    .then((response) => response.json())
    .then((data) => res.send(data))
    // eslint-disable-next-line no-console
    .catch(console.log);
};

module.exports = getPokemon;
