import { axiosInstance } from "./authService";

export const getFaqs = cb => {
  axiosInstance.get('dashboard/faq/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getGlossary = cb => {
  axiosInstance.get('dashboard/glossary/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const addFaq = (data, cb) => {
  axiosInstance.post(`dashboard/faq/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const addGlossary = (data, cb) => {
  axiosInstance.post(`dashboard/glossary/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editFaq = (id, data, cb) => {
  axiosInstance.put(`dashboard/faq/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editGlossary = (id, data, cb) => {
  axiosInstance.put(`dashboard/glossary/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delGlossary = (id, cb) => {
  axiosInstance.delete(`dashboard/glossary/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delFaq = (id, cb) => {
  axiosInstance.delete(`dashboard/faq/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}



