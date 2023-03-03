const express = require('express')
const cors = require('cors')
const { api } = require('../config')
const db = require('./utils/database')
const response = require('./utils/handleResponse')
const initModels = require('./models/initModels')

const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

const app = express()
app.use(express.json())

app.use(cors())

db.authenticate()
    .then(() => console.log('DB autentication successfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB synced'))
    .catch((err) => console.log(err))

initModels()

app.get('/', (req, res) => {
    response.success({
        res,
        status: 200,
        message: 'OK',
        data: {
            "users": `${api.host}/api/vi/Flickster/users`,
            "auth": `${api.host}/api/vi/Flickster/auth`,
        }
    })
})

app.use('/api/vi/Flickster/users', usersRouter)
app.use('/api/vi/Flickster/auth', authRouter)

app.use('*', (req, res) => {
    response.error({
        res,
        status: 404,
        message: `URL not found, please try with: ${api.host}`,
    })
})

app.listen(api.port, () => console.log('Succes 😼😼😼 ' + api.port))