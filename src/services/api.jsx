const BASEURL = process.env
import axios from "axios"

const apiCall = axios.create({url: process.env.REACT_APP_API_URL});

export const get = (url) => {
    return apiCall.get(url)
}

export const post = (endpoint, data) => {
    return apiCall.post(endpoint, data);
}