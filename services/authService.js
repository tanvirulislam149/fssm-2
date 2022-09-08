import axios from "axios";
import Cookies from 'js-cookie';

export const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

//axiosInstance.defaults.withCredentials = true

axiosInstance.interceptors.response.use(response => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status === 404 &&
        error.response.data.Error === 'User Not Found') ||
      (error.response.status === 401 &&
        error.response.data.Error === 'Password Incorrect')
    ) {
      return Promise.reject('Email or Password Incorrect');
    }

    if (
      error.response.status === 401 &&
      originalRequest.url.includes('api/token/refresh')
    ) {
      return Promise.reject('Refresh token expired');
    }

    if (error.response.status === 401) {
      const refreshToken = Cookies.get('refresh');

      axiosInstance.post('api/token/refresh/', { refresh: refreshToken })
        .then(res => {
          Cookies.set('access', res.data.access, { expires: 14 })
          axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${res.data.access}`;
          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    return Promise.reject(error);
  }

);


export const loginUser = (data, cb) => {
  axiosInstance.post('users/login/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const verifyEmail = (data, cb) => {
  axios.post('users/forgotpass/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const resetPass = (data, uid, token, cb) => {
  axios.post(`users/resetpass/${uid}/${token}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}


export const uuu = (data, cb) => {
  axios.post('/users/register/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}