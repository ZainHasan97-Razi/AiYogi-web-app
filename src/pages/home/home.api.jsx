import { post, stream } from "../../services/api";

export const ENDPOINTS = {
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
   return post(`/${ENDPOINTS.public_converse}`, data)
}



export const fetchStreamData = async (payload, setData) => {

   const  headers = {
      Accept: 'text/event-stream',
      'Cache-Control': 'no-cache',
    }

    const response = await stream(`/${ENDPOINTS.public_converse}`, payload, headers);
    if (!response.ok) {
     throw new Error(await response.text());
   }

   if (!response.ok) {
     throw new Error(await response.text());
   }

   const reader = response.body.getReader();
   const decoder = new TextDecoder();
   
   let result = '';
 
   while (true) {
     const { done, value } = await reader.read();
     if (done) break;
     result += decoder.decode(value, { stream: true });
     setData(result); // Update state with the latest result
   }
   return result;
 };

export const moduleConverseStream = async (payload) => {
  const  headers = {
      Accept: 'text/event-stream',
      'Cache-Control': 'no-cache',
    }
    
   const responseStream = await stream(`/${ENDPOINTS.public_converse}`, payload, headers);
   const reader = responseStream.getReader();

   return new Promise(async (resolve) => {
      let fullMessage = "";
      while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            fullMessage += value;
            console.log("Chunk received:", value); // Stream updates in real time
      }
      resolve(fullMessage);
   });
} 