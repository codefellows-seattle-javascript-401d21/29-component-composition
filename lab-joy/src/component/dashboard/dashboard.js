import React from 'react';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note) {
    note.createdOn = new Date();
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return { notes: [...previousState.notes, note] };
    });
  }

  handleUpdateNote(update) {
    let updatedNotes = this.state.notes.map(note => note.id === update.id ? update : note);
    this.setState(() => ({ 
      notes: updatedNotes, 
    }));
  }

  handleRemoveNote(e) {
    this.setState({ notes: this.state.notes.filter(note => note.id !== e.target.id )});
  }

  render() {
    return (
      <div>
        <h1>To Do Notes: Dashboard</h1>
        <NoteForm handleAddNote={this.handleAddNote} />
        <NoteList notes={this.state.notes} remove={this.handleRemoveNote} handleUpdateNote={this.handleUpdateNote} />
      </div>
    );

  }
}

export default Dashboard;