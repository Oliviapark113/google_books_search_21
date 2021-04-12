import React from "react"
import '../css/results.css'




const Results = ({ searchResults, handleView, handleSave }) => {

  return (
    searchResults.map(book =>
      (<div className="container results-container" key={book.id}>
        <row className="title-row">
          <div className="col-md-6">
            <p className="title-text">{book.volumeInfo.title}</p>
            <p className="authors-text">{book.volumeInfo.authors}</p>
          </div>
          <div className="col-md-6 btn-container">
            <button onClick={handleView} className="view-btn"> <a href={book.volumeInfo.infoLink}>View</a>
            </button>
            <button
              onClick={() => { handleSave(book.id) }} className="save-btn">Save</button>
          </div>
        </row>
        <row className="contents-row">
          <div className="col-md-4">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          </div>

          <div className="col-md-8">
            <p className="description-text">
              {book.volumeInfo.description}

            </p>
          </div>
        </row>
      </div>
      )


    )

  )

}



export default Results