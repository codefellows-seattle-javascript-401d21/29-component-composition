import React from 'react';
import NoteItem from '../note-item/index';
class NoteList extends React.Component{


  render(){
    return(
      <ul>
        {
          this.props.notes.map((note,index) =>
            <NoteItem title={note.title} content={note.content} key={index} id={note.id}handleRemoveNote={this.props.handleRemoveNote}/>
          )
        }
      </ul>
    );
  }
}
export default NoteList;