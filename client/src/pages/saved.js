import React , {useState, useEffect }from "react"
import { useHistory } from 'react-router-dom'
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/col"
import HeaderText from "../components/headertext"
import API from "../util/API"
import SavedResults from "../components/savedResults"

const Saved = ({savedBooks}) =>{
  
   

   const handleDelete = id => {
       

    const findBook = savedBooks.find(book=>{
      return book.id === id
    })

    API.deleteBook(findBook)
    .then(response => 
        console.log(response))
    .catch(err => console.log(err))

   }


    return (
        <Container>
          <Row>
              <Col className="col-md-12 header">
                  <HeaderText/>
              </Col>
          </Row>
          <Row>
              <SavedResults
               handleDelete = {handleDelete}
              />
          </Row>
 
        </Container>
     )

}

export default Saved