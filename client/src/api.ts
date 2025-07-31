import axios from 'axios';

const api = axios.create({
  baseURL: 'https://grocerychecker.onrender.com', 
});

export default api;


