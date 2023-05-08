import React, { useState } from 'react';
import styled from 'styled-components';

const AidkidPage = () => {
  const [taxYear, setTaxYear] = useState(2024);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [medicalAidExpenses, setMedicalAidExpenses] = useState(0);
  const [numberOfDependents, setNumberOfDependents] = useState(0);
  const [qualifyingMedicalExpenses, setQualifyingMedicalExpenses] = useState(0);
  const [medicalCredits, setMedicalCredits] = useState([]);
  const [medicalSchemeCredits, setMedicalSchemeCredits] = useState(0);
  const [totalMedicalCredits, setTotalMedicalCredits] = useState(0);
  const [totalTaxCredit, setTotalTaxCredit] = useState(0);

  const calculateMedicalCredits = () => {
    // Medical credits
    const creditsPerMonth = 364;
    const medicalCreditsArr = Array.from({ length: 12 }, () => creditsPerMonth);
    setMedicalCredits(medicalCreditsArr);

    // Medical scheme credits
    const schemeCreditsPerMonth = 364;
    const schemeCredits = schemeCreditsPerMonth * 12;
    setMedicalSchemeCredits(schemeCredits);

    // Qualifying medical expenses
    const expenses = qualifyingMedicalExpenses;
    const expensesLimit = 0.075 * taxableIncome;
    const qualifyingExpenses = Math.min(expenses, expensesLimit);

    setQualifyingMedicalExpenses(qualifyingExpenses);

    // Total medical credits
    const totalCredits = medicalCreditsArr.reduce((a, b) => a + b, 0) + schemeCredits + qualifyingExpenses;
    setTotalMedicalCredits(totalCredits);

    // Total tax credit
    const taxCreditLimit = 0.25 * taxableIncome;
    const totalTaxCreditVal = Math.min(totalCredits, taxCreditLimit);
    setTotalTaxCredit(totalTaxCreditVal);
  };

  return (
    <DIV>
      <div className='aidkid'>
        <h1>Medical Aid Tax Credits Calculator</h1>
        <h2>Work out qualifying expenditure and the total taxable credit amount for medical expenses</h2>
      </div>
      <div className='duo' style={{display:"flex",width:"100%", gap:"150px" }}>
        <div className='left-right' style={{width:"80%"}}>
          <div className='left-heading'>
            <p>MEDICAL AID TAX CREDITS</p>
          </div>
          <div className='left-mid'>
            <div>
                <label htmlFor="tax-year">Which tax year would you like to calculate?</label>
                <select className='input-gap' id="tax-year" value={taxYear} onChange={(e) => setTaxYear(Number(e.target.value))}>
                <option value={2024}>2024 (Mar 2023 - Feb 2024)</option>
                {/* Add more options for other tax years */}
                </select>
            </div>
            <div>
                <label htmlFor="taxable-income">What is your Taxable Income? R</label>
                <input
                  className='input-gap'
                  type="number"
                  id="taxable-income"
                  value={taxableIncome}
                  onChange={(e) => setTaxableIncome(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="medical-aid-expenses">How much did you spend on Medical Aid? R</label>
                <input
                  className='input-gap'
                  type="number"
                  id="medical-aid-expenses"
                  value={medicalAidExpenses}
                  onChange={(e) => setMedicalAidExpenses(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="dependents">How many dependents are on your Medical Aid certificate? (including you)</label>
                <input
                  className='input-gap'
                  type="number"
                  id="dependents"
                  value={numberOfDependents}
                  onChange={(e) => setNumberOfDependents(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="qualifying-medical-expenses">
                  How much did you spend on qualifying Medical Expenses that was

                </label>
                <input
                  className='input-gap'
                  type="number"
                  id="qualifying-medical-expenses"
                  value={qualifyingMedicalExpenses}
                  onChange={(e) => setQualifyingMedicalExpenses(Number(e.target.value))}
                />
            </div>
            
          </div>
          <div style={{ position: 'relative' }}>
              <button style={{ position: 'absolute',right: '0', marginTop:"28px"}} onClick={calculateMedicalCredits}>Calculate</button>
            </div>
        </div>
      </div>

      
      <div className='results'>
      <div>
        <p> <strong>Total medical credit:</strong>  </p>
        <p style={{fontSize:"30px",fontWeight:"600"}}>R{totalTaxCredit.toFixed(2)}*</p>
        <p>* limited to tax already paid to SARS</p>
      </div>

      <div>
        <p><strong>This is how you work it out:</strong></p>
        
        <h3>Medical credits</h3>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {medicalCredits.map((credit, index) => (
              <tr key={index}>
                <td>{new Date(taxYear, index).toLocaleString('default', { month: 'short' })}</td>
                <td>R{credit.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Medical scheme credits (section 6A): R{medicalSchemeCredits.toFixed(2)}</h3>
      </div>

      <div>
        <h3>Qualifying medical expenditure (section 6B): R{qualifyingMedicalExpenses.toFixed(2)}</h3>
      </div>
      </div>

      
    </DIV>
  );
};

export default AidkidPage;
const DIV = styled.div`
  .aidkid{
    width: 100%;
    padding-top: 90px;
  }
  .aidkid h1{
    font-size: 26px;
    font-weight: 600;
    color: #4d4d4d;
    background-color: #ffffff;
    text-align: left;
    padding-left: 65px;
  }
  .aidkid h2{
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