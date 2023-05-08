
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

import styled from "styled-components"
import { handlepostdetails } from "../Redux/logindata/action"
// import Home from "./Home"
const initialdata = {
    firstname: '',
    lastname: "",
    email: '',
    address: '',
    number: ''
}
function Paytax() {
    const [data, setdata] = useState(initialdata)
    const dispatch=useDispatch()
    const navigate =useNavigate()
    function handlechange(e) {
        const { name, value } = e.target;
        setdata((prev)=>{
            return {...prev,[name]:value}
        })

    }
    function handlesubmit() {
        
        let flag=true
        for(let key in data){
           if(!data[key]){
            flag=false
           }
        }
        if(flag){
            dispatch(handlepostdetails(data))
            alert('Your Payment is Successfully done')
            navigate('/')
        }
        else{
            alert('Need to Fill all the credentials')
        }

        
        
    }
    
    return <DIV>
        <div style={{ marginTop: '50px', paddingTop: '100px' }}>
            <div width='100%' style={{ color: 'black' }} >
                <div id='flexdiv'>
                    <div className="formdiv">
                        <h1 className="head">User details</h1>
                        <div style={{ textAlign: 'left', padding: '30px 60px' }}>
                            <p >First Name*</p>
                            <input type="text" placeholder="Enter your first name" value={data.firstname} onChange={(e) => handlechange(e)} className="inputbox" name="firstname" />
                            <p style={{ marginTop: '15px' }}>Last Name*</p>
                            <input type="text" placeholder="Enter your last name" value={data.lastname} onChange={(e) => handlechange(e)} className="inputbox" name="lastname" />
                            <p style={{ marginTop: '15px' }}>Email*</p>
                            <input type="text" placeholder="Enter your email" value={data.email} onChange={(e) => handlechange(e)} className="inputbox" name="email" />
                            <p style={{ marginTop: '15px' }}>Address*</p>
                            <input type="text" placeholder="Enter your Address details" value={data.address} onChange={(e) => handlechange(e)} className="inputbox" name="address" />

                            <p style={{ marginTop: '15px' }}>Mobile number*</p>
                            <input type="number" placeholder="Enter your mobile number" value={data.number} onChange={(e) => handlechange(e)} style={{ backgroundColor: '#DAEFF4', width: '100%', padding: '10px 10px', borderRadius: '7px', color: 'black' }} name="number" />
                        </div>
                    </div>
                    <div className="formdiv">
                        <h1 className="head">Bank details</h1>
                        <div style={{ textAlign: 'left', padding: '30px 60px' }}>
                            <p style={{ marginTop: '10px' }}>Name on Card*</p>
                            <input type="text" placeholder="Enter your first name" className="inputbox" />
                            <p style={{ marginTop: '10px' }}>Debit/Credit card number*</p>
                            <input type="text" placeholder="Enter your first name" className="inputbox" />
                            <p style={{ marginTop: '10px' }}>Expiration Date*</p>
                            <div style={{ display: 'flex', gap: '20px', color: 'black' }}>
                                <select className="inputbox" >
                                    <option value="">Month</option>
                                    <option value="">01-Jan</option>
                                    <option value="">02-Feb</option>
                                    <option value="">03-March</option>
                                    <option value="">04-April</option>
                                    <option value="">05-May</option>
                                    <option value="">06-June</option>
                                    <option value="">07-July</option>
                                    <option value="">08-Aug</option>
                                    <option value="">09-Sep</option>
                                    <option value="">10-Oct</option>
                                    <option value="">11-Nov</option>
                                    <option value="">12-Dec</option>

                                </select>
                                <select className="inputbox">
                                    <option value="">Year</option>
                                    <option value="">2023</option>
                                    <option value="">2024</option>
                                    <option value="">2025</option>
                                    <option value="">2026</option>
                                    <option value="">2027</option>
                                    <option value="">2028</option>
                                    <option value="">2029</option>
                                    <option value="">2030</option>
                                    <option value="">2031</option>
                                    <option value="">2032</option>
                                    <option value="">2033</option>
                                    <option value="">2034</option>
                                    <option value="">2035</option>
                                    <option value="">2036</option>
                                    <option value="">2037</option>
                                    <option value="">2038</option>
                                    <option value="">2039</option>
                                    <option value="">2040</option>
                                    <option value="">2041</option>
                                </select>
                            </div>
                            <div >
                                <p style={{ marginTop: '10px' }}>Security Code</p>
                                <input type="password" className="inputbox" />
                                
                            </div>
                        </div>
                        <div id='divpay'><button id='paybutton' onClick={handlesubmit} >Click to pay Tax</button></div>

                    </div>

                </div>

            </div>
        </div></DIV>
}
export default Paytax

const DIV = styled.div`
#flexdiv{
    display: flex;
    justify-content: space-between;
     width: 90%;
      margin: auto;
     box-shadow:  rgba(0, 0, 0, 0.35) 0px 5px 15px;
      padding: 40px 15px;
       gap: 35px;
}
.formdiv{
    width: 50%;
     border:1px solid white;
     border-radius:10px;
    padding-top:20px;
}
.head{
    background-color:#DAEFF4;
    font-size:30px;
    padding:8px 5px
}
#paybutton{
    display:flex;
    margin:auto;
    background-color:#DAEFF4;
    color:black;
    padding:5px 20px;
    border-radius:10px;
}
#divpay{
    width:100%;
    margin-top:20px;
    font-size:25px;
}
#divpay:hover{
    cursor: pointer;
    transform:scale(1.1)
}

.inputbox{
    background-color:#DAEFF4;
    width: 100%;
    padding: 10px 10px;
    border-radius: 7px;
}
    @media screen and (max-width: 900px){
        #flexdiv{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
     width: 90%;
      margin: auto;
     box-shadow:  rgba(0, 0, 0, 0.35) 0px 5px 15px;
      padding: 40px 15px;
       gap: 35px;
}
.formdiv{
    width: 95%;
    margin:auto;
     border:1px solid white;
     border-radius:10px;
    padding-top:20px;
}
.head{
    background-color:#DAEFF4;
    font-size:20px;
    padding:3px 5px
}
#divpay{
    width:100%;
    margin-top:15px;
    font-size:14px;
}

    } 
`