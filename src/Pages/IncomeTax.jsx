import React from 'react'
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';

function IncomeTax() {
  return (
    <DIV>
    <div className='main' style={{border:"1px solid red",margin:"110px ",textAlign:"left",paddingLeft:"40px",width:"80%"}}>
        <h1>Small Business Income Tax Calculator </h1>
        <h2>Work out Tax Payable on your Small Business Taxable Income </h2>
         <div className='second-part'>
           <div className='left-part'>
          <div className='heading'>
            <h3>SMALL BUSINESS INCOME TAX CALCULATOR</h3>

          </div>
          <div className='bottom'>
            <p>Use our Small Business Corporation Income Tax calculator to work out the tax payable on your business taxable income.</p>
             <p>We have the SARS SBC tax rates tables built in - no need to look them up!</p>
             <div className='select'>
             <label style={{fontSize:"18px",margin:"5px 10px"}}>Financial year: </label>
             <select style={{padding:"5px",margin:"10px 0px"}}>
             <option  value="2024">2024 (Mar 2023 - Feb 2024)</option>
                    <option value="2023">2023 (Mar 2022 - Feb 2023)</option>
                    <option value="2022">2022 (Mar 2021 - Feb 2022)</option>
                    <option value="2021">2021 (Mar 2020 - Feb 2021)</option>
             </select>
             </div>
             <div className='input'>
             <label htmlFor="salary" style={{fontSize:"18px",margin:"5px 10px"}}>Taxable income:   R</label>
                    <input
                        className='input-gap'
                        type="number"
                        id="salary"
                        style={{padding:"5px",margin:"5px 0px 15px 5px"}}
                    />
                    </div>
          </div>
          <Button
            size='md'
            height='35px'
            width='150px'
            // border='0px'
            borderRadius={"none"}
            borderColor='green.500'
           
          >
           CALCULATE!
          </Button>
           </div>
           <div className='right-part'>
                    <div className='right' style={{display:"flex",gap:"30px"}}>
                        <div style={{width:"50%"}}>
                            <img className='bot' src="https://www.taxtim.com/za/images/tim_full.svg" alt="Bot.png" width={"100px"} height={"100px"} />
                        </div>
                        <div className='t1'>
                            <p style={{color:"#4d4d4d", fontWeight:"700",fontSize:"19px",marginTop:"20px",marginLeft:"-20px",marginRight:"20px"}}>
                            Need help submitting your Tax returns?</p>
                        </div>
                    </div>
                    <div className='t2' style={{paddingRight:"40px"}}>
                        <p style={{fontWeight:"500",margin:"10px 5px"}}>TaxGenius will help you:</p>
                        <div>
                            <div style={{display: "flex", paddingTop:"15px", paddingLeft:"35px", gap:"7px",fontSize:"17px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" width={"25px"}/>
                                <span> Do Your Tax Return Easily</span>
                            </div>
                            <div style={{display: "flex", paddingTop:"10px", paddingLeft:"35px", gap:"7px",fontSize:"17px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg"  alt="Avoid penalties" width={"25px"}/>
                                <span> Avoid penalties</span>
                            </div>
                            <div style={{display: "flex", paddingTop:"10px", paddingLeft:"35px", gap:"7px",fontSize:"17px",marginBottom:"30px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg"  alt="Maximise your refund" width={"25px"}/>
                                <span> Maximise your refund</span>
                            </div>

                        {/* <span><img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />  Do Your Tax Return Easily</span>
                        <span><img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />  Avoid penalties</span>
                        <span><img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />  Maximise your refund</span> */}
                        
                            <span style={{ fontSize:"17px",padding:"100px 0px",fontWeight:"400"}}>Tim uses your answers to complete your income tax return instantly and <br /> professionally, with everything filled in in<br /> the right place.</span>
                        </div>
                        <div style={{paddingTop:"15px",paddingBottom:"20px"}}>
                          <span>Let Tim submit your tax return direct to<br /> SARS in just a few clicks!</span>
                        </div>
                        <div>
                        <Button className='right-button'
            size='md'
            height='35px'
            width='150px'
            // border='0px'
            borderRadius={"3px"}
            borderColor='green.500'
            backgroundColor={"#EB4F36"}
            color={"white"}
            
           
          >
          GET OUR APP
          </Button>
          </div>

                    </div>
                    
                </div>
         </div>
    </div>
    </DIV>
  )
}

export default IncomeTax;

const DIV=styled.div`
  .main h1{
    font-size:35px;
    font-weight:400;
   
  }
  .main h2{
    font-size:25px;
    font-weight:500;
    margin-top:10px;
    margin-bottom:15px;
  }
  .second-part{
    display:flex;
    gap:50px;
  }
  .left-part{
    width:70%;
    /* border:1px solid black; */
  }
  .right-part{
    width:40%;
    /* border:1px solid black; */
    padding-top: 20px;
  }
  .heading{
    font-weight:bold;
    font-size:20px;
    /* border:1px solid red; */
    background-color:#444444;
    color:white;
    padding:12px 10px;
  
  }
  .bottom {
  
    display:flex;
    flex-direction:column;
    background-color:#ECECEC;
    text-align:right;
    padding-right:10px;
  }
  .bottom p{
    font-weight:500;
    font-size:17px;
    margin:10px;
  }
  .left-part button{
    display:flex;
    display:block;
    margin:auto;
  
    border:none;
    background-color:#EB4F36;
    color:white;
    
    margin-top:30px;
    /* border:1px solid black; */
    margin-right:1px;
    border-radius:3px;
    :hover{
      background-color:gray;
    }
    /* .right{
        width: 40%;
        
        border: 1px solid black;
        
    } */
    .right{
        display: flex;
    }
    /* .t1{
        display: flex;
        padding-top: 32px;
    } */
    /* .t2 p{
    
        margin-top: 20px;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        padding: 0 20px 0 20px;
        color: #4d4d4d;
        background-color: #ffffff;
    } */
    /* .t2 img{
        width: 20px;
        
    } */
    /* .t2 span{
        display: inline;
        
    } */
    /* .bot{
       height: 20px;
    } */
    /* .right-button button{
    display:flex;
    display:block;
    margin:auto;
  
    border:none;
    background-color:#EB4F36;
    color:white;
    
    margin-top:30px;
    border:1px solid black;
    margin-right:1px;
    border-radius:3px;
    :hover{
      background-color:gray;
    } */

  }
`