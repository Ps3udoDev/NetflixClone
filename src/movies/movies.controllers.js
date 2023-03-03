const Movies = require('../models/movies.models')
const uuid = require('uuid')
const getAllMovies = async () => {
    const response = await Movies.findAll()
    return response
}

const createMovie = async (data) => {
    const newMovie = await Movies.create({
        id: uuid.v4(),
        title: data.title,
        synopsis: data.synopsis,
        releaseYear: data.releaseYear,
        director: data.director,
        duration: data.duration,
        trillerURL: data.trillerURL,
        coverURL: data.coverURL,
        movieURL: data.movieURL,
        classification: data.classification,
        rating: data.rating
    })
}