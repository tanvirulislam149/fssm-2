import axios from "axios";


export const loginUser = (data, cb) => {
  axios.post('users/login/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getFaqs = (cb) => {
  axios.get('info/faq/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getGlossary = (letter, cb) => {
  axios.get('info/glossary', {
    params: {
      alphabet: letter
    }
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const downloadPDF = (typeOfPdf, cb) => {
  axios.get(`info/${typeOfPdf}`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const submitQuestion = (data, cb) => {
  axios.post('helpdesk/submitques/', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const searchQuestion = (data, cb) => {
  axios.post('helpdesk/searchques/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getAllKnowledgeRepo = (cb) => {
  axios.get('repo/content/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const setAlert = (data, cb) => {
  axios.post('repo/alerts/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}