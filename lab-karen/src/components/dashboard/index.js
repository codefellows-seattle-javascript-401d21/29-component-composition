
import React from 'react';
import uuidv1 from 'uuid/v1';
import NoteCreateForm from '../note-create-form/index';
import NoteList from '../note-list/index';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    //Binding
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  //functions
  addNote(note) {
    note.id = uuidv1();
    note.editing = false;
    note.completed = false;
    note.content = note.content;
    note.title = note.title;

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  removeNote(event) {
    let id = event.target.value;
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id),
    });

  }

  render(){
    return(
      <div className='app'>
        <h1>Dashboard</h1>
        <NoteCreateForm addNote={this.addNote}/>
        <NoteList notes={this.state.notes} removeNote={this.removeNote}/>
      </div>

    );
  }
}

export default Dashboard;
