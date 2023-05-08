import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"

import About from "../Pages/About"
import Paytax from "../Pages/payment"

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

import {Company} from "../Pages/Company"
import IncomeTax from "../Pages/IncomeTax"
import LeasePremium from "../Pages/LeasePremium"

import WearTear from "../Pages/WearTear"

import { Signup } from "../Pages/Signup"
import Blog from "../Pages/Blogs"
import Faq from "../Pages/Faqs"
import { Privateroute } from "../Private/privateroute"






function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path='/about' element={<About/>}/>
            <Route path="/paytax" element={
            // <Privateroute>
                <Paytax/>
                //  </Privateroute> */}
            }/>


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

            <Route path="/logbook" element={<LogTool />}/>

            <Route path="/company" element={<Company />}/>
            <Route path="/incomeTax" element={<IncomeTax />}/>
            <Route path="/lease-premium" element={<LeasePremium />}/>

            <Route path="/wear-tear" element={<WearTear />}/>
            


            <Route path="/login" element={<Signup/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/faq" element={<Faq/>}/>

        </Routes>
    </div>
}

export default Allroutes