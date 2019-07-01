import React from "react"
import { Container } from 'reactstrap';


const FinancialAssistance = () => {
    return (
        <section>
            <Container>
                <h2 style={{textAlign: "center"}}>Financial Assistance</h2>
                <hr />

                <p>KCK offers quality education that is affordable. Our financial director will sit down with students and explain a monthly payment plan option. This option allows students to make a down payment at time of enrollment and make monthly payments until balance is paid in full. The student also has the option to seek outside help from financial institutions to cover tuition cost.</p>
                <p>For those who qualify:</p>
                <ul>
                    <li>VA assistance</li>
                    <li>Vocational Rehabilitation</li>
                    <li>Financial Aid through Pell Grant & Stafford Loans</li>
                </ul>
            </Container>
        </section>
    )
}

export default FinancialAssistance