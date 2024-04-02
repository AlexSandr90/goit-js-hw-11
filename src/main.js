import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api';
import { renderImages, addedImages } from './js/render-functions';

const searchInput = document.querySelector('input[class="search-input"]');
const form = document.querySelector('form[class="search"]');
const imgBlock = document.querySelector('ul[class="gallery"]');
let images = [];

const handleSubmit = async event => {
  event.preventDefault();

  const form = event.target;
  const input = searchInput.value.trim();

  try {
    const imagesData = await getImages(input);
    if (imagesData !== null) {
      images = [];
      imgBlock.textContent = '';
      addedImages(imagesData.hits, images);
      imgBlock.insertAdjacentHTML('beforeend', renderImages(images));
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }

  form.reset();
};

form.addEventListener('submit', handleSubmit);
