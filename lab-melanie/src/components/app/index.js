
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Dashboard from '../dashboard/index';
import Landing from '../landing/index';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <nav>
                <h4>Duly Noted</h4>
                <ul>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                  <li><Link to='/'>Home</Link></li>
                </ul>
              </nav>
            </header>
            <main>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/dashboard' component={Dashboard}/>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
