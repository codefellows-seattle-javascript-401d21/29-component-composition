'use strict';

import React from 'react';
import {Note_update_form} from './index.js';
import {Note_create_form} from './index.js';

class Note_item extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDeleteNote(e){
    let note_id = e.target.value;
    this.props.dashboard.setState(dashState => ({notes: dashState.notes.filter(note => note.id !== note_id)}))
  }

  handleUpdate(e){
    this.props.dashboard.setState(dashState => 
      ({notes: dashState.notes.map(note => {
        if (note.id === this.props.note.id) note.editing =  true;
        return note;
      })}))
  }
 
  render(){
    return (
      <li className="note-list-item" onDoubleClick={this.handleUpdate} >
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p>
        <button onClick={this.handleDeleteNote} value={this.props.note.id}>Tip the Boat Over</button>
        { this.props.note.editing ? 
            <Note-update-form >
              <section className="note-update-modal">
                <Note_create_form note={this.props.note} dashboard={this.props.dashboard}/>
              </section>
              </Note-update-form >
            : undefined
        }
      </li>
    );
  }
}

export default Note_item;