const jwt = require('jsonwebtoken')
const { loginUser } = require('./auth.controllers')
const { api } = require('../../config')

const login = (req, res) => {
    const { email, password } = req.body

    if (email && password) {
        loginUser(email, password)
            .then(response => {
                if (response) {
                    const token = jwt.sign({
                        id: response.id,
                        email: response.email,
                        role: response.role
                    }, api.jwtSecret,{
                        expiresIn: '30 minutes'
                    })
                    res.status(200).json({ message: 'Correct credentials', token })
                } else {
                    res.status(401).json({ message: 'Invalid credentials' })
                }
            })
            .catch(err => res.status(400).json({ message: err.message }))
    } else {
        res.status(400).json({ message: 'Missing data' })
    }
}

module.exports = {
    login
}