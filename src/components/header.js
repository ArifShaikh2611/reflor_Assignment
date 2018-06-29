import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/filterbar.css';

const navColor ={
  color: '#fff'
}

const  logopath = '/images/logo.png'
class Header extends Component {

  render(){
    return(
      <header id="header" className="header-fixed navBgColor">
        <div className="container-fluid">
        <div style={{display:'inline-block'}}>
        <Link to="/view" ><img src={{logopath}} alt="logo image"/></Link>
          </div>
          <nav className="navbar navbar-expand-sm"  id="nav-menu-container">
            <div>
                <ul className="navbar-nav order-3">
                  <li className="nav-item">
                    <Link to="/view" ><span style={navColor}>View</span></Link>
                  </li>
                  <li className="nav-item ml-3">
                  
                  <Link to="/add" ><span style={navColor}>Add</span></Link>
                  </li>
                  
              </ul>
            </div>
          </nav>
        </div>
    </header>
    );
  }
}











export default Header;