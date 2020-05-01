const express = require('express')
const postsRouter = require('./routes/posts')
const userRouter = require('./routes/USER')
const authRouter = require('./routes/auth')
const app = express ()

app.use((request,response, next) =>{
    console.log(`>[${request.method} ${request.url}] $body: ${JSONS.Stringify(request.body)} `)
    next()
})

app.use(express.json())
app.use('/posts', postsRouter)
app.use('/USER',userRouter)
app.use('/auth',authRouter)

 

module.exports = app 
