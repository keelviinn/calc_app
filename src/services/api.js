import axios from 'axios';

const api = axios.create({
   baseURL: 'http://18.231.72.101:8080',
});

export default api;