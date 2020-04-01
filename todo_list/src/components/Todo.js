import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEdditing: false,
            task: this.props.task

        }
        this.handleClick = this.handleClick.bind(this)
        this.handleEdit= this.handleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
   handleClick(e){
       this.props.removeTask(this.props.id);
   }
   handleEdit(){
       
       this.setState({
           isEdditing: true
       })
   }
   handleChange(e){
    this.setState({
        task: e.target.value
    })
  
   }
   handleKeyPress(e){
    if (e.key ==="Enter") {
        console.log('pressed')
        this.props.addTask({...this.state.task, id: this.props.id})
        this.setState({
            isEdditing: false
        })
      }
   }
    render(){
        let result;
        if(this.state.isEdditing===false){
            result = this.props.task
        }else{
            result = <input id='task' name='task' value={this.state.task} onKeyPress={this.handleKeyPress} onChange={this.handleChange}></input>
        }
        return(
        <div style={{display: 'flex'}}>
            
            <div>{result}
            <button onClick={this.handleClick}>x</button>
            <button onClick={this.handleEdit}>edit</button></div>
        </div>
            
        )
    }
}

export default Todo;