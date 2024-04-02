import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = imagesArr => {
  if (imagesArr.length <= 0) {
    iziToast.error({
      position: 'topRight',
      messageColor: '#ffffff',
      timeout: 5000,
      radius: 15,
      backgroundColor: '#FF2E2E',
      message:
        'Sorry, there are no images matching your search query. Please, try again again!',
    });
    return '';
  }

  return imagesArr
    .map(
      ({
        tags,
        likes,
        views,
        comments,
        downloads,
        webformatURL,
        largeImageURL,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}" >
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
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
          </a>
        </li>
        `;
      }
    )
    .join('');
};

export const addedImages = (insertImagesArr, outputImagesArr) => {
  if (insertImagesArr.length === 0) {
    return;
  }

  insertImagesArr.forEach(imageDataItem => {
    const {
      tags,
      likes,
      views,
      comments,
      downloads,
      webformatURL,
      largeImageURL,
    } = imageDataItem;
    console.log({ imageDataItem });
    const imageObj = {
      tags,
      likes,
      views,
      comments,
      downloads,
      webformatURL,
      largeImageURL,
    };
    outputImagesArr.push(imageObj);
  });
};

const sliderOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};

const slider = new SimpleLightbox('ul.gallery a', sliderOptions);
