const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Seasons = require('./seasons.models')

const Episodes = db.define('episodes', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    title: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    synopsis:{
        type: DataTypes.TEXT,
        allowNull:false,
    },
    seasonId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'season_id',
        references: {
            key: 'id',
            model: Seasons
        }
    },
    episodeNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'episode_number',
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    coverURL: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'cover_url',
    },
    episodeURL: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'episode_url'
    }
})

module.exports = Episodes