import axios from 'axios';

const API_KEY = '40129758-d2f16a0aa6f51ef2ae8e82b21';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchCard(query, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });
  const resp = await axios.get(`${BASE_URL}?${params}`);
  return resp.data;
}
