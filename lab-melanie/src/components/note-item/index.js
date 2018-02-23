import React from 'react';

import NoteUpdateForm from '../note-update-form/index';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <li className="note-item">
          {this.props.notes.title}: {this.props.notes.content}
          <button
            type="button"
            value={this.props.notes.id}
            onClick={this.props.handleRemoveNote}
          >Delete</button>
        </li>
        <NoteUpdateForm note={this.props.note} update={this.props.update} />
      </div>
    );
  }
}

export default NoteItem;
