import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { changeauth, handleget } from "../Redux/logindata/action"


export const Privateroute = ({ children }) => {
  
    const auth = useSelector((store) => store.loginreducer.auth)
    const localdata = JSON.parse(localStorage.getItem("login-data")) || []
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleget).then((res) => {
            res.forEach((ele) => {
                localdata.forEach((item) => {
                    if (item.email === ele.email) {
                        console.log(item.email)
                        dispatch(changeauth)
                    }
                })
            })
        })

    }, [])

    return auth ? children : <Navigate to={'/login'} />
}