const mongoose = require ('mongoose')

const dbUser = 'Marce'
const dbPassword = 'chela1902'
const dbHost = '@septimageneracion-8falf.mongodb.net'
const dbName = 'Medium'
//mongodb+srv://Marce:<password>@septimageneracion-8falf.mongodb.net/test?retryWrites=true&w=majority

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

function connect (){
     mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
}

module.exports ={
    connect 
}