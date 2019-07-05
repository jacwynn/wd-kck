import React from "react"
import { Container } from 'reactstrap';

import styles from '../styles/programGeneralInfo.module.css';

const ProgramGeneralInfo = (props) => {
    return (
        <section className={styles.programGeneralInfoSection}>
            <Container>
                <h2>{props.content.title}</h2>
                <hr />
                <div className={styles.heroImage}>
                    <img src={props.content.images.heroImage} alt=""/>
                </div>

                {props.content.paragraphs.map((paragraph, index) => {
                    return <div><p key={index}>{paragraph}</p></div>
                })}

                {props.content.images.contentImages ?
                    <div className={styles.contentImages}>
                        {props.content.images.contentImages.map((image) => {
                            return <img src={image} alt=""/>
                        })}
                    </div>
                : ""}
            </Container>
        </section>
    )
}

export default ProgramGeneralInfo