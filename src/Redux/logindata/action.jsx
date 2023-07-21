import axios from "axios"
import { POST_DATA, POST_details } from "./actiontype"

export const handlepost=(data)=>(dispatch)=>{
   return axios.post(`https://taxtim.onrender.com/login`,data).then((res)=>dispatch({type:POST_DATA,payload:res.data}))
}



export const handlepostdetails=(data)=>(dispatch)=>{
    return axios.post(`https://taxtim.onrender.com/userdetail`,data).then((res)=>dispatch({type:POST_details,payload:res.data}))
 }