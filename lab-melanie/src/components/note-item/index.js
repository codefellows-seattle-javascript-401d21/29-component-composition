import React from 'react';

import NoteUpdateForm from '../note-update-form/index';
import {renderIf} from '../../lib/utils';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };

    this.handleChangeEditing = this.handleChangeEditing.bind(this);
    this.getOrSetState = this.getOrSetState.bind(this);
  }

  // ----- Handlers ----- //
  handleChangeEditing() {
    this.setState({
      editing: true,
    });
  }

  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
      <div>
        <li className="note-item">
          <span
            onDoubleClick={this.handleChangeEditing}
          >{this.props.notes.title}: {this.props.notes.content}</span>
          <button
            className='delete-button'
            type="button"
            value={this.props.notes.id}
            onClick={this.props.handleRemoveNote}
          >Delete</button>
          {renderIf(this.state.editing, <NoteUpdateForm note={this.props.notes} update={this.props.update} getOrSetState={this.getOrSetState()} />)}
        </li>
      </div>
    );
  }
}

export default NoteItem;
