import axios from "axios"
const BASEURL = process.env.REACT_APP_API_URL;

export const get = (url) => {
    return axios.get(url)
}

export const post = (endpoint, data) => {
    return axios.post(`${BASEURL}${endpoint}`, data);
}