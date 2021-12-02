
import axios from 'axios'
const api_axios=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
export default class API {
    static get =async (url, config={})=>
    api_axios.get(url ,config)

      static post =async (url, body, config={})=>
    api_axios.post(url,body,config)

      static put =async (url, body, config={})=>
    api_axios.put(url, body ,config)

      static delete =async (url, config={})=>
    api_axios.delete(url,config)

    
}
