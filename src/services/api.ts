import { PageWeb } from '@/@types/page';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7137/api',
});



api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getPagesWeb = async (token: string): Promise<PageWeb[]> => {
  const response = await api.get('/pageweb', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default api;
