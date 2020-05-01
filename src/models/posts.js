const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema({
    title:{
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    imagen:{

    },
    description:{
        type: String,
        maxlength: 1000,
        required: true,

    },
    author:{
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    category:{
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    estimatetedReadTime:{
        type: String,
        minlength: 1,
        maxlength: 4,
        required:true
    },
    date:{
    }
}) 

module.exports= mongoose.model('posts',PostsSchema)