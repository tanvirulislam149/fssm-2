import { axiosInstance } from "./authService";

export const getMyDocs = (data, cb) => {
  axiosInstance.post('dashboard/docsearch/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delMyDocs = (data, cb) => {
  axiosInstance.delete(`dashboard/docsearch/${data}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editMyDocs = (id, data, cb) => {
  axiosInstance.put(`dashboard/docsearch/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const uploadMyDocs = (data, cb) => {
  axiosInstance.post('dashboard/docupload/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}