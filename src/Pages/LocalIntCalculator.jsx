import React, { useState } from "react";
import styled from "styled-components";

const LocalIntCalculator = () => {
    const [totalInterest, setTotalInterest] = useState(0);
    const [age, setAge] = useState("under65");
    const [exemption, setExemption] = useState(0);
    const [taxableInterest, setTaxableInterest] = useState(0);
  
    const handleTotalInterestChange = (event) => {
      setTotalInterest(Number(event.target.value));
    };
  
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleCalculateClick = () => {
      const exemptionAmount = age === "under65" ? 23800 : 34500;
      setExemption(exemptionAmount);
      setTaxableInterest(totalInterest - exemptionAmount);
    };
  
    return (
      <DIV>
        <div className="localcal">
          <h1>Taxable Local Interest Calculator</h1>
          <h2>Work out the amount of local interest which is taxable on your income tax assessment</h2>
        </div>
        <div className='duo' style={{display:"flex",width:"100%", gap:"150px" }}>
          <div className='left-right' style={{width:"80%"}}>
            <div className='left-heading'>
              <p>Taxable Local Interest</p>
            </div>
            <div className='left-mid'>
              <div>
                  <label htmlFor="totalInterest">Total local interest received for the tax year?</label>
                  <input className='input-gap' type="number" id="totalInterest" name="totalInterest" value={totalInterest} onChange={handleTotalInterestChange} />
              </div>
              <div>
                  <label htmlFor="age">You are:</label>
                  <select className='input-gap' id="age" name="age" value={age} onChange={handleAgeChange}>
                  <option value="under65">Under 65 years old</option>
                  <option value="over65">65 years or older</option>
                  </select>
              </div>
              <div className='input-gap' style={{paddingLeft:"20px",backgroundColor:"#575a05",color:"#b7b1a8"}}>
                  <p>NOTE: You need to declare your total local interest in the Investment Income section of your tax return. This calculator is to assist you on calculating the amount of interest that will reflect as taxable on your income tax assessment.</p>
                  <p>Individual taxpayers enjoy an annual exemption on all South African interest income they earn, set by SARS every year. This interest exemption has remained unchanged for a number of years and for the 2023 tax year is set at R23 800 for individuals under 65 years old, and R34 500 for individuals 65 years and older. South African retail savings Bonds and any interest from the money in your Medical Savings Account (of your medical aid) can also be taxed.</p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <button style={{ position: 'absolute',right: '0', }} onClick={handleCalculateClick}>Calculate</button>
            </div>
          </div>
        </div>
        <div className="results">
          <p><strong>Amount you keep: R{taxableInterest}</strong> </p>
          <p>This is how you work it out:</p>
          <p>Interest amount: R{totalInterest}</p>
          <p>Less: Exemption: R{exemption}</p>
          <p>Equals: R{taxableInterest}</p>
        </div>
        

      </DIV>
    );
  };

export default LocalIntCalculator;
const DIV = styled.div`
  .localcal{
    width: 100%;
    padding-top: 90px;
  }
  .localcal h1{
    font-size: 26px;
    font-weight: 600;
    color: #4d4d4d;
    background-color: #ffffff;
    text-align: left;
    padding-left: 65px;
  }
  .localcal h2{
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
    select,input{
        margin-left: 20px;
        padding-left: 5px;
    }
`
