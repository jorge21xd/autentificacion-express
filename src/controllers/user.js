const {findAll, findByPk } = require ('../repositories/user');
//const{User} = require('../models')
const {hashPassword, comparePassword} = require("../utilities/bcrypt");
const {generateToken} = require("../utilities/jwt");

const getAll = async (req,res) => {
    const users = await findAll()
    res.send(users)
}

const getOne = async (req,res) => {
    const {userId} = req.params
    
    //const validation = findOneUserSchema.safeParse(req.params)

    const user = await findByPk(userId)

    if(!user){
        return res.status().json({
         message:'usuario no encontrado'
    })
}

res.status(200).json(user)
}

const create = async (req, res) => {
    try{
        const hash = await hashPassword(req.body.password,10)

        const user = await User.create({
            ...req.body,
            password: hash
        })
        res.status(201).json({
           message: 'usuario creado',
           data:user
        })
    } catch (error) {
    console.log('error',error);
    res.status(500).json(error)
    }
}

const login = async (req,res) => {
    const { email, password} = req.body

    const user = await findOne(email)

    if (!user){
        return res.status(404).json({
            message: 'Usuario no encontrado'
        })
    }

    if (!await comparePassword(password, user.password)){
        return res.status(401).json({
            message: 'Credenciales inválidas'
        })
    }

    res.status(200).json({
        token: generateToken({

        })
    })
}