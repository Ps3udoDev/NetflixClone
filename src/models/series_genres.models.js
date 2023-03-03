const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Series = require('./series.models')
const Genres = require('./genres.models')

const SeriesGenres = db.define('series_genres', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    seriesId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Series
        }
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'genre_id',
        references: {
            key: 'id',
            model: Genres
        }
    }
})

module.exports = SeriesGenres