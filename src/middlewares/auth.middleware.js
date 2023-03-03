const { Strategy, ExtractJwt } = require('passport-jwt')
const { api } = require('../../config')
const passport = require('passport')
const { getUserById } = require('../users/users.controllers')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: api.jwtSecret
}

passport.use(new Strategy(options, (decoded, done) => {
    getUserById(decoded.id)
        .then(data => {
            if (data) {
                done(null, decoded)
            } else {
                done(null, false)
            }
        })
        .catch(err => done(err, false))
}))

module.exports = passport.authenticate('jwt', {session: false})