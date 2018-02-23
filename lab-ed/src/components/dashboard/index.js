import React from 'react'
import NoteCreateForm from '../note-create-form/index.js'
import NoteList from '../note-list/index.js'
import uuidv1 from 'uuid/v1'

class Dashboard extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       notes: [],
     }

    this.handleAddNote = this.handleAddNote.bind(this)
    this.handleRemoveNote = this.handleRemoveNote.bind(this)

  }
  
  handleAddNote(note){
    note.id = uuidv1().toString()

    this.setState(previousState => {
      return {notes :[...previousState.notes, note]}
    })
  }

  handleRemoveNote(event){
   let id = event.target.id
   this.setState({notes: this.state.notes.filter(note => note.id !== id)})
  }

  render(){
    return(
      <div>
        <h1>Add a note</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <NoteList notes={this.state.notes}
        handleRemoveNote={this.handleRemoveNote}/>
      </div>
    )

  }
}
export default Dashboard
