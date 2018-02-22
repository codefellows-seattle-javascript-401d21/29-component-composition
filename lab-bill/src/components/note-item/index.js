import React from 'react';
import NoteUpdateForm from '../note-update-form';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.handleRemoveNote(this.props.id);
  }

  render(){
    return(
      <div>
        <li>
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
          <button type='submit' onClick={this.handleClick}> delete </button>
        </li>
        <NoteUpdateForm note={this.props.note} handleUpdateNote={this.props.handleUpdateNote}/>
      </div>
    );
  }
}
export default NoteItem;