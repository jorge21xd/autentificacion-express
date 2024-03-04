const bcrypt = require('bcrypt')

const hasPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    hasPassword,
    comparePassword
}