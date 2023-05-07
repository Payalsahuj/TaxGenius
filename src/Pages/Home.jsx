
import image from '../Images/homefront_cleanup.png'
import arrow from '../Images/icons8-sort-right-30.png'
import bot from '../Images/Bot.png'
import decoreimg from '../Images/Untitled Project.jpg'
import done from '../Images/icons8-done-64.png'
import puzzle from '../Images/icons8-puzzle-64.png'
import confi from '../Images/icons8-self-confidence-64.png'
import refund from '../Images/icons8-exchange-dollar-96.png'
import help from '../Images/icons8-helping-hand-50.png'
import secure from '../Images/icons8-secure-48.png'
import clock from '../Images/icons8-clock-32.png'
import styled from "styled-components"
import { useState } from 'react'
import Multistep from '../Component/Homelogin'
import { Link } from 'react-router-dom'

// import KommunicateChat from '../Component/chat'
function Home() {
    const [onvideo, setonvideo] = useState(false)
    console.log(onvideo)
    return <DIV onvideo={onvideo}>
        <div id='textrelative'>
            <img src={image} id='imgback' alt="" />
            <div id='textimg'>
                <b>
                    <h1>THE FASTEST, EASIEST WAY</h1>
                    <h1>TO DO YOUR TAX RETURN.</h1>
                    <br />
                    <br style={{ display: onvideo ? 'none' : 'flex' }} />
                    {/* <button 
                    id="videobutton"
                     style={{border:'2px solid red'}}
                      onClick={() => setonvideo(true)}>
                        <img src={bot} id='firstimg' alt="" /> 
                        Watch the Video 
                        <img style={{ paddingTop: '4px', width: '20px' }} src={arrow} alt="" />
                    </button> */}
                    {/* <button onClick={() => setonvideo(true)}>okok</button> */}
                    <div id="vedio">
                        <embed style={{ width: '28%', height: '220px' }} src="https://www.youtube.com/embed/nAFLsldyJfs" type="" />
                    </div>
                </b>
            </div>
            
        </div>
        <div width='100%' className='formdiv'>
            
            <div id="form" style={{
                
                width: '35%'
            }} >
                <button 
                    id="videobutton"
                     style={{border:'2px solid grey'}}
                      onClick={() => setonvideo(true)}>
                        <img src={bot} id='firstimg' alt="" /> 
                        Watch the Video 
                        <img style={{ paddingTop: '4px', width: '20px' }} src={arrow} alt="" />
                    </button>
                <Multistep />
        
            </div>
        </div>


        <div style={{ marginTop: '30%'}} >
            <div id='firstdivres'>
                <div id='firstdivresimg'>
                    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'30px'}}>
                    <img src={decoreimg} width={'80%'}   alt="" />
                    </div>
                </div>
                <div id='firstdivrestext' >
                    <h1 style={{ fontSize: '27px' }}><b>How Does TaxGenius Work?</b></h1>
                    <h1 style={{ fontSize: '24px' }}><b>It's quite easy actually!</b></h1>
                    <p><b>Let's have a chat. After answering my simple questions I'll complete your text return and file it directly with SARS for your maximum possible refund!</b></p>
                    <br />
                    <div >
                        <h1 className='headfirst' ><img src={done} alt="" />  <b>Register for TaxGenius account</b></h1>
                        <p className='headpara'>Tell me a bit about your taxes and I'll show which TaxGenius package and price suits your need best</p>
                        <br />
                        <h1 className='headfirst' ><img src={done} alt="" />  <b>Have a chat with me online</b></h1>
                        <p className='headpara'>We will give you the best possible way to return your tax easily, checking all deductions for maximum refund before filing at SARS.</p>
                        <br />
                        <h1 className='headfirst'><img src={done} alt="" />  <b>Pay by Card To submit your Return</b></h1>
                        <p className='headpara'>Pay for your tax return service via card directly on site.</p>
                        <br />
                        <div style={{ display: 'flex', gap: '20px' }}>
                           <Link to='/about' ><button id='buttonone' >FIND OUT MORE</button></Link> 
                            <button id='buttontwo'>GET STARTED</button></div>
                    </div>

                </div>

            </div>
            <div  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#DAEFF4" fillOpacity="1" d="M0,288L60,256C120,224,240,160,360,122.7C480,85,600,75,720,90.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <div style={{ backgroundColor: "#DAEFF4" }}>
                    <h1 style={{ fontSize: '27px' }}><b>Why Should I Use TaxGenius to Do My Personal or Company Tax Return?</b></h1>
                    <h1 style={{ fontSize: '27px', fontWeight: '600px' }}>Great Question!</h1>
                    <br />
                    <p>Let's have a chat. After answering mysimple questions I'll complete your tax return and file</p>
                    <p>It directly with SARS for your maximum possible refund!</p>
                    <br />
                    <br />
                    <div id='arrangegrid'>
                        <div className='griddiv'>
                            <h1 className='griddivhead'><img src={puzzle} style={{ display: 'block', width: '45px', marginRight: '20px' }} alt="" /><b> Full Integrated</b></h1>
                            <br />
                            <p>Once you authorise TaxGenius, I can import your IRP5 data and file your tax return directly with SARS.</p>
                        </div>
                        <div className='griddiv'>
                            <h1 className='griddivhead'><img src={confi} style={{ display: 'block', width: '45px', marginRight: '20px' }} alt="" /><b> File With Confidance</b></h1>
                            <br />
                            <p>I'll make sure your SARS tax return is completed fully and correctly, so you can file with confidence. On time, every time.</p>
                        </div>
                        <div className='griddiv'>
                            <h1 className='griddivhead'><img src={refund} style={{ display: 'block', width: '55px', marginRight: '20px' }} alt="" /><b> Max Possible Refund</b></h1>
                            <br />
                            <p>My questions are designed to uncover all your available tax deductions to reduce your tax and get your maximum refund.</p>
                        </div>
                        <div className='griddiv'>
                            <h1 className='griddivhead'><img src={help} style={{ display: 'block', width: '45px', marginRight: '20px' }} alt="" /><b> Tax Experts on Hand</b></h1>
                            <br />
                            <p>TaxGenius is maintained by registered tax practitioners, who can help you with those slightly more complicated tax questions.</p>
                        </div>
                        <div className='griddiv'>
                            <h1 className='griddivhead'><img src={secure} style={{ display: 'block', width: '65px', marginRight: '6px' }} alt="" /><b>Your Information is Secure</b></h1>
                            <br />
                            <p>I'm super strict on security. Your personal data is kept secure via 256-bit SSL at all times. Absolutely no compromise.</p>
                        </div>
                        <div className='griddiv'>
                            <h1 className='griddivhead'><img src={clock} style={{ display: 'block', width: '50px', marginRight: '20px' }} alt="" /><b> Quick ans Easy</b></h1>
                            <br />
                            <p>Most people finish their tax returns on TaxTim in 20 minutes or less. But fast doesn't mean rushing - I'm thorough too.</p>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#DAEFF4" fillOpacity="1" d="M0,160L80,138.7C160,117,320,75,480,96C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>

                <div style={{ padding: '10px 60px', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '27px' }}><b>Who Partners With TaxGenius?</b></h1>
                    <p style={{ fontSize: '19px' }}>We have several <span style={{ color: '#0c690c' }}><b>fantastic</b></span> partner offers.</p>
                    <br />
                    <br />
                    <br />
                    <div id="gridlogo">
                        <div className='secondgrid'>
                            <img className='secondgridimg' src='https://www.taxtim.com/za/images/momentum-logo.png' alt="" />
                            <br />
                            <br />
                            <p>Get Tax Genius FREE</p>
                            <Link to='/' ><u style={{ color: 'green' }}>Read more</u></Link>
                        </div>
                        <div className='secondgrid'>
                            <img className='secondgridimg' src="https://www.taxtim.com/za/images/sanlam-reality.png" alt="" />
                            <br />
                            <p>Get TaxTim FREE (earn up to 3,000 tier points)</p>
                            <Link to='/' ><u style={{ color: 'green' }}>Read more</u></Link>
                        </div>
                        <div className='secondgrid'>
                            <img className='secondgridimg' src="https://www.taxtim.com/za/images/partner-fnb-ebucks.png" alt="" />
                            <br />
                            <p>Get eBucks for using TaxTim (get 50% back in eBucks)</p>
                            <Link to='/' ><u style={{ color: 'green' }}>Read more</u></Link>
                        </div>
                        <div className='secondgrid'>
                            <img className='secondgridimg' src="https://www.taxtim.com/za/images/partner-old-mutual.png" alt="" />
                            <br />
                            <p>Get TaxTim discounted or FREE</p>
                            <Link to='/' ><u style={{ color: 'green' }}>Read more</u></Link>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#ECEFF1', padding: '30px 10px' }}>
                    <h1 style={{ fontSize: '27px' }}><b>Who Uses TaxGenius?</b></h1>
                    <p style={{ fontSize: '19px' }}>TaxGenius has Helped 14 Million South Africans in 11 Years. Here's What They Say.</p>
                    <br />
                    <br />
                    <div id='thriddivcontainer'>
                        <div className='thirddiv'>
                            <img src={bot} alt="" />
                            <br />
                            <h1>Thank you so much for saving the skin of this lastminute.com tax payers!</h1>
                        </div>
                        <div className='thirddiv'>
                            <img src={bot} alt="" />
                            <br />
                            <h1>Thank you for making this so easy for me. Especiallytaht I'm not really computer literate.</h1>
                        </div>
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
        </div>

    </DIV>
}

