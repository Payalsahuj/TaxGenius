import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import { CalculatorPage } from "../Pages/CalculatorPage"

import { SalarytaxPage } from "../Pages/SalarytaxPage"

import  LogTool  from "../Pages/LogTool"
import TravelDeductionPage from "../Pages/TaravelDeductionPage"
import TaxRefundPage from "../Pages/TaxRefundPage"
import LumpsumPage from "../Pages/LumpsumPage"
import AidkidPage from "../Pages/AidkidPage"
import WeartearPage from "../Pages/WeartearPage"
import LocalIntCalculator from "../Pages/LocalIntCalculator"
import Foreigncal from "../Pages/Foreigncal"



function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/calculators" element={<CalculatorPage/>}/>
            <Route path="/salarytaxpage" element={<SalarytaxPage/>}/>
            <Route path="/traveldeductionpage" element={<TravelDeductionPage/>}/>
            <Route path="/taxrefundpage" element={<TaxRefundPage/>}/>
            <Route path="/lumpsumpage" element={<LumpsumPage/>}/>
            <Route path="/aidkidpage" element={<AidkidPage/>}/>
            <Route path="/weartearpage" element={<WeartearPage/>}/>
            <Route path="/localintcalculator" element={<LocalIntCalculator/>}/>
            <Route path="/foreigncal" element={<Foreigncal/>}/>
            <Route path="/tools" element={<LogTool />}/>

        </Routes>
    </div>
}

export default Allroutes