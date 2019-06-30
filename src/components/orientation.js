import React from "react"
import { Container } from 'reactstrap';

import styles from '../styles/orientation.module.css';

const Orientation = () => {
    return (
        <section>
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
            </Container>
        </section>
    )
}

export default Orientation