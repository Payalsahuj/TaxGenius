import React from 'react'
// import Navbar from '../Component/Navbar';
import styled from 'styled-components';
import backgroundimg from "../Images/apps-webpage-header-bg.png"
import { Button } from '@chakra-ui/react'
import gift from "../Images/logbook-image.gif"




function LogTool() {
  
  return (
    <DIV>
      {/* <Navbar /> */}
      <div className='top'>


        <div className='image-car'>
          <img src="https://media.taxtim.com/images/apps-webpage-icon.svg" alt="error" width="70px" />

          <h1>Record Your Work Travel</h1>
          <p>Take control of your own Tax returns</p>
        <a href='https://logbook.taxtim.com/#/'>
          <Button
            size='md'
            height='35px'
            width='150px'
            // border='0px'
            borderRadius={"none"}
            borderColor='green.500'
           
          >
            Get Our App
          </Button>
          </a>
        </div>
      </div>

      <div className='div-2'>
        <h1>Our <span className='span'>FREE digital Logbook App</span> makes logging travel expenses for tax purposes easy</h1>
        <div className='middle'>
          <div>
            <img src={gift} alt="error" />
          </div>
          <div className='tick-images'>
            <h2>Get our SARS Logbook App on your phone today</h2>
            <p>Keeping your SARS travel logbook in order used to be a headache!
              Now you can keep your vehicle log book up to date with<br />
              <span id='span'> one-click simplicity from TaxTim.</span></p>
            <div className='tick-image'>
              <div style={{ display: "flex", paddingLeft: "35px", gap: "10px", width: "500px" }}>
                <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />
                <p style={{ marginTop: "-5px" }}>Built-in intelligence saves you time</p>
              </div>
              <div style={{ display: "flex", gap: "7px", width: "500px", marginTop: "19px", marginLeft: "35px" }}>
                <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />
                <p style={{ marginTop: "-5px" }}>Electronic logbook is backed up safely in the cloud</p>
              </div>
              <div style={{ display: "flex", paddingLeft: "35px", gap: "7px", width: "500px", marginTop: "19px" }}>
                <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />
                <p style={{ marginTop: "-5px" }}>Saves trips, fuel and maintenance expenses</p>
              </div>
              <div style={{ display: "flex", paddingLeft: "35px", gap: "7px", width: "500px", marginTop: "19px" }}>
                <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />
                <p style={{ marginTop: "-5px" }}>Tax-relevant summary provided at year end</p>
              </div>
              <div style={{ display: "flex", paddingLeft: "35px", gap: "7px", width: "550px", marginTop: "19px" }}>
                <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />
                <p style={{ marginTop: "-5px" }}>Download full vehicle logbook records to your PC for SARS</p>
              </div>
            </div>
            <div className='bottom-p' style={{fontSize:"10px",width:"800px",margin:"25px 0px"}}>
              <p>Our Logbook App is a progressive web-app, thus it works on iPhone, Android, PC and more.</p>
            </div>
            <div className='bottom-heading' style={{fontSize:"17px",fontWeight:"700",color:"black"}}>
              <p>GET YOUR FREE VEHICLE LOGBOOK</p>
            </div>
            <div style={{fontSize:"10px",width:"800px",margin:"25px 0px"}}>
              <p>Start using our Logbook App by visiting <span style={{fontSize:"17px",fontWeight:"700",color:"#646566"}}>logbook.taxtim.com</span> in your cellphone browser now. Once the app has loaded, add it to your home screen for future use.</p>
            </div>
            <a href='https://logbook.taxtim.com/#/'>
            <Button
            size='md'
            height='35px'
            width='150px'
            // border='0px'
            borderRadius={"none"}
            borderColor='green.500'
          >
            Get Our App
          </Button>
          </a>
          </div>
        </div>
      </div>

    </DIV>
  )
}

export default LogTool;

const DIV = styled.div`
    .top {
      margin-top:80px;
      /* border: 1px solid red; */
      background-image: url(${backgroundimg});
      padding:70px 0px 40px 0px;
      /* margin-bottom:-40px; */
    }
   } */
  .image-car {
    /* margin:70px 0px; */
  }
  .image-car h1{
    color:white;
    font-size:30px;
    font-weight:500;
  }
  .image-car p{
    color:white;
    font-weight:500;
  }
  .image-car img{
    display:flex;
    display:block;
    margin:auto;
   
  }
  .image-car button{
    display:flex;
    display:block;
    margin:auto;
  
    border:none;
    background-color:#EB4F36;
    color:white;
    
    margin-top:30px;

  }
  .image-car button:hover{
    background-color:lightpink;
  }
  .middle {
    display:flex;
    
  }
  .middle div:nth-child(1){
    width:270px;
    margin-top:50px;
  }
  .middle div:nth-child(2){
    width:500px;
    margin-top:50px;
    margin-left:30px;
    text-align:left;
  }
  .middle div:nth-child(2) h2{
    font-weight:500;
    font-size:20px;
  }
  .middle div:nth-child(2) p{
     /* font-weight:500; */
    font-size:17px; 
    font-weight:450;
    margin-top:15px;
    
  }
  /* .middle div:nth-child(2) span{
    font-weight:800;
    font-size:14px;
    border:1px solid black;
  } */
  .div-2{
    display:flex;
    flex-direction:column;
    margin-top:70px;
    padding:0px 150px;
  }
  .div-2 h1{
    color:#4D4D4D;
    font-size:32px;
    font-weight:400;
    margin-top:-10px;
  }
  .div-2 span:nth-child(1){
    
    font-weight:700;
    color:#646566;
  }
  .div-2 span:nth-child(2){
    font-size:17px;
    font-weight:700;
    color:#646566;
  }
  .tick-images{
    display:flex;
    flex-direction:column;
  }
  /* .tick-images div{
    width:500px;
    display:flex;
    text-align:left;
    align-items:start;
   
  } */
  .tick-images img{
    width:20px;
    /* margin-right:13px;
    border:1px solid black;
    /* display:flex;
    align-items:start; */ */
   
   
  }
  .tick-images p{
    /* width:500px;
   margin-top:-50px;
   border:1px solid black; */
   display:inline
   
   
   } 
   .bottom-heading{
    font-weight:bolder;
    color:black;
    border:1px solid black;
    margin:5px 0px;
   }
   .div-2 button{
    display:flex;
    display:block;
    margin:auto;
  
    border:none;
    background-color:#EB4F36;
    color:white;
    
    margin:0px 0px 20px 0px;
   }
`
