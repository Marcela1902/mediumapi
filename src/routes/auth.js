const express = require ('express')
const USER = require ('../usescases/user')

const router = express.Router()

router.post('/login', async(request, response)=>{
    try {
        const{email,password} = request.body
        const token = await USER.login(email, password)
        response.json({
            success: true,
            message: 'loged in',
            data:{
                token
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error
        })
    }
})


module.exports = router
