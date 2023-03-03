const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Genres = db.define('genres', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Genres