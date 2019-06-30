import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

import styles from '../styles/contentBlock.module.css';

const ContentBlock = (props) => {
    return (
        <section className={styles.contentBlockSection}>
            <Container>
                <h2 className={styles.headline}>{props.title}</h2>
                <hr />
                {props.image ? 
                    <div className={styles.hasImage}>
                        <img src={props.image} className={styles.image} alt="KCK VA Benefits"/>

                        <div>
                            {props.paragraphs.map((paragraph, index) => {
                                return <p key={index}>{paragraph}</p>
                            })}
                        </div>
                    </div>
                    :
                    <div>
                        {props.paragraphs.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>
                        })}
                    </div>
                }
                {props.horizontalRule ? <hr className={styles.horizontalRule} /> : ""}
            </Container>
        </section>
    )
}

export default ContentBlock