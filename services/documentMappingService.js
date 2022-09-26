import { axiosInstance } from "./authService";

export const getUnmappedDocs = cb => {
  axiosInstance.get('dashboard/docsview/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const mapDocs = (id, data, cb) => {
  axiosInstance.put(`dashboard/docsview/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const deleteDocs = (data, cb) => {
  axiosInstance.delete(`dashboard/docsview/${data}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}