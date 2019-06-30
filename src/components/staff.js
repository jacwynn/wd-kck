import React from "react"
import { Card, Container, CardBody } from 'reactstrap';


import styles from '../styles/staff.module.css';



const Admins = () => {
    return (
        <div>
            <h2 className={styles.headline}>Administrators</h2>
            <hr />
            <div className={styles.staff}>
                <Card className={styles.card}>
                    <CardBody>
                        <h3>Lisa Freeney</h3>
                        <small>Chief Executive Officer</small>
                        <small>School Director</small>
                        <p>Bachelor of Science</p>
                        <p>Computer Information Sys.</p>
                        <p>Florida A&M University</p>
                        <p>Tallahassee, FL.</p>
                    </CardBody>
                </Card>

                <Card className={styles.card}>
                    <CardBody>
                        <h3>Maggie Long</h3>
                        <small>Student Affairs</small>
                        <small>Accountant</small>
                        <p>Bachelor of Science</p>
                        <p>Accounting & Mathematics</p>
                        <p>Alabama State University</p>
                        <p>Montgomery, AL.</p>
                    </CardBody>
                </Card>

                <Card className={styles.card}>
                    <CardBody>
                        <h3>James Long</h3>
                        <small>Financial Director</small>
                        {/* <small>School Director</small> */}
                        <p>Bachelor of Science</p>
                        <p>Marketing and Management</p>
                        <p>Southern University</p>
                        <p>Baton Rouge, LA.</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

const Faculty = () => {
    return (
        <div>
            <h2 className={styles.headline}>Faculty</h2>
            <hr />
            <div className={styles.staff}>
                <Card className={styles.card}>
                    <CardBody>
                        <h3>Ericka Jackson</h3>
                        <small>Full Specialist</small>
                        <p><strong>Course(s) taught:<br/></strong>Manicure<br/>Skin Care Specialist<br/>Full specialist</p>
                        <p><strong>Education:</strong><br/>KCK Beauty & Barber Academy</p>
                        <p><strong>License Number:</strong><br/>FS896548</p>
                    </CardBody>
                </Card>

                <Card className={styles.card}>
                    <CardBody>
                        <h3>Michael Holt</h3>
                        <small>Barber and Cosmetology Instructor</small>
                        <p><strong>Course(s) taught:</strong><br/>Barber Program</p>
                        <p><strong>Education:</strong><br/>Florida Community College<br/>KCK Beauty & Barber Academy</p>
                        <p><strong>License Number:</strong><br/>BB53116, CL1260277</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

const Employees = () => {
    return (
        <div>
            <h2 className={styles.headline}>Staff</h2>
            <hr />
            <div className={styles.staff}>
                <Card className={styles.card}>
                    <CardBody>
                        <h3>James A. Long </h3>
                        <small>Computer Technician</small>

                        <p>Bachelor of Science</p>
                        <p>Detroit Institute of Technology</p>
                        <p>Mathematics and Physics</p>
                        <p>MBA</p>
                        <p>Wayne State University</p>
                        <p>Business Administration</p>
                        <p>Detroit, MI.</p>
                    </CardBody>
                </Card>

                <Card className={styles.card}>
                    <CardBody>
                        <h3>Neisha Butler</h3>
                        <small>Admission Director</small>
                        <p>Bethune Cookman University</p>
                        <p>Daytona Beach, FL.</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}





const Staff = () => {
    return (
        <section>
            <Container>
                <Admins />
                <Faculty />
                <Employees />
            </Container>
        </section>
    )
}

export default Staff