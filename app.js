const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.getElementById('add-movie');

const backDrop = document.getElementById('backdrop');

const cancelBtn = document.getElementById('cancel');

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
startAddMovieBtn.addEventListener('click', toggleMovieModal);

cancelBtn.addEventListener('click', toggleMovieModal);

backDrop.addEventListener('click', backDropClickHandler);
