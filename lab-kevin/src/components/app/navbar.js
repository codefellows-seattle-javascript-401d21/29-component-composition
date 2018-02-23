'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
        <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Navbar;