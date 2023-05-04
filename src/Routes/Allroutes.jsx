import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import { CalculatorPage } from "../Pages/CalculatorPage"


function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calculators" element={<CalculatorPage/>}/>
        </Routes>
    </div>
}

export default Allroutes