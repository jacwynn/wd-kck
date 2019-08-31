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
                        <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <FormGroup>
                                <Label for="exampleEmail">First Name</Label>
                                <Input type="text" name="firstName" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">Last Name</Label>
                                <Input type="text" name="lastName" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">Phone Number</Label>
                                <Input type="tel" name="phoneNumber" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">Address</Label>
                                <Input type="text" name="address" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">State</Label>
                                <Input type="text" name="state" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">City</Label>
                                <Input type="text" name="city" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">Zip Code</Label>
                                <Input type="text" name="zipCode" id="exampleEmail" />
                            </FormGroup> 

                            <FormGroup>
                                <Label for="exampleEmail">Questions or Comments</Label>
                                <Input type="textarea" name="questions" id="exampleEmail" />
                            </FormGroup> 
                        </Form>                       
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="danger" onClick={this.toggle}>Get Information</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}