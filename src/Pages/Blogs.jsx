import React from "react";
import image1 from '../Images/Screenshot (1236).png'
import image2 from '../Images/Screenshot (1237).png'
import styled from "styled-components";

const Blog = () => {
    return (
        <DIV >
            <div>
                <h2 id='head'><b>Latest Posts in TaxGenius Blog</b></h2>

            </div>

            <h4 style={{ fontSize: '20px' }}>When to file a dormant return</h4>
            <div id='maindiv'>
                <div className="para">
                    <br />
                    <p>
                        
                        Are you confused about whether your company should file a dormant
                        return or a normal ITR14 for companies? It's understandable -
                        dormancy can be a tricky concept to navigate. It's important to
                        understand that the type of tax return you need to file depends on
                        when your company became dormant. But don't worry, we're here to
                        help you figure it out!
                    </p>

                    <br />
                    <br />


                    <h2 style={{ fontSize: '15px' }}><b>When to file a dormant return?</b></h2>
                    <hr></hr>
                    <div class="para">
                       
                            <p>
                                The answer here depends on when the company became dormant. If the
                                company was dormant for the entire tax year year (i.e there was no
                                trading activity for the full 12 months) then the company must file
                                a dormant return. This could happen if you started a company, but
                                never actually did anything with it. If a company traded for a few
                                months during the tax year and then became dormant, it would not be
                                considered as dormant for the full tax year. This could happen if
                                you started trading with your company but then stopped 8 months into
                                the tax year due to personal reasons, such as changes in your focus
                                or priorities. So, your company would only be considered dormant for
                                the last 4 months of the tax year, rather than the full 12 month
                                period. In such a case, you will be required to submit a normal
                                ITR14 for actively trading companies. This tax return must declare
                                the income your company earned and the expenses it incurred during
                                its active period. However, if your company remains dormant, you can
                                file a dormant return for the next tax year. If you are never going
                                to trade through your company, it may be best to de-register it. You
                                can follow the de-registration steps in our blog here. If a company
                                traded for a few months during the tax year and then became dormant,
                                it would not be considered as dormant for the full tax year. This
                                could happen if you started trading with your company but then
                                stopped 8 months into the tax year due to personal reasons, such as
                                changes in your focus or priorities. So, your company would only be
                                considered dormant for the last 4 months of the tax year, rather
                                than the full 12 month period. In such a case, you will be required
                                to submit a normal ITR14 for actively trading companies. This tax
                                return must declare the income your company earned and the expenses
                                it incurred during its active period. However, if your company
                                remains dormant, you can file a dormant return for the next tax
                                year. If you are never going to trade through your company, it may
                                be best to de-register it. You can follow the de-registration
                            </p>
                        

                    </div>
                   <br/>
                    <br />
                    <div class="para1">
                        <>
                            <h2 style={{ fontSize: '15px' }}>
                                {" "}
                                <b> Why have I received a SARS refund, before filing my tax return?</b>
                            </h2>
                            <hr></hr>
                            <p>Updated 24 November 2022</p>
                            <p>
                                This year, SARS has once again ‘auto-assessed’ a large number of
                                taxpayers. They have done this using data that they have received
                                from 3rd parties, such as employers, financial institutions, medical
                                schemes and retirement fund administrators. If you have been
                                auto-assessed, you should receive an email or SMS from SARS within
                                the first few weeks of July. If your auto-assessment shows that you
                                are due a tax refund, we are seeing SARS pay out these refund within a few days of issuing the auto-assessment.
                                <br/>
                                Remember, your auto-assessment will not include all of your tax deductions which you may be able to claim, nor any additional income (e.g freelance, rental) you may have earned. For more on auto-assessments, please read here.
                                <br/>
                                Even if SARS paid your refund already, you can still go ahead and submit a tax return, if you have additional expenses to claim or extra income to declare. You can only resubmit your return within 40 days from the date of your original auto assessment was issued by SARS. Should you miss this date, you can only get SARS to take your deductions / income into account by filing a dispute with SARS, please see our Guide to lodge a dispute with SARS
                                <br/>
                                After you submit a return, it is likely that SARS will request supporting documents to verify the amounts you claimed or declared in your tax return. If they are satisfied with your documents, they should issue you a new assessment (ITA34) and in the case where you claimed expenses (e.g. home office, donations, wear and tear, additional medical bills, travel) they should pay you out again. Bonus!
                                <br/>
                                <br/>
                                <b>IMPORTANT:</b> It is your responsibility to ensure you report all of your income and expenses accurately to SARS.  If you accept your tax refund and fail to file a tax return and declare some of your income, SARS could levy a penalty of up to 200% of the tax payable (plus interest!) should they find out about it later.


                            </p>
                        </>
                        <hr></hr>

                        <></>
                    </div>
                </div>
                <div id='imgdiv'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
            </div>
        </DIV>
    );
};
export default Blog;

const DIV = styled.div`
   
        padding-top:150px;
        margin:auto;
        width:90%;
        text-align:left;
        #head{
            font-size:27px;
        }
        #maindiv{
            display:flex;
            flex-direction:row;
        }
        .para{
            width:80%;
            text-align:justify;
            padding:0px 20px;
        }
        
    
`
