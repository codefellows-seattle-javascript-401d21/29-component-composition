import React from 'react'
import NoteItem from '../note-item/index.js'

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <ol>
      {
        this.props.notes.map((note, index) =>
          <li key={index}>
            <NoteItem note={note}
            handleRemoveNote={this.props.handleRemoveNote}/>
          </li>
        )
      }
    </ol>
    )
  }
}
export default NoteList
