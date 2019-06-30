import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

  import styles from '../styles/heroImage.module.css';
  import image from '../images/kck_logo.png';

const HeroImage = () => {
    return (
        <section className={styles.heroImage}>
            <div className={styles.wrap}>
                <div className={styles.imageContainer}>
                    <img src={image} />
                </div>
                <div className={styles.textContainer}>
                    <h4>If you are looking to unleash your artistic and creative side while taking charge of your professional career in the Beauty and Barber industry. Look no further.</h4>
                </div>
            </div>
        </section>
    )
}

export default HeroImage