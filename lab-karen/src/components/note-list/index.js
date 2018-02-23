import React from 'react';
import NoteItem from '../note-item/index';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

  }


  render() {
    return (
      <div className='note-list'>
        <h2>Notes List</h2>
        <ul>
          {this.props.notes.map((note,index) => <NoteItem
            key={index}
            note={note}
            removeNote={this.props.removeNote}/>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
