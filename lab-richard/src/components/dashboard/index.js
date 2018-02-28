import React from 'react';
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';
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
    note.id = uuidv1()
    note.createdOn = new Date();
    note.edited = false;

    this.setState(previousState => {
      return {notes:[...previousState.notes, note]};
    });
  }

  handleEdit(obj){
    obj.createdOn = new Date();
    obj.edited = false;

    let notelist = this.state.notes.map(note => {
      return note.id === obj.id ? obj : note;
    });
   
    this.setState(() => ({notes: notelist}));
  }

  handleRemoveNote(e){
    let noteID = e.target.id;

    this.setState(ammendNotes => {
      let ammend = ammendNotes.notes.filter(note => note.id !== noteID);
  
      return {notes: ammend};
    });
  }
     
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <NoteList 
          list={this.state.notes} 
          handleRemoveNote={this.handleRemoveNote} 
          submitEdit={this.handleEdit} 
        />
      </div>
    );

  }
}

export default Dashboard;