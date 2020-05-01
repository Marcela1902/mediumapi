const express = require('express')

const posts = require('../usescases/posts')
const router = express.Router()


router.get('/', async(request, response) =>{
    const allposts = await posts.getAll()
    response.json({
        message: 'all posts',
        data:{
            posts: allposts
        }
    })
})

router.post('/', async(request, response)=>{
    try{
        const newposts = await posts.create(request.body)
        response.json({
            message: 'posts create',
            data:{
                posts: newposts
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

router.delete('/:id', async(request, response)=>{
    try {
        const {id} = request.params
        const postsDelete = await posts.deleteById(id)
        response.json({
            success: true,
            message: `posts with id ${id} deleted`,
             posts: postsDelete
        })
    } catch (error) {
        response.json({
            success: false,
            error: error.message,
            error: error.errors

        })
        
    }
})

module.exports = router
