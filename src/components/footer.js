import React, {Component} from "react"
import { Container, Row, Col, Button } from 'reactstrap';

  import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <Container fluid className={styles.footer}>
            <Row className={styles.footerRow}>
                <Col className={styles.footerCol}>
                    <span>Copyright © KCK Beauty & Barber Academy Inc.</span>
                    <Button color="danger">Request Info</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer