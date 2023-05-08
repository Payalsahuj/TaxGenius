import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
// import image from "../Images/homefront_cleanup.png"

function WearTear() {

  return (
    <DIV>
      <div className='main' style={{  margin: "110px ", textAlign: "left", paddingLeft: "40px", width: "80%" }}>
        <h1>SBC Wear and Tear Calculator </h1>
        <h2>Work out Wear and Tear on Depreciable Assets</h2>
        <div className='second-part'>
          <div className='left-part'>
            <div className='heading'>
              <h3>WEAR AND TEAR CALCULATOR</h3>

            </div>
            <div className='bottom'>
              <p>This calculator is for SBC businesses only.</p>
              <p>Don't know if your business qualifies as an SBC? Click here to find out.</p>
              {/* <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"440px",marginTop:"-10px"}}>
                <select type="ratio">
                    <option>New, unused plant and machinery used directly in the process of manufacture. </option>
                    <option>Other depreciable assets. </option>
                </select>
              </div> */}
              <div className='select'>
              <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"440px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Purchase date:  {" "}{" "} </label>
                <select  style={{ padding: "0px 5px", margin: "10px 0px" }}>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <select  style={{ padding: "0px 5px", margin: "10px 0px" }}>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                </select>

                </div>
              <div className='input'>
                <label htmlFor="salary" style={{ fontSize: "18px", margin: "5px 10px" }}>Purchase amount:    R</label>
                <input
                  className='input-gap'
                  type="number"
                  id="salary"
                  style={{ padding: "5px", margin: "5px 0px 15px 5px" }}
                 
                />
              </div>
              
                

                
                
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"390px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 0px"}}>Your financial year end:</label>
               

                <select style={{ padding: "5px 45px", margin: "10px 0px 10px 0px" }}>
                <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                </div>
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
            <img src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg" alt="error" />

          </div>
         
        </div>
      </div>
    </DIV>
  )
}

export default WearTear;

const DIV = styled.div`
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
    width:80%;
    /* border:1px solid black; */
  }
  .right-part{
    width:30%;
    /* border:1px solid black; */
    /* padding-top: 20px; */
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
  .bottom p:nth-child(1){
    font-weight:500;
    font-size:17px;
    margin:10px 10px 10px 0px;
  }
  .bottom p:nth-child(2){
    /* font-weight:500; */
    font-size:17px;
    margin:10px 10px 10px 0px;
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