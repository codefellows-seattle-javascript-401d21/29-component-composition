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
    //----------------------------------------------------
    // Binding Handlers
    //----------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //----------------------------------------------------
  }
  //------------------------------------------------------
  // Member Function
  //------------------------------------------------------
  handleAddNote(note){
    note.id = uuidv1();

    this.setState(previousState => {
      if (!previousState) return {notes : [note]};
      return {notes : [...previousState.notes,note]};
    });
  }

  //delete note function
  handleRemoveNote(e){
    // console.log(e.target.id);
    let noteID = e.target.id;
    this.setState(previousState => {
      let newNotes = previousState.notes.filter(noteObj => noteObj.id !== noteID);
      return {notes : newNotes};
    });
  }

  handleEdit (edit) {
    edit.editedOn = new Date();
    let newNotes = this.state.notes.map(note => note.id === edit.id ? edit : note);
    this.setState(() => ({notes: newNotes}));
  }

  //------------------------------------------------------
  // Hooks
  //------------------------------------------------------

  
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <NoteList notesArr={this.state.notes} remove={this.handleRemoveNote} submitEdit={this.handleEdit}/>
      </div>
    );

  }
}

export default Dashboard;