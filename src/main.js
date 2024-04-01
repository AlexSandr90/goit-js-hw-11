import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';

const searchInput = document.querySelector('input[class="search-input"]');
const form = document.querySelector('form[class="search"]');

const handleSubmit = event => {
  event.preventDefault();

  getImages();
};

form.addEventListener('submit', handleSubmit);
