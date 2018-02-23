import React from 'react';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor (props) {
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

  handleAddNote (note) {
    note = {...note};
    note.createdOn = new Date();
    note.editing = false;
    note.completed = false;
    note.id = uuid('v1');
    this.setState(state => ({ notes: [...state.notes, note]}));
  }

  handleEdit (edit) {
    edit.editedOn = new Date();
    let newNotes = this.state.notes.map(note => note.id === edit.id? edit : note);
    this.setState(() => ({notes: newNotes}));
  }

  handleRemove (e) {
    let id = e.target.id;
    this.setState({notes: this.state.notes.filter(note => note.id !== id)});
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Back to <a href='/'>'/Landing'</a></p>
        <NoteForm submit={this.handleAddNote}/>
        <NoteList remove={this.handleRemove} submit={this.handleEdit} notes={this.state.notes} />
      </div>
    );
  }
}

export default Dashboard;