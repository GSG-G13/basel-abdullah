document.querySelector('.search').addEventListener('keyup', (e) => {
  fetch(`/search?q=${e.target.value}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(console.log);
});
