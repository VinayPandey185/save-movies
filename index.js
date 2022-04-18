const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const MoviesModel = require("./models/movies");

app.use(express.json());
app.use(cors());

//see the DB name used here is "Movies"
mongoose.connect("mongodb+srv://VinayPandey:Vinay185@cluster0.0dpd3.mongodb.net/Movies?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});


app.get('/read', async (req, res) => {
    MoviesModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
})

app.post('/insert', async (req, res) => {
    const mTitle = req.body.title
    const mGenre = req.body.genre
    const mReleased = req.body.released
    const mRatings = req.body.ratings
    const mPoster = req.body.poster

    const movie = new MoviesModel({
        title: mTitle,
        genre: mGenre,
        released: mReleased,
        ratings: mRatings,
        poster: mPoster
    });

    try {
        await movie.save();
        res.send("Movie data inserted");

    } catch (err) {
        console.error(err);
    }
});


app.listen(3001, () => {
    console.log("Server is running on port 3001")
});