import React from "react"
import { Container } from 'reactstrap';

import styles from '../styles/schoolCatalog.module.css';
import KCKCatalog from '../assets/KCKCatalog.pdf';

const Catalog = () => {
    return (
        <section className={styles.catalog}>
            <Container>
                <div class="panel panel-default text-center">
                    <ul>
                        <li class="list-group-item"><strong><a href={KCKCatalog} target="_blank">Catalog</a></strong></li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Catalog