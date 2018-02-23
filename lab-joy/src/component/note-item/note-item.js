import React from 'react';
import NoteUpdate from '../note-update/note-update';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { note: this.props.note };

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  renderIf(test, component) { 
    return test ? component: undefined; 
  }

  handleToggle() {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
  }

  render() {
    return (
      <div>
        <li>[<a id={this.props.note.id} onClick={this.props.remove}>&times;</a>] {this.props.note.title}: 
        <a onDoubleClick={this.handleToggle}>{this.props.note.content}</a></li>
        {this.renderIf(this.state.editing, <NoteUpdate note={this.props.note} toggle={this.handleToggle} handleUpdateNote={this.props.handleUpdateNote} />) }
      </div>
    );

  }
}

export default NoteItem;
