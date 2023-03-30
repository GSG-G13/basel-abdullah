const searchBtn = document.querySelector('.search');

searchBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    fetch(`/search/${document.querySelector('.search').value}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(() => console.log('no data from the api'));
  }
});
