let mongoose=require('mongoose');

let todoSchema=mongoose.Schema({

    todo:{
        type:String,
        require:true
    }
})

let todo=mongoose.model('Todo',todoSchema,'todo')

module.exports=todo;