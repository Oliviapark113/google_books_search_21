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
        axios(`https://www.googleapis.com/books/v1/volumes?q=javascript`)
        .then(response=> console.log(response))
        .catch(err=> console.log(err))
    }





    return (
       <Container>
         <Row>
             <Col className="col-md-12 header">
                 <HeaderText/>
             </Col>
         </Row>
         <Row>
    
             <SearchInput />
           
            
         </Row>

       </Container>
    )
}

export default Search