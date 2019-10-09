const express=require('express');
const router=express.Router();
const todoController=require('../controllers/todoController');

router.route('/').get(todoController.homePage);
router.route('/getTodos').get(todoController.getTodos);
router.route('/addTodo').post(todoController.addTodo);
router.route('/deleteTodo/:id').delete(todoController.deleteTodo);
//router.route('/updateTodo/:id').put(todoController.updateTodo);

module.exports=router;