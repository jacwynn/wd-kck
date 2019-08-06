import React from "react"
import { Container } from 'reactstrap';


const FinancialAssistance = () => {
    return (
        <section>
            <Container>
                <h2 style={{textAlign: "center"}}>Financial Aid</h2>
                <hr />

                <p>This page contains disclosure information required for compliance of Title IV regulations</p>
                <p dangerouslySetInnerHTML={{__html: 'FREE application for Federal Student Aid can be found at <a href="http://www.fafsa.ed.gov" target="_blank">www.fafsa.ed.gov</a>'}}></p>
                <p>KCK Beauty & Barber Academy School code is <strong>042768</strong></p>
                <p dangerouslySetInnerHTML={{__html: '<a href="FAContact_Info.docx" target="_blank"> ASSISTANCE IN OBTAINING INSTITUTIONAL OR FINANCIAL AID INFORMATION</a>'}}></p>

                <div>
                    <p>Students seeking Financial Aid, Please reference the following resources:</p>
                    <ul>
                        <li dangerouslySetInnerHTML={{__html: '<a href="https://nces.ed.gov/collegenavigator/" target="_blank"><u>College Navigator</u></a>'}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<a href="https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html" target="_blank"><u>FERPA(Family Educational Rights &amp; Privacy Act)</u></a>'}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<a href="https://www.nslds.ed.gov/nslds/nslds_SA/" target="_blank"><u>NSLDS-My Financial Aid History</u></a>'}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<a href="https://studentloans.gov/myDirectLoan/index.action" target="_blank"><u>Federal Direct Loans</u></a>'}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<a href="https://studentaid.ed.gov/sa/fafsa/next-steps/entrance-counseling" target="_blank"><u>Entrance Counseling &amp; Sign Master Promissory Note (MPN)</u></a>'}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<a href="https://studentaid.ed.gov/sa/" target="_blank"><u>Parent Plus Loan</u></a>'}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<a href="https://studentloans.gov/myDirectLoan/counselingInstructions.action?counselingType=exit" target="_blank"><u>Exit Counseling</u></a>'}}></li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default FinancialAssistance