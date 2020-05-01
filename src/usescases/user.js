const USER = require('../models/USER')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')




async function getAll(){
    const allUSER = await posts.find()
    return allUSER
}

async function create(USERData){
    const USERCreated = await USER.create(USERData)
    return USERCreated
}

function deleteById(id){
    return USER.findByIdAndDelete(id)
  
}
async function signup(newUSERData){
    const {email, password} = newUSERData
    const USERAlreadyExists = await koder.findOne({email })
    if(!email) throw new Error('email is requiered')
    if(!password)throw new Error('passwor is requiered')
    
    if(USERAlreadyExists) throw new Error('Email is already registered')
    if(password.length < 6) throw new Error('password must be 6 characters minimum')
        //crear hash
    const hash = await bcrypt.hash(password, 5)

    return USER.create ({ ...newUSERData, password: hash})

}

async function login (email, password){
    const USER  = await USER.findOne({email})
    if(!USER) throw new Error('invalid data')

    const isPasswordCorrect = await bcrypt.compare(password,USER.password)
    if(!isPasswordCorrect) throw new Error('invalid data')

    return token = jwt.sing({id: USER._id})
}

module.exports ={
    getAll,
    create,
    deleteById,
    signup,
    login
}
