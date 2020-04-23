import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Link, Route} from 'react-router-dom';

class Vending extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>vending machine</h1>
                <Link exact to='/chips' style={{padding: 10 }}>Chips</Link>
                <Link exact to='/fish' style={{padding: 10 }}>Fish</Link>
                <Link exact to='/soda' style={{padding: 10}}>Soda</Link> 
            </div>);
    }
}
 
export default Vending;