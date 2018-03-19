import React from 'react';
import NoteItem from '../../note/note-item/note-item';
import { renderIf } from '../../../lib/utils';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="note-list">
        <ul>
          {renderIf(this.props.notes,
            this.props.notes.map(note => <NoteItem key={note._id} item={note} handleRemove={this.props.handleRemove}/>)
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;