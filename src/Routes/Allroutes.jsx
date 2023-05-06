import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import { CalculatorPage } from "../Pages/CalculatorPage"
import  LogTool  from "../Pages/LogTool"
import {Company} from "../Pages/Company"


function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calculators" element={<CalculatorPage />}/>
            <Route path="/tools" element={<LogTool />}/>
            <Route path="/company" element={<Company />}/>
            
        </Routes>
    </div>
}

export default Allroutes