import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import Rating from "./Rating";

function Book({book}) {

    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/book/${book._id}`}>
                <Card.Img src={book.image}></Card.Img>
            </a>

            <Card.Body>
                <a href={`/book/${book._id}`}>
                    <Card.Title as="div">
                        <strong>
                            {book.name}
                        </strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating rating={book.rating}/>
                    </div>

                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default Book;