import React from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';

import styles from '../styles/services.module.css';

import kckImage from '../images/kck_logo.png';


export default class Services extends React.Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }

    render() {
        return (
            <section>
                <Container>
                    <h2>Services</h2>
                    <hr />
                    <p>All students enrolled at KCK Beauty and Barber Academy, Inc. has the opportunity to perfom a variety of hair and spa services to clients in a salon/spa setting. These services are offered to the public at a discounted rate. The services are supervised by our qualified and experienced instructors.</p>
                    <div className={styles.imageContainer}>
                        <img src={kckImage} alt=""/>
                        <h3>Salon/Spa Service Hours</h3>
                        <p>Monday - Friday 10:30am - 3:00pm</p>
                        <p>Walk in and scheduled appointments are welcomed</p>
                    </div>

                    <div>
                        <Nav tabs>
                            <NavItem className={styles.navItem}>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>
                                Barber Services
                                </NavLink>
                            </NavItem>
                            <NavItem className={styles.navItem}>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}>
                                Cosmetololgy Services
                                </NavLink>
                            </NavItem>
                            <NavItem className={styles.navItem}>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}>
                                Manicure Services
                                </NavLink>
                            </NavItem>
                            <NavItem className={styles.navItem}>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}>
                                Skin Care Services
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent className={styles.servicesTabContent} activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row className={styles.servicesTabPanel}>
                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Haircut, Shave, and Hair Styling</h5>
                                            <ListGroupItem>
                                                <strong>Shampoo: Add to any style/haircut</strong>
                                                <p>$3.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Bang Trim</strong>
                                                <p>$3.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Hair Cut</strong>
                                                <p>$8.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Beard/Mustache Trim</strong>
                                                <p>$3.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Outline/Tape up</strong>
                                                <p>$8.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Hot Towel Facial Shave</strong>
                                                <p>$12.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Kojack Head Shave</strong>
                                                <p>$12.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Haircut and blow dry</strong>
                                                <p>$14.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Perm Rod Set</strong>
                                                <p>$18.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Basic Wrap</strong>
                                                <p>$12.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Roller Set</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Shampoo and Blow Dry</strong>
                                                <p>$10.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Shampoo, Press and Curl</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Updo</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>

                                        </ListGroup>
                                    </Col>

                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Chemical Services (including shampoo and basic style)</h5>
                                            <ListGroupItem>
                                                <strong>Permanent Waves</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Texturizer</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Virgin Relaxer</strong>
                                                <p>$35.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Relaxer Retouch</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Curl</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                        <ListGroup>
                                            <h5>Special and Treatment Services</h5>
                                            <ListGroupItem>
                                                <strong>Permanent Waves</strong>
                                                <p>$5.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Texturizer</strong>
                                                <p>$5.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>

                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Hair Coloring</h5>
                                            <ListGroupItem>
                                                <strong>Semi-Permanent</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Permanent</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Demi</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Highlights or Lowlights</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Lightener and Tone</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Virgin Tint</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Retouch</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Foils</strong>
                                                <p>$35.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Corrective Color (starts at):</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Additonal Color</strong>
                                                <p>$10.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row className={styles.servicesTabPanel}>
                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Haircut, Shave, and Hair Styling</h5>
                                            <ListGroupItem>
                                                <strong>Shampoo: Add to any style/haircut</strong>
                                                <p>$3.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Bang Trim</strong>
                                                <p>$3.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Hair Cut</strong>
                                                <p>$8.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Haircut and Blow Dry</strong>
                                                <p>$14.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Perm Rod Set</strong>
                                                <p>$18.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Basic Wrap</strong>
                                                <p>$12.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Roller Set</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Shampoo and Blow dry</strong>
                                                <p>$10.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Shampoo, Press and Curl</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Shampoo and Flat Iron</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Updo</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>

                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Chemical Services (including shampoo and basic style)</h5>
                                            <ListGroupItem>
                                                <strong>Permanent Waves</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Texturizer</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Virgin Relaxer</strong>
                                                <p>$35.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Relaxer Retouch</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Curl</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                        <ListGroup>
                                            <h5>Special and Treatment Services</h5>
                                            <ListGroupItem>
                                                <strong>Deep Hair Conditioning</strong>
                                                <p>$5.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Scalp Treatment</strong>
                                                <p>$5.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Braids (Hair not included)</strong>
                                                <p>$35.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Cornrows (Hair not included)</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Twist - Fullhead</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Retwist Locks</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Weaves (Hair not included)</strong>
                                                <p>$65.00 and up</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>

                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Hair Coloring</h5>
                                            <ListGroupItem>
                                                <strong>Semi-Permanent</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Permanent</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Demi</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Highlights or Lowlights</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Lightener and Tone</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Virgin Tint</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Retouch</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Foils</strong>
                                                <p>$35.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Corrective Color (starts at):</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Additonal Color</strong>
                                                <p>$10.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row className={styles.servicesTabPanel}>
                                    <Col sm="4"></Col>
                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Nail Services</h5>
                                            <ListGroupItem>
                                                <strong>Basic Manicure</strong>
                                                <p>$8.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Basic Pedicure</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Basic Mani/Pedi Combo</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Spa Pedicure</strong>
                                                <p>$18.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Spa Mani/Pedi Combo</strong>
                                                <p>$23.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Polish Change</strong>
                                                <p>$3.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Nail Art</strong>
                                                <p>$2.00 per nail</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Soakable Gel</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Fill In Soakable Gel</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Acrylics Full Set</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Acrylics Fill</strong>
                                                <p>$8.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>French Add-on</strong>
                                                <p>$3.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Pink and White Set</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Pink and White Fill</strong>
                                                <p>$15.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Soak Off</strong>
                                                <p>$5.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm="4"></Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row className={styles.servicesTabPanel}>
                                <Col sm="4"></Col>
                                    <Col sm="4">
                                        <ListGroup>
                                            <h5>Skin Services</h5>
                                            <ListGroupItem>
                                                <strong>Deep Cleanse Facial</strong>
                                                <p>$20.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Microdermabrasion</strong>
                                                <p>$30.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>European Facial</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Eyebrow Arch/Wax</strong>
                                                <p>$6.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Chin Wax</strong>
                                                <p>$$6.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Lip Wax</strong>
                                                <p>$6.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Eyebrow Tinting</strong>
                                                <p>$8.00</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Hair Removal</strong>
                                                <p>$15.00 and up</p>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Makeup</strong>
                                                <p>$25.00</p>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm="4"></Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Container>
            </section>
        )
    }
}