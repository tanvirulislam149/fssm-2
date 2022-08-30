import axios from "axios";

export const advancedSearch = (data, cb) => {
  axios.post('repo/advancedsearch/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}