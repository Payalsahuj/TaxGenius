import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import done from '../Images/icons8-done-64.png'
import styled from 'styled-components'
function About() {
    return <DIV><div id="maincontainer">
        <div id='maincontainerdiv' >
            <h1 id="firsthead"><b>Make tax easy in 2023</b></h1>
            <h2 id='secondhead'><b>Buy a TaxGenius voucher today. Do your taxes right and get the refund you deserve on 1 Jul 2023.</b></h2>
            <br />
            <div >

                <div id='yellowhead'><h2 style={{ fontSize: '19.2px' }}><b>OUT OF TAX SEASON SPECIAL - Buy a Voucher Today and SAVE 20%!</b></h2></div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: '80px 20px' }}>
                    <div >
                    <h3 >Get TaxGenius FREE or discounted</h3>
                    <h3> via these great partners:</h3>
                    </div>
                    <div id='firstgrid'>
                        <img className='imgwidth' src="https://www.taxtim.com/za/images/sanlam-reality.png" alt="" />
                        <img className='imgwidth' src="https://www.taxtim.com/za/images/partner-old-mutual.png" alt="" />
                        <img className='imgwidth' src="https://www.taxtim.com/za/images/momentum-logo.png" alt="" />
                        <img  className='imgwidth' src="https://www.taxtim.com/za/images/partner-fnb-ebucks.png" alt="" />

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: '15px 15px' }}>
                    <h3>Individual Annual Tax (ITR12) Pricing</h3>
                    <div id='midgrid'>
                        <div>
                            <h1 className='lite'>LITE</h1>
                            <h1>R319 R255</h1>
                            <p>PER TAX SUBMISSION</p>
                            <button style={{ backgroundColor: '#eb4f36',padding:'3px 30px',borderRadius:'2px' }}>Buy Now</button>
                            <p>or Try us Free </p>
                            <br />
                            <p>A basic tax return for those with a basic salary only: NO medical aid, retirement, allowances or other income.</p>
                        </div>
                        <div>
                            <h1  className='lite'>SMART</h1>
                            <h1>R449 R359</h1>
                            <p>PER TAX SUBMISSION</p>
                            <button style={{ backgroundColor: '#eb4f36' ,padding:'3px 30px',borderRadius:'2px'}}>Buy Now</button>
                            <p>or Try us Free </p>
                            <br />
                            <p>A simple tax return for salary and/or medical aid, retirement, investments, capital gains and/or home office.</p>
                        </div>
                        <div>
                            <h1  className='lite'>ULTRA</h1>
                            <h1>R449 R359</h1>
                            <p>PER TAX SUBMISSION</p>
                            <button style={{ backgroundColor: '#eb4f36' ,padding:'3px 30px',borderRadius:'2px'}}>Buy Now</button>
                            <p>or Try us Free </p>
                            <br />
                            <p>A comprehensive tax return for commission, independent contractors, sole prop, rental/foreign income earners.</p>
                        </div>
                    </div>
                </div>
                <TableContainer>
                    <Table variant='striped' colorScheme='gray' >
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Included sections</Th>
                                <Th>5 sections view</Th>
                                <Th >5 sections view</Th>
                                <Th >5 sections view</Th>

                            </Tr>
                        </Thead>
                        <Tbody id='tabletd'>
                            <Tr >
                                <Td >Step-by-step help </Td>
                                <Td><img src={done} style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done} style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>

                            </Tr>
                            <Tr>
                                <Td>Helpdesk support included </Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                            </Tr>
                            <Tr>
                                <Td>Automatic checks to maximise your tax refund </Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                            </Tr>
                            <Tr>
                                <Td>TaxGenius fetches your IRP5(s), Medical and Retirement data from SARS </Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                            </Tr> 
                            <Tr>
                                <Td>One-click submission into SARS electronically </Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                            </Tr> 
                            <Tr>
                                <Td>Automated review before submission  </Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                            </Tr>
                             <Tr>
                                <Td>Automated review before submission </Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                                <Td><img src={done}  style={{margin:'auto'}} alt="" /></Td>
                            </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>

                
            </div>
            <div style={{marginTop:'50px',padding:'60px 20px',backgroundColor:'#E3E0DB'}}>
                <h2 style={{ fontSize: '25px',textAlign:'center' }}><b>6 Free Tools to Make Tax Easy - Included when you Register</b></h2>
                <div id='gridsecond'>
                    <div style={{textAlign:'center'}}>
                    <img style={{backgroundColor:'#85c4cc',marginBottom:'10px'}} src="https://www.taxtim.com/za/images/freebie-helpdesk.png" alt="" />
                    <h1>24hr Tax Helpdesk</h1>
                    </div>
                    <div style={{textAlign:'center'}}>
                    <img style={{backgroundColor:'#85c4cc',marginBottom:'10px'}} src="https://www.taxtim.com/za/images/freebie-archive.png" alt="" />
                    <h1>Documents Storage</h1>
                    </div>
                    <div style={{textAlign:'center'}}>
                    <img style={{backgroundColor:'#85c4cc',marginBottom:'10px'}} src="https://www.taxtim.com/za/images/freebie-reminders.png" alt="" />
                    <h1>Deadline Reminders</h1>
                    </div>
                    <div style={{textAlign:'center'}}>
                    <img style={{backgroundColor:'#85c4cc',marginBottom:'10px'}} src="https://www.taxtim.com/za/images/freebie-app.png" alt="" />
                    <h1>Expense Tracker App</h1>
                    </div>
                    <div style={{textAlign:'center'}}>
                    <img style={{backgroundColor:'#85c4cc',marginBottom:'10px'}} src="https://www.taxtim.com/za/images/freebie-logbook.png" alt="" />
                    <h1>Vehicle Logbook App</h1>
                    </div>
                    <div style={{textAlign:'center',gap:'20px',marginBottom:'10px'}}>
                    <img style={{backgroundColor:'#85c4cc',marginBottom:'10px'}} src="https://www.taxtim.com/za/images/freebie-ths.png" alt="" />
                    <h1>Personalised Tax Report</h1>
                    </div>
                    
                </div>
                </div>


                <TableContainer marginTop={'70px'}>
                    <Table variant='striped' colorScheme='gray' >
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead >
                            <Tr>
                                <Th>Included sections</Th>
                                <Th >5 sections view</Th>
                               

                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr >
                                <Td >Step-by-step help </Td>
                                <Td><img src={done} width={'20px'} alt="" /></Td>
                            </Tr>
                            <Tr>
                                <Td>Helpdesk support included </Td>
                                <Td><img src={done} width={'20px'} alt="" /></Td>

                            </Tr>
                            <Tr>
                                <Td>Automatic checks to maximise your tax refund </Td>
                                <Td><img src={done} width={'20px'} alt="" /></Td>
                             
                            </Tr>
                            <Tr>
                                <Td>TaxGenius fetches your IRP5(s), Medical and Retirement data from SARS </Td>
                                <Td><img src={done} width={'20px'} alt="" /></Td>
                               
                            </Tr> 
                            <Tr>
                                <Td>One-click submission into SARS electronically </Td>
                                <Td><img src={done} width={'20px'} alt="" /></Td>
                                
                            </Tr> 
                            <Tr>
                                <Td>Automated review before submission  </Td>
                                <Td><img src={done} width={'20px'} alt="" /></Td>
                               
                            </Tr>
                             <Tr>
                                <Td>Automated review before submission </Td>
                                <Td><img src={done} width={'20px'} alt="" /></Td>
                               
                            </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>
        </div>
    </div>
    </DIV>
}
export default About

