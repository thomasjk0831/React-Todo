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
            <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input 
                     name = "name"
                     type = "text"
                     value = {this.state.name}
                     onChange = {this.handleInput}>
                    </input>
                </label>
                <div>
                  <button>Add to List</button>
                </div>
            </form>
            <div className="clear">
              <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
               
                

            </div>
        )
    }
}

export default TodoForm