import { axiosInstance } from "./authService";

export const getAllDocs = (data, cb) => {
  axiosInstance.post('dashboard/alldocs/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delAllDocs = (data, cb) => {
  axiosInstance.delete(`dashboard/alldocs/${data}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editAllDocs = (id, data, cb) => {
  axiosInstance.put(`dashboard/alldocs/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}