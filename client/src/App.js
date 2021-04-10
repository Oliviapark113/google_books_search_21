import React , {useState} from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from 'react-router-dom'
import Search from './pages/search'
import Saved from './pages/saved'
import Nav from './components/nav'
import API from "./util/API"
import axios from "axios"

function App() {
  
  const [ searchBook , setSearchBook] = useState("javascript")
  const [ searchResults , setSearchResults] = useState([])
  const savedBooks = []
  
  const history = useHistory()

  const fetchBookData = e => {
     
    axios(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`)
    .then(response=> {
        setSearchResults(response.data.items)
    })
    .catch(err=> console.log(err))
    
}


const handleSave = id => {

  const findBook = searchResults.find(book=>{
        return book.id === id
  })
   
  const bookData = {

      title: findBook.volumeInfo.title,
      authors: findBook.volumeInfo.authors,
      description: findBook.volumeInfo.description,
      image: findBook.volumeInfo.imageLinks.thumbnail,
      link:findBook.volumeInfo.infoLink
     
    }
    API.saveBook(bookData)
      .then(response => {
          savedBooks.push(response)
          console.log(savedBooks)
          history.push("/saved")
      }
         
      )
      .catch(err => console.log(err))

}


  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/saved">
          <Saved savedBooks={savedBooks}/>
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
