import React from 'react';
import Dashboard from '../dashboard/index';


class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li className='note-item'>
        <h4>Title:{this.props.note.title}</h4>
        <h4>Contents:{this.props.note.content}</h4>

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
