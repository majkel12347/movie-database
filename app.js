const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.getElementById('add-movie');

const backDrop = document.getElementById('backdrop');

const cancelBtn = document.getElementById('cancel');
const confirmAddMovieBtn = document.getElementById('save-movie');

const userInputs = addMovieModal.querySelectorAll('input');

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

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    (ratingValue.trim() === '' && +ratingValue < 1) ||
    +ratingValue > 5
  ) {
    alert('Please enter valid numbers rating between 1 & 5');
    return;
  }
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);

cancelBtn.addEventListener('click', toggleMovieModal);

backDrop.addEventListener('click', backDropClickHandler);

confirmAddMovieBtn.addEventListener('click', addMovieHandler);
