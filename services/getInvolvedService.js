import axios from "axios";

export const postFormData = (data, cb) => {
  axios.post('users/getinvolved/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}