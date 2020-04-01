import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: [{task: 'do your homework', id: 1}]
           
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this)
        this.updateTask = this.updateTask.bind(this)

    }
    addTask(task){
        this.setState({
            task: [...this.state.task,task]
        })

    }
    removeTask(id){

        this.setState({
            task: this.state.task.filter(t=> t.id!== id )
        })
    }
    updateTask(update,id){
        console.log(update)
        const updatedTodos = this.state.task.map(todo => {
          if (todo.id === id) {
            return { ...todo, task: update };
          }
          return todo;
        });
        this.setState({ task: updatedTodos });
      }
    render(){
        const todos = this.state.task.map(to=>(
            <Todo key={to.id} updateTask={this.updateTask} removeTask={this.removeTask} id={to.id} task={to.task}/>
        ))
        return(
            <div>
               {todos}
                <NewTodoForm addTask={this.addTask}/>
            </div>
        )
    }

}
export default TodoList;