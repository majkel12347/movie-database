const addMovie = document.getElementById('add-movie');
const addModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = document.getElementById('btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.previousElementSibling;
const userInputs = addModal.querySelectorAll('input');
const entryText = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeleteMovieBtn = document.getElementById('btn--danger');

const movies = [];

const showMovieModal = () => {
  addModal.classList.add('visible');
  toggleBackdrop();
};

const closeMovieModal = () => {
  addModal.classList.remove('visible');
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInputsValue();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputsValue();
};

const clearMovieInputsValue = () => {
  for (const input of userInputs) {
    input.value = '';
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please fullfill Inputs fields');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    img: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  clearMovieInputsValue();
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputsValue();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.img,
    newMovie.rating
  );
  console.log(movies);
  updateUI();
};

const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = 'flex';
  } else {
    entryText.style.display = 'none';
  }
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.classList.add('movie-element');

  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5</p>
    </div>
    `;

  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  movieList.appendChild(newMovieElement);
};

const deleteMovie = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();

  const cancelDeletionBtn = deleteMovieModal.querySelector('.cancel');
  let deletionBtn = deleteMovieModal.querySelector('.del');

  deletionBtn.replaceWith(deletionBtn.cloneNode(true));

  deletionBtn = deleteMovieModal.querySelector('.del');

  cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal);

  cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
  deletionBtn.addEventListener('click', deleteMovie.bind(null, movieId));
};

addMovie.addEventListener('mouseover', e => {
  const x = e.pageX - addMovie.offsetLeft;
  const y = e.pageY - addMovie.offseTop;

  addMovie.style.setProperty('--xPos', x + 'px');
  addMovie.style.setProperty('--yPos', y + 'px');
});

addMovie.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);
