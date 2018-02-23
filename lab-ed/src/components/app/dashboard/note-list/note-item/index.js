import React from 'react'

class NoteItem extends React.Component {

  render() {
    return(
      <div>
        <h2>{this.props.note.title}</h2>
        <p className='noteContent'>{this.props.note.content}</p>
        <button className='deleteButton' id={this.props.note.id} onClick={this.props.handleRemoveNote}>Delete note</button>
    </div>
    )
  }
}
export default NoteItem
