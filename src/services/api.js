import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aircnc-backend-yxkwifzlti.now.sh',
  //baseURL: 'http://192.168.1.7:3003',
  //baseURL: 'http://localhost:3003',
});

export default api;
