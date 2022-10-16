import { axiosInstance } from "./authService"

export const getUnapprovedDocs = (params, data, cb) => {
  axiosInstance.post("dashboard/un_approved_list/", data, {
    params: {
      is_approved: params.params
    }
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const viewUnapprovedDoc = (id, cb) => {
  axiosInstance.get(`dashboard/un_approved_list/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const changeApproval = (id, data, cb) => {
  axiosInstance.patch(`dashboard/un_approved_list/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delDoc = (id, cb) => {
  axiosInstance.delete(`dashboard/un_approved_list/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editDoc = (id, data, cb) => {
  axiosInstance.put(`dashboard/un_approved_list/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}
