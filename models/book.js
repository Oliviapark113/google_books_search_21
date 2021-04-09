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
        type: Text,
        // required: "Description is required",
    },

    image: {
        type: String,
    },
    link: {
        type: String
    }

})

const Drawing = mongoose.model("Book", bookSchema)
module.exports = Book