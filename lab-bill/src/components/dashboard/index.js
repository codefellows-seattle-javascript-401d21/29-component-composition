
import React from 'react';
import NoteCreateForm from '../note-create-form/index';
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
    note.editing = false;
    note.id = uuidv1();
    note.completed = false;

    this.setState(previousState => {
      return {notes :[...previousState.notes,note]};
    });
  }

  handleRemoveNote(noteId){
    let notes = this.state.notes;
    notes.splice(notes.indexOf(noteId),1);
    this.setState({notes: notes});
  }

  
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <NoteList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote}/>
      </div>
    );

  }
}

export default Dashboard;