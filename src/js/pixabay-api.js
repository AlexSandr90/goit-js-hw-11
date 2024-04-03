const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43151566-329d1ba35c4912218880d8d24';

export const getImages = (searchValue = '') => {
  if (searchValue.length === 0) {
    return null;
  }

  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchValue)}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
      return null;
    });
};