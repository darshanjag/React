import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Link, Route} from 'react-router-dom';
import './app.css'
import Chips from './components/Chips';
import Fish from './components/Fish';
import Soda from './components/Soda';
import Vending from './components/Vending'

class App extends Component {
  
  render() { 
    return ( 
      <div className="App">
      <navbar>
      <BrowserRouter>
      <NavLink exact activeClassName='active-link' to='/chips'>Chips</NavLink>
      <NavLink exact activeClassName='active-link' to='/fish'>Fish</NavLink>
      <NavLink exact activeClassName='active-link' to='/soda'>Soda</NavLink>


  
  
     
      
    
   

    

    
        <Route exact path='/chips' component={Chips}/>
        <Route exact path='/fish' component={Fish}/>
        <Route exact path='/soda' component={Soda}/>
        <Route exact path='/' component={Vending}/> 
        </BrowserRouter>
        </navbar>
    </div>
     );
  }
}
 
export default App;