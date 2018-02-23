import React from 'react';
import NoteItem from '../note-item/index';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.notes.length ? (
          <div>
            <h2 className='section-title'>Notes</h2>
            <ul className='notes-list'>
              {this.props.notes.map(note => (
                <NoteItem
                  key={note.id}
                  handleRemoveNote={this.props.handleRemoveNote}
                  note={note}
                />
              ))}
            </ul>
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default NoteList;
