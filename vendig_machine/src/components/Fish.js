import React,{Component} from 'react'
import {BrowserRouter, NavLink, Switch, Link, Route} from 'react-router-dom';


class Fish extends Component{
    render(){
        return(
            <div>
                <h1>Fish</h1>
            <Link exact to='/' style={{padding: 10 }}><button>back</button></Link>

            </div>
        )
    }
}

export default Fish;