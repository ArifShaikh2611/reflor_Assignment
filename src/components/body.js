import React, { Component } from 'react';
import App from '../components/App';
import Addproduct from './addproduct';
import Productdetail from './productdetail';
import { Route ,Switch} from 'react-router-dom';
import Header from './header';

class Body extends Component{
    render(){
        return(
            <section>
            <Route component={Header} />
            <Switch>
                <Route exact path="/" component={Addproduct} />
                <Route path="/view" component={App} />
                <Route path="/add" component={Addproduct} />
                <Route path="/product/:id" component={Productdetail} />
            </Switch>
            </section>
        )
        
    }
}


export default Body;