import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom"



export const Privateroute = ({ children }) => {
    // const navigate=useNavigate()
    const localdata = JSON.parse(localStorage.getItem("login-data")) || []
    const {auth,data}=useSelector((store)=> store.loginreducer)
    console.log(auth,data,localdata)
    let flag=false
    localdata.forEach((item)=>{
        data.forEach((ele)=>{
            if(ele.email===item.email){
                flag=true
            }
        })
    })
    return flag?children:<Navigate to={'/login'}/>

}