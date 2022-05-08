const express = require('express');
const router = express.Router();

const MovieModel = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// listar los hombres de las pelis

router.get("/movies", (req, res, next) => {

    MovieModel.find().select()
    .then((response) => {
        console.log(response)
        res.render("movies.hbs", {
            movies: response
        })
    })
    .catch((err) => {
        console.log(err)
    })

})

router.get("/movie-profile/:movieId", async (req, res, next) => {
    //Obtener el Id de la peli que el usuario quiere ver
    const { movieId } = req.params

    try {
        const response = await MovieModel.findById(movieId)
        console.log(response)

        res.render("movie-profile.hbs", {
            movieDetails: response 
        })


    } catch(err) {
        console.log(err)
    }    



})

module.exports = router;
