const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Movies = db.define('movies', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        field: 'release_year',
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    traillerURL: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'trailler_url',
    },
    coverURL: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'cover_url',
    },
    movieURL: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'movie_url',
    },
    classification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

module.exports = Movies