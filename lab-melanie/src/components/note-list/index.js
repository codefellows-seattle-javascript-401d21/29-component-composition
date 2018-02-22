import React from 'react';

import NoteItem from '../note-item/index';

class NoteList extends  React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div className="note-list">
        <h2>Note List</h2>
        <ul>
          {this.props.notes.map((note, index) => {
            return <NoteItem key={index}
              handleRemoveNote={this.props.handleRemoveNote}
              notes={note} />;
          })}
        </ul>
      </div>
    );
  }

}

export default NoteList;
