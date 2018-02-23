'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

class Dash_nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <ul className="dash-nav-list">
        <li className="dash-nav-list-item">
          <Link to="/dashboard/note-create">Write Notes</Link>
        </li>
        <li className="dash-nav-list-item">
        <Link to="/dashboard/notes">View Notes</Link>
        </li>
      </ul>
    );
  }
}

export default Dash_nav;