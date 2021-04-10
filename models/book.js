const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: "A title is required",
    },

    authors: [
        String
    ],

    description: {
        type:String,
        // required: "Description is required",
    },

    image: {
        type: String,
    },

    link: {
        type: String
    }

})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book