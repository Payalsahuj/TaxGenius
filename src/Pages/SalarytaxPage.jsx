import React, { useState } from 'react';
import styled from 'styled-components';

export const SalarytaxPage = () => {
  const [taxYear, setTaxYear] = useState('2024');
  const [salary, setSalary] = useState(0);
  const [salaryFrequency, setSalaryFrequency] = useState('Monthly');
  const [age, setAge] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [paye, setPaye] = useState(0);
  const [uif, setUif] = useState(0);
  const [takeHomePay, setTakeHomePay] = useState(0);

  const calculateTax = () => {
    const annualSalary = salary * getMultiplier(salaryFrequency); // Adjust salary based on frequency

    const deductions = getDeductions(); // Calculate deductions

    const taxableIncome = annualSalary - deductions; // Calculate taxable income
    setTaxableIncome(taxableIncome);

    const taxRate = getTaxRate(age, taxableIncome); // Calculate tax rate
    setTaxRate(taxRate);

    const paye = calculatePAYE(taxableIncome, taxRate); // Calculate PAYE
    setPaye(paye);

    const uif = calculateUIF(annualSalary); // Calculate UIF
    setUif(uif);

    const takeHomePay = annualSalary - paye - uif; // Calculate take-home pay
    setTakeHomePay(takeHomePay);
  };

  const getMultiplier = (frequency) => {
    switch (frequency) {
      case 'Monthly':
        return 1;
      case 'Fortnightly':
        return 26 / 12;
      case 'Weekly':
        return 52 / 12;
      case 'Yearly':
        return 1 / 12;  
      default:
        return 1;
    }
  };

  const getDeductions = () => {
    // Calculate deductions
    const pensionProvidentRAF = Math.min(0.275 * salary, 350000); // Pension / Provident / RAF limited to 27.5% of salary, limited to R350k
    const travelAllowance = 0.2 * salary; // 20% of travel allowance
  
    // Return the total deductions
    return pensionProvidentRAF + travelAllowance;
  };
  
  const getTaxRate = (age, taxableIncome) => {
    // Placeholder logic for tax rate calculation based on age and taxable income
    // You can implement your own logic or use predefined tax rate brackets
    let taxRate = 0;

  // Logic to determine the tax rate based on age and taxable income
  if (age >= 18 && age <= 65) {
    if (taxableIncome <= 205900) {
      taxRate = 18;
    } else if (taxableIncome <= 321600) {
      taxRate = 26;
    } else if (taxableIncome <= 445100) {
      taxRate = 31;
    } else if (taxableIncome <= 584200) {
      taxRate = 36;
    } else if (taxableIncome <= 744800) {
      taxRate = 39;
    } else if (taxableIncome <= 1577300) {
      taxRate = 41;
    } else {
      taxRate = 45;
    }
  } else if (age >= 65 && age <= 75) {
    // Logic for tax rates for age between 65 and 75
    // Update the taxRate based on the age group
  } else if (age > 75) {
    // Logic for tax rates for age above 75
    // Update the taxRate based on the age group
  }

  return taxRate;
};
  
  const calculatePAYE = (taxableIncome, taxRate) => {
    // Placeholder logic for PAYE calculation
    // You can use predefined tax brackets and formulas to calculate PAYE based on taxable income and tax rate
    const paye = taxableIncome * (taxRate / 100)
    return paye;
  };
  
  const calculateUIF = (annualSalary) => {
    // UIF calculation
    const uifRate = 0.01; // UIF rate of 1%
    const uifMax = 177.12; // Maximum UIF contribution
  
    // Calculate UIF
    const uif = Math.min(annualSalary * uifRate, uifMax);
  
    return uif;
  };

  return (
    <DIV >
        <div className="tax-calculator">
            <h1>SARS Income Tax Calculator for 2024</h1>
            <h2>Work out salary tax (PAYE), UIF, taxable income and what tax rates you will pay</h2>
            
            <div className="input-section">
                <div className='duo' style={{display:"flex",width:"100%", gap:"150px" }}>
                <div className='left-right' style={{width:"80%"}}>
                    <div className='left-heading'>
                        <p>INCOME</p>
                    </div>
                
                <div className='left-mid'>
                    <label htmlFor="taxYear">Which tax year would you like to calculate?</label>
                    <select
                        id="taxYear"
                        value={taxYear}
                        onChange={(e) => setTaxYear(e.target.value)}
                    >
                    <option  value="2024">2024 (Mar 2023 - Feb 2024)</option>
                    <option value="2023">2023 (Mar 2022 - Feb 2023)</option>
                    <option value="2022">2022 (Mar 2021 - Feb 2022)</option>
                    <option value="2021">2021 (Mar 2020 - Feb 2021)</option>
                    {/* Add options for other tax years */}
                    </select>
                <div>
                    <label htmlFor="salary">What is your total salary before deductions?</label>
                    <input
                        className='input-gap'
                        type="number"
                        id="salary"
                        value={salary}
                        onChange={(e) => setSalary(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="salaryFrequency">How often do you receive this salary?</label>
                    <select
                    className='input-gap'
                        id="salaryFrequency"
                        value={salaryFrequency}
                        onChange={(e) => setSalaryFrequency(e.target.value)}
                        >
                        <option value="Monthly">Monthly</option>
                        <option value="Fortnightly">Fortnightly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="yearly">yearly</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age">Your age?</label>
                    <input
                        className='input-gap'
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value))}
                    />
                </div>
                    <div style={{ position: 'relative' }}>
                     <button style={{ position: 'absolute',right: '0', marginTop:"28px"}} onClick={calculateTax}>CALCULATE!</button>
                    </div>
                </div>
                
                </div>
                <div>
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
                </div>
                

                
            </div>
            
            
            
                
            <div className="results">
            <p style={{fontSize:"24px",fontWeight:"600"}}>Take Home Pay:</p>
            <p style={{fontSize:"45px",textDecoration:"none rgba(77,77,77)"}}>{takeHomePay}</p>
            <p>In the previous year this would have been <strong>{takeHomePay-241}</strong> (now <strong>R241</strong> more!).</p>
            <p><strong>This is how you work it out:</strong></p>
            <p>Taxable income = Annual gross salary - Pension / Provident / RAF (limited to 27.5% of salary, limited to R350k) - 20% of travel allowance</p>
            <p>(You are taxed on 80% of the travel allowance in your Gross salary, so we subtract 20% for the calculation of Taxable income.)</p>
            <p>Taxable income = R {salary*12} - R 0.00 - R 0.00</p>
            <p><strong>Taxable income for the year: {salary*12}</strong></p>
            <p><strong>Tax you will pay / PAYE</strong> (Pay As You Earn) for your age group and income bracket: R {paye} (as per PAYE tables provided by SARS)</p>
            <p>(UIF / Unemployment Insurance Fund is levied at 1% of your gross income, at most R {uif})</p>
            <p>Take Home Pay = R {salary} - R {paye} - R {uif}</p>
            <p><strong>Take home pay:</strong> R {takeHomePay} per month </p>
                {/* <h3>Results</h3>
                <p>Taxable Income: {taxableIncome}</p>
                <p>Tax Rate: {taxRate}%</p>
                <p>PAYE: {paye}</p>
                <p>UIF: {uif}</p>
                <p> {takeHomePay}</p> */}
            </div>
        </div>
      
    </DIV>
  );
};

export default SalarytaxPage;

const DIV = styled.div`
    .tax-calculator{
        width: 100%;
        padding-top: 90px;
    }
    .tax-calculator h1{
        font-size: 26px;
        font-weight: 600;
        color: #4d4d4d;
        background-color: #ffffff;
        text-align: left;
        padding-left: 65px;
    }
    .tax-calculator h2{
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
    .content{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: rgba(0,0,0,0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        transition: 0.0s;
        :hover{
            opacity: 1;
        }
    }
    .content span{
        
        color: white;
        font-size: 14px;
        margin-bottom: 65px;
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
`