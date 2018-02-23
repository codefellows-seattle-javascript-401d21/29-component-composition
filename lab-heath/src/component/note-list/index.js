import React from 'react';
import NoteItem from '../note-item/index.js';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    
  }


  render(){
    return(
      <ul>
        {
          this.props.noteArray.map((note, index) => {
            return <li key={index}>
              <NoteItem note={note} handleRemoveNotes={this.props.handleRemoveNotes} index={index}/>
            </li>;
          })
        }
      </ul>
    );
  }
}

export default NoteList;