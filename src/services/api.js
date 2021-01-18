import axios from 'axios';

const api = axios.create({
   baseURL: 'http://52.67.88.192:8080',
});

export default api;