export default Home

const DIV = styled.div`
#imgback{
    display:block;
    position:absolute;
    width:100%; 
}
#textimg{
    position:relative;
    text-align:left;
    top:130px;
    left:10%;
    font-size:30px;
    width:90%;
}
#textrelative{
    margin-top: 55px;
    position: absolute;
    width: 100%;
    pointer-events:all;
}
#videobutton{
    position:relative;
    display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
    font-size:18px;
    background-color:white;
    padding:10px 10px 5px 100px;
    border-radius:5px;
    top:70px;
    right:150%;
}


#vedio{
    display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
}
#firstimg{
    position:absolute;
    width:100px;
    top:-180.5%;
    left:1%;
}


#form{
    position:relative;
    right:-63%;
    top:40%;
}
.formdiv{
    /* border: 3px solid green; */
     position: relative;
      height: 700px;
}
#firstdivres{
    display: flex;
    justify-content:space-evenly;
     gap: 100px;
      width: 100%;
       
}
#firstdivresimg{
    width: 30%;
   
}
#firstdivrestext{
    
    padding: 20px 25px;
    text-align: left;
    width: 50%;
}
#arrangegrid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
      gap: 35px;
       padding: 40px 80px;
}
#gridlogo{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
.headfirst{
    display: flex;
    font-size:19px;
}
.headfirst img{
    display: block;
     width: 28px;
     margin-right: 15px;
}
.headpara{
   padding-left: 45px;
}
 #buttonone{
   border:2px solid grey;
    padding: 5px 25px;
    border-radius:5px;
 }
 #buttontwo{
    background-color: green;
     color: white;
     border-radius:5px;
     padding:5px 25px;
 }
 .griddiv{
    background-color:white;
      padding: 10px 10px;
     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     border-radius:6px;
 }
 .griddivhead{
    
     display: flex;
     justify-content:center;
     align-items:center;
     font-size:24px;
 }
 .secondgrid{
    margin: auto;
     padding: 10px 20px;
 }
 .secondgridimg{
    width: 200px;
     margin: auto;
 }
 #thriddivcontainer{
    display: flex;
    justify-content: space-evenly;
     gap: 20px;
      padding: 20px 40px;
 }
 .thirddiv{
    background-color:white;
    border: 2px solid grey;
    border-radius: 10px;
    padding: 50px 5px;
     width: 30%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 }
 .thirddiv img{
    display: block;
     width: 50px;
      margin: auto;
 }
 @media screen and (min-width: 719px) and (max-width: 1321px){
    #textimg{
    position:relative;
    text-align:left;
    top:80px;
    left:10%;
    font-size:27px;
    width:90%;
}
#videobutton{
    position:relative;
    display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
    font-size:18px;
    background-color:white;
    padding:10px 10px 5px 100px;
    border-radius:5px;
}

#vedio{
    display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
}
    #form{
        display:none;
    } 
    .formdiv{
    
     position: relative;
      height: 350px;
}
    #firstdivres{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    }
    #firstdivresimg{
    width: 70%;
    
    }
    #firstdivrestext{
   
    padding: 20px 25px;
    text-align: left;
    width: 90%;
    }
    #arrangegrid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 35px;
    padding: 0px 80px;
    }
    #gridlogo{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
    }
 }


 @media screen and (min-width: 500px) and (max-width: 719px){
    #textimg{
    position:relative;
    text-align:left;
    top:50px;
    left:10%;
    font-size:17px;
    width:90%;
    }
    #form{
        display:none;
    } 
    .formdiv{
    
     position: relative;
      height: 250px;
    }
    #videobutton{
    position:relative;
    display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
    font-size:18px;
    background-color:white;
    padding:10px 10px 5px 100px;
    border-radius:5px;
}

#vedio{
    display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
}
    #firstdivres{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    }
    #firstdivresimg{
    width: 90%;
    
    }
    #firstdivrestext{
    
    padding: 20px 25px;
    text-align: left;
    width: 90%;
    }
    #arrangegrid{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 35px;
    padding: 0px 80px;
    }
    #gridlogo{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap:20px;
    }
    #thriddivcontainer{
    display: flex;
    flex-direction:column;
    
    }
    .thirddiv{
    border: 2px solid grey;
    border-radius: 10px;
    padding: 50px 0px;
    margin:auto;
     width: 90%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    #firstimg{
    position:absolute;
    width:70px;
    top:-100.5%;
    left:1%;
    }
 }



 
 @media screen and (max-width: 500px){
    #textimg{
    position:relative;
    text-align:left;
    top:50px;
    left:10%;
    font-size:10px;
    width:90%;
    }
    #videobutton{
    position:relative;
    display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
    font-size:18px;
    background-color:white;
    padding:10px 10px 5px 100px;
    border-radius:5px;
}

#vedio{
    display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
}
    #form{
        display:none;
    } 
    .formdiv{
    
     position: relative;
      height: 240px;
    }
    #firstdivres{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    }
    #firstdivresimg{
    width: 90%;

    }
    #firstdivrestext{
    
    padding: 20px 25px;
    text-align: left;
    width: 90%;
    }
    #arrangegrid{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 35px;
    padding: 0px 80px;
    }
    #gridlogo{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap:20px;
    }
    #thriddivcontainer{
    display: flex;
    flex-direction:column;
  
    }
    .thirddiv{
    border: 2px solid grey;
    border-radius: 10px;
    padding: 50px 0px;
    margin:auto;
     width: 90%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
   
    #firstimg{
    position:absolute;
    width:50px;
    top:-43.5%;
    left:1%;
    }
 }
`