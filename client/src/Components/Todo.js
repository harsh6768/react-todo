import React, {Component} from 'react';
import axios from 'axios';
import ListTodo from './ListTodo';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Todo extends Component {

    constructor(props){
        super(props)
        this.state={
            todos: [],
            action:""
        }
           //this.addTodo=this.addTodo.bind(this)
    }

  componentDidMount(){
    this.getTodos();
  }

  //to get the all todos 
  getTodos = () => {

    axios
      .get('/getTodos')
      .then(res => {
        if(res.data){
          
         // console.log(res.data)
         //setting the state of the todo
          this.setState({
            todos: res.data
          })

        }
      })
      .catch(err => console.log(err))
  }

   //If we are using the arrow function then we don't need to bind this method
   addTodo=()=>{
  
    console.log("Button clicked")
    const task={
        action:this.state.action
    }

    if(task.action && task.action.length>0){
         //to send the data using axios library
         axios
         .post('/addTodo',task)
         .then(
             res => {
                 //console.log(res.data)
                 if(res.data){
                   
                    //if todo inserted successfully then show that todo
                   this.getTodos();
                   //set the todo field to empty
                   this.setState({action: ""})
                 }
             }
         )
         .catch(err=>alert(err))

    }else{
        alert("input field required!!!")
    }

 }

 
 //to delete the todo from the database 
  deleteTodo = (id) => {

    axios.delete(`/deleteTodo/${id}`)
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }

  
 
 //to handle the change in the  input
 handleChange=(e)=>{
     this.setState({
         action:e.target.value
     })
 }

  render() {
    let { todos,action } = this.state;
    return(
      <div>
            <h1>Vomiting Blocks </h1>
            <div className="input-group">
                <input type="text" id="todoId" onChange={this.handleChange} value={action} />
                <div className="btn btn-success" onClick={this.addTodo}>Add Todo</div>
            </div> 
           {/* To show the list of todos resides in the database  */}
            <ListTodo todos={todos} deleteTodo={this.deleteTodo}/>
       
      </div>
    )
  }
}

export default Todo;