import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import { CalculatorPage } from "../Pages/CalculatorPage"

import { SalarytaxPage } from "../Pages/SalarytaxPage"

import  LogTool  from "../Pages/LogTool"

import TravelDeductionPage from "../Pages/TaravelDeductionPage"

import {Company} from "../Pages/Company"




function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/calculators" element={<CalculatorPage/>}/>
            <Route path="/salarytaxpage" element={<SalarytaxPage/>}/>
            <Route path="/traveldeductionpage" element={<TravelDeductionPage/>}/>
            <Route path="/tools" element={<LogTool />}/>

            <Route path="/company" element={<Company />}/>
            

        </Routes>
    </div>
}

export default Allroutes