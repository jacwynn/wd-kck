import React from "react"
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import styles from '../styles/footer.module.css';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return(
            <Container fluid className={styles.footer}>
                <Row className={styles.footerRow}>
                    <Col className={styles.footerCol}>
                        <span>© Copyright {new Date().getFullYear()} KCK Beauty & Barber Academy Inc.</span>
                        <a href="/contact#contactForm" class="btn btn-danger">Request Info</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}