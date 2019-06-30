import React from "react"
import { Container } from 'reactstrap';

import styles from '../styles/orientation.module.css';

import finePrintImage from '../images/admissions-fine-print.png';

const Orientation = () => {
    return (
        <section className={styles.orientationSection}>
            <Container>
                <h2>New Class/Orientation</h2>
                <hr />

                <div className={styles.orientationTable}>
                    <div>
                        <h4>New Class Orientation @ 9AM</h4>
                        <p>December 20</p>
                        <p>January 31</p>
                        <p>Febuary 28</p>
                        <p>March 28</p>
                        <p>April 25</p>
                        <p>May 30</p>
                        <p>June 27</p>
                        <p>July 25</p>
                        <p>August 29</p>
                        <p>September 26</p>
                        <p>October 31</p>
                        <p>November 21</p>
                    </div>
                    <div>
                        <h4>New Class Starts 2019</h4>
                        <p>January 7, 14, 21</p>
                        <p>Febuary 4, 11, 18</p>
                        <p>March 4, 11, 18</p>
                        <p>April 1, 8, 15</p>
                        <p>May 6, 13, 20</p>
                        <p>June 3, 10, 17</p>
                        <p>July 1, 8, 15</p>
                        <p>August 5, 12, 19</p>
                        <p>September 9, 16</p>
                        <p>October 7, 14, 21</p>
                        <p>November 4, 18</p>
                        <p>December 2, 9, 16</p>
                    </div>
                </div>
                <p>* Class Orientation is mandatory for all new students on or before signing the enrollment agreement. Please bring the follwing: Driver's License, Social Security Card, High School Diploma/GED</p>
                <p>KCK Beauty and Barber offer the following affordable programs of Study:</p>
                <ul>
                    <li>Barber: 1200 Hours; Program Cost: $12,875.00</li>
                    <li>Cosmetology: 1200 Hours; Program Cost: $12,875.00</li>
                    <li>Full Specialist: 600 Hours; Program Cost: $6,980.00</li>
                    <li>Instructor: 600 Hours; Program Cost: $4,750.00</li>
                    <li>Manicure: 240 Hours; Program Cost: $3,175.00</li>
                    <li>Skin Care Specialist: 260 Hours; Program Cost: $3,530.00</li>
                </ul>
                <p className={styles.removeMargin}>Financial Aid is available for Cosmetology Students who qualify.</p>
                <p className={styles.removeMargin}>Federal School Code: 042768</p>
                <p className={styles.removeMargin}>Day and Evening Hours available to accommodate Full and Part time Schedules</p>
                <p>Admission office is open M-F 8:30-4:30. Please call to schedule a tour.</p>

                <h5><u>Additional Disclosures</u></h5>
                <p className={styles.removeMargin}>Reporting Period 2018</p>
                <p className={styles.removeMargin}>Graduation Rate - 80.00%</p>
                <p className={styles.removeMargin}>Placement Rate - 87.50%</p>
                <p className={styles.removeMargin}>Licensure Rate - 80.00%</p>

                <img className={styles.finePrint} src={finePrintImage} alt=""/>
            </Container>
        </section>
    )
}

export default Orientation