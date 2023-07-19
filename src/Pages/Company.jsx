import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from "../Images/TaxGenius_+_color-removebg-preview.png"

import styled from 'styled-components'
import { Button } from '@chakra-ui/react'

export const Company = () => {
    const navigate = useNavigate()
    return (
        <DIV>
            <div className='main'>
                <div className='head'>
                    <h1>Tax Calculators</h1>
                    <h2>Calculate everything you need to know about your tax and how tax affects you</h2>
                </div>
                <div className='left-right'>
                    <h2>Calculators for Companies</h2>
                    <div className='both'>
                        <div className='left'>

                            <div onClick={() => navigate("/incomeTax")}>
                                <img src="https://media.taxtim.com/images/calc-biz-tax.png" alt="Salary Tax" />
                                <p>Incom Tax</p>
                                <div className='content'>
                                    <span>How to calculate the tax for a Small Business Corporation</span>
                                </div>
                            </div>
                            <div>
                                <img src="https://media.taxtim.com/images/calc-manufacturing-wear-and-tear.png" alt="Tax Refund" />
                                <p>s12c Wear & Tear</p>
                                <div className='content'>
                                    <span>How to calculate the Section 12C Depreciation/Wear and Tear allowance on plant and machinery used for manufacure</span>
                                </div>
                            </div>
                            <div onClick={() => navigate("/wear-tear")} >
                                <img src="https://media.taxtim.com/images/calc-travel.png" alt="Retairment Lump Sum" />
                                <p>SBC Wear & Tear</p>
                                <div className='content'>
                                    <span>How to calculate the accelarated 512E Depreciation/Wear and Tear allowance on assests in a Small Bussiness Corporation(SBC</span>
                                </div>
                            </div>
                            <div >
                                <img src="https://media.taxtim.com/images/calc-sme-wear-and-tear.png" alt="Travel Deduction" />
                                <p>Wear & Tear</p>
                                <div className='content'>
                                    <span>How to calculate the Section 11(e) Depreciation/Wear and Tear allowance on business assets</span>
                                </div>
                            </div>
                            <div onClick={() => navigate("/lease-premium")}>
                                <img src="https://media.taxtim.com/images/calc-lease-premium.png" alt="Capital Gains Tax" />
                                <p>s11(f) Lease Premium</p>
                                <div className='content'>
                                    <span>How to claculate the Section 11(c)tax deduction for a lease Premium</span>
                                </div>
                            </div>
                            <div>
                                <img src="https://media.taxtim.com/images/calc-leasehold-improvements.png" alt="Medical Aid Credits" />
                                <p>Leashold Improvements</p>
                                <div className='content'>
                                    <span>How to calculate the Section 11(g) Leasehold Improvements allowance for renovation/Improvements done to a building that the business leases</span>
                                </div>
                            </div>

                        </div>
                        <div className='right' style={{ display: "flex", flexDirection: "column", backgroundColor: "#DAEFF4" ,paddingTop:"20px"}}>
                            {/* <h2>hello</h2> */}
                            <img src={image} alt="error" width={"200px"} height={"200px"} style={{ display: "block", margin: "auto" }} />
                            <h3>-Easy Tax Filling-</h3>
                            <h1>Switch to TaxGenius and <br /> WIN R10,000</h1>
                            <Button colorScheme='facebook' margin={"20px 180px"} >
                               Get Started
                            </Button>

                            <img src="https://media.taxtim.com/images/media-za/reclining-man.png" alt="error" width={"350px"} height={"500px"} style={{ margin: "45px 5px 5px 15px" }} />
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
    .head{
        text-align: left;
        padding: 0 20px 0 20px;
        letter-spacing: -1px;
        font-size: 24px;
        font-weight: 600;
        color: #4d4d4d;
        background-color: #ffffff;
    }
    .left-right{
      
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
        width: 40%;
        height:400px;
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
    .left div:nth-child(6) p{
       /* border: 1px solid black; */
        margin-top:-12px;
    }
    .right h3{
        font-size:15px;
        font-weight:500;
        margin-top:10px;
        margin-bottom:20px;
    }
    .right h1{
        font-size:20px;
        font-weight:500;
        color:#54D386;
        margin-bottom:10px;
    }
    .left img{
        /* border: 1px solid black; */
        position: sticky;
    }
    .left div{
        width: 195px;
        height: 195px;
        position: relative;
        /* border: 1px solid black; */
        z-index: 1;
        
        background-color: #E1BB23;

    }
    .both{
        display:flex;
        gap:130px;
        /* border: 1px solid black; */
        /* height:70%; */
    }
   .right{
    width:40%;
    height:5%;
    /* border: 1px solid black; */
    padding:0px 20px;
    margin:20px 0px;
    border-radius:40px;
   }
   .content{
    /* border:1px solid red; */
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin-top:-195px;
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
        /* border:1px solid red; */
        color: white;
        font-size: 14px;
        margin-bottom: 65px;
    }
    

    
  @media (max-width: 768px) {
    .main {
      padding-left: 20px;
    }

    .left-right {
      display: block;
    }

    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .left div {
      margin-bottom: 10px;
      /* You may want to adjust the height and other styles for mobile view */
    }

    .right {
      width: 100%;
      padding: 20px;
      margin-top: 20px;
      border-radius: 0;
    }
  }
       
`

