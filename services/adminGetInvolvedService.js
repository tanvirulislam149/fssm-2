import { axiosInstance } from "./authService";

export const getData = cb => {
  axiosInstance.get('users/getinvolvedadmin/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delData = (id, cb) => {
  axiosInstance.delete(`users/getinvolvedadmin/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

