import axios from "axios";

export const loginUser = (data, cb) => {
  axios.post('users/login/', data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}
