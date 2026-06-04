import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24739758-4c739ca612149bb371b205192';

export const getImagesByQuery = (query) => {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
