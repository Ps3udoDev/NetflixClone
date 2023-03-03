const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Series = require('./series.models')

const Seasons = db.define('seasons', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    seriesId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'series_id',
        references: {
            key: 'id',
            model: Series
        }
    },
    title: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    seasonNumber: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        field: 'season_number',
        defaultValue: 1
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        field: 'release_year',
        allowNull: false,
    },
    coverURL: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'cover_url',
    },
    traillerURL: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'trailler_url'
    }
})

module.exports = Seasons