import React from "react"
import { Container } from 'reactstrap';

const Textbooks = props => {
    return (
        <section>
            <Container>
                <ul>
                    {props.books.map((book) => {
                        return <li><a href={book.bookLink} target="_blank">{book.bookName}</a></li>
                    })}
                </ul>
            </Container>
        </section>
    )
}

export default Textbooks