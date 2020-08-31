import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

const toDoListData = [
  {
    name: "Wake up",
    id: 111,
    done: false
  },

  {
    name: "Eat breakfast",
    id: 112,
    done: false
  },
  {
    name: "Attend lecture",
    id: 113,
    done: false
  },

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
    const tempList = {
      name : name,
      id : Date.now(),
      done: false
    }

    this.setState({
      list: [...this.state.list, tempList]
    })
  }

  clearCompleted = ()=>{
    this.setState({
      list : this.state.list.filter((item)=>{
        if(item.done === false)
        return item
      })
    })
     
  }

  toggleDone = (id)=> {
    this.setState({
      list :    this.state.list.map(item=>{
        if(id === item.id)
        return {...item, done: !item.done}
        else
        return item
    })
    })
    
  }
  

  render() {
    return (
      
      <div className="App">
        <TodoForm 
           list={this.state.list} 
           addToDo={this.addToDo} 
           clearCompleted={this.clearCompleted} 
           />
        <TodoList 
           list={this.state.list} 
           toggleDone = {this.toggleDone}  
           />
      </div>
    );
  }
}

export default App;
