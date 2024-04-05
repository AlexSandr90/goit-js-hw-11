import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

const lightboxOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('ul.gallery a', lightboxOptions);

searchInput.addEventListener('input', () => {
  searchInput.value.length > 0
    ? (submitButton.disabled = false)
    : (submitButton.disabled = true);
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

    console.log({ imagesData: imagesData, input });

    if (imagesData !== null && imagesData.hits.length > 0) {
      addedImages(imagesData.hits, images);
      
      renderImages(imgBlock, images);
      
      lightbox.refresh();
    } else {
      iziToast.error({
        position: 'topRight',
        messageColor: '#ffffff',
        timeout: 5000,
        radius: 15,
        backgroundColor: '#FF2E2E',
        message:
          'Sorry, there are no images matching your search query. Please, try again again!',
      });
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }

  form.reset();
  submitButton.disabled = true;
};

form.addEventListener('submit', handleSubmit);
