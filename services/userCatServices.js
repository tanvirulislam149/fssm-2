import { axiosInstance } from "./authService";

export const getUserProfile = cb => {
  axiosInstance.get('dashboard/user_profile/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const createUserProfile = (data, cb) => {
  axiosInstance.post('dashboard/user_profile/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const searchUserProfile = (data, cb) => {
  axiosInstance.post('dashboard/user_list/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editUserProfile = (id, data, cb) => {
  axiosInstance.put(`dashboard/user_list/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}


export const delUserProfile = (data, cb) => {
  axiosInstance.delete(`dashboard/user_list/${data}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getMappedData = cb => {
  axiosInstance.get(`dashboard/maplist/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const addItem = (id, data, cb) => {
  axiosInstance.post(`dashboard/map_user/${id[0]}/${id[1]}/${id[2]}/${id[3]}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editItem = (id, data, cb) => {
  axiosInstance.put(`dashboard/map_user/${id[0]}/${id[1]}/${id[2]}/${id[3]}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delItem = (id, cb) => {
  axiosInstance.delete(`dashboard/map_user/${id[0]}/${id[1]}/${id[2]}/${id[3]}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const pasteItem = (id, data, cb) => {
  axiosInstance.post(`dashboard/map_paste/${id[0]}/${id[1]}/${id[2]}/${id[3]}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}