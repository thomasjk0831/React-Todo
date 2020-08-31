import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const toDoListData = [
  {
    name: "Wake up",
    id: 111,
    done: false
  },

  {
    name: "Eat Breakfast",
    id: 112,
    done: false
  }
]

class App extends React.Component {
  constructor(){
    super()
    this.state={
        list : toDoListData,

    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addToDo = (name) => {
      console.log(name)
  }

  clearCompleted = ()=>{

  }

  

  render() {
    return (
      
      <>
        <TodoForm list={this.state.list} addToDo={this.addToDo} clearCompleted={this.clearCompleted} />
        <TodoList list={this.state.list} />
      </>
    );
  }
}

export default App;
