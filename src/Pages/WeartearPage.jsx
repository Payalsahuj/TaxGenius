
import React, { useState } from 'react';
import styled from 'styled-components';
export const WeartearPage=()=> {
  const [baseCost, setBaseCost] = useState(0);
  const [purchaseDate, setPurchaseDate] = useState('');
  const [taxYear, setTaxYear] = useState(0);
  const [businessUsage, setBusinessUsage] = useState(0);
  const [personalUsage, setPersonalUsage] = useState(0);
  const [assetType, setAssetType] = useState('');
  const [yearsToWriteOff, setYearsToWriteOff] = useState(0);
  const [deductibleAmount, setDeductibleAmount] = useState(0);

  const calculateDeductibleAmount = () => {
    const totalUsage = businessUsage + personalUsage;
    const businessRatio = businessUsage / totalUsage;
    const personalRatio = personalUsage / totalUsage;
    const now = new Date();
    const purchaseYear = new Date(purchaseDate).getFullYear();
    const yearsSincePurchase = now.getFullYear() - purchaseYear;
    const remainingYearsToWriteOff = yearsToWriteOff - yearsSincePurchase;

    if (remainingYearsToWriteOff <= 0) {
      setDeductibleAmount(0);
      return;
    }

    const annualDepreciation = baseCost / yearsToWriteOff;
    const businessDepreciation = annualDepreciation * businessRatio;
    const personalDepreciation = annualDepreciation * personalRatio;
    const remainingDepreciation = annualDepreciation * remainingYearsToWriteOff;
    const deductibleDepreciation = remainingDepreciation * businessRatio;

    setDeductibleAmount(deductibleDepreciation.toFixed(2));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateDeductibleAmount();
  };

  return (
    <DIV>
      <div className='weartear'>
        <h1>Wear and Tear Calculator</h1>
        <h2>Work out Wear and Tear on Depreciable Assets</h2>
      </div>
      <div className='duo' style={{display:"flex",width:"100%", gap:"150px" }}>
        <div className='left-right' style={{width:"80%"}}>
          <div className='left-heading'>
            <p>WEAR AND TEAR CALCULATOR FOR INDIVIDUALS</p>
          </div>
          <div className='left-mid'>
            <div>
            <form onSubmit={handleSubmit}>
        <label>
          Base cost of the asset:
          <input className='input-gap' type="number" value={baseCost} onChange={e => setBaseCost(e.target.value)} />
        </label>
        <br />
        <label>
          Date you got it:
          <input className='input-gap' type="text" value={purchaseDate} onChange={e => setPurchaseDate(e.target.value)} />
        </label>
        <br />
        <label>
          Tax year you are filing for:
          <input className='input-gap' type="number" value={taxYear} onChange={e => setTaxYear(e.target.value)} />
        </label>
        <br />
        <label>
          Usage split:
          
          Business: <input className='input-gap' type="number" value={businessUsage} onChange={e => setBusinessUsage(e.target.value)} />%
          
          Personal: <input className='input-gap' type="number" value={personalUsage} onChange={e => setPersonalUsage(e.target.value)} />%
        </label>
        <br />
        <label>
          Type of asset:
          <input className='input-gap' type="text" value={assetType} onChange={e => setAssetType(e.target.value)} />
        </label>
        <br />
        <label>
          Years to write off:
          <input className='input-gap' type="number" value={yearsToWriteOff} onChange={e => setYearsToWriteOff(e.target.value)} />
        </label>
        <br />
        <button style={{ marginTop:"20px",position: 'absolute',right: '200px',color:"white",backgroundColor:"#eb4f36",width:"160px",height:"32px",borderRadius:"5px"}} type="submit">Calculate</button>
      </form>
            </div>
          </div>
        </div>
      </div>
      <div className='results'>
        <p>Base cost: {baseCost}</p>
        <p>Purchased: {purchaseDate}</p>
        <p>Current tax year: {taxYear}</p>
        <p>Split: {businessUsage}% business, {personalUsage}% personal</p>
        <p>Years to write off: {yearsToWriteOff}</p>
        <p><strong>Deductable amount: R{deductibleAmount} in {taxYear} tax year</strong></p>
      </div>
      
      
    </DIV>
  );
}


export default WeartearPage;
const DIV = styled.div`
  .weartear{
    width: 100%;
    padding-top: 90px;
  }
  .weartear h1{
    font-size: 26px;
    font-weight: 600;
    color: #4d4d4d;
    background-color: #ffffff;
    text-align: left;
    padding-left: 65px;
  }
  .weartear h2{
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