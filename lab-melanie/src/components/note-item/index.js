import React from 'react';
import Dashboard from '../dashboard/index.js';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="note-item">
        {this.props.notes.title}: {this.props.notes.content}
        <button
          type="button"
          value={this.props.notes.id}
          onClick={this.props.handleRemoveNote}
        >Delete</button>
      </li>
    );
  }
}

export default NoteItem;
