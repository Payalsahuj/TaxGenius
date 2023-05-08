import React, { useState } from 'react';
import styled from 'styled-components';

let deemedFixedCost, wearAndTearDeduction, largestDeduction, deemedCostsDeduction;

export const TravelDeductionPage = () => {
  const [situation, setSituation] = useState('');
  const [taxYear, setTaxYear] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vehicleCost, setVehicleCost] = useState(0);
  const [vehicleYear, setVehicleYear] = useState('');
  const [totalKm, setTotalKm] = useState(0);
  const [businessKm, setBusinessKm] = useState(0);
  const [isVehicleHired, setIsVehicleHired] = useState(false);
  const [hasExpenseRecords, setHasExpenseRecords] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [deductionAmount, setDeductionAmount] = useState(0);

  const handleSituationChange = (event) => {
    setSituation(event.target.value);
  };

  const handleTaxYearChange = (event) => {
    setTaxYear(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(new Date(event.target.value)); // Convert to Date object
  };

  const handleEndDateChange = (event) => {
    setEndDate(new Date(event.target.value)); // Convert to Date object
  };

  const handleVehicleCostChange = (event) => {
    setVehicleCost(Number(event.target.value));
  };

  const handleVehicleYearChange = (event) => {
    setVehicleYear(event.target.value);
  };

  const handleTotalKmChange = (event) => {
    setTotalKm(Number(event.target.value));
  };

  const handleBusinessKmChange = (event) => {
    setBusinessKm(Number(event.target.value));
  };

  const handleIsVehicleHiredChange = (event) => {
    setIsVehicleHired(event.target.value === 'Yes');
  };

  const handleHasExpenseRecordsChange = (event) => {
    setHasExpenseRecords(event.target.value === 'Yes');
  };

  const handleCalculateClick = () => {
    // Perform the calculation here
    const deemedFixedCost = 158856 * (365 / 366);
    const deemedFuelCost = 226.6;
    const deemedMaintenanceCost = 91.0;
    const totalKmDeduction = 42.78 * totalKm;

    let deemedCostsDeduction = deemedFixedCost / totalKm + 2.27 + 0.91;

    if (deemedCostsDeduction > totalKmDeduction) {
      deemedCostsDeduction = totalKmDeduction;
    }

    const wearAndTearDeduction = (vehicleCost / 7) * (endDate - startDate + 1) * (businessKm / totalKm);

    const largestDeduction = Math.max(deemedCostsDeduction, wearAndTearDeduction);

    setDeductionAmount(largestDeduction.toFixed(2));
    setCalculated(true);
  };

  return (
    <DIV>
        <div className='travelpage'>
            <h1>Travel Deduction Tax Calculator for {taxYear}</h1>
            <h2>Compare Actual Costs and Deemed Costs for the Maximum Tax Deduction</h2>
        </div>
        <div className='duo' style={{display:"flex",width:"100%", gap:"150px" }}>
            <div className='left-right' style={{width:"80%"}}>
                <div className='left-heading'>
                    <p>TRAVEL DEDUCTION OPTIMIZER</p>
                </div>
                <div className='left-mid'>
                    <div className='input-gap' style={{textAlign:"left",paddingLeft:"20px"}}>
                        <p><strong>You may only claim travel expenses if you kept a valid vehicle logbook.</strong> </p>
                    </div>
                    <div>
                        <label htmlFor="situation">Which situation fits you?</label>
                        <select id="situation" className='input-gap' value={situation} onChange={handleSituationChange}>
                        <option value="">-- Select --</option>
                        <option value="allowance">I receive a Travel Allowance or Taxable Reimbursive Allowance</option>
                        <option value="contractor">I am an Independent Contractor / Commission Earner</option>
                        <option value="business">I run my own business / am a sole proprietor / freelancer</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="taxYear">Tax year:</label>
                        <input className='input-gap' type="text" id="taxYear" value={taxYear} onChange={handleTaxYearChange} />
                    </div>
                    <div>
                        <label
                        htmlFor="startDate">Date you started using the car:</label>
                        <input className='input-gap' type="text" id="startDate" value={startDate} onChange={handleStartDateChange} />
                    </div>
                    <div>
                        <label htmlFor="endDate">Date you stopped using the car:</label>
                        <input className='input-gap' type="text" id="endDate" value={endDate} onChange={handleEndDateChange} />
                    </div>
                    <div>
                        <label htmlFor="vehicleCost">Cost price of vehicle:</label>
                        <input className='input-gap' type="number" id="vehicleCost" value={vehicleCost} onChange={handleVehicleCostChange} />
                    </div>
                    <div>
                        <label htmlFor="vehicleYear">Year vehicle was purchased:</label>
                        <input className='input-gap' type="text" id="vehicleYear" value={vehicleYear} onChange={handleVehicleYearChange} />
                    </div>
                    <div>
                        <label htmlFor="totalKm">Total KM driven (within tax year):</label>
                        <input className='input-gap' type="number" id="totalKm" value={totalKm} onChange={handleTotalKmChange} />
                    </div>
                    <div>
                        <label htmlFor="businessKm">Business KM driven (within tax year):</label>
                        <input className='input-gap' type="number" id="businessKm" value={businessKm} onChange={handleBusinessKmChange} />
                    </div>
                    <div>
                        <label htmlFor="isVehicleHired">Do you hire / lease this vehicle?</label>
                        <select className='input-gap' id="isVehicleHired" value={isVehicleHired ? 'Yes' : 'No'} onChange={handleIsVehicleHiredChange}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="hasExpenseRecords">Did you keep any records of vehicle-related expenses?</label>
                        <select className='input-gap' id="hasExpenseRecords" value={hasExpenseRecords ? 'Yes' : 'No'} onChange={handleHasExpenseRecordsChange}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <button style={{ position: 'absolute',right: '0', marginTop:"28px"}} onClick={handleCalculateClick}>Calculate</button>
                    </div>
                </div>
                
            </div>
            <div className='right'>
                    <div className='right-flex'>
                        <div>
                            <img className='bot' src="https://www.taxtim.com/za/images/tim_full.svg" alt="Bot.png" />
                        </div>
                        <div className='t1'>
                            <p style={{color:"#4d4d4d", fontWeight:"700"}}>Do your Tax
                            Return in 20
                            minutes or less!</p>
                        </div>
                    </div>
                    <div className='t2'>
                        <p>TaxGenius will help you:</p>
                        <div>
                            <div style={{display: "flex", paddingTop:"25px", paddingLeft:"35px", gap:"7px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />
                                <span> Do Your Tax Return Easily</span>
                            </div>
                            <div style={{display: "flex", paddingTop:"25px", paddingLeft:"35px", gap:"7px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg"  alt="Avoid penalties" />
                                <span> Avoid penalties</span>
                            </div>
                            <div style={{display: "flex", paddingTop:"25px", paddingLeft:"35px", gap:"7px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg"  alt="Maximise your refund" />
                                <span> Maximise your refund</span>
                            </div>

                        {/* <span><img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />  Do Your Tax Return Easily</span>
                        <span><img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />  Avoid penalties</span>
                        <span><img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />  Maximise your refund</span> */}
                        
                            <span style={{paddingLeft:"10px", }}>Genius uses your answers to complete your income tax return instantly and professionally, with everything filled in in the right place.</span>
                        </div>
                    </div>
                    
                </div>
        </div>
        <div className='results'>
        {calculated && (
  <div>
    <p><strong>Deemed Costs method:</strong> </p>
    <p>From SARS table: Fixed cost 158856, Fuel cost 226.6, Maintenance 91.0</p>
    <p>Fixed cost = 158856 * (365 / 366)</p>
    <p>Fixed cost per km = 158421 / {totalKm }+ R2.27 + R0.91</p>
    <p>Deduction = R {42.78} x {totalKm} km = R {42.78*totalKm}</p>
    <br />
    <p><strong>Actual Costs method:</strong> </p>
    <p>Since you did not record your vehicle-related costs, you cannot use this method to claim actual costs.</p>
    <p>But you can claim the cost price of your vehicle, divided by 7, for the first 7 tax years, as Wear and Tear.</p>
    <p>R {vehicleCost} / 7 years x portion days used in year (1.00) x portion business usage in year (1.00) = R {Math.floor(vehicleCost/7)}</p>
    <br />
    <p>You will get the largest tax deduction using Deemed Costs.</p>
    <p>→ In the Travel Allowance section, under the sub-heading "Were Records of Actual Expenditure were kept?", do not enter any of the costs above. SARS will do the calculation for you using their cost of scale table.</p>

    <p>Please note the calculated deductions above are capped at your actual travel allowance amount.</p>
  </div>
)}
        </div>
      
    </DIV>
  );
};

export default TravelDeductionPage;

const DIV = styled.div`
    .travelpage{
        width: 100%;
        padding-top: 90px;
    }
    .travelpage h1{
        font-size: 26px;
        font-weight: 600;
        color: #4d4d4d;
        background-color: #ffffff;
        text-align: left;
        padding-left: 65px;
    }
    .travelpage h2{
        font-size: 24px;
        font-weight: 600;
        color: #4d4d4d;
        background-color: #ffffff;
        text-align: left;
        padding-left: 65px;
    }
    .left-heading{
        width: 100%;
        margin-left: 65px;
        margin-top: 13px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #555555;
    }
    .left-heading p{
        font-size: 20px;
        font-weight: 600;
        text-align: left;
        padding-left: 20px;
        color: white;
    }
    .left-mid{
        width: 100%;
        margin-left: 65px;
        padding-top: 10px;
        padding-bottom: 20px;
        background-color: #ececec;
        text-align: left;
    }
    .left-mid label{
        padding: 20px;
    }
    .input-gap{
        margin-top: 20px;
        
    }
    button{
        width: 160px;
        height: 32px;
        font-weight: 400;
        color: white;
        background-color: #eb4f36;
        border-radius: 2px;
    }
    .results{
        margin-top: 50px;
        text-align: left;
        padding-left: 65px;
        color: #4d4d4d;
        background-color: #ffffff;
    }
    .right{
        width: 100%;
        
        /* border: 1px solid black; */
        padding-top: 20px;
    }
    .right-flex{
        display: flex;
    }
    .bot{
        width: 210px;
        height: 180px;
    }
    .t1{
        display: flex;
        padding-top: 32px;
    }
    .t2 p{
    
        margin-top: 20px;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        padding: 0 20px 0 20px;
        color: #4d4d4d;
        background-color: #ffffff;
    }
    .t2 img{
        width: 20px;
        
    }
    .t2 span{
        display: inline;
        
    }
     select{
        margin-left: 20px;
    }
`