import React from 'react';
import NoteForm from '../note-create-form/index';
import NoteList from '../note-list/index';
import uuidv1 from 'uuid/v1';


class Dashboard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note){
    note.id = uuidv1();
    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleUpdateNote(note){
    this.setState(previousState => {
      for(let i = 0; i < previousState.notes.length; i++){
        if(previousState.notes[i].id === note.id){
          previousState.notes[i] = note;
        }
      }
      return {notes: [...previousState.notes]};
    });
  }

  handleRemoveNote(note){
    this.setState(previousState => {
      return {notes: previousState.notes.filter(n => n.id !== note.id)};
    });
  }

  render(){
    return(
      <div className="dashboard">
        <h3>To Do List</h3>
        <NoteForm handleAddNote={this.handleAddNote} />
        <NoteList
          handleRemoveNote={this.handleRemoveNote}
          handleUpdateNote={this.handleUpdateNote}
          notes={this.state.notes} />
      </div>
    );
  }
}

export default Dashboard;
