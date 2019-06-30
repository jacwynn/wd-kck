import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

import styles from '../styles/contactMap.module.css';

const ContactMap = () => {
    return (
        <section>
            <Container>
                <div className={styles.mapContactInfo}>
                    <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=10592%20Balormal%20Circle%20E.%20Suite%201%20Jacksonville%2C%20FL.%2032218&key=AIzaSyCqoOvLwtAdTNoZJDcdi7gUAI_U4M-_xco"></iframe>
                    <div className={styles.mapContactAdditionalInfo}>
                        <h3>Contact Details</h3>
                        <div>
                            <p>
                                <i class="fa fa-phone"></i> 
                                <abbr title="Phone">Phone</abbr>: (904)516-9280
                            </p>
                            <p>
                                <i class="fa fa-phone"></i> 
                                <abbr title="Phone">Fax</abbr>: (904)551-2361
                            </p>
                            <p>
                                <i class="fa fa-envelope-o"></i> 
                                <abbr title="Email">Email</abbr>: <a href="mailto:name@example.com">kckbeautybarberacademy@yahoo.com</a>
                            </p>
                            <p>
                                <i class="fa fa-clock-o"></i> 
                                Phone calls and emails are retrieved and returned within 24 hours
                            </p>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/kckbeautybarberacademy"><i style={{color: "#dc3545"}} class="fa fa-facebook-square fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i style={{color: "#dc3545"}} class="fa fa-google-plus-square fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/kckbbacademy"><i style={{color: "#dc3545"}} class="fa fa-instagram fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactMap