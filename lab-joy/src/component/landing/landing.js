import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Notes App: To Do</h1>
        <p>This notes application allows you to add and delete To Do tasks.</p>
        <p><a href="/dashboard">To Dashoard</a></p>
      </div>
    );  
  }
}

export default Landing;