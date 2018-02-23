'use strict';

import React from 'react';
import Note_item from '../note-item/index.js';

class Note_list extends React.Component{
  constructor(props){
    super(props);

    this.display_notes = this.display_notes.bind(this);
  }

  display_notes(notes){
    return notes.map((note_item, i) => <Note_item key={i} note={note_item} delete_note={this.props.remove_note}/>)
  }

  render(){
    return (
      <section className="notes">
        <ul className="note-list">
        {this.display_notes(this.props.notes)}
        </ul>
      </section>
    );
  }
}

export default Note_list;