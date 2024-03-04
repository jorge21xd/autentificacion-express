const {user}= require('../models')

const findAll = async () => {
    return await User.findAll()
}

const findByPK = async (UserId) => {
    return await User.findByPK(UserId)
}

const findOne = async (email) =>{
    return await User.findOne(({
        where:{
            email
        }
    }))
}

const create = async (payload) => {
    return await User.create({
       ...payload,
       password:hash
    })
}
module.exports = {
    findAll,
    findByPK,
    findOne,
    create
}