import axios from "axios";

export const getAllKnowledgeRepo = (params, cb) => {
  axios.get('repo/knowledgecontent', {
    params: {
      category: params
    }
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getSubItem = (params, cb) => {
  axios.get('repo/docs', {
    params: {
      category: params.id,
      subitem: params.subitem
    }
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const setAlert = (data, cb) => {
  axios.post('repo/alerts/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}