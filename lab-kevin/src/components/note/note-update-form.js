import React from 'react';

class Note_update_form extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Note_update_form