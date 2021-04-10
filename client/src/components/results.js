import React from "react"



const Results = ({searchResults, handleView , handleSave })=>{ 
  
   return(
       searchResults.map(book => 
        ( <div key={book.volumeInfo.industryIdentifiers[0].identifier}>
          <h1 className="result-text">Results</h1>
          <row className="title-row">
            <div className="col-md-6">
          <h3 className="title-text">{book.volumeInfo.title}</h3>
          <h3 className="authors-text">{book.volumeInfo.authors[0]}</h3>
            </div>
            <div className="col-md-6">
                <button onClick ={handleView} className="view-btn">View</button>
                <button onClick={()=>{handleSave(book.id)}}className="save-btn"> Save</button>
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
             <h3 className="Link-text">
                 <a href={book.volumeInfo.infoLink}>Info Link Click here</a>
                 
             </h3>
            </div>

          </div>
        )
       
       
       )
    
   )

}



export default Results