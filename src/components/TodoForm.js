import React from "react"

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
                name : "",
                
            }
        }
     
        handleInput = (e)=>{
          this.setState({
              name: e.target.value
          })
        }

        handleSubmit = (e) => {
            e.preventDefault()
            this.props.addToDo(this.state.name)
            this.setState({
                name: ""
            })
        }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input 
                     name = "name"
                     type = "text"
                     value = {this.state.name}
                     onChange = {this.handleInput}>
                    </input>
                </label>
                <button>Add to List</button>
            </form>
            <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </>
        )
    }
}

export default TodoForm