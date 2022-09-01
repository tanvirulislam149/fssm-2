import { axiosInstance } from "./authService";
import axios from "axios";

export const startDiscussion = (data, cb) => {
  axiosInstance.post('discussion/startdis/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getDiscussion = cb => {
  axios.get('discussion/board/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const postComment = (data, cb) => {
  axiosInstance.post('discussion/reply/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}