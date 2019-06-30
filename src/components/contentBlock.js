import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

import styles from '../styles/contentBlock.module.css';

const ContentBlock = () => {
    return (
        <section className={styles.contentBlockSection}>
            <Container>
                <h2 className={styles.headline}>Why KCK?</h2>
                <hr />
                <p>At KCK Beauty & Barber Academy Inc., we recognize that the demand for creative and well trained professionals in the beauty and barber industry is growing daily. We offer dynamic programs in a modern facility to successfully train and prepare you for a limitless career. Our students not only learn technical skills needed in their chosen field of study but interpersonal, professional and business fundamentals as well. Our Instructors are well versed in the use of innovative equipment and effective techniques to present and enhance the school’s state approved curriculum.</p>
                <p>KCK Beauty & Barber Academy Inc. is the place where students are able to pursue their passion, unleash their skills, creativity and be equipped with the tools and knowledge required to succeed.</p>
            </Container>
        </section>
    )
}

export default ContentBlock