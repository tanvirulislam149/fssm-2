import { axiosInstance } from "./authService";

export const getStats = cb => {
  axiosInstance.get('repo/admindashboard/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}