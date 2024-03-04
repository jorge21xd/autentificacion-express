require ('dontenv').config();

const env = {
   PORT: process.env.PORT,
   SECRET: process.env.JWT_SECRET
}

module.exports = env