import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
          {/* <Navbar /> */}
          <Route exact path='/'component={() => <h1>Home</h1>}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          {/* <Route path='/dashboard/id:?' component={Dashboard}/> */}

        </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;