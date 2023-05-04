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
                    
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Salary Tax" />
                        <p>Salary Tax</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-refund.png" alt="Tax Refund" />
                        <p>Tax Refund</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-lump-sum.png" alt="Retairment Lump Sum" />
                        <p>Retairment Lump Sum</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-travel.png" alt="Travel Deduction" />
                        <p>Travel Deduction</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Capital Gains Tax" />
                        <p>Capital Gains Tax</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-health.png" alt="Medical Aid Credits" />
                        <p>Medical Aid Credits</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-wear-and-tear.png" alt="Water & Tear" />
                        <p>Water & Tear</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-retirement.png" alt="Retairment Saving" />
                        <p>Retairment Saving</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-manufacturing-wear-and-tear.png" alt="Taxable Local interest" />
                        <p>Taxable Local interest</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Foreign Dividends" />
                        <p>Foreign Dividends</p>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Home Office Calculator" />
                        <p>Home Office Calculator</p>
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