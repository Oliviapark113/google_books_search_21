import React from "react"



const SavedResults = ({savedBooks, handleDelete })=>{ 
  
   return(
       savedBooks.map(book => 
  
        ( <div key={book.id}>
          <h1 className="result-text">Results</h1>
          <row className="title-row">
            <div className="col-md-6">
          <h3 className="title-text">{book.volumeInfo.title}</h3>
          <h3 className="authors-text">{book.volumeInfo.authors}</h3>
            </div>
            <div className="col-md-6">
                <button  className="view-btn"> <a href={book.volumeInfo.infoLink}>View</a>
                </button>
                <button onClick={()=>{handleDelete(book.id)}} className="delete-btn">Delete</button>
            </div>
          </row>
          <div className="col-md-4">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
          </div>

          <div className="col-md-8">
             <h3 className="description-text">
                 Description: <br/>
                {book.volumeInfo.description}
                 
             </h3>
            </div>

          </div>
        )
       
       
       )
    
   )

}



export default SavedResults