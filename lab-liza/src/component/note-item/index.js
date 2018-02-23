import React from 'react';
import NoteUpdateForm from '../note-update-form/index.js'
import Modal from '../modal/modal.js'
import {renderIf} from '../../lib/utils.js'

class NoteItem extends React.Component{
  constructor(props){
    super(props);// Vinicio - we HAVE to call this super()
    this.state = {
      title: this.props.note.title ? this.props.note.title : '',
      content: this.props.note.content ? this.props.note.content : '',
      updating: false,
    }
  }

  render(){
    return(
      <div onDoubleClick={() => this.setState({updating: true})}>
        {renderIf(this.state.updating,
        <Modal close={() => this.setState({updating: !this.state.updating})}>
          <NoteUpdateForm title={this.state.title}
          content={this.state.content}
          setState={(note) => this.setState({title: note.title, content: note.content})}/>
        </Modal>
      )}
        <h4>{this.state.title}</h4>
        <p>{this.state.content}</p>
        <button id={this.props.note.id} onClick={this.props.handleRemoveNote}>delete</button>
    </div>
    );
  }
}

export default NoteItem;
