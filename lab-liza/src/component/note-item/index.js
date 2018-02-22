import React from 'react';

class NoteItem extends React.Component{

  render(){
    return(
      <div>
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.content}</p>
        <button id={this.props.note.id} onClick={this.props.handleRemoveNote}>delete</button>
    </div>
    );
  }
}

export default NoteItem;
