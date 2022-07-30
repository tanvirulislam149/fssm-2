import axios from "axios";

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

export const displayQuestions = (cb) => {
  axios.get('helpdesk/viewques/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}