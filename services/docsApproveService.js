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


export const startDiscussion = (data, cb) => {
  axiosInstance.post('discussion/startdis/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}