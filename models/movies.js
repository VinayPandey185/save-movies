const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    released: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
});

//mongoose.model("collection name", SchemaName)
const movies = mongoose.model("movies", MovieSchema)
module.exports = movies;