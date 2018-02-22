import React from 'react';
import uuidv1 from 'uuid/v1';

import NoteCreateForm from '../note-create-form/index';
import NoteList from '../note-list/index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    // ----- Bind handlers ----- //
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  // ----- Handlers ----- //
  handleAddNote(note){
    note.createdOn = new Date();
    note.id = uuidv1();

    this.setState(previousState => {
      return {notes :[...previousState.notes, note]};
    });
  }

  handleRemoveNote(event) {
    let id = event.target.value;
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id),
    });
  }

  render() {
    return (
      <div className="dash">
        <h1>Note Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote} />
        <NoteList handleRemoveNote={this.handleRemoveNote} notes={this.state.notes}/>
      </div>
    );
  }
}
export default Dashboard;
