import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/'component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;