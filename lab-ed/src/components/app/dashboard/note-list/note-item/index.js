import React from 'react'

class NoteItem extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.handleDoubleClick = this.handleDoubleClick.bind(this)
    }
    
    handleDoubleClick() {
      {console.log('dbl click')}
    }
  

  render() {
    return(
      <div onDoubleClick={this.handleDoubleClick}>>
        <h2>{this.props.note.title}</h2>
        <p className='noteContent'>{this.props.note.content}</p>
        <button className='deleteButton' id={this.props.note.id} onClick={this.props.handleRemoveNote}>Delete note</button>
    </div>
    )
  }
}
export default NoteItem
