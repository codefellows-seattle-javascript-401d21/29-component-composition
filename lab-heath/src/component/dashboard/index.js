import React from 'react';
import uuid from 'uuid/v1';
import NoteList from '../note-list/index';
import NoteCreateFrom from '../note-create-form/index';



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

  handleAddNotes(notes){
    notes.id = uuid();
    notes.publishedOn = new Date();
    this.setState(previousState => {
      return {notes: [...previousState.notes, notes]};
    });
  }


  handleRemoveNotes(id) {
    console.log(id);
    console.log(this.state.notes);
    this.setState({notes: this.state.notes.filter(note => note.id !== id)});
  }
 
  
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateFrom handleAddNotes={this.handleAddNotes}/>
        <NoteList noteArray={this.state.notes} handleRemoveNotes={this.handleRemoveNotes} />
      </div>
    );

  }
}

export default Dashboard;