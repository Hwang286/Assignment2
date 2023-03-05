let mongoose = require('mongoose');
let booksModel = mongoose.Schema({
    name: String,
    contact: Number,
    email: String
},
    {
        collection: "books"
    });

module.exports = mongoose.model('book', booksModel);