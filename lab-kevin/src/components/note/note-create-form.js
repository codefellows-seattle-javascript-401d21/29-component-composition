'use strict';

import React from 'react'
import uuid from 'uuid/v1';

class Note_create_form extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.note || {
      id: uuid(),
      editing: false,
      completed: false,
      title: '',
      content: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    if(!this.state.title && !this.state.content) return;
    this.setState({completed: true});
    if(!this.state.title || !this.state.content) this.setState({editing: true, completed: false});
    let formState = this.state;
    this.setState({title: '', content:'', editing: false, completed: false, id: uuid()});
    console.log('formState', formState)
    let dashNotes = this.props.dashboard.state.notes;
    if (formState.editing){ 
      dashNotes = dashNotes.map(note => {
        if (note.id === formState.id){
          note.title = formState.title;
          note.content = formState.content;
          note.editing = false;
        }
        return note;
       });
       return  this.props.dashboard.setState({notes: dashNotes});
      }

      this.props.dashboard.setState({notes: [...dashNotes, formState]})
  }

  render(){
    return(
      <section className="note-create">
        <form className="create-note-form" onSubmit={this.handleSubmit}>
          <input name="title" 
          onChange={this.handleChange}
            value={this.state.title} 
            placeholder="Title"/>

          <textarea name="content"
          onChange={this.handleChange} 
          value={this.state.content} 
          placeholder="We've been sailing with a cargo full of love and devotion"></textarea>
          <button type="submit">Rock the Boat</button>
        </form>
      </section> 
    );
  }
}

export default Note_create_form;