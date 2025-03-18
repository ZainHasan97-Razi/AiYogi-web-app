import { post } from "../../services/api";

const ENDPOINTS = {
    modules_tending: "modules/trending",
    modules_search: "modules/search",
    public_converse: "public/converse",
    modules_featured: "modules/featured",
    modules_justreleased: "modules/justreleased",
}

export const moduleTending = () => {
   return post(`/${ENDPOINTS.modules_tending}`)
} 
export const moduleSearch = (data) => {
   return post(`/${ENDPOINTS.modules_search}`, data)
} 
export const moduleJustreleased = () => {
   return post(`/${ENDPOINTS.modules_justreleased}`)
}

export const moduleFeatured = () => {
   return post(`/${ENDPOINTS.modules_featured}`)
} 

export const moduleConverse = (data) => {
    const payload = {
        ...data,
        "moduleId": "hloo2123",
        "threadId": "23424",
        "message": "how to handle",
        "Stream": true
    }
   return post(`/${ENDPOINTS.modules_justreleased}`, {data: payload})
} 