const DIV=styled.div`
#maincontainer{
    margin-top: 60px;
    padding-top:8%;
    
}
#maincontainerdiv{
   
     width: 90%;
      margin: auto;
    text-align: left;
}
#firsthead{
    font-size:30px;
}
#secondhead{
    font-size:25px;
}
.imgwidth{
    width:200px;
    margin-right:100px;
}
.lite{
    font-size:20.48px;
}
#yellowhead{
    padding: 18px 15px;
    background-color: #FCFFA7
}
#tabletd img{
    width:20px
}
#firstgrid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
     gap: 40px;
}
#midgrid{
    display: grid;
   grid-template-columns:repeat(3,1fr);
    gap: 40px;
    background-color: #E1BB23;
    padding:20px 30px;
}
#gridsecond{
    display: grid;
    grid-template-columns: repeat(6,1fr);
     gap: 40px;
     padding:30px 30px;
}
@media screen and (min-width: 601px) and (max-width: 1157px){
    #firstgrid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
     gap: 40px;
}
#midgrid{
    display: grid;
   grid-template-columns:repeat(3,1fr);
    gap: 40px;
    background-color: #E1BB23;
    padding:20px 30px;
}
#gridsecond{
    display: grid;
    grid-template-columns: repeat(3,1fr);
     gap: 40px;
     padding:30px 30px;
}
}
@media screen and (min-width: 470px) and (max-width: 601px){
    #firsthead{
    font-size:25px;
}
#secondhead{
    font-size:20px;
}
    #firstgrid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
     gap: 40px;
}
#midgrid{
    display: grid;
   grid-template-columns:repeat(1,1fr);
    gap: 40px;
    background-color: #E1BB23;
    padding:20px 30px;
}
#gridsecond{
    display: grid;
    grid-template-columns: repeat(2,1fr);
     gap: 40px;
     padding:30px 30px;
}
}
@media screen and (max-width: 470px){
    #firsthead{
    font-size:25px;
}
#secondhead{
    font-size:20px;
}
    #firstgrid{
    display: grid;
    grid-template-columns: repeat(1,1fr);
     gap: 40px;
}
#midgrid{
    display: grid;
   grid-template-columns:repeat(1,1fr);
    gap: 40px;
    background-color: #E1BB23;
    padding:20px 30px;
}
#gridsecond{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    margin:auto;
     gap: 40px;
     padding:30px 30px;
}
#gridsecond img{
    margin:auto;
}
}
`