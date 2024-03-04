const express : | () => core.Express = require('express')
const morgan: funcion((String| Function), ... | {...} =  require('morgan')

const router: Router | {...} = require('../routes')

const app: any | Express = express()

app.use(express.json())
app.use(morgan(format: 'dev'))

app.use('/api', router)

app.get((req,res) : void => {
 res.status(404).send('No existe la ruta')
})


module.exports = app
