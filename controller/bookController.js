const Book = require('../models/book')

module.exports = {
  
  getBooks: function(req, res) {
    Book.find({})
    .sort({ date: -1 })
    .then(books => {res.json(books)} )
    .catch(err =>res.status(500).send())  
 
  },

  createBooks: function(req, res) {
    Book.create(req.body)
    .then(bookData => {res.json(bookData)})
    .catch(err =>{
      console.log(err)
      res.status(500).send()}) 

  },
  
  getBook: function(req, res) {
      const {id } = req.params
     Book.findById(id)
      .then(book => {res.json(book)})
      .catch(err =>res.status(500).send())       
 
  },

  deleteBook: function(req, res) {
    console.log(req.params)
    const {id } = req.params
    Book.findByIdAndDelete(id)
    .then(book => {res.json(book)})
    .catch(err =>{
      console.log(err)
      res.status(500).send()
    })
  },
}