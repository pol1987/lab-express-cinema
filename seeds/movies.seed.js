const { requireOrImport } = require("mocha/lib/nodejs/esm-utils");

// conectar a la DB
require("../db/index.js");

// usar la herramienta que nos permite acceder a la db
const MovieModel = require("../models/Movie.model.js")
const movieArr = require("./movies.json")

// insertar los elementos

const addMovie = async () => {    
    try {
        await MovieModel.insertMany(movieArr)
        console.log("Las películas fueron agregadas, SIIIIIIII")
    }
    catch(err) {
        console.log(err)
    }
}
addMovie()

