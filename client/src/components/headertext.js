import React from "react"
import Col from "../components/col"
import "../css/headertext.css"

const HeaderText = props =>(
    <>
         <Col className="col-md-12 header"{...props}>
            <h1 className="title">Google Books Search </h1>
              <p className="title">Search for and Save Books of Interest </p>  
             </Col>
    </>
)

export default HeaderText 