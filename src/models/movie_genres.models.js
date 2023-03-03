const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Movies = require('./movies.models')
const Genres = require('./genres.models')

const MovieGenres = db.define('movie_genres', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    movieId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'movie_id',
        references:{
            key: 'id',
            model: Movies
        }
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'genre_id',
        references:{
            key: 'id',
            model: Genres
        }
    }
})

module.exports = MovieGenres