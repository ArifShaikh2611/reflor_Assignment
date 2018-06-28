import React, { Component } from 'react';
import '../css/filterbar.css';

const navColor ={
  color: '#fff'
}


class Header extends Component {

  render(){
    return(
      <nav className="navbar navbar-expand-sm navBgColor"  id="nav-menu-container">
        <ul className="navbar-nav order-3">
          <li className="nav-item">
            <a className="nav-link" href="view" style={navColor}>View</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="add" style={navColor}>Add</a>
          </li>
          
      </ul>
    </nav>
    );
  }
}


export default Header;