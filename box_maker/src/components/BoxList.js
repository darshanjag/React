import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
 constructor(props){
     super(props);
     this.state ={
        boxes: []

     }
     this.setPro= this.setPro.bind(this);
     this.ridOfBox = this.ridOfBox.bind(this);
 }
setPro(pro){
    console.log('changingg...')
    this.setState ({
        boxes: [...this.state.boxes,pro]

    })
}
ridOfBox(id){
    this.setState({
        boxes: this.state.boxes.filter(box=> box.id!= id)
    })
   
}
    render() { 
        const boxes = this.state.boxes.map(box=>(
            <Box key={box.id} color={box.color} height={box.height} width={box.width}
            ridOfBox={()=>this.ridOfBox(box.id)}/>
        ))
        return (
            <div>
            <NewBoxForm setPro={this.setPro}/>
            {boxes}
            </div>
        );
    }
}
 
export default BoxList;