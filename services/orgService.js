import { axiosInstance } from "./authService"

export const getOrgFilter = (cb) => {
  axiosInstance.get(`dashboard/org_list/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getOrgList = (data, cb) => {
  axiosInstance.post(`dashboard/org_list/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delOrg = (id, cb) => {
  axiosInstance.delete(`dashboard/org_list/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}
export const editOrgList = (data, id, cb) => {
  axiosInstance.put(`dashboard/org_list/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}