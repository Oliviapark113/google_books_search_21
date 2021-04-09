const db = require('../models')

module.exports = {
  
  getBooks: function(req, res) {
    db.Book.find({})
    .sort({ date: -1 })
    .then(books => {res.json(books)} )
    .catch(err =>res.status(500).send())  
 
  },

  createBooks: function(req, res) {
    db.Book.create(req.body)
    .then(bookData => {res.json(bookData)})
    .catch(err =>res.status(500).send()) 

  },
  
  getBook: function(req, res) {
      const {id } = req.params
      db.Book.findById(id)
      .then(book => {res.json(book)})
      .catch(err =>res.status(500).send())       
 
  },

  deleteBook: function(req, res) {
    const {id } = req.params
    db.Book.findByIdAndDelete(id)
    .then(book => {res.json(book)})
    .catch(err =>res.status(500).send())
  },
}