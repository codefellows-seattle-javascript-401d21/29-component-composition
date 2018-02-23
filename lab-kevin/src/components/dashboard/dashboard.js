'use strict';

import React from 'react';
import {Route} from 'react-router-dom';
import Note_create_form from '../note-create-form/index.js';
import Note_list from '../note-list/index.js';
import Dash_nav from '../dash_nav/index.js';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
  this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleNoteUpdate(note_state){
    this.setState(dashState => ({notes: [...dashState.notes, note_state]}));
  }

  handleRemoveNote(note_id){
    this.setState(dashState => ({notes: dashState.notes.filter(note => note.id !== note_id)}))
  }

  render(){
    return (
    <section className="dashboard">
      <h2>Said I'd like to know where you got the notion</h2>
      <Dash_nav />
      <Route path={`${this.props.match.path}/note-create`} 
        render={() => 
        (<Note_create_form update_notes={this.handleNoteUpdate} />)} />

      <Route path ={`${this.props.match.path}/notes`}  
        render={() => 
        (<Note_list notes={this.state.notes} remove_note={this.handleRemoveNote} />)} />
    </section>
    );
  }
}

export default Dashboard;