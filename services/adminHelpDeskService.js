import { axiosInstance } from "./authService"

export const getUnapprovedDocs = (params, cb) => {
  axiosInstance.get("dashboard/help_desk/questions/", {
    params: {
      is_approved: params.params
    }
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const editDoc = (id, data, cb) => {
  axiosInstance.put(`dashboard/help_desk/questions/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const changeApproval = (id, data, cb) => {
  axiosInstance.patch(`dashboard/help_desk/questions/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delQuest = (id, cb) => {
  axiosInstance.delete(`dashboard/help_desk/questions/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getAnswers = (id, params, cb) => {
  axiosInstance.get(`dashboard/help_desk/questions/answer/${id}/`, {
    params: {
      is_approved: params.params
    }
  })
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getThemes = cb => {
  axiosInstance.get(`dashboard/help_desk/theme/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const updateTheme = (id, data, cb) => {
  axiosInstance.put(`dashboard/help_desk/theme/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delTheme = (id, cb) => {
  axiosInstance.delete(`dashboard/help_desk/theme/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const createTheme = (data, cb) => {
  axiosInstance.post(`dashboard/help_desk/theme/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getEmail = cb => {
  axiosInstance.get(`dashboard/help_desk/email/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const updateEmail = (id, data, cb) => {
  axiosInstance.put(`dashboard/help_desk/email/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const createEmail = (data, cb) => {
  axiosInstance.post(`/dashboard/help_desk/email/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const delEmail = (id, cb) => {
  axiosInstance.delete(`dashboard/help_desk/email/${id}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}