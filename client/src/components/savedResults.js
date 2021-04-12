import React from "react"
import '../css/savedResults.css'
import Container from './container'
import Row from './row'
import Col from './col'



const SavedResults = ({ savedBooks, handleDelete }) => {

  return (
    savedBooks.map(book =>

      (<Container className="container results-container" key={book.id}>
        <Row className="title-row">
          <Col className="col-md-6">
            <h3 className="title-text">{book.title}</h3>
            <h3 className="authors-text">{book.authors}</h3>
          </Col>
          <Col className="col-md-6 btn-container">
            <button onClick={() => { handleDelete(book._id) }} className="delete-btn">Delete</button>
            <button className="view-btn"> <a href={book.link} target="_blank">View</a>
            </button>
          </Col>
        </Row>
        <Row className="contents-row">
          <Col className="col-md-4">
            <img src={book.image} alt={book.title} />
          </Col>

          <Col className="col-md-8">
            <h3 className="description-text">
              {book.description}
            </h3>
          </Col>
        </Row>
      </Container>
      )


    )

  )

}



export default SavedResults