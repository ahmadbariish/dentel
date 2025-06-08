const API_BASE_URL = 'http://localhost:5000/api/v1.0.0';

export const API_ENDPOINTS = {
  SERVICES: `${API_BASE_URL}/services`,
  DATES: `${API_BASE_URL}/dates`,
  REVIEWS: `${API_BASE_URL}/reviws`,
  USERS: `${API_BASE_URL}/users`,
  LOGIN: `${API_BASE_URL}/users/login`,
  SIGNUP: `${API_BASE_URL}/users/signup`,
  PROFILE: `${API_BASE_URL}/users/me`,
  UPDATE_PROFILE: `${API_BASE_URL}/users/updateMe`,
  UPDATE_PASSWORD: `${API_BASE_URL}/users/updateMyPassword`,
};

export default API_BASE_URL; 