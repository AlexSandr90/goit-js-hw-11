import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';

const searchInput = document.querySelector('input[class="search-input"]');
const form = document.querySelector('form[class="search"]');
const imgBlock = document.querySelector('ul[class="find--images-block"]');
const images = [];

const renderImages = imagesArr => {
  if (imagesArr.length <= 0) {
    return;
  }

  return imagesArr
    .map(({ tags, likes, views, comments, downloads, webformatURL }) => {
      return `<li class="find--images-item">
        <img src="${webformatURL}" alt="${tags}" />
        <ul class="stats-block">
          <li>
            <span>Likes</span>
            <span>${likes}</span>
          </li>
          <li>
            <span>Views</span>
            <span>${views}</span>
          </li>
          <li>
            <span>Comments</span>
            <span>${comments}</span>
          </li>
          <li>
            <span>Downloads</span>
            <span>${downloads}</span>
          </li>
        </ul>
      </li>
      `;
    })
    .join('');
};

const handleSubmit = async event => {
  event.preventDefault();
  const form = event.target;
  const input = searchInput.value.trim();

  try {
    const imagesData = await getImages(input);
    console.log(imagesData.hits);
    imagesData.hits.forEach(imageDataItem => {
      const {
        tags,
        likes,
        views,
        comments,
        downloads,
        webformatURL,
        largeImageURL,
      } = imageDataItem;
      const imageObj = {
        tags,
        likes,
        views,
        comments,
        downloads,
        webformatURL,
        largeImageURL,
      };
      images.push(imageObj);
    });
  } catch (error) {
    console.error('Error fetching images:', error);
  }
  imgBlock.insertAdjacentHTML('beforeend', renderImages(images));

  console.log(images);
  form.reset();
};

form.addEventListener('submit', handleSubmit);
