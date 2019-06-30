import React from "react"
import { Card, Container, CardImg, CardBody,
    CardTitle } from 'reactstrap';

import styles from '../styles/programs.module.css';

// Images
import barberIMG from '../images/hp-barber.jpeg'
import cosmetologyIMG from '../images/hp-cosmetology.jpg';
import skinCareIMG from '../images/hp-skin_care.jpg';
import manicureIMG from '../images/hp-manicure.jpg';
import specialistIMG from '../images/hp-specialist.jpg';
import instructorIMG from '../images/hp-instructor.jpg';

const Programs = () => {
    return (
        <section className={styles.programSection}>
            <Container>
            <h2 className={styles.headline}>Welcome to KCK Beauty & Barber Academy Inc.</h2>
                <hr />
                <div className={styles.programs}>
                    <a href="#">
                        <Card className={styles.card}>
                            <CardImg top width="100%" src={barberIMG} alt="KCK Barber Program" />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Barber Program</CardTitle>
                            </CardBody>
                        </Card>
                    </a>

                    <a href="#">
                        <Card className={styles.card}>
                            <CardImg top width="100%" src={cosmetologyIMG} alt="KCK Cosmetology Program" />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Cosmetology Program</CardTitle>
                            </CardBody>
                        </Card>
                    </a>

                    <a href="#">
                        <Card className={styles.card}>
                            <CardImg top width="100%" src={skinCareIMG} alt="KCK Skin Care Program" />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Skin Care Program</CardTitle>
                            </CardBody>
                        </Card>
                    </a>

                    <a href="#">
                        <Card className={styles.card}>
                            <CardImg top width="100%" src={manicureIMG} alt="KCK Manicure Program" />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Manicure Program</CardTitle>
                            </CardBody>
                        </Card>
                    </a>

                    <a href="#">
                        <Card className={styles.card}>
                            <CardImg top width="100%" src={specialistIMG} alt="KCK Full Specialist Program" />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Full Specialist Program</CardTitle>
                            </CardBody>
                        </Card>
                    </a>

                    <a href="#">
                        <Card className={styles.card}>
                            <CardImg top width="100%" src={instructorIMG} alt="KCK Instructor Program" />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Instructor Program</CardTitle>
                            </CardBody>
                        </Card>
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default Programs