import React, { Component } from 'react';
class Box extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
     
        return ( 
            <div>
            <div style={{height: `${this.props.height}px`, width:`${this.props.width}px`, 
       backgroundColor: `${this.props.color}` }}>
           

        
       </div>
       {this.props.color!=''? <button onClick={this.props.ridOfBox}>
           get rid of this box</button>: ''}
      
       </div>
        );
    }
}
 
export default Box;