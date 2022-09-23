import { axiosInstance } from "./authService";

export const uploadDocs = (data, cb) => {
  axiosInstance.post('dashboard/upload/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}