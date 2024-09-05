import axios from 'axios';

const token = localStorage.getItem('accessToken');

const authAxios = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('error========', error);
    if (error.status === 401) {
      const originalRequest = error.config;
      console.log('originalRequest', originalRequest);
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const result = await authAxios.post('/auth/refreshAccessToken', {
          refreshToken,
        });
        const newAccessToken = result?.data;
        if(newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken);
          authAxios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${newAccessToken}`;
        }
        return error;
      } catch (refreshError) {
        console.log('refreshError', refreshError)
      }
    }
  }
);

export default authAxios;
