import React from 'react';

function Faq() {

    const myStyle = {
        // color: "white",
        // backgroundColor: "DodgerBlue",

        textAlign: 'left',
        padding: "00px",
        fontFamily: "Sans-Serif"
    };

    return (
        <div style={{width:'90%',margin:'auto',paddingTop:'140px',textAlign:'left'}}>
            <nav >
               
                
                <div style={{display:'flex',gap:'10px'}}>
                    <button style={{backgroundColor:'#9ca1a4',padding:'3px 15px',borderRadius:'5px',color:'white'}} >How its Work</button>
                    <button style={{backgroundColor:'#9ca1a4',padding:'3px 15px',borderRadius:'5px',color:'white'}} > Price</button>
                    <button style={{backgroundColor:'#9ca1a4',padding:'3px 15px',borderRadius:'5px',color:'white'}} >Help</button>
                    <button style={{backgroundColor:'#9ca1a4',padding:'3px 15px',borderRadius:'5px',color:'white'}} >Get Started</button>
                </div>
            </nav>
            <br/>
            <div style={myStyle} class="paragra">
                <h1 style={{fontSize:'18px'}}><b>Frequently asked questions</b></h1>
                <h2> What makes TaxTim the fastest, easiest way to submit your tax return?</h2>
                <h3>What is TaxTim?</h3>
                <p>TaxTim is your very own digital tax assistant. He is here to help you complete and submit your tax return as quickly and easily as possible to SARS.
                    Think of him as an all-in-one tax practitioner in a box :)</p>

                <h3>How does TaxTim work?</h3>
                <p>After registering on the TaxTim website, TaxTim will appear on screen and start asking you questions about your salary, expenses and other incomes. Much like a WhatsApp chat, the conversation is interactive and will explain all those complicated tax terms in simple to understand plain language that absolutely everyone can follow. After the chat TaxTim fills in your tax return
                    forms instantly and submits them to SARS in just a click!</p>
                <h3>Do I need to know anything about tax to use TaxTim? </h3>
                <p>Not at all. TaxTim is built for absolutely everyone and zero tax knowledge is required to use it. TaxTim will guide
                    you step-by-step to get your tax returns done right, first time.</p>
                <h3>How is TaxTim different to SARS eFiling?</h3>
                <p>SARS has created one of the best systems in the world for submitting tax returns online. Think of TaxTim as a layer on top of SARS eFiling,
                    designed to help you better and make life easier:</p>
                    <br/>
                <table>
                    <tr>
                        <th></th>
                        <th>SARS eFiling</th>
                        <th>TaxTim</th>
                    </tr>

                    <tr>
                        <td>Functions</td>
                        <td>Submit tax forms
                            Provide assessments</td>
                        <td>Submit tax forms
                            Explain assessments
                            Find all possible deductions
                            Optimize tax payable
                            Increase potential refund</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>Tax terminology</td>
                        <td>Plain language + explanations</td>
                    </tr>
                    <tr>
                        <td>Help provided</td>
                        <td>SARS website
                            Call centre operator
                            SARS branch</td>
                        <td>Friendly tax practitioners and CA's via online helpdesk
                            In-context help and explanations
                            7,000+ tax articles and calculators</td>
                    </tr>
                    <tr>
                        <td>Checking your submission</td>
                        <td>Basic compliance checks</td>
                        <td>Basic compliance checks
                            Potential tax deduction checks
                            Multiple system checks to detect errors</td>
                    </tr>
                    <tr>
                        <td>Audit requests</td>
                        <td>Sent to you</td>
                        <td>Sent to you
                            Explained to you</td>
                    </tr>


                </table>
                <br/>
                <br/>
                <h2 style={{fontSize:'18px'}}><b>Aren't my taxes too complicated for TaxTim to handle?</b></h2>
                <p>
                No individual taxpayer or tax situation is too complicated for us to handle. The only section we do not complete for people is the Farming section, which we hope doesn't affect too many of you. So from foreign dividends to local business, from independent contractors to capital gains - you name it - TaxTim is perfectly suited to take care of any tax situation and complete and submit your tax return to SARS, whether it's simple or complicated.
                </p>
                <br/>
                <br/>
                <h2 style={{fontSize:'18px'}}><b>Is it easy to switch from eFiling to TaxTim?</b></h2>
                <p>
                Yes it is. Connecting TaxTim to your eFiling profile takes less than a minute (on average) and once connected you can import your saved IRP5s from eFiling (saves you time), submit your completed tax returns to eFiling in a click, get your ITA34 assessments and letters (we'll explain what these mean when we send them to you) and upload supporting documents. All your TaxTim submissions are copied onto eFiling automatically so you can go back to eFiling should you ever wish to.
                </p>
                <br/>
                <br/>
                <h2 style={{fontSize:'18px'}}><b>How much does it cost?</b></h2>
                <p>
                For our latest pricing, please see our pricing page. Please note the price quoted is per tax return and is a once-off price, NOT a subscription or monthly cost. Therefore, in most cases where you only need to file a tax return once in a year, then the cost will be one single payment. If you are behind in your tax return filings and you need the prior year and current year filed, you will need to pay the fee twice (two tax returns).

We have partnerships with some of South Africa's biggest brands, so look out for discounts that may apply to you - some offer TaxTim for free! First time users currently qualify for 15% off TaxTim if they pay upfront.
                </p>
            </div>


        </div>





    )
}
export default Faq;