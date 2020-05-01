//VERIFICAR QUE EL JWT ES EXPEDIDO por este servidor 
const JWT = require('../lib/jwt')

function auth (request, response, next){
   console.log('auth middleware')
    const {authorization: Token } = request.header
     console.log('Token:', Token)

try{
    const decodeToken =jwt.verify(token)
    console.log('decodeToken: ' ,decodeToken)
     next()
}catch(error){
    response.status(401)
    response.json({
        success: false,
        message:'unauthorized'
    })
 }
}

module.exports = auth



