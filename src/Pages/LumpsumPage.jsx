import React, { useState } from 'react';
import styled from 'styled-components';

const LumpsumPage = () => {
  const [taxYear, setTaxYear] = useState('2024');
  const [withdrawalType, setWithdrawalType] = useState('before');
  const [lumpSumAmount, setLumpSumAmount] = useState(200000);
  const [taxOnLumpSum, setTaxOnLumpSum] = useState(0);
  const [amountYouKeep, setAmountYouKeep] = useState(0);

  const calculateTaxOnLumpSum = () => {
    let taxRate = 0;
    let taxThreshold = 0;

    // Set tax rate and threshold based on withdrawal type
    if (withdrawalType === 'before') {
      taxRate = 0.18;
      taxThreshold = 27500;
    } else if (withdrawalType === 'after') {
      taxRate = 0.27;
      taxThreshold = 500000;
    }

    // Calculate tax on lump sum
    const taxableAmount = Math.max(lumpSumAmount - taxThreshold, 0);
    const tax = taxableAmount * taxRate;
    setTaxOnLumpSum(tax);

    // Calculate amount you keep
    const amountKept = lumpSumAmount - tax;
    setAmountYouKeep(amountKept);
  };

  const handleLumpSumAmountChange = (event) => {
    setLumpSumAmount(event.target.value);
  };

  const handleWithdrawalTypeChange = (event) => {
    setWithdrawalType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTaxOnLumpSum();
  };

  return (
    <DIV>
      <div className='lumppage'>
        <h1>SARS Retirement Fund Lump Sum Tax Calculator</h1>
        <h2>Work out Tax Payable on Pension, Provident and Retirement Annuity fund lump sums</h2>
      </div>
      <div className='duo' style={{display:"flex",width:"100%", gap:"150px" }}>
        <div className='left-right' style={{width:"80%"}}>
          <div className='left-heading'>
            <p>RETIREMENT FUND LUMP SUMS</p>
          </div>
          <div className='left-mid'>
            <div className='input-gap' style={{textAlign:"left",paddingLeft:"20px"}}>
              <p>Use our fund benefit calculator to work out the tax payable on lump sum payments from Pension funds, Provident funds and/or Retirement Annuity funds.</p>
            </div>
            <div className='input-gap' style={{textAlign:"left",paddingLeft:"20px"}}>
              <p>We have the SARS tax rates tables built in - no need to look them up!</p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
              <label>
                Tax year:
              <select className='input-gap' value={taxYear} onChange={(e) => setTaxYear(e.target.value)}>
              <option value="2024">2024 (Mar 2023 - Feb 2024)</option>
              </select>
              </label>
              <br />
              <label>
                When are you withdrawing?
              <select className='input-gap' value={withdrawalType} onChange={handleWithdrawalTypeChange}>
              <option value="before">BEFORE retirement, retrenchment or death</option>
              <option value="after">AFTER retirement, retrenchment or death</option>
              </select>
              </label>
              <br />
              <label>
               Amount of lump sum:
              <input className='input-gap' type="number" value={lumpSumAmount} onChange={handleLumpSumAmountChange} />
              </label>
              <br />
              <input className='input-gap'style={{ position: 'absolute',right: '200px',color:"white",backgroundColor:"#eb4f36",width:"160px",height:"32px",borderRadius:"5px"}} type="submit" value="Calculate" />
              </form>
            </div>

          </div>
        </div>
      </div>
      <div className='results'>
        {taxOnLumpSum > 0 && (
          <div>
            <p style={{fontSize:"26px"}}>Amount you keep: </p>
            <p style={{fontSize:"40px",fontWeight:"bold"}}>R{amountYouKeep.toFixed(2)}</p>
            <p><strong>This is how you work it out:</strong></p>
            <p>Lump sum amount: R{lumpSumAmount}</p>
            <p>Less: Tax on lump sum: R{taxOnLumpSum.toFixed(2)} (18% of lump sum exceeding R27,500)</p>
            <p>Equals: R{amountYouKeep.toFixed(2)}</p>
            
          </div>
      )}
      </div>
      
    </DIV>
  );
};

export default LumpsumPage;
const DIV = styled.div`
  .lumppage {
    width: 100%;
    padding-top: 90px;
  }
  .lumppage h1{
        font-size: 26px;
        font-weight: 600;
        color: #4d4d4d;
        background-color: #ffffff;
        text-align: left;
        padding-left: 65px;
  }
  .lumppage h2{
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