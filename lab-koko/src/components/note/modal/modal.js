import React from 'react';
import NoteUpdate from '../note-update/note-update';

class Modal extends React.Component {
  render() { 
    return ( 
      <section className="modal">
        <span onClick={this.props.close}>X</span>
        {this.props.children}
        <NoteUpdate title={this.props.title}
          content={this.props.content}
          setParentState={this.props.setState}/>
      </section>
    );
  }
}
 
export default Modal;