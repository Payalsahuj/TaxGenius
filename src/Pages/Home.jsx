import image from '../Images/homefront_cleanup.png'
import arrow from '../Images/icons8-sort-right-30.png'
import bot from '../Images/Bot.png'
import decoreimg from '../Images/IMpact_Business_Case_For_Women_In_Tech_Main.jpg'
import styled from "styled-components"
import { useState } from 'react'
import Multistep from '../Component/Homelogin'
function Home() {
    const [onvideo, setonvideo] = useState(false)
    console.log(onvideo)
    return <DIV onvideo={onvideo}>
        <div style={{ marginTop:'40px',position: 'absolute', width: '100%' }}>
            <img src={image}  id='imgback' alt="" />
            <div id='textimg'>
                <b>
                    <h1>THE FASTEST, EASIEST WAY</h1>
                    <h1>TO DO YOUR TAX RETURN.</h1>
                    <br />
                    <br style={{ display: onvideo ? 'none' : 'flex' }} />
                    <button id="videobutton" onClick={() => setonvideo(true)}>
                        <img src={bot} id='firstimg' alt="" /> Watch the Video <img style={{ paddingTop: '4px', width: '20px' }} src={arrow} alt="" />
                    </button>
                    <div id="vedio">
                        <embed style={{ width: '28%', height: '220px' }} src="https://www.youtube.com/embed/nAFLsldyJfs" type="" />
                    </div>
                </b>
            </div>

        </div>
        <div width='100%'>
            <div id="form" style={{
                // border:'2px solid red',
                width: '35%'
            }} >
                <Multistep />
            </div>
        </div>
        <div style={{ position: 'relative', top: '550px' }} >
            <div id='dotcontainer'>
                <div className='separate'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                
                </div>
                <div className='separate'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                
                </div>
                <div className='separate'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                </div>

                <div className='separate'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                </div>

                <div className='separate'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                </div>
                
            </div>
            <div>
                <img src={decoreimg} style={{width:'460px',height:'400px',borderRadius:'5px',position:'relative',left:'12%',zIndex:'1'}} alt="" />
            </div>
            <div id='starcontainer'>
                <div className='star'>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            </div>
            <div  className='star'>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            </div>
            <div  className='star'>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            </div>
            <div  className='star'>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
            <div class="five-pointed-star"></div>
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
#videobutton{
    position:relative;
    display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
    font-size:18px;
    background-color:white;
    padding:10px 10px 5px 100px;
    border-radius:5px;
}
#firstimg{
    position:absolute;
    width:100px;
    top:-180.5%;
    left:1%;
}
#vedio{
    display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
}

#form{
    position:relative;
  
    right:-63%;
    top:300px;  
}
#dotcontainer{
    /* border:2px solid red; */
    display:flex;
    flex-direction:column;
    position:absolute;
    left:40%;
    top:-9%;
    

}
#starcontainer{
    /* border:2px solid green;  */
    margin:auto;
    position:absolute;
    left:9.1%;
    top:88%;
}
.separate{
    display:flex;
}
.dot {

  margin: 4px 4px;
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: flex;
}

.star{
    display:flex;
   
}
.five-pointed-star {
 --star-color:green;
 /* margin:1em auto; */
 font-size:8px;
 margin:9px 2px;
 display: block;
 width: 0px;
 height: 0px;
 border-right: 1em solid transparent;
 border-bottom: 0.7em solid var(--star-color);
 border-left: 1em solid transparent;
 transform: rotate(35deg);
}


.five-pointed-star:before {
  
 border-bottom: 0.8em solid var(--star-color);
 border-left: 0.3em solid transparent;
 border-right: 0.3em solid transparent;
 position: absolute;
 height: 0;
 width: 0;
 top: -0.45em;
 left: -0.65em;
 display: block;
 content:"";
 transform: rotate(-35deg);
}
.five-pointed-star:after {
 position: absolute;
 display: block;
 top: 0.03em;
 left: -1.05em;
 width: 0;
 height: 0;
 border-right: 1em solid transparent;
 border-bottom: 0.7em solid var(--star-color);
 border-left: 1em solid transparent;
 transform: rotate(-70deg);
 content:"";
}
    
`