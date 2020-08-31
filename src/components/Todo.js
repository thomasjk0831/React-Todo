import React from 'react';

const Todo = (props) => {
    console.log(props)
    return (
       <>
           <div onClick={()=>{props.toggleDone(props.listItem.id)}}>
           <p style={props.listItem.done===true?{textDecoration:'line-through'}:null}>{props.listItem.name} </p>
             
           </div>
       </>
    )
}

export default Todo