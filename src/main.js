import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages, addedImages } from './js/render-functions';

const searchInput = document.querySelector('input[class="search-input"]');
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
};

form.addEventListener('submit', handleSubmit);
