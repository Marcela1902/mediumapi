
const posts = require ('../models/posts')
const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

async function getAll(){
    const allposts = await posts.find()
    return allposts
}

async function create(postData){
    const postsCreated = await posts.create(postsData)
    return postsCreated
}

function deleteById(id){
    return koder.findByIdAndDelete(id)
  
    
}


module.exports={
    getAll,
    create,
    deleteById
}
