import React from "react"
import { Container } from 'reactstrap';

import styles from '../styles/schoolCatalog.module.css';
import KCKCatalog from '../assets/KCKCatalog.pdf';

const SignupForm = () => {
    return (
        <section className={styles.catalog}>
            <Container>
                <form name="contact" id="contactForm" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" name="firstName" id="firstName"/>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" name="lastName" id="lastName"/>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" id="email"/>
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="text" class="form-control" name="phoneNumber" id="phoneNumber"/>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" name="address" id="address"/>
                    </div>
                    <div class="form-group">
                        <label>State</label>
                        <input type="text" class="form-control" name="state" id="state"/>
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" name="city" id="city"/>
                    </div>
                    <div class="form-group">
                        <label>Zip Code</label>
                        <input type="text" class="form-control" name="zipCode" id="zipCode"/>
                    </div>
                    <div class="form-group">
                        <label>Questions/Comments?</label>
                        <textarea type="type" class="form-control" name="comments" id="comments"/>
                    </div>
                    <input type="submit" value="Get Information" class="btn btn-danger"  />
                </form>
            </Container>
        </section>
    )
}

export default SignupForm