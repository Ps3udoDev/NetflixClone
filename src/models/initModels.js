const Users = require('./users.models')
const Movies = require('./movies.models')
const Genres = require('./genres.models')
const MovieGenres = require('./movie_genres.models')
const Series = require('./series.models')
const SeriesGenres = require('./series_genres.models')
const Seasons = require('./seasons.models')
const Episodes = require('./episodes.models')

const initModels = () => {
    Users

    Movies.belongsToMany(Genres, { through: MovieGenres })
    Genres.belongsToMany(Movies, { through: MovieGenres })

    Series.belongsToMany(Genres, { through: SeriesGenres })
    Genres.belongsToMany(Series, { through: SeriesGenres })

    Series.hasMany(Seasons)
    Seasons.belongsTo(Series)

    Seasons.hasMany(Episodes)
    Episodes.belongsTo(Seasons)
}

module.exports = initModels