const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Series = db.define('series', {
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
    clasification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

module.exports = Series