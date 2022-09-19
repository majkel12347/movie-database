const addMovie = document.getElementById('add-movie');
const modal = document.querySelector('.modal');

const saveMovie = document.getElementById('save-movie');
const movies = [];

const inputMovie = document.getElementById('input');

addMovie.addEventListener('click', function (e) {
  modal.classList.toggle('visible');
});

function movieAdd(name) {
  const movie = { name, id: Date.now(), desc: 'description' };
  movies.push(movie);
  console.log(movies);
}

saveMovie.addEventListener('click', function (e) {
  const text = inputMovie.value.trim();
  if (text !== '') {
    movieAdd.push(text);
    inputMovie.value = '';
    inputMovie.focus();
  }
});
