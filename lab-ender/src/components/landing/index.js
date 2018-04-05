import React from 'react';

let dashboardPath = __dirname + '/dashboard';

class Landing extends React.Component{

  render() {
    return(
      <div>
        <h1>Welcome</h1>
        <p>
          Create and delete notes using React. Start by going to the dashboard.
        </p>
      </div>
    );
  }
}
export default Landing;
