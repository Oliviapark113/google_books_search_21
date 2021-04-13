
import React from "react"
import "../css/search-input.css"
import Container from "./container"
import { IoIosBook } from "react-icons/io";
import {FaSearch} from "react-icons/fa"


const SearchInput = ({searchBook, handleInputChange, handleSubmit})=>{ 

   return(
       <Container className="col-md-12 search-container">
         
   <label htmlFor="bookSearch"><IoIosBook size={80} color={"#455a64"}></IoIosBook> Book Search</label>
               <br />
               <input className="search-input"
                   type="text"
                   name="searchTerm"
                   value={searchBook}
                   onChange={handleInputChange} />
               <br />
               <button type="submit" className="search-btn"
                   onClick={handleSubmit}><FaSearch size={30}></FaSearch>Search</button>
        
       </Container>
    )


}



export default SearchInput