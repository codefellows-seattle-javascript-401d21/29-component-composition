'use strict';

import React from 'react';
import {Note_item} from './index.js';

class Note_list extends React.Component{
  constructor(props){
    super(props);

    this.display_notes = this.display_notes.bind(this);
  }

  display_notes(){
    return this.props.dashboard.state.notes.map((note_item, i) => <Note_item key={i} note={note_item} dashboard={this.props.dashboard}/>)
  }

  render(){
    return (
      <section className="notes">
        <ul className="note-list">
          {this.display_notes()}
        </ul>
      </section>
    );
  }
}

export default Note_list;