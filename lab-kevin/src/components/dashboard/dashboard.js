'use strict';

import React from 'react';
import {Route} from 'react-router-dom';
import {Note_create_form, Note_list} from '../note/index.js';
import {Dash_nav} from './index.js';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  //this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
  //this.handleRemoveNote = this.handleRemoveNote.bind(this);
  this.state_getter_setter = this.state_getter_setter.bind(this);
  }

  state_getter_setter(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  // handleNoteUpdate(note_state){
  //   this.setState(dashState => ({notes: [...dashState.notes, note_state]}));
  // }

  // handleRemoveNote(note_id){
  //   this.setState(dashState => ({notes: dashState.notes.filter(note => note.id !== note_id)}))
  // }

  render(){
    return (
    <section className="dashboard">
      <h2>Said I'd like to know where you got the notion</h2>
      <Dash_nav />
      <Route path={`${this.props.match.path}/note-create`} 
        render={() => 
        (<Note_create_form dashboard={this.state_getter_setter()} />)} />

      <Route path ={`${this.props.match.path}/notes`}  
        render={() => 
        (<Note_list dashboard={this.state_getter_setter()} />)} /> 
    </section>
    );
  }
}

export default Dashboard;