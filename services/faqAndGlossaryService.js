import axios from "axios";

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
  axios.get(`info/${typeOfPdf}`, {
    responseType: 'blob'
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}