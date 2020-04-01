import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class NewBoxForm extends Component {

    constructor(props){
        super(props);
        this.state={
            height:"",
            width: '',
            color: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
    }
    handleSubmit(e){
    e.preventDefault();
    const newBox = {...this.state,id:uuidv4()}
  this.props.setPro(newBox);
    this.setState({
        height: '',
        width: '',
        color: ''
    })
    
    }
    render() { 

        return ( <form
        onSubmit={this.handleSubmit}>
            <label
            htmlFor='height'>height:</label>
            <input 
            name="height"
            id="height"
            onChange={this.handleChange}
            value={this.state.height}></input>
            <br />

            <label
            htmlFor='width'>width:</label>
            <input
            name="width"
            id="width"
            onChange={this.handleChange}
            value={this.state.width}>
            </input>
            <br />

            <label
            htmlFor='color'>color:</label>
            <input
            name="color"
            id="color"
            onChange={this.handleChange}
            value={this.state.color}>
            </input>
            <button>submit</button>
            </form> );
    }
}
 
export default NewBoxForm;