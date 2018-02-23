import React from 'react'
import NoteUpdateForm from './note-update-form/index'
import {renderIf} from '../../../../../lib/utils'

class NoteItem extends React.Component {
    constructor(props) {
      super(props)
      this.state = this.props.note
      this.handleDoubleClick = this.handleDoubleClick.bind(this)
      this.handleGetOrSet = this.handleGetOrSet.bind(this)
    }
    
    handleDoubleClick() {
      this.setState({doubleClick: true})
      {console.log('dbl click on div')}
    }

    handleGetOrSet() {
      return {
        state: this.state,
        setState: this.setState.bind(this),
      }
    }

  render() {
    return(
      <div onDoubleClick={this.handleDoubleClick}>>
        <h2>{this.props.note.title}</h2>
        <p className='noteContent'>{this.props.note.content}</p>
        <button className='deleteButton' id={this.props.note.id} onClick={this.props.handleRemoveNote}>Delete note</button>
        {renderIf(this.state.doubleClick, <NoteUpdateForm handleGetOrSet={this.handleGetOrSet()} submitEdit={this.props.submitEdit} />)}
    </div>
    )
  }
}
export default NoteItem
