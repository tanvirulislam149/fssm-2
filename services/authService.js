import axios from "axios";

export const axiosInstance = axios.create();

// axiosInstance.interceptors.response.use(response => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       error.response.data.detail === 'User Not Found!'
//     ) {
//       return Promise.reject('Email or Password Incorrect');
//     }

//     if (
//       error.response.status === 401 &&
//       originalRequest.url === 'api/token/refresh/'
//     ) {
//       return Promise.reject('Refresh token expired');
//     }

//     if (error.response.status === 401) {
//       const refreshToken = sessionStorage.getItem('refresh');

//       axiosInstance.post('api/token/refresh/', { refresh: refreshToken })
//         .then(res => {
//           sessionStorage.setItem('access', res.data.access);
//           axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${res.data.access}`;
//           return axiosInstance(originalRequest);
//         })
//         .catch((err) => {
//           console.log({ JWTerr: err });
//         });
//     }

//     return Promise.reject(error);
//   }

// );


export const loginUser = (data, cb) => {
  axiosInstance.post('users/login/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

