import React, { useState } from 'react';
import styled from 'styled-components';

export const Foreigncal=()=> {
    const [totalDividends, setTotalDividends] = useState('');
    const [taxableDividends, setTaxableDividends] = useState('');
  
    const handleTotalDividendsChange = (event) => {
      setTotalDividends(Number(event.target.value));
    };
  
    const handleCalculateClick = () => {
      const taxRate = 0.444;
      setTaxableDividends((totalDividends * taxRate).toFixed(2));
    };
  
    return (
      <DIV>
        <div className='fclass'>
          <h1>Taxable Foreign Dividends Calculator</h1>
          <h2>Work out the amount of foreign dividends which are taxable on your income tax assessment</h2>
        </div>
        <div className='duo' style={{display:"flex",width:"100%", gap:"150px" }}>
          <div className='left-right' style={{width:"80%"}}>
            <div className='left-heading'>
              <p>TAXABLE FOREIGN DIVIDENDS CALCULATOR</p>
            </div>
            <div className='left-mid'>
              <div>
                  <label htmlFor="totalDividends">Total foreign dividends received for the year:</label>
                  <input type="number" id="totalDividends" name="totalDividends" value={totalDividends} onChange={handleTotalDividendsChange} />
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <button style={{ position: 'absolute',right: '0', }} onClick={handleCalculateClick}>Calculate</button>
            </div>
          </div>
        </div>
        <div className='results'>
          {taxableDividends && <p><strong>Taxable foreign dividends: {taxableDividends}</strong></p>}
        </div>
        
      </DIV>
    );
  }

export default Foreigncal;
const DIV = styled.div`
  .fclass{
    width: 100%;
    padding-top: 90px;
  }
  .fclass h1{
    font-size: 26px;
    font-weight: 600;
    color: #4d4d4d;
    background-color: #ffffff;
    text-align: left;
    padding-left: 65px;
  }
  .fclass h2{
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