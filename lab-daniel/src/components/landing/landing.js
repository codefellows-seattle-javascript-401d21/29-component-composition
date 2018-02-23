import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='landing'>
        <h1>Landing</h1>
        <p>Welcome to the landing, go to <a href='/Dashboard'>'/Dashboard'</a></p>
      </div>
    );
  }
}

export default Landing;