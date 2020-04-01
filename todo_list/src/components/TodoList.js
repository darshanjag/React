import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: []
           
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this)
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
    render(){
        const todos = this.state.task.map(to=>(
            <Todo key={to.id} addTask={this.addTask} removeTask={this.removeTask} id={to.id} task={to.task}/>
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