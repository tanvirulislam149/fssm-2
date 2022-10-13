import { axiosInstance } from "./authService"

export const getUnapprovedDocs = (data, cb) => {
  axiosInstance.post("dashboard/un_approved_list/", data, {
    params: {
      is_approved: "False"
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