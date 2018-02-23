import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Dashboard from '../dashboard/index.js'
import Landing from '../landing/index.js'

class App extends React.Component{
  render() {
    return(
      <div className='app'>
        <h1>A note taking app</h1>
        <nav>
          <button><a href="/">Home</a></button>
          <button><a className='addNote' href="/dashboard">Add a note</a></button>
        </nav>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
