import React from 'react'
import styled from 'styled-components'

export const CalculatorPage = () => {
  return (
    <DIV>
        <div className='main'>
            <div className='heading'>
                <h1>Tax Calculators</h1>
                <h2>Calculate everything you need to know about your tax and how tax affects you</h2>
            </div>
            <div className='left-right'>
                <div >
                <h2>Calculators for Individuals</h2>
                    <div className='left'>
                    
                    <div > 
                        <a href="/salarytaxpage">
                        <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Salary Tax" />
                        <p>Salary Tax</p>
                        <div className='content'>
                            <span>How to calculate how much PAYE and UIF will be deducted from your salary in order to work out your take home pay</span>
                        </div>
                        </a>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-refund.png" alt="Tax Refund" />
                        <p>Tax Refund</p>
                        <div className='content'>
                            <span>How to calculate what your Tax Refund will be when you submit your tax return to SARS</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-lump-sum.png" alt="Retairment Lump Sum" />
                        <p>Retairment Lump Sum</p>
                        <div className='content'>
                            <span>How to calculate the tax payable on Pension, Provident or Retirement Annuity Fund lump sums due to voluntary withdrawal</span>
                        </div>
                    </div>
                    <div>
                        <a href="/traveldeductionpage">
                        <img src="https://www.taxtim.com/za/images/calc-travel.png" alt="Travel Deduction" />
                        <p>Travel Deduction</p>
                        <div className='content'>
                            <span>How to maximise your travel deduction by comparing the different methods you can use</span>
                        </div>
                        </a>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Capital Gains Tax" />
                        <p>Capital Gains Tax</p>
                        <div className='content'>
                            <span>How to calculate Capital Gains Tax on the disposal of your asset</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-health.png" alt="Medical Aid Credits" />
                        <p>Medical Aid Credits</p>
                        <div className='content'>
                            <span>How to calculate your medical tax credit/rebate</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-wear-and-tear.png" alt="Water & Tear" />
                        <p>Water & Tear</p>
                        <div className='content'>
                            <span>How to calculate the Section 11(e) Depreciation / Wear and Tear deduction on the assets you use for work</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-retirement.png" alt="Retairment Saving" />
                        <p>Retirement Saving</p>
                        <div className='content'>
                            <span>Retairment saving calculator</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-manufacturing-wear-and-tear.png" alt="Taxable Local interest" />
                        <p>Taxable Local interest</p>
                        <div className='content'>
                            <span>Taxable local interest calculator</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Foreign Dividends" />
                        <p>Foreign Dividends</p>
                        <div className='content'>
                            <span>How to calculate the amount of foreign dividends on taxable on your income tax assessment</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Home Office Calculator" />
                        <p>Home Office Calculator</p>
                        <div className='content'>
                            <span>How to claim your home office expenses when working from home</span>
                        </div>
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
        </div>
    </DIV>
  )
}
const DIV = styled.div`
    .main{
        width: 100%;
        padding-left: 44px;
        padding-top: 100px;
        font-family: Arial, Helvetica, sans-serif;
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
        margin-top: 5px;
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
        
    }
    .left img{
        position: absolute;
    }
    .left div{
        width: 195px;
        height: 195px;
        position: relative;
        /* border: 1px solid gold; */
        z-index: 1;
        
        background-color: #85c4cc;

    }
    .right{
        width: 35%;
        
        /* border: 1px solid black; */
        padding-top: 22px;
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