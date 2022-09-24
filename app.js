const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.getElementById('add-movie');

const backDrop = document.getElementById('backdrop');

const cancelBtn = document.getElementById('cancel');
const confirmAddMovieBtn = document.getElementById('save-movie');

const userInputs = addMovieModal.querySelectorAll('input');

const entryMovieList = document.getElementById('entry-text');

const movies = [];

const toggleBackdropHndler = () => {
  backDrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  document.body.style.overflowY = 'hidden';
  toggleBackdropHndler();
};

const backDropClickHandler = () => {
  toggleMovieModal();
};

const updateUI = () => {
  if (movies.length === 0) {
    entryMovieList.style.display = 'flex';
  } else {
    entryMovieList.style.display = 'none';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const clearMovieInputs = () => {
  for (const input of userInputs) {
    input.value = '';
  }
};

const addMovieHandler = () => {
  let titleValue = userInputs[0].value;
  let imageUrlValue = userInputs[1].value;
  let ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    (ratingValue.trim() === '' && +ratingValue < 1) ||
    +ratingValue > 5
  ) {
    alert('Please enter valid numbers rating between 1 & 5');
    return;
  } else {
    const movie = {
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue,
    };

    movies.push(movie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    updateUI();
  }
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);

cancelBtn.addEventListener('click', cancelAddMovieHandler);

backDrop.addEventListener('click', backDropClickHandler);

confirmAddMovieBtn.addEventListener('click', addMovieHandler);
