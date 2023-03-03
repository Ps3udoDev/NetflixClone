const bcrypt = require('bcrypt')

const hashPassword = (plainPasword) => {
    return bcrypt.hashSync(plainPasword, 12)
}

const comparePassword = (plainPasword, hashedPassword) => {
    return bcrypt.compareSync(plainPasword, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword,
}