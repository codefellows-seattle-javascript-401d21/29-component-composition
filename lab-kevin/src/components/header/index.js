'use strict';

import React from 'react';
import Navbar from '../navbar/index.js';

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
    <header>
      <h1>You Got the Notion</h1>
      <Navbar />
    </header>
    );
  }
}

export default Header;