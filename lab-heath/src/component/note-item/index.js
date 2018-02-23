import React from 'react';
import NoteUpdateForm from '../note-update-form/index';
import Modal from '../modal/index.js';
import { renderIf } from '../../lib/utils';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.note.title ? this.props.note.title : '',
      content: this.props.note.content ? this.props.note.content : '',
      updating: false,

    };

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleId(event) {
    event.preventDefault();
    let id = event.target.value;
    this.props.handleRemoveNotes(id);
  }

  render(){
    return(
      <div onDoubleClick={() => this.setState({updating: true})}>
        <h2>{this.props.note.title}</h2>
        <h6>{this.props.note.publishedOn.toString()}</h6>
        <p>{this.props.note.content}</p>
        <button
          className='delete_btn'
          type='button'
          value={this.props.note.id}
          onClick={this.handleId}
        >delete</button>


        {/* this is update */}
        {renderIf(this.state.updating === true,
          <Modal close={() => this.setState({updating: false})}>
            <NoteUpdateForm note={this.props.note}
              close={() => this.setState({updating: false})}/>
          </Modal>
        )}

      </div>
    );
  }
}

export default NoteItem;
