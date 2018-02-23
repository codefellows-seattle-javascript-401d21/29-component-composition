import React from 'react';

class Landing extends React.Component{

  render(){
    return(
      <div>
        <h1>Welcome to my website</h1>
        <p>This is an application that allows you to store your own notes! If you head over to our dashboard page, you will see fields for the title and content of your note. Once you hit submit your note will populate in the field below. Once you have completed the note on your to-do list you can hit delete and the note will disappear!
        </p>
      </div>
    );
  }
}
export default Landing;