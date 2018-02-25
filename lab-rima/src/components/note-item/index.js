import React from 'react';
import NoteUpdateForm from '../note-update-form/index';
import { renderIf } from '../../lib/utils';


class NoteItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      note: this.props.note,
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleGetSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleRemoveNote(this.props.note);
  }

  handleDoubleClick(event) {
    event.preventDefault();
    this.setState({editing: true});
  }

  render(){
    return(
      <li
        key={this.props.note.id}
        onDoubleClick={this.handleDoubleClick}
      >
        <p>{this.props.note.title}</p>
        <p>{this.props.note.content}</p>
        <button
          className="delete"
          onClick={this.handleClick}>
          Delete
        </button>

        {renderIf(this.state.editing,
          <NoteUpdateForm noteItem={this.handleGetSetState()} handleUpdateNote={this.props.handleUpdateNote} />
        )}
      </li>
    );
  }
}

export default NoteItem;
