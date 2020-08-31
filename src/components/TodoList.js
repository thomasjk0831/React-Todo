// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const ToDoList = (props) => {
    return(
        <>
        {
            props.list.map((l)=>{
                return <Todo listItem = {l.name} />
            })
        }
              </>
        
    )
}

export default ToDoList