import React, { Component } from 'react';
import App from '../App';
import Addproduct from './addproduct';
import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
//import { Switch, Route } from 'react-router';


class Body extends Component{
    render(){
        return(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/view" component={App} />
                <Route path="/add" component={Addproduct} />
            </Switch>
        </Router>
        )
        
    }
}


export default Body;