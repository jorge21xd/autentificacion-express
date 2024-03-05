const {Router} = require('express')

const router = Router()

const {getAll, getOne, create,login} = require('../controllers/user') 
const Auth= require("../middlewares");

//obtener usuarios
router.get('/',Auth, getAll)

router.get('/:userId', Auth, getOne)

//crear usuario
router.post('/', create)

//iniciar sesion
router.post('/login', login)

module.exports = router