import React , {useState, useEffect }from "react"
import "../css/search.css"
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/col"
import HeaderText from "../components/headertext"
import SearchInput from "../components/search-input"
import axios from "axios"




const Search = () =>{

    const [ searchBooks , setSearchBooks] = useState([])


    useEffect(()=>{
        fetchBookData()
    }, [])

    const fetchBookData = () => {
        axios(`https://www.googleapis.com/books/v1/volumes?q=${searchBooks}`)
        .then(response=> {
            console.log(response.data.items)
            // setSearchBooks(response.data.items)
        })
        .catch(err=> console.log(err))
    }

    const handleInputChange = (e)=>{

        const name = e.target.name;
        const value = e.target.value;
        setSearchBooks(value)
      
      }

      const handleSubmit = e =>{
          e.preventDefault()
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
            searchBooks = {searchBooks}
            handleSubmit={handleSubmit}/>
           
            
         </Row>

       </Container>
    )
}

export default Search