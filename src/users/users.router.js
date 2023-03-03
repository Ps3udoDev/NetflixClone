const router = require('express').Router()
const userServices = require('./users.services')
const pasportJwt = require('../middlewares/auth.middleware')

router.route('/')
    .get(userServices.getAllUsers)

router.route('/me')
    .get(pasportJwt, userServices.getMyUser)
    .patch(pasportJwt,  userServices.patchMyUser)
    .delete(pasportJwt, userServices.deleteMyUser)

router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)


module.exports = router