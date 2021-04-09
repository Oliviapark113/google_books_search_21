const router = require('express').Router()

const bookController = require('../controller/bookController')

router.route("/api/books")
.get(bookController.getBooks)
.post(bookController.createBooks)

router.route('/api/books/:id')
.get(bookController.getBook)
.delete(bookController.deleteBook)



module.exports = router