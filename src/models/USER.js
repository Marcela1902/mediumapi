const mongoose = require('mongoose')

const USERSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }

})

module.exports = mongoose.model('USER',USERSchema)