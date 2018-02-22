import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from '../landing/index';
import Dashboard from '../dashboard/index';


class App extends React.Component{
  render(){
    return(
      <div className="app">
        <BrowserRouter>
          <div className="routes">
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
