import axios from 'axios';
import hostBackend from '~/config/hostBackend';

const api = axios.create({
  baseURL: `${hostBackend.protocol}://${hostBackend.host}:${hostBackend.port}`,
});

export default api;
