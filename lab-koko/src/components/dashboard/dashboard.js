import React from 'react';
import NoteForm from '../note/note-form/note-form';
import NoteList from '../note/note-list/note-list';
import { renderIf } from '../../lib/utils';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      notes: [],
    };
    let menberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of menberFunctions) {
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    this.getOrSetState = this.getOrSetState.bind(this);
  }
  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }
  handleAddNote(note) {
    note.createdON = new Date();
    note._id = uuid.v1();
    this.setState(preState => {
      return {notes: [...preState,note]};
    });
  }
  handleRemove(event) {
    let id = event.target.value;
    this.setState ({
      notes: this.state.notes.filter(note => note._id !== id),
    });
  }
  // handleUpdate(event) {
  //   let id = event.target.value;

  // }
  render() { 
    return (
      <div className="main-content">
        <h1>Dashboard</h1>
        <section className="main-data">
        </section>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <NoteList notes={this.state.notes} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
export default Dashboard;
