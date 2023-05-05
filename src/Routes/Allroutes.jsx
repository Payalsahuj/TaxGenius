import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import { CalculatorPage } from "../Pages/CalculatorPage"
import { SalarytaxPage } from "../Pages/SalarytaxPage"


function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calculators" element={<CalculatorPage/>}/>
            <Route path="/salarytaxpage" element={<SalarytaxPage/>}/>
        </Routes>
    </div>
}

export default Allroutes