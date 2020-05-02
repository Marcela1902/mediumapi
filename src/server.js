const express = require('express')
const postsRouter = require('./routes/posts')
const USERRouter = require('./routes/USER')
const authRouter = require('./routes/auth')
const app = express ()

app.use((request,response, next) =>{
    console.log(`>[${request.method} ${request.url}] $body: ${JSON.Stringify(request.body)} `)
    next()
})

app.use(express.json())
app.use('/posts', postsRouter)
app.use('/USER',USERRouter)
app.use('/auth',authRouter)

 

module.exports = app 
