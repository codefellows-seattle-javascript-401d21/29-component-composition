import React from 'react';

class NoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      edit: false,
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState({
      title: '',
      content: '',
      completed: true,
      edit: false,
    });
  }

  handleChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  render(){
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}  
        />
        <input
          type='text'
          name='content'
          placeholder='Details'
          value={this.state.content}
          onChange={this.handleChange}  
        />
        <button type='submit'> Create Note </button>
      </form>
    );
  }
}

export default NoteForm;