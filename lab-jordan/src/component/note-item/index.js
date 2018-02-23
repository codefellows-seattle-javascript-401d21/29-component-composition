import React from 'react';
import NoteUpdateForm from '../note-update-form/index.js';
import Modal from '../modal/index.js';
import {renderIf} from '../../lib/utils.js';

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.note.title ? this.props.note.title : '',
      content: this.props.note.content ? this.props.note.content : '',
      editing: false,
    }
  }

  render() {
    return(
        <div onDoubleClick={() => this.setState({editing: true})}>
          {renderIf(this.state.editing,
            <Modal close={() => this.setState({editing: !this.state.editing})}>
              <NoteUpdateForm title={this.state.title}
                content={this.state.content}
                setState={(note) => this.setState({title: note.title, content: note.content})}/>
            </Modal>
          )}
          <h3>{this.state.title}</h3>
          <p>{this.state.content}</p>
          <button id={this.props.note.id} onClick={this.props.handleRemoveNote}>REMOVE</button>
        </div>
    );
  }
}

export default NoteItem;
