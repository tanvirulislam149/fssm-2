import { axiosInstance } from "./authService";

export const getUnmappedDocs = cb => {
  axiosInstance.get('dashboard/docsview/')
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

export const mapDocs = (id, data, cb) => {
  axiosInstance.put(`dashboard/docsview/${id}/`, data)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}

// export const mapDocs = (id, data, cb) => {
//   axiosInstance.put(`dashboard/docsview/${id}/`, {
//     title: "Title of the doc",
//     theme: "COMMUNICATIONS",
//     sub_cat: ["subcat", "subcat2"],
//     stakeholder: ["Private Sector", "Policy Makers"],
//     value_chain: ["Reuse", "Containment"],
//     geography: "National",
//     state: ["Goa", "Punjab"],
//     city: "Hyderabad",
//     status: "Urban",
//     description: "This is the description",
//     citation: "This is the citation",
//     language: ["Ho", "Kui"],
//     keywords: ["abcd", "asd"]
//   })
//     .then(res => cb(null, res))
//     .catch(err => cb(err, null))
// }

export const deleteDocs = (data, cb) => {
  axiosInstance.delete(`dashboard/docsview/${data}/`)
    .then(res => cb(null, res))
    .catch(err => cb(err, null))
}