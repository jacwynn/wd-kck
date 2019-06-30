import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

import styles from '../styles/contentBlock.module.css';

const ContentBlock = (props) => {
    return (
        <section className={styles.contentBlockSection}>
            <Container>
                <h2 className={styles.headline}>{props.title}</h2>
                <hr />
                {props.paragraphs.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
            </Container>
        </section>
    )
}

export default ContentBlock