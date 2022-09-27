import { axiosInstance } from "./authService";

export const getListedDocs = (data, cb) => {
  axiosInstance.post('dashboard/docslist/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}