const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43151566-329d1ba35c4912218880d8d24';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

// export const getImages = () => {
//   return fetch(
//     `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent('red roses')}`,
//     options
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(post => console.log(post))
//     .catch(error => console.log(error));
// };

export const getImages = () => {
  return fetch(
    `https://pixabay.com/api/?key=43151566-329d1ba35c4912218880d8d24&q=roses`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(post => console.log(post))
    .catch(error => console.log(error));
};
