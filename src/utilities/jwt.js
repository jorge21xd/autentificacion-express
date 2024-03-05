const jwt = require('jsonwebtoken'); 
const env = require("../config/env");
require('dontenv').config();

const generateToken = (payload) => {
    return jwt.sign(payload, env.JWT_SECRET, {expiresIn:'24h'});
}

const verifyToken = (token) => {
    return jwt.verify(token, env.JWT_SECRET);
}

module.exports = {
    generateToken,
    verifyToken
}