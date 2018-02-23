import React from 'react';
import Dashboard from '../dashboard/index';


class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li className='note-item'>
        <h3>Title:{this.props.note.title}</h3>
        <h3>Contents:{this.props.note.content}</h3>

        <button className='delete'
          type="button"
          value={this.props.note.id}
          onClick={this.props.removeNote}>
          Delete</button>

      </li>
    );
  }
}


export default NoteItem;
