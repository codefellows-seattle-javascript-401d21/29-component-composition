import React from 'react';


class Landing extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="landing-description">
        <h1>To Do List</h1>
        <h3>This is a place you can manage your ToDo!<br />
            Go to /dashboard by adding /dashboard after the current url.<br />
            You can add title and content for each note by clicking save button.<br />
            You can delete each note by clicking delete button.
        </h3>
      </div>
    );
  }
}

export default Landing;
