import axios from 'axios';

const API_KEY = '58374973-62089ef55d4f57ebbd4f495ce';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    }).then(response => {
        return response.data;
    });
}