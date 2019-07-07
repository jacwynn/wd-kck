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
                            <td><strong>{props.costs.totalCost}</strong></td>
                        </tr>
                        <tr>
                            <td>Total Hours</td>
                            <td></td>
                            <td>{props.costs.totalHours}</td>
                        </tr>
                    </tbody>
                </Table>
                <h3>{props.costs.title} Textbooks</h3>
            </Container>
        </section>
    )
}

export default ProgramCostTable