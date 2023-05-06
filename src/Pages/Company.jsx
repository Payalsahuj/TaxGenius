import React from 'react'

import styled from 'styled-components'

export const Company = () => {
  return (
    <DIV>
        <div className='main'>
            <div className='heading'>
                <h1>Tax Calculators</h1>
                <h2>Calculate everything you need to know about your tax and how tax affects you</h2>
            </div>
            <div className='left-right'>
                <div >
                <h2>Calculators for Companies</h2>
                    <div className='left'>
                    
                    <div>
                        <img src="https://media.taxtim.com/images/calc-biz-tax.png" alt="Salary Tax" />
                        <p>Incom Tax</p>
                    </div>
                    <div>
                        <img src="https://media.taxtim.com/images/calc-manufacturing-wear-and-tear.png" alt="Tax Refund" />
                        <p>s12c Wear & Tear</p>
                    </div>
                    <div>
                        <img src="https://media.taxtim.com/images/calc-travel.png" alt="Retairment Lump Sum" />
                        <p>SBC Wear & Tear</p>
                    </div>
                    <div>
                        <img src="https://media.taxtim.com/images/calc-sme-wear-and-tear.png" alt="Travel Deduction" />
                        <p>Wear & Tear</p>
                    </div>
                    <div>
                        <img src="https://media.taxtim.com/images/calc-lease-premium.png" alt="Capital Gains Tax" />
                        <p>s11(f) Lease Premium</p>
                    </div>
                    <div>
                        <img src="https://media.taxtim.com/images/calc-leasehold-improvements.png" alt="Medical Aid Credits" />
                        <p>Leashold Improvements</p>
                    </div>
                    
                    </div>
                    <div className='right'>
                        <img src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg" alt="error"/>
                    </div>
                           
                </div>
                
            </div>
        </div>
    </DIV>
  )
}



const DIV = styled.div`
    .main{
        width: 100%;
        padding-left: 44px;
        padding-top: 100px;
    }
    .heading{
        text-align: left;
        padding: 0 20px 0 20px;
        letter-spacing: -1px;
        font-size: 24px;
        font-weight: 600;
        color: #4d4d4d;
        background-color: #ffffff;
    }
    .left-right{
        display: flex;
        width: 100%;
        height: 100vh;
        gap: 100px;
       
    }
    .left-right h2{
        text-align: left;
        padding: 0 20px 0 20px;
        letter-spacing: -1px;
        font-size: 24px;
        font-weight: 500;
        color: #4d4d4d;
        background-color: #ffffff;
    }
    .left{
        width: 100%;
        /* border: 1px solid red; */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-top: 0px;
        padding-left: 20px;
        gap: 5px;
        cursor: pointer;
        /* position: absolute; */
        margin-top:15px;
        /* margin-right:2px; */
    }
    .left p{
        
        /* border-top: 1px solid black; */
        position: absolute;
        text-align: center;
        /* justify-items: center;
        align-items: center; */
        z-index: 10;
        display: inline-block;
        
        top: 80%;
        right: 30px;
        /* margin-right: 100px;
        
        left: 0px;
        right: 0px;
        bottom: 0px; */
        font-size: 16px;
        color: #ffffff;
        font-weight:500;
        
    }
    .left img{
        position: sticky;
    }
    .left div{
        width: 195px;
        height: 195px;
        position: relative;
        /* border: 1px solid gold; */
        z-index: 1;
        
        background-color: #E1BB23;

    }
   
    
       
`

