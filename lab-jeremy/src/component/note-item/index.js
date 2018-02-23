import React from 'react';
import { renderIf } from '../../lib/utils';
import NoteUpdateForm from '../note-update-form/index';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.note;

    this.handleDouble = this.handleDouble.bind(this);
    this.handleGetOrSet = this.handleGetOrSet.bind(this);
  }

  handleDouble() {
    this.setState({editing: true});
  }

  handleGetOrSet() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }
  
  render(){
    return(
      <div>
        <ul>
          {
            <li className="note" onDoubleClick={this.handleDouble} data-id={this.props.note.id} >
              {this.props.note.title}: {this.props.note.content}
              <button id={this.props.note.id} onClick={this.props.remove}>Delete</button>
              {renderIf(this.state.editing, <NoteUpdateForm handleGetOrSet={this.handleGetOrSet()} submitEdit={this.props.submitEdit} />)}
            </li>
          }
        </ul>
      </div>
    );

  }
}

export default NoteItem;