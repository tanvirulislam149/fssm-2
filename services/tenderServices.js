import axios from "axios";

export const getExpiredTenders = (cb) => {
  axios.get('repo/expiredtenders/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const getLiveTenders = (cb) => {
  axios.get('repo/livetenders/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}