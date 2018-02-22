import React from 'react';
import NoteUpdateForm form '../note-update-form/index';


class NoteItem extends React.Component{
  constructor(props){
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleRemoveNote(this.props.note);
  }

  render(){
    return(
      <li
        key={this.props.note.id}
        onDblClick=
        {
          <NoteUpdateForm close={() => this.props.note.}>

          </NoteUpdateForm>
        }
      >
        <p>{this.props.note.title}</p>
        <p>{this.props.note.content}</p>
        <button
          className="delete"
          onClick={this.handleClick}>
          Delete
        </button>
      </li>
    );
  }
}

export default NoteItem;
