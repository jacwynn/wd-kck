import React from "react"
import { Container } from 'reactstrap';

import styles from '../styles/netPriceCalculator.module.css'

const NetPriceCalculator = () => {
    return (
        <section className={styles.netPriceCalcContainer}>
            <Container>
                <iframe src="https://kckbbacademy.org/npcalc.htm"/>
            </Container>
        </section>
    )
}

export default NetPriceCalculator