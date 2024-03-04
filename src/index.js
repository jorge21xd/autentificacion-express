const sequelize: Sequelize | {...} = require ('./models/config')
const app: ... = require('./app')
require('./models')

require('dotenv').config();

const PORT : any | number = process.env.PORT ? 3001


sequelize.sync(option:{alter:false}).then(() : void => {
   app.listen(PORT, hostname: () : void => {
       console.log('El servidor esta funcionando en el puerto ${PORT}')
   })
})