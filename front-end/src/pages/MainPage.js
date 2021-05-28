import books from "../books";
import { Col, Row} from "react-bootstrap";
import Book from "../components/Book";

function MainPage() {
    return(
        <div>
            <h1>latest books</h1>
            <Row>
                {books.map(book => (
                    <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                        <Book book={book}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default MainPage;