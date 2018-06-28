import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/filterbar.css';

const navColor ={
  color: '#fff'
}


class Header extends Component {

  render(){
    return(
      <nav className="navbar navbar-expand-sm navBgColor"  id="nav-menu-container">
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
    );
  }
}


export default Header;