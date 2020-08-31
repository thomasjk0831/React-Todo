// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const ToDoList = (props) => {
    return(
        <div className="lists">
        {
            props.list.map((item)=>{
                return <Todo listItem = {item} toggleDone ={props.toggleDone}/>
            })
        }
              </div>
        
    )
}

export default ToDoList