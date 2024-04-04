import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages, addedImages } from './js/render-functions';

const searchInput = document.querySelector('input[class="search-input"]');
const submitButton = document.querySelector('button[class="submit"]');
const form = document.querySelector('form[class="search"]');
const gallerySection = document.querySelector(
  'section[class="gallery-section"]'
);
const loaderHtml = '<div id="loader" class="loader"></div>';
const imgBlock = document.querySelector('ul[class="gallery"]');
let images = [];

const sliderOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};

searchInput.addEventListener('input', () => {
  if (searchInput.value.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const handleSubmit = async event => {
  event.preventDefault();

  images = [];
  imgBlock.textContent = '';

  const form = event.target;
  const input = searchInput.value.trim();

  try {
    gallerySection.insertAdjacentHTML('beforebegin', loaderHtml);

    const imagesData = await getImages(input);

    const loader = document.querySelector('#loader');
    if (loader) {
      loader.remove();
    }

    if (imagesData !== null) {
      addedImages(imagesData.hits, images);
      imgBlock.insertAdjacentHTML('beforeend', renderImages(images));

      const slider = new SimpleLightbox('ul.gallery a', sliderOptions);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }

  form.reset();
  submitButton.disabled = true;
};

form.addEventListener('submit', handleSubmit);
