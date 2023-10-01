import axios from "axios";

const baseURL = "https://pixabay.com/api/";
const API_KEY = '38888178-564cbbc9408e074f2fd24c446';

export async function fetchPhotos (value, page = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 12,
  })
 return await axios.get(`${baseURL}?${params}`).then(resp => resp.data)

}



