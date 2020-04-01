import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
     
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick(e){
        e.preventDefault()
        this.props.addTask({...this.state,id:uuid()})
        this.setState({
            task:''
        })
    }
    handleEdit(e){
        e.preventDefault();
    }

    render(){

        return(
            <form>
                <input
                onChange={this.handleChange}
                name='task'
                id='task'
                value={this.state.task}></input
                 >
                <button onClick= {this.handleClick}>save</button>
            </form>
        )
    }
}

export default NewTodoForm;