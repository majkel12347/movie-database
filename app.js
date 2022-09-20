const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.getElementById('add-movie');

const backDrop = document.getElementById('backdrop');

const cancelBtn = document.getElementById('cancel');

const toggleBackdrop = () => {
  backDrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  document.body.style.overflowY = 'hidden';
  toggleBackdrop();
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);

cancelBtn.addEventListener('click', () => {
  backDrop.classList.toggle('visible');
  addMovieModal.classList.toggle('visible');
});
