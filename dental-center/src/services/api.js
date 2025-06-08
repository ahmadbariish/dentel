import axios from 'axios';
import API_BASE_URL, { API_ENDPOINTS } from '../config/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const servicesAPI = {
  getAll: () => api.get(API_ENDPOINTS.SERVICES),
  getById: (id) => api.get(`${API_ENDPOINTS.SERVICES}/${id}`),
  create: (data) => api.post(API_ENDPOINTS.SERVICES, data),
  update: (id, data) => api.put(`${API_ENDPOINTS.SERVICES}/${id}`, data),
  delete: (id) => api.delete(`${API_ENDPOINTS.SERVICES}/${id}`),
};

export const datesAPI = {
  getAll: () => api.get(API_ENDPOINTS.DATES),
  getById: (id) => api.get(`${API_ENDPOINTS.DATES}/${id}`),
  create: (data) => api.post(API_ENDPOINTS.DATES, data),
  update: (id, data) => api.put(`${API_ENDPOINTS.DATES}/${id}`, data),
  delete: (id) => api.delete(`${API_ENDPOINTS.DATES}/${id}`),
};

export const reviewsAPI = {
  getAll: () => api.get(API_ENDPOINTS.REVIEWS),
  getById: (id) => api.get(`${API_ENDPOINTS.REVIEWS}/${id}`),
  create: (data) => api.post(API_ENDPOINTS.REVIEWS, data),
  update: (id, data) => api.put(`${API_ENDPOINTS.REVIEWS}/${id}`, data),
  delete: (id) => api.delete(`${API_ENDPOINTS.REVIEWS}/${id}`),
};

export const usersAPI = {
  login: (credentials) => api.post(`${API_ENDPOINTS.USERS}/login`, credentials),
  register: (userData) => api.post(`${API_ENDPOINTS.USERS}/signup`, userData),
  getProfile: () => api.get(`${API_ENDPOINTS.USERS}/me`),
  updateProfile: (data) => api.patch(`${API_ENDPOINTS.USERS}/updateMe`, data),
  updatePassword: (data) => api.patch(`${API_ENDPOINTS.USERS}/updateMyPassword`, data),
};

export default api; 