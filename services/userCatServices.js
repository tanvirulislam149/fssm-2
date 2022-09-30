import { axiosInstance } from "./authService";

export const getUserProfile = cb => {
  axiosInstance.get('dashboard/user_profile/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const createUserProfile = (data, cb) => {
  axiosInstance.get('dashboard/user_profile/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const searchUserProfile = (data, cb) => {
  axiosInstance.get('dashboard/user_list/', data)
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


