import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Paytax from "../Pages/payment"


function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/paytax" element={<Paytax/>}/>
        </Routes>
    </div>
}

export default Allroutes