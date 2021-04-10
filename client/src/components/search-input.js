
import React from "react"



const SearchInput = ({searchBooks, handleInputChange, handleSubmit})=>{ 

   return(
    <div className="col-md-12">
    <label htmlFor="bookSearch">Book Search</label>
    <br/>
    <input className="search-input"
              type="text" 
               name="searchBooks"
               value ={searchBooks}
               onChange={handleInputChange}/>
    <br/>
    <button type="submit" className="search-btn"
    onClick={handleSubmit}>Search</button>
    </div>
    )


}



export default SearchInput