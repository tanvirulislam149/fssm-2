import { axiosInstance } from "./authService";

export const getStats = cb => {
  axiosInstance.get('dashboard/admindashboard/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getOrgStackedGraph = (data, cb) => {
  axiosInstance.post('dashboard/search/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}