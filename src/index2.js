const express = require('express')
const morgan = require('morgan')
const { isString, Auth } = require('./middleware')
const sequelize = require('./model/config')
require('./model')

const { User } = require('./model')

const app = express()
app.use(express.json())
app.use(morgan('dev'))

// Ruta para obtener usuarios
app.get('/api/users', Auth, (req, res) => {
  const queryName = req.query.name
  if (queryName) {
    const usersResponse = users.filter(user => user.name === queryName)
    res.send(usersResponse)
  }
  res.send(users)
})

// Ruta para obtener un usuario
app.get('/api/users/:userId', isString, (req, res) => {
  const userId = req.params.userId
  const user = users.find((user) => user.id === userId)
  
  if (!user) {
    res.status(404).send({
      statusCode: 404,
      message: 'Usuario no encontrado'
    })
  }

  res.json(user)
})

// Ruta para crear un usuario
app.post('/api/users', async (req, res) => {
  const user = await User.create(req.body)

  res.json({
    message: 'Usuario creado',
    data: user
  })
})

const PORT = 3001

sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
  })
})