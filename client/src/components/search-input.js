
import React from "react"
import "../css/search-input.css"
import Container from "./container"



const SearchInput = ({searchBook, handleInputChange, handleSubmit})=>{ 

   return(
       <Container className="col-md-12 search-container">
         
               <label htmlFor="bookSearch">Book Search</label>
               <br />
               <input className="search-input"
                   type="text"
                   name="searchTerm"
                   value={searchBook}
                   onChange={handleInputChange} />
               <br />
               <button type="submit" className="search-btn"
                   onClick={handleSubmit}>Search</button>
        
       </Container>
    )


}



export default SearchInput