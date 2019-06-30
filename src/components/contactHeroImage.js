import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

import styles from '../styles/contactHeroImage.module.css';

import contactImageLeft from '../images/contact-image-left.jpeg';
import contactImageRight from '../images/contact-image-right.jpeg';

const ContactHeroImage = () => {
    return (
        <section>
            <Container>
                <h2>Contact Us</h2>
                <hr />
                <div className={styles.imageContainer}>
                    <img src={contactImageLeft} alt=""/>
                    <img src={contactImageRight} alt=""/>
                </div>
            </Container>
        </section>
    )
}

export default ContactHeroImage