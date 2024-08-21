import { PageWeb } from '@/@types/page';
import { RegisterFormValues } from '@/@types/user';
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

export const getPagesWeb = async (): Promise<PageWeb[]> => {
  const response = await api.get('/pageweb', {

  });
  return response.data;
};


export const registerUser = async (data: RegisterFormValues) => {
  const response = await api.post('/user/register', data);
  return response.data;
};


export default api;
