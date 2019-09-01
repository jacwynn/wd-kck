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
                        <Button color="danger" onClick={this.toggle}>Request Info</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Request Information Form</ModalHeader>
                    <ModalBody>
                        <form name="SignUpForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="bot-field" />
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" class="form-control" name="firstName"/>
                            </div>
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" class="form-control" name="lastName"/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="email"/>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="tel" class="form-control" name="phoneNumber"/>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="tel" class="form-control" name="address"/>
                            </div>
                            <div class="form-group">
                                <label>State</label>
                                <input type="tel" class="form-control" name="state"/>
                            </div>
                            <div class="form-group">
                                <label>City</label>
                                <input type="tel" class="form-control" name="city"/>
                            </div>
                            <div class="form-group">
                                <label>Zip Code</label>
                                <input type="text" class="form-control" name="zipCode"/>
                            </div>
                            <div class="form-group">
                                <label>Questions/Comments?</label>
                                <textarea type="type" class="form-control" name="comments"/>
                            </div>
                            <ModalFooter>
                                <Button type="submit" color="danger" onClick={this.toggle}>Get Information</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}