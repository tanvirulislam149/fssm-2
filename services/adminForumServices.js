import { axiosInstance } from "./authService";

export const getForumCats = cb => {
  axiosInstance.get('dashboard/forumcat/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getTopics = cb => {
  axiosInstance.get('dashboard/disctopics/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delTopic = (id, cb) => {
  axiosInstance.delete(`dashboard/disctopics/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editTopicApproval = (id, cb) => {
  axiosInstance.put(`dashboard/isapptrue/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const addCategory = (data, cb) => {
  axiosInstance.post(`dashboard/forumcat/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delCategory = (id, cb) => {
  axiosInstance.delete(`dashboard/forumcat/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editCategory = (id, data, cb) => {
  axiosInstance.put(`dashboard/forumcat/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const viewComments = (data, cb) => {
  axiosInstance.post(`dashboard/apptopics/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delComment = (id, cb) => {
  axiosInstance.delete(`dashboard/apptopics/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}