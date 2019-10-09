const express=require('express');
const mongoose=require('mongoose');
const Todo=require('../models/todo.schema');

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mern');
let db=mongoose.connection;

//check for the connection
db.once('open',()=>{
    console.log('Connected to MongoDB');
});

//check for the error
db.on('error',(err)=>{
    console.log(err);
});


let homePage=(req,res)=>{

    res.send('Hello from Juggernaut');

}

let getTodos=(req,res)=>{

    //to get the all todos
    Todo.find({},(err,todos)=>{
        if(err){
            
            res.send({
                status:500,
                message:err.message
            })
        }
        res.send({
            status:200,
            body:todos
        })

    })

}

let addTodo=(req,res)=>{

    let todo_body=req.body.action;
    console.log(todo_body);
    if(todo_body){
        
        let todo=new Todo({
            todo:todo_body
        })
        //to save the todo in the mongodb database 
        todo.save()
        .then(result=> res.send({
            status:200,
            message:'Todo Added',
            body:result
        }))
        .catch(err=>res.send({
            status:500,
            message:err.message,
            
        }))
    }
    

}

let deleteTodo=(req,res,next)=>{

    Todo
    .findOneAndDelete({
        "_id":req.params.id
    })
    .then(result=>res.send(result))
    .catch(err=>res.send(err.message))

}

// let updateTodo=(req,res)=>{

// }

module.exports={
    
    homePage,
    getTodos,
    addTodo,
    deleteTodo,

}