import React , {useState, useEffect }from "react"
import "../css/search.css"
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/col"
import HeaderText from "../components/headertext"
import SearchInput from "../components/search-input"
import Results from "../components/results"
import axios from "axios"




const Search = () =>{

    const [ searchBook , setSearchBook] = useState("javascript")
    const [ searchResults , setSearchResults] = useState([])


    // useEffect(()=>{
    //     fetchBookData()
    // }, [])

    const fetchBookData = e => {
     
        axios(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`)
        .then(response=> {
            console.log(response.data.items)
            setSearchResults(response.data.items)
        })
        .catch(err=> console.log(err))
    }

    const handleInputChange = (e)=>{

        const name = e.target.name;
        const value = e.target.value;
        setSearchBook(value)
      
      }

      console.log(searchBook)

      const handleSubmit = e =>{
          e.preventDefault()
          fetchBookData()
      }

      const handleView = () =>{

          
      }

      const handleSave = () => {


      }

    return (
       <Container>
         <Row>
             <Col className="col-md-12 header">
                 <HeaderText/>
             </Col>
         </Row>
         <Row>
    
             <SearchInput handleInputChange = {handleInputChange}
            searchBook = {searchBook}
            handleSubmit={handleSubmit}/>         
         </Row>
         <Row>
             <Results
              searchResults = {searchResults}
              handleView ={handleView}
              handleSave = {handleSave}
             />
         </Row>

       </Container>
    )
}

export default Search