import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import { CalculatorPage } from "../Pages/CalculatorPage"
import  LogTool  from "../Pages/LogTool"


function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calculators" element={<CalculatorPage />}/>
            <Route path="/tools" element={<LogTool />}/>
        </Routes>
    </div>
}

export default Allroutes