import axios from "axios"
import { ADD_DATA, CHANGE, GET_DATA } from "./actiontype"


export const handleadd=(data)=>(dispatch)=>{
    axios.post(`http://localhost:8080/login`,data).then((res)=>dispatch({type:ADD_DATA,payload:res.data}))
}

export const handleget=async(dispatch)=>{
    return axios.get(`http://localhost:8080/login`).then((res)=>{
        dispatch({type:GET_DATA,payload:res.data})
        return res.data
    } )
}

export const changeauth=(dispatch)=>{
    console.log('ok')
    dispatch({type:CHANGE})
}