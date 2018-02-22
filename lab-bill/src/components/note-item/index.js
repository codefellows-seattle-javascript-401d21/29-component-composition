import React from 'react';
import NoteUpdateForm from '../note-update-form';
import { renderIf } from '../lib/index';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display:false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.getOrSetState = this.getOrSetState.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.handleRemoveNote(this.props.id);
  }

  handleChangeState(){
    this.setState({display:true});
  }

  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
      <div onDoubleClick={this.handleChangeState}>
        <li>
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
          <button type='submit' onClick={this.handleClick}> delete </button>
        </li>
        {renderIf(this.state.display, <NoteUpdateForm note={this.props.note} handleUpdateNote={this.props.handleUpdateNote} getOrSetState={this.getOrSetState()}/>)}
      </div>
    );
  }
}
export default NoteItem;