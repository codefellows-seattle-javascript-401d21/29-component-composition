'use strict';

import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Header, Footer} from './index.js';
import {Landing} from '../landing/index.js';
import {Dashboard} from '../dashboard/index.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <Header />
        <main>
          <Route exact path='/' component={Landing}/>
          <Route path='/dashboard' component={Dashboard}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;