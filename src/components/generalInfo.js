import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

import styles from '../styles/generalInfo.module.css';

import banner from '../images/banners/admission-banner.jpg';

const GeneralInfo = () => {
    return (
        <section className={styles.generalInfoSection}>
            <Container>
                <h2>Admissions</h2>
                <hr />
                <div className={styles.banner}>
                    <img src={banner} alt="KCK Admission Banner"/>
                </div>
                <div className={styles.paragraph}>
                    <p>The School only admits students beyond the age of compulsory school attendance in the state of Florida. Students must:</p>
                    <ul>
                        <li>Be 16 years of age to attend all programs.</li>
                        <li>Complete the Admission Application and pay nonrefundable application fee of $50, and a nonrefundable registration fee of $100.</li>
                        <li>Have a high school diploma or GED.</li>
                        <li>Have a parent or legal guardian with them if they are under the age of 18 and both must fill out and sign all enrollment consent forms.</li>
                        <li>Present a valid Florida I.D., U.S. passport or birth certificate at time of enrollment.</li>
                        <li>Provide verification of attendance to another cosmetology or barbering institution.</li>
                        <li>Attend Orientation and sign an Enrollment Agreement.</li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default GeneralInfo