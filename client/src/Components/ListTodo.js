import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
const ListTodo = ({todos,deleteTodo}) => {

  console.log(todos.body)
  return (
      <div className="card">
         <ul className="list-group list-group-flush">
         {
          Object.keys(todos).length > 0 ?
            (
              todos.body.map(todo => {
                return (
                    <div className="container">
                        <div className="input-group">
                          <li className="list-group-item" key={todo._id} onClick={() => deleteTodo(todo._id)}>{todo["todo"]}</li>
                          {/* <div className="btn btn-danger">Delete Todo</div> */}
                          
                        </div>
                    </div>
                )
              })
            )
            :
            (
              <li>No todo(s) left</li>
            )
      }
         </ul>
      </div>
  )
}

export default ListTodo