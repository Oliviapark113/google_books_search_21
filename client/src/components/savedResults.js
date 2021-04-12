import React from "react"
import '../css/savedResults.css'



const SavedResults = ({ savedBooks, handleDelete }) => {

  return (
    savedBooks.map(book =>

      (<div className="container results-container" key={book.id}>
        <row className="title-row">
          <div className="col-md-6">
            <h3 className="title-text">{book.title}</h3>
            <h3 className="authors-text">{book.authors}</h3>
          </div>
          <div className="col-md-6 btn-container">
            <button onClick={() => { handleDelete(book._id) }} className="delete-btn">Delete</button>
            <button className="view-btn"> <a href={book.link} target="_blank">View</a>
            </button>

          </div>
        </row>
        <row className="contents-row">
          <div className="col-md-4">
            <img src={book.image} alt={book.title} />
          </div>

          <div className="col-md-8">
            <h3 className="description-text">
              {book.description}

            </h3>
          </div>
        </row>
      </div>
      )


    )

  )

}



export default SavedResults