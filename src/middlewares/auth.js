const { verifyToken} = require ('../utilities/jwt')

const Auth = (req,res,next) => {
    const token = req.headers.authorization?.split('')[1]  

    if (!token){
            res.status(401).json({
                message:'Acceso denegado'
            })
        }

    const payload = verifyToken(token)

    if (!payload){
        res.status(403).json({
            message: 'Token inválido'
        })
    }

    req.user = {
        userId: payload
    }

    next()
}

module.exports = Auth