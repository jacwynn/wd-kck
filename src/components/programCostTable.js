import React from "react"
import { Container, Table, Row, Col, Button } from 'reactstrap';

import styles from '../styles/programCostTable.module.css';

const ProgramCostTable = props => {
    return (
        <section className={styles.programCostTableSection}>
            <Container>
                <h2>Program Cost</h2>
                <hr />

                <Table striped>
                    <tbody>
                        <tr>
                            <td>Tuition</td>
                            <td></td>
                            <td>{props.costs.tuition}</td>
                        </tr>
                        <tr>
                            <td>Application Fees (non-refundable):</td>
                            <td></td>
                            <td>{props.costs.appFees}</td>
                        </tr>
                        <tr>
                            <td>Registration Fees (non-refundable):</td>
                            <td></td>
                            <td>{props.costs.regFees}</td>
                        </tr>
                        <tr>
                            <td>Books / Kit/School Shirt (non-refundable):</td>
                            <td></td>
                            <td>{props.costs.supplies}</td>
                        </tr>
                        <tr>
                            <td>State Fees</td>
                            <td></td>
                            <td>{props.costs.stateFees}</td>
                        </tr>
                        <tr>
                            <td>HIV Fees</td>
                            <td></td>
                            <td>{props.costs.hivFees}</td>
                        </tr>
                        <tr>
                            <td>Total Program Cost</td>
                            <td></td>
                            <td>{props.costs.totalCost}</td>
                        </tr>
                        <tr>
                            <td>Total Hours</td>
                            <td></td>
                            <td>{props.costs.totalHours}</td>
                        </tr>
                    </tbody>
                </Table>
                <h3>Barber Textbooks</h3>
                <ul>
                    <li><a href="https://www.google.com/search?q=Milady%E2%80%99s+Standard+Professional+Barbering+Bundle(Textbook%2C+workbook)%3B+2011+5th+Edition&oq=Milady%E2%80%99s+Standard+Professional+Barbering+Bundle(Textbook%2C+workbook)%3B+2011+5th+Edition&aqs=chrome..69i57.605j0j7&sourceid=chrome&es_sm=91&ie=UTF-8" target="_blank">Milady’s Standard Professional Barbering Bundle(Textbook, workbook); 2011 5th Edition</a></li>
                    <li><a href="https://www.google.com/search?q=ISBN-13%3A+9781133023975&oq=ISBN-13%3A+9781133023975&aqs=chrome..69i57j69i58.814j0j9&sourceid=chrome&es_sm=91&ie=UTF-8#q=ISBN:+13:+9780538457675" target="_blank">ISBN: 13: 9780538457675; $226.95</a></li>
                    <li><a href="https://www.onetonline.org/link/summary/39-5011.00" target="_blank">Onetonline.org - SOC CODE: 39-5011</a></li>
                </ul>
            </Container>
        </section>
    )
}

export default ProgramCostTable