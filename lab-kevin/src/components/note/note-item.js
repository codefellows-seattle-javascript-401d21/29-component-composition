'use strict';

import React from 'react';

class Note_item extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  handleDeleteNote(e){
    this.props.delete_note(e.target.value);
  }

  render(){
    return (
      <li className="note-list-item">
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p>
        <button onClick={this.handleDeleteNote} value={this.props.note.id}>Tip the Boat Over</button>
      </li>
    );
  }
}

export default Note_item;