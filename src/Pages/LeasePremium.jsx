import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
// import image from "../Images/homefront_cleanup.png"

function LeasePremium() {
  const [startYear,setStartYear]=useState(2023)
  const [endYear,setendtYear]=useState(2023)
  const [visible,setVisible]=useState(false)
  const [value,setValue]=useState(0)
  const [lease,setLease]=useState(0)
  const [lee,setLee]=useState(0)
  const [data,setData]=useState("")
  let val=0
  console.log(startYear)
  console.log(endYear)
  let diff=startYear-endYear
  let arr=[]
  for(let i=0;i<diff;i++){
    arr.push(i)
  }
  

  const handleClick=()=>{
    //  setVisible(true)
     income()
  }
  
  const append=(x)=>{
    
    return (`Year ${x} (${lee} tax year): ${value} `)
     
  }
  const income=()=>{
    for(let i=startYear;i<=endYear;i++){
      
      let year=(lease/5000)*166
    setValue(year)
    setLee(i)
    val++
    setData(append(val))
    
    }
    
    val=0
  
  }


  
  return (
    <DIV>
      <div className='main' style={{  margin: "110px ", textAlign: "left", paddingLeft: "40px", width: "80%" }}>
        <h1>s11(f) Lease Premium Allowance Calculator </h1>
        <h2>Work out your Lease Premium Allowance over time</h2>
        <div className='second-part'>
          <div className='left-part'>
            <div className='heading'>
              <h3>LEASE PREMIUM CALCULATOR</h3>

            </div>
            <div className='bottom'>
              <p>Parties often enter into leases of vacant commercial or industrial land, subject to payment of a<br /> "lease premium" by the lessee to the lessor. This is defined as "a consideration having an ascertainable money value passing from a lessee to a lessor - distinct from, and in addition to, or in lieu of, rent". It differs from rent in that it is paid in respect of the whole period of the lease. It is usually paid in a lump sum at the commencement of the lease.</p>
              <p>Section 11(f) of the Income Tax Act contains the deduction for the lessee. The amount must be spread over the period of the lease, from commencement to end, including renewal periods, to a maximum spread of 25 years. You need to ensure that the leased asset is used for the production of income in order to qualify for this allowance.</p>
              <div className='select'>
              <div className='input'>
                <label htmlFor="salary" style={{ fontSize: "18px", margin: "5px 10px" }}>Taxable income:   R</label>
                <input
                  className='input-gap'
                  type="number"
                  id="salary"
                  style={{ padding: "5px", margin: "5px 0px 15px 5px" }}
                  onChange={(e)=>setLease(e.target.value)}
                />
              </div>
              
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"370px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Date lease starts:{" "}Start of{" "} </label>
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

                <select value={startYear} onChange={(e)=>setStartYear(e.target.value)} style={{ padding: "0px 5px", margin: "10px 0px" }}>
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

                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"370px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Date lease stops:{" "}  {" "}Start of{" "} </label>
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

                <select value={endYear} onChange={(e)=>setendtYear(e.target.value)} style={{ padding: "0px 5px", margin: "10px 0px" }}>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
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
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"250px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Renewal period (if exists in contract):{" "} </label>
               

                <select style={{ padding: "5px 45px", margin: "10px 0px 10px 35px" }}>
                  <option value="0">0 Years</option>
                  <option value="1">1 Years</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                  <option value="6">6 Years</option>
                  <option value="7">7 Years</option>
                  <option value="8">8 Years</option>
                  <option value="9">9 Years</option>
                  <option value="10">10 Years</option>
                  <option value="11">11 Years</option>
                  <option value="12">12 Years</option>
                  <option value="13">13 Years</option>
                  <option value="14">14 Years</option>
                  <option value="15">15 Years</option>
                </select>

                </div>
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"250px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 53px" }}>Your financial year end: {" "} </label>
               

                <select style={{ padding: "5px 45px", margin: "10px 0px 10px 35px" }}>
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
              onClick={handleClick}

            >
              CALCULATE!
            </Button>

             <div>
              <h3 style={{fontWeight:"700"}}>Lease Premium Allowance over the years:</h3>
            {/* {arr.map((el,i)=>{
              return <p key={i}>Year {val} ({lee} tax year):{value} </p>
            
            })} */}
            {data}
           
           
            
          </div>
          </div>
          <div className='right-part'>
            <img src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg" alt="error" />

          </div>
         
        </div>
      </div>
    </DIV>
  )
}

export default LeasePremium;

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
  .bottom p{
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