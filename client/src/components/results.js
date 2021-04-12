import React from "react"
import '../css/results.css'
import Container from './container'
import Row from './row'
import Col from './col'

const Results = ({ searchResults, handleView, handleSave }) => {

  return (
    searchResults.map(book =>
      (<Container className="container results-container" key={book.id}>
        <Row className="title-row">
          <Col className="col-md-6">
            <p className="title-text">{book.volumeInfo.title}</p>
            <p className="authors-text">{book.volumeInfo.authors}</p>
          </Col>
          <Col className="col-md-6 btn-container">
          <button
              onClick={() => { handleSave(book.id) }} className="save-btn">Save</button>
            <button onClick={handleView} className="view-btn"> <a href={book.volumeInfo.infoLink } target="_blank">View</a>
            </button>

          </Col>
        </Row>
        <Row className="contents-row">
          <Col className="col-md-4">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          </Col>

          <Col className="col-md-8">
            <p className="description-text">
              {book.volumeInfo.description}

            </p>
          </Col>
        </Row>
      </Container>
      )


    )

  )

}



export default Results