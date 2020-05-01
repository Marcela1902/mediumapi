const express = require('express')

const user = require('../usescases/user')
const router = express.Router()


router.get('/', async(request, response) =>{
    const allUSER = await USER.getAll()
    response.json({
        message: 'all USER',
        data:{
            posts: allUSER
        }
    })
})
router.post('/', async(request, response)=>{
    try{
        const newUSER = await posts.create(request.body)
        response.json({
            message: 'USER create',
            data:{
                USER: newUSER
            }
        })
    }catch(error){
        response.json({
            success: false,
            error: error.message,
            errors: error.errors
        })
    }
})


router.delete ('/:id',async(request,response)=>{
    try{
        const {id} = request.params
        const USERDelete = await USER.deleteById(id)
        response.json({
            success: true,
            message: `USER with id ${id}  deleted`,
                koder: USERDelete
            
        })
    }catch(error){
    response.json({
        success: false,
        error: error.message,
        errors: error.errors
    })
}
       
})


router.post ('/signup', async(request, response) =>{
    try{
        const newkoder = await koder.signup(request.body)
        response.json({
            success: true,
            message: 'USER registred',
            data:{
                USER: newUSER
            }
        })
     }catch (error){
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router
