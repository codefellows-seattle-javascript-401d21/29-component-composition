import React from 'react';
import NoteUpdate from '../note-update/note-update';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { note: this.props.note };
    console.log(this.state.note.editing);

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

  toggleEditing() {
    this.setState({ 
      note.editing: !this.state.note.editing, 
    });
  }

  render() {
    return (
      <div>
        <li>[<a id={this.props.note.id} onClick={this.props.remove}>&times;</a>] {this.props.note.title}: 
        <a onDoubleClick={this.toggleEditing}>{this.props.note.content}</a></li>
        {this.renderIf(this.state.editing, <NoteUpdate note={this.props.note} />) };
      </div>
    );

  }
}

export default NoteItem